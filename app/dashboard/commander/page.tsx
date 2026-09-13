"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Search,
  CheckCircle2,
  Package,
  Box,
  Archive,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  FileText
} from "lucide-react";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";
import { createClient } from "@/lib/supabase/client";

export default function CommanderPage() {
  const [step, setStep] = useState(1);
  const [format, setFormat] = useState("pli");
  const [delai, setDelai] = useState("flash");

  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [isPickupFavOpen, setIsPickupFavOpen] = useState(false);
  const [stops, setStops] = useState<{id: string, address: string}[]>([]);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [trackingCode, setTrackingCode] = useState<string | null>(null);
  const [favoriteAddresses, setFavoriteAddresses] = useState<{id: string, label: string, address: string}[]>([]);

  const supabase = createClient();

  useEffect(() => {
    supabase.from("addresses").select("id, label, address").then(({ data }) => {
      if (data) setFavoriteAddresses(data);
    });
  }, []);

  const addStop = () => {
    setStops([...stops, { id: Math.random().toString(), address: "" }]);
  };

  const removeStop = (id: string) => {
    setStops(stops.filter(s => s.id !== id));
  };

  const updateStop = (id: string, address: string) => {
    setStops(stops.map(s => s.id === id ? { ...s, address } : s));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setSubmitError("Session expirée. Veuillez vous reconnecter."); setSubmitting(false); return; }

    const { data, error } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        pickup_address: pickupAddress,
        dropoff_address: dropoffAddress,
        stops: stops.map(s => s.address),
        format,
        delai,
        notes,
        status: "en_attente",
      })
      .select("tracking_code")
      .single();

    if (error) {
      setSubmitError("Une erreur est survenue. Veuillez réessayer.");
      setSubmitting(false);
    } else {
      setTrackingCode(data.tracking_code);
      setStep(5);
      setSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col gap-8 pb-12">
      
      {/* En-tête de la page */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E85D1F]/10 px-3 py-1 text-[11px] font-bold tracking-wider text-accent uppercase border border-[#E85D1F]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
            DISPATCH URBAIN IMMÉDIAT
          </div>
          <div>
            <h1 className="text-[32px] font-extrabold tracking-tight text-ink">
              Commander une <span className="text-accent">course express</span>.
            </h1>
            <p className="mt-1.5 text-[15px] font-medium text-muted">
              Réservez un coursier en quelques secondes. Prise en charge garantie en 30 à 45 min.
            </p>
          </div>
        </div>
        
        {/* Stepper */}
        <div className="flex items-center gap-2 sm:gap-3 flex-nowrap overflow-x-auto pb-1">
          <div className={`flex shrink-0 items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold shadow-sm transition-colors ${step >= 1 ? 'bg-accent text-white' : 'border border-line bg-white text-label'}`}>
            1. Trajet
          </div>
          <ArrowRight size={14} className="text-line shrink-0 hidden sm:block" />
          <div className={`flex shrink-0 items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold shadow-sm transition-colors ${step >= 2 ? 'bg-accent text-white' : 'border border-line bg-white text-label'}`}>
            2. Format
          </div>
          <ArrowRight size={14} className="text-line shrink-0 hidden sm:block" />
          <div className={`flex shrink-0 items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold shadow-sm transition-colors ${step >= 3 ? 'bg-accent text-white' : 'border border-line bg-white text-label'}`}>
            3. Délai
          </div>
          <ArrowRight size={14} className="text-line shrink-0 hidden sm:block" />
          <div className={`flex shrink-0 items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold shadow-sm transition-colors ${step >= 4 ? 'bg-accent text-white' : 'border border-line bg-white text-label'}`}>
            4. Récapitulatif
          </div>
          <ArrowRight size={14} className="text-line shrink-0 hidden sm:block" />
          <div className={`flex shrink-0 items-center justify-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold shadow-sm transition-colors ${step >= 5 ? 'bg-[#10B981] text-white' : 'border border-line bg-white text-label'}`}>
            5. Confirmation
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        
        {step === 1 && (
          <form onSubmit={handleNextStep} className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Carte 1 : Itinéraire */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-line bg-[#FDFDFD] px-6 py-4">
                <div className="flex items-center gap-2 text-sm font-bold tracking-wide text-ink uppercase">
                  <MapPin size={16} className="text-accent" />
                  ITINÉRAIRE DE LA COURSE
                </div>
                <span className="text-[11px] font-medium text-label hidden sm:block">Paris intra-muros & Toute Île-de-France</span>
              </div>
              
              <div className="flex flex-col p-6 sm:p-8">
                <div className="relative flex flex-col gap-8 pl-10">
                  {/* Ligne pointillée centrale */}
                  <div className="absolute bottom-8 left-[19px] top-6 border-l-2 border-dashed border-line"></div>

                  {/* Départ */}
                  <div className="relative">
                    <div className="absolute -left-[40px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-[#10B981] bg-white">
                      <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
                    </div>
                    
                    <div className="mb-3 flex items-center justify-between relative">
                      <label className="text-xs font-bold uppercase tracking-wider text-ink">Adresse d'enlèvement (Départ) <span className="text-accent">*</span></label>
                      <button 
                        type="button" 
                        onClick={() => setIsPickupFavOpen(!isPickupFavOpen)}
                        className="text-xs font-bold text-accent hover:underline"
                      >
                        Mes favoris
                      </button>
                      
                      {isPickupFavOpen && (
                        <div className="absolute right-0 top-6 z-50 mt-1 w-64 overflow-hidden rounded-xl border border-line bg-white shadow-xl animate-in fade-in zoom-in-95 duration-200">
                          {favoriteAddresses.length === 0 ? (
                            <div className="px-4 py-3 text-xs text-muted">
                              Aucune adresse favorite.{" "}
                              <Link href="/dashboard/adresses" className="font-bold text-accent hover:underline">En ajouter</Link>
                            </div>
                          ) : (
                            favoriteAddresses.map((fav, i) => (
                              <button
                                key={fav.id}
                                type="button"
                                onClick={() => { setPickupAddress(fav.address); setIsPickupFavOpen(false); }}
                                className={`w-full px-4 py-3 text-left transition-colors hover:bg-gray-50 ${i < favoriteAddresses.length - 1 ? "border-b border-line" : ""}`}
                              >
                                <div className="text-sm font-bold text-ink">{fav.label}</div>
                                <div className="text-xs font-medium text-muted truncate">{fav.address}</div>
                              </button>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="relative mb-3">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-label z-10">
                        <Search size={18} strokeWidth={2} />
                      </div>
                      <div className="[&>div>input]:pl-11 [&>div>input]:py-3.5 [&>div>input]:shadow-sm [&>div>input]:bg-white">
                        <AddressAutocomplete 
                          value={pickupAddress}
                          onChange={setPickupAddress}
                          required={true}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        defaultValue="Cabinet Dupont - Alexandre (06 12 34 56 78)"
                        className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                      />
                      <input
                        type="text"
                        defaultValue="Bâtiment B, 3e étage, code 4589"
                        className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Étapes intermédiaires */}
                  {stops.map((stop, index) => (
                    <div key={stop.id} className="relative">
                      <div className="absolute -left-[40px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-[#3B82F6] bg-white">
                        <div className="h-2 w-2 rounded-full bg-[#3B82F6]"></div>
                      </div>
                      
                      <div className="mb-3 flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-ink">Étape {index + 1} <span className="text-accent">*</span></label>
                        <button type="button" onClick={() => removeStop(stop.id)} className="text-xs font-bold text-red-500 hover:underline">
                          - Supprimer
                        </button>
                      </div>
                      
                      <div className="relative mb-3">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-label z-10">
                          <MapPin size={18} strokeWidth={2} />
                        </div>
                        <div className="[&>div>input]:pl-11 [&>div>input]:py-3.5 [&>div>input]:shadow-sm [&>div>input]:bg-white">
                          <AddressAutocomplete 
                            value={stop.address}
                            onChange={(val) => updateStop(stop.id, val)}
                            required={true}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <input
                          type="text"
                          placeholder="Contact sur place (Nom & Tél)"
                          className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Notes pour le coursier"
                          className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Arrivée */}
                  <div className="relative">
                    <div className="absolute -left-[40px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-accent bg-white">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                    </div>
                    
                    <div className="mb-3 flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-ink">Adresse de livraison (Destination) <span className="text-accent">*</span></label>
                      <button type="button" onClick={addStop} className="text-xs font-bold text-accent hover:underline">+ Ajouter une étape</button>
                    </div>
                    
                    <div className="relative mb-3">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-label z-10">
                        <MapPin size={18} strokeWidth={2} />
                      </div>
                      <div className="[&>div>input]:pl-11 [&>div>input]:py-3.5 [&>div>input]:shadow-sm [&>div>input]:bg-white">
                        <AddressAutocomplete 
                          value={dropoffAddress}
                          onChange={setDropoffAddress}
                          required={true}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        defaultValue="Me. Sophie Martin (06 98 76 54 32)"
                        className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                      />
                      <input
                        type="text"
                        defaultValue="Remise en main propre contre signature"
                        className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-ink px-8 py-4 text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-ink/90">
                Étape suivante
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleNextStep} className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Carte 2 : Format du Coursier / Colis */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
                <h2 className="text-[13px] font-bold uppercase tracking-wider text-ink">Format du coursier / colis <span className="text-accent">*</span></h2>
                <span className="text-[11px] font-medium text-label hidden sm:block">Flotte 100% décarbonée et rapide</span>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                
                <label className={`relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border-2 p-5 transition-all ${
                  format === 'pli' ? 'border-accent bg-white shadow-sm' : 'border-line bg-[#FDFDFD] hover:border-gray-300'
                }`}>
                  <input type="radio" name="format" value="pli" checked={format === 'pli'} onChange={() => setFormat("pli")} className="sr-only" />
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${format === 'pli' ? 'bg-[#E85D1F]/10 text-accent' : 'bg-paper text-label'}`}>
                    <Package size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mb-1 text-[15px] font-bold text-ink">Pli / Document</h3>
                  <p className="mb-4 text-[11px] text-muted">Jusqu'à 1 kg (enveloppe, contrat, clé)</p>
                  <div className={`mt-auto text-[11px] font-bold ${format === 'pli' ? 'text-accent' : 'text-label'}`}>Vélo express ou moto</div>
                </label>

                <label className={`relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border-2 p-5 transition-all ${
                  format === 'petit' ? 'border-accent bg-white shadow-sm' : 'border-line bg-[#FDFDFD] hover:border-gray-300'
                }`}>
                  <input type="radio" name="format" value="petit" checked={format === 'petit'} onChange={() => setFormat("petit")} className="sr-only" />
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${format === 'petit' ? 'bg-[#E85D1F]/10 text-accent' : 'bg-paper text-label'}`}>
                    <Box size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mb-1 text-[15px] font-bold text-ink">Petit colis</h3>
                  <p className="mb-4 text-[11px] text-muted">Jusqu'à 8 kg • Format boîte à chaussures</p>
                  <div className={`mt-auto text-[11px] font-bold ${format === 'petit' ? 'text-accent' : 'text-label'}`}>Vélo cargo ou scooter</div>
                </label>

                <label className={`relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border-2 p-5 transition-all ${
                  format === 'volumineux' ? 'border-accent bg-white shadow-sm' : 'border-line bg-[#FDFDFD] hover:border-gray-300'
                }`}>
                  <input type="radio" name="format" value="volumineux" checked={format === 'volumineux'} onChange={() => setFormat("volumineux")} className="sr-only" />
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${format === 'volumineux' ? 'bg-[#E85D1F]/10 text-accent' : 'bg-paper text-label'}`}>
                    <Archive size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mb-1 text-[15px] font-bold text-ink">Volumineux</h3>
                  <p className="mb-4 text-[11px] text-muted">Jusqu'à 30 kg+ • Cartons multiples</p>
                  <div className={`mt-auto text-[11px] font-bold ${format === 'volumineux' ? 'text-accent' : 'text-label'}`}>Fourgonnette 100% électrique</div>
                </label>

              </div>
            </div>

            <div className="flex items-center justify-between">
              <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 text-sm font-bold text-muted hover:text-ink">
                <ChevronLeft size={16} />
                Retour
              </button>
              <button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-ink px-8 py-4 text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-ink/90">
                Étape suivante
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleNextStep} className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Carte 3 : Délai Souhaité */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm p-6 sm:p-8">
              <div className="mb-6 border-b border-line pb-4">
                <h2 className="text-[13px] font-bold uppercase tracking-wider text-ink">Délai souhaité <span className="text-accent">*</span></h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                
                <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 px-5 py-4 transition-all ${
                  delai === 'flash' ? 'border-accent bg-white shadow-sm' : 'border-line bg-[#FDFDFD] hover:border-gray-300'
                }`}>
                  <input type="radio" name="delai" value="flash" checked={delai === 'flash'} onChange={() => setDelai("flash")} className="h-4 w-4 border-line text-accent focus:ring-accent" />
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-ink">Flash immédiat</span>
                    <span className={`text-[11px] font-medium ${delai === 'flash' ? 'text-accent' : 'text-muted'}`}>30 à 45 min garanties</span>
                  </div>
                </label>

                <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 px-5 py-4 transition-all ${
                  delai === 'standard' ? 'border-accent bg-white shadow-sm' : 'border-line bg-[#FDFDFD] hover:border-gray-300'
                }`}>
                  <input type="radio" name="delai" value="standard" checked={delai === 'standard'} onChange={() => setDelai("standard")} className="h-4 w-4 border-line text-accent focus:ring-accent" />
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-ink">Standard 2 heures</span>
                    <span className={`text-[11px] font-medium ${delai === 'standard' ? 'text-accent' : 'text-label'}`}>Avant 13h00</span>
                  </div>
                </label>

                <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 px-5 py-4 transition-all ${
                  delai === 'programme' ? 'border-accent bg-white shadow-sm' : 'border-line bg-[#FDFDFD] hover:border-gray-300'
                }`}>
                  <input type="radio" name="delai" value="programme" checked={delai === 'programme'} onChange={() => setDelai("programme")} className="h-4 w-4 border-line text-accent focus:ring-accent" />
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-ink">Programmé</span>
                    <span className={`text-[11px] font-medium ${delai === 'programme' ? 'text-accent' : 'text-label'}`}>Choisir date & heure</span>
                  </div>
                </label>

              </div>
              
              {delai === 'programme' && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 animate-in fade-in slide-in-from-top-2 duration-300 border-t border-line pt-6">
                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-muted">Date de présentation au départ</label>
                    <input type="date" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3.5 font-medium text-ink focus:border-accent focus:outline-none" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-muted">Heure d'enlèvement</label>
                    <input type="time" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3.5 font-medium text-ink focus:border-accent focus:outline-none" required />
                  </div>
                </div>
              )}

            </div>

            {/* Pied de formulaire - Résumé Tarif */}
            <div className="mt-2 flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sm:flex-row sm:p-8">
              
              <div className="flex flex-col items-start gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Tarif estimé</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-ink">24,50 €</span>
                  <span className="text-sm font-semibold text-muted">HT (29,40 € TTC)</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden flex-col items-end gap-1 md:flex">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Prise en charge</span>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-green-600">
                    <Clock size={16} />
                    ~ 12 minutes
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setStep(2)} className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white text-ink transition-colors hover:bg-paper">
                    <ChevronLeft size={18} strokeWidth={2.5} />
                  </button>
                  <button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-ink px-8 py-4 text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-ink/90">
                    Voir le récapitulatif
                    <ChevronRight size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

            </div>
          </form>
        )}

        {step === 4 && (
          <form onSubmit={handleConfirm} className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Carte 4 : Récapitulatif */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-line bg-[#FDFDFD] px-6 py-4">
                <div className="flex items-center gap-2 text-sm font-bold tracking-wide text-ink uppercase">
                  <CheckCircle2 size={16} className="text-accent" />
                  RÉCAPITULATIF DE LA COMMANDE
                </div>
              </div>
              
              <div className="flex flex-col p-6 sm:p-8 gap-8">
                
                {/* Trajet */}
                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">Détails du Trajet</h3>
                  <div className="flex flex-col gap-4 rounded-xl border border-line p-4 bg-[#FAFAFA]">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#10B981] bg-white">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#10B981]"></div>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-muted uppercase">Départ</div>
                        <div className="text-sm font-semibold text-ink">{pickupAddress || "Adresse non renseignée"}</div>
                      </div>
                    </div>
                    
                    {stops.map((stop, i) => (
                      <div key={stop.id} className="flex items-start gap-3">
                        <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#3B82F6] bg-white">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></div>
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-muted uppercase">Étape {i + 1}</div>
                          <div className="text-sm font-semibold text-ink">{stop.address || "Adresse non renseignée"}</div>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-muted uppercase">Arrivée</div>
                        <div className="text-sm font-semibold text-ink">{dropoffAddress || "Adresse non renseignée"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">Format</h3>
                    <div className="rounded-xl border border-line p-4 bg-[#FAFAFA]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-ink">
                          {format === 'pli' ? <FileText size={18} /> : format === 'petit' ? <Box size={18} /> : <Archive size={18} />}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-ink capitalize">{format === 'volumineux' ? 'Volumineux' : format}</div>
                          <div className="text-xs font-medium text-muted">
                            {format === 'pli' ? 'Documents (< 2 kg)' : format === 'petit' ? 'Petit colis (< 8 kg)' : 'Gros volume (> 30 kg)'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">Délai</h3>
                    <div className="rounded-xl border border-line p-4 bg-[#FAFAFA]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-ink">
                          <Clock size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-ink capitalize">{delai === 'flash' ? 'Flash immédiat' : delai === 'standard' ? 'Standard 2h' : 'Programmé'}</div>
                          <div className="text-xs font-medium text-muted">
                            {delai === 'flash' ? '30 à 45 min' : delai === 'standard' ? 'Avant 13h' : 'Sur mesure'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Pied de formulaire - Confirmer */}
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-white p-6 shadow-sm sm:flex-row sm:p-8">
              <div className="flex flex-col items-start gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Montant Final</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-ink">24,50 €</span>
                  <span className="text-sm font-semibold text-muted">HT (29,40 € TTC)</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                {submitError && (
                  <p className="text-[13px] font-medium text-red-600">{submitError}</p>
                )}
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setStep(3)} className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white text-ink transition-colors hover:bg-paper">
                    <ChevronLeft size={18} strokeWidth={2.5} />
                  </button>
                  <button type="submit" disabled={submitting} className="flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-accent-dark disabled:opacity-60">
                    {submitting ? "Envoi en cours…" : "Confirmer la commande"}
                    {!submitting && <CheckCircle2 size={18} strokeWidth={2.5} />}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {step === 5 && (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-line bg-white p-8 text-center shadow-sm animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-500 shadow-inner">
              <CheckCircle2 size={40} strokeWidth={2.5} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-ink">Commande validée !</h3>
            <p className="mb-4 max-w-md text-muted">
              Le dispatching a bien pris en compte votre course. Un coursier arrivera sur place sous peu.
            </p>
            {trackingCode && (
              <div className="mb-8 rounded-xl border border-line bg-paper px-6 py-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1">Code de suivi</p>
                <p className="text-xl font-extrabold tracking-widest text-ink">{trackingCode}</p>
              </div>
            )}
            <div className="flex gap-4">
              <Link
                href="/dashboard/suivi"
                className="rounded-xl border border-line px-8 py-3 font-semibold text-ink transition-colors hover:bg-paper"
              >
                Suivre la course
              </Link>
              <button
                onClick={() => { setStep(1); setPickupAddress(""); setDropoffAddress(""); setStops([]); setFormat("pli"); setDelai("flash"); setTrackingCode(null); }}
                className="rounded-xl bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-dark shadow-sm"
              >
                Nouvelle commande
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Bandeau Réassurance bas de page */}
      <div className="mt-12 flex flex-col flex-wrap items-center justify-center gap-6 border-t border-line pt-8 sm:flex-row md:justify-between">
        <div className="flex items-center gap-3 text-[11.5px] font-semibold text-muted">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
            <ShieldCheck size={12} strokeWidth={3} />
          </div>
          Chiffrement bancaire SSL 256-bit & Facturation différée
        </div>
        <div className="flex items-center gap-3 text-[11.5px] font-semibold text-muted">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
            <ShieldCheck size={12} strokeWidth={3} />
          </div>
          Dispatch instantané & Suivi GPS en temps réel
        </div>
        <div className="flex items-center gap-3 text-[11.5px] font-semibold text-muted">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
            <ShieldCheck size={12} strokeWidth={3} />
          </div>
          Flotte 100% décarbonée • Support dispatch dédié 7j/7
        </div>
      </div>
      
    </div>
  );
}
