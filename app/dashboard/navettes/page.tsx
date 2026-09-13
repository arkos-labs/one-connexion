"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Clock, Truck, ShieldCheck, ChevronRight, Plus, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";
import { AddressAutocomplete } from "@/components/AddressAutocomplete";

export default function NavettesPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stops, setStops] = useState<{id: string, address: string}[]>([]);

  const addStop = () => {
    setStops([...stops, { id: Math.random().toString(), address: "" }]);
  };

  const removeStop = (id: string) => {
    setStops(stops.filter(s => s.id !== id));
  };

  const updateStop = (id: string, address: string) => {
    setStops(stops.map(s => s.id === id ? { ...s, address } : s));
  };
  
  const daysOfWeek = [
    { id: 'mon', label: 'L' },
    { id: 'tue', label: 'M' },
    { id: 'wed', label: 'M' },
    { id: 'thu', label: 'J' },
    { id: 'fri', label: 'V' },
    { id: 'sat', label: 'S' },
    { id: 'sun', label: 'D' },
  ];
  
  const [selectedDays, setSelectedDays] = useState<string[]>(['mon', 'tue', 'wed', 'thu', 'fri']);

  const toggleDay = (dayId: string) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter(d => d !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-3 py-1 text-[11px] font-bold tracking-wider text-[#10B981] uppercase border border-[#10B981]/20">
            <Calendar size={12} strokeWidth={3} />
            SERVICES RÉCURRENTS
          </div>
          <div>
            <h1 className="text-[32px] font-extrabold tracking-tight text-ink">
              {isCreating ? (
                <>Programmer une <span className="text-[#10B981]">navette</span>.</>
              ) : (
                <>Vos navettes <span className="text-[#10B981]">récurrentes</span>.</>
              )}
            </h1>
            <p className="mt-1.5 text-[15px] font-medium text-muted">
              {isCreating ? "Planifiez des tournées régulières. Un chauffeur dédié sera assigné à vos trajets." : "Gérez vos tournées régulières et programmez-en de nouvelles."}
            </p>
          </div>
        </div>
        
        {!isCreating && (
          <button 
            onClick={() => { setIsCreating(true); setIsSubmitted(false); }}
            className="flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-ink/90 shrink-0"
          >
            <Plus size={18} strokeWidth={2.5} />
            Nouvelle navette
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {!isCreating ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 animate-in fade-in duration-500">
            {/* Carte Navette Factice 1 */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between border-b border-line p-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981]/10 text-[#10B981]">
                    <RefreshCw size={16} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-ink">Tournée Agences Nord</h3>
                </div>
                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold uppercase text-green-600 ring-1 ring-green-600/20">Active</span>
              </div>
              <div className="flex flex-col gap-4 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper">
                    <MapPin size={12} className="text-muted" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="truncate text-sm font-semibold text-ink">Siège Social (75001)</span>
                    <span className="truncate text-xs text-muted">Vers : Agence Saint-Denis (93200)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 rounded-lg bg-paper p-3 text-xs font-semibold text-ink">
                  <Clock size={14} className="text-muted" />
                  Lun, Mer, Ven — Présentation à 08h30
                </div>
                
                <button className="mt-2 text-left text-xs font-bold text-[#10B981] hover:underline">
                  Voir les détails de la navette &rarr;
                </button>
              </div>
            </div>

            {/* Carte Navette Factice 2 */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between border-b border-line p-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981]/10 text-[#10B981]">
                    <RefreshCw size={16} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-ink">Réapprovisionnement Sud</h3>
                </div>
                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold uppercase text-green-600 ring-1 ring-green-600/20">Active</span>
              </div>
              <div className="flex flex-col gap-4 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper">
                    <MapPin size={12} className="text-muted" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="truncate text-sm font-semibold text-ink">Entrepôt Logistique (94)</span>
                    <span className="truncate text-xs text-muted">Vers : 3 Boutiques (Paris Sud)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 rounded-lg bg-paper p-3 text-xs font-semibold text-ink">
                  <Clock size={14} className="text-muted" />
                  Mar, Jeu — Présentation à 10h00
                </div>
                
                <button className="mt-2 text-left text-xs font-bold text-[#10B981] hover:underline">
                  Voir les détails de la navette &rarr;
                </button>
              </div>
            </div>
          </div>
        ) : !isSubmitted ? (
        <form className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
          
          <div className="mb-2">
            <button type="button" onClick={() => setIsCreating(false)} className="text-sm font-bold text-muted hover:text-ink hover:underline">
              &larr; Retour aux navettes
            </button>
          </div>
          
          {/* Section Trajet */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-line bg-[#FDFDFD] px-6 py-4 text-sm font-bold tracking-wide text-ink uppercase">
              <MapPin size={16} className="text-[#10B981]" />
              ITINÉRAIRE DE LA NAVETTE
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <div className="relative flex flex-col gap-8 pl-10">
                <div className="absolute bottom-8 left-[19px] top-6 border-l-2 border-dashed border-line"></div>
                
                {/* Départ */}
                <div className="relative">
                  <div className="absolute -left-[40px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-[#10B981] bg-white">
                    <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
                  </div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-ink">Point de départ <span className="text-accent">*</span></label>
                  <div className="[&>div>input]:pl-4 [&>div>input]:py-3.5 [&>div>input]:shadow-sm">
                    <AddressAutocomplete value={pickupAddress} onChange={setPickupAddress} placeholder="Adresse du siège ou de l'entrepôt" required />
                  </div>
                  
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Contact sur place (Nom & Tél)"
                      className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Service / Instructions pour le chauffeur"
                      className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                {/* Étapes intermédiaires */}
                {stops.map((stop, index) => (
                  <div key={stop.id} className="relative mt-8">
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
                      <div className="[&>div>input]:pl-4 [&>div>input]:py-3.5 [&>div>input]:shadow-sm">
                        <AddressAutocomplete 
                          value={stop.address}
                          onChange={(val) => updateStop(stop.id, val)}
                          placeholder="Adresse de livraison intermédiaire"
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
                    <label className="text-xs font-bold uppercase tracking-wider text-ink">Point d'arrivée <span className="text-accent">*</span></label>
                    <button type="button" onClick={addStop} className="text-xs font-bold text-[#10B981] hover:underline">+ Ajouter une étape</button>
                  </div>
                  <div className="[&>div>input]:pl-4 [&>div>input]:py-3.5 [&>div>input]:shadow-sm">
                    <AddressAutocomplete value={dropoffAddress} onChange={setDropoffAddress} placeholder="Adresse de destination finale" required />
                  </div>
                  
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Contact sur place (Nom & Tél)"
                      className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Service / Instructions pour le chauffeur"
                      className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-xs font-medium text-ink focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Planning */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-line bg-[#FDFDFD] px-6 py-4 text-sm font-bold tracking-wide text-ink uppercase">
              <Clock size={16} className="text-[#10B981]" />
              PLANNING & HORAIRES
            </div>
            
            <div className="flex flex-col p-6 sm:p-8 gap-8">
              {/* Jours de la semaine */}
              <div>
                <label className="mb-4 block text-xs font-bold uppercase tracking-wider text-ink">Jours d'intervention <span className="text-accent">*</span></label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => toggleDay(day.id)}
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all ${
                        selectedDays.includes(day.id)
                          ? "bg-ink text-white shadow-md ring-2 ring-ink ring-offset-2"
                          : "bg-paper text-muted hover:bg-line hover:text-ink"
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Horaires */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-ink">Heure de présentation (Départ)</label>
                  <input type="time" defaultValue="08:30" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3.5 font-bold text-ink focus:border-[#10B981] focus:outline-none" required />
                </div>
                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-ink">Heure limite de livraison</label>
                  <input type="time" defaultValue="12:00" className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3.5 font-bold text-ink focus:border-[#10B981] focus:outline-none" required />
                </div>
              </div>
            </div>
          </div>



          {/* Pied de formulaire - Confirmer */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-white p-6 shadow-sm sm:flex-row sm:p-8">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Tarif estimé / passage</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-ink">185,00 €</span>
                <span className="text-sm font-semibold text-muted">HT</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 text-sm font-medium text-muted sm:flex mr-4">
                <ShieldCheck size={18} className="text-[#10B981]" />
                Chauffeur attitré
              </div>
              <button type="submit" className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-ink px-8 py-4 text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-ink/90">
                Confirmer la navette
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </form>
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-line bg-white p-8 text-center shadow-sm animate-in fade-in zoom-in-95 duration-500">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-500 shadow-inner">
              <ShieldCheck size={40} strokeWidth={2.5} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-ink">Navette programmée avec succès !</h3>
            <p className="mb-8 max-w-md text-muted">
              Votre plan de tournée a bien été enregistré. Un chauffeur attitré se présentera aux horaires convenus pour assurer votre navette.
            </p>
            <button
              onClick={() => { setIsSubmitted(false); setIsCreating(false); }}
              className="rounded-xl border border-line px-8 py-3 font-semibold text-ink transition-colors hover:bg-paper"
            >
              Retourner à mes navettes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
