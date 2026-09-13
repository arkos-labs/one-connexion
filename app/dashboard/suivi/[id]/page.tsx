"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  MapPin, 
  Package, 
  Clock, 
  Phone, 
  User, 
  Star,
  FileText,
  CreditCard,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function DeliveryDetailsPage() {
  const params = useParams();
  const id = params?.id || "OC-2023-8942";

  return (
    <div className="flex flex-col gap-8 pb-12">
      
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <Link 
          href="/dashboard/suivi" 
          className="group flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white transition-colors group-hover:border-ink">
            <ArrowLeft size={16} />
          </div>
          Retour au suivi
        </Link>
        <button className="rounded-xl border border-line bg-white px-4 py-2 text-sm font-bold text-ink shadow-sm transition-colors hover:bg-[#FAFAFA]">
          Télécharger le bon de livraison
        </button>
      </div>

      {/* Titre et Statut Principal */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h1 className="text-[28px] font-extrabold tracking-tight text-ink">
              Course <span className="text-accent">{id}</span>
            </h1>
            <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              En cours de livraison
            </span>
          </div>
          <p className="text-sm font-medium text-muted">Créée aujourd'hui à 09:42 • Format: Moto (Pli)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        {/* Colonne Principale (Timeline & Infos) */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          
          {/* Tracker Visuel */}
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-bold text-ink">Suivi en temps réel</h2>
            
            <div className="relative flex flex-col gap-8">
              {/* Ligne de connexion */}
              <div className="absolute bottom-6 left-[19px] top-6 w-0.5 bg-line"></div>
              
              {/* Etape 1 : Commande */}
              <div className="relative flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-green-500 bg-white text-green-500 z-10">
                  <CheckCircle2 size={20} />
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-ink">Commande validée</h3>
                  <p className="text-sm text-muted">09:42 - En attente d'un coursier</p>
                </div>
              </div>
              
              {/* Etape 2 : Prise en charge */}
              <div className="relative flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-green-500 bg-white text-green-500 z-10">
                  <CheckCircle2 size={20} />
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-ink">Coursier affecté</h3>
                  <p className="text-sm text-muted">09:45 - Thomas L. est en route pour l'enlèvement</p>
                </div>
              </div>
              
              {/* Etape 3 : Enlèvement */}
              <div className="relative flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-green-500 bg-white text-green-500 z-10">
                  <CheckCircle2 size={20} />
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-ink">Enlèvement effectué</h3>
                  <p className="text-sm text-muted">10:15 - Colis récupéré au 75 Rue de Rivoli</p>
                </div>
              </div>

              {/* Etape 4 : En transit (Active) */}
              <div className="relative flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-500 z-10">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-blue-600">En cours de livraison</h3>
                  <p className="text-sm font-medium text-ink">Livraison estimée à 10:45</p>
                </div>
              </div>

              {/* Etape 5 : Livré (Pending) */}
              <div className="relative flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-line bg-white text-label z-10">
                  <MapPin size={18} />
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-muted">Colis livré</h3>
                  <p className="text-sm text-label">En attente de signature</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Adresses */}
          <div className="flex flex-col rounded-2xl border border-line bg-white shadow-sm overflow-hidden">
            <div className="border-b border-line p-5">
              <h2 className="text-lg font-bold text-ink">Détails de l'itinéraire</h2>
            </div>
            
            <div className="flex flex-col gap-0">
              {/* Départ */}
              <div className="flex gap-4 p-5">
                <div className="flex flex-col items-center gap-2 pt-1">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                    <span className="text-[10px] font-bold">A</span>
                  </div>
                  <div className="h-full w-0.5 bg-line"></div>
                </div>
                <div className="pb-4">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-label">Enlèvement</h3>
                  <p className="mt-1 font-bold text-ink">Cabinet Dupont & Associés</p>
                  <p className="text-sm text-muted">75 Rue de Rivoli, 75001 Paris</p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-ink">
                    <User size={14} className="text-muted" /> Alexandre Dupont
                  </div>
                </div>
              </div>
              
              {/* Arrivée */}
              <div className="flex gap-4 p-5 pt-0">
                <div className="flex flex-col items-center pt-1">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <span className="text-[10px] font-bold">B</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-label">Livraison</h3>
                  <p className="mt-1 font-bold text-ink">Client Final SAS</p>
                  <p className="text-sm text-muted">14 Avenue Victor Hugo, 92100 Boulogne-Billancourt</p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-ink">
                    <User size={14} className="text-muted" /> Sophie Martin
                  </div>
                  <div className="mt-3 rounded-lg bg-orange-50 p-3 text-xs font-medium text-orange-800">
                    <span className="font-bold">Note :</span> Remise en main propre contre signature obligatoire.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Colonne Latérale (Coursier & Prix) */}
        <div className="flex flex-col gap-6">
          
          {/* Le Coursier */}
          <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-bold text-ink">Votre coursier</h2>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500 overflow-hidden">
                {/* Photo placeholder */}
                <User size={24} />
              </div>
              <div>
                <h3 className="font-bold text-ink">Thomas L.</h3>
                <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                  <Star size={12} fill="currentColor" />
                  <span>4.9</span>
                  <span className="font-medium text-muted">(142 courses)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-5 flex gap-2">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink py-2.5 text-xs font-bold text-white transition-colors hover:bg-ink/90">
                <Phone size={14} />
                Appeler
              </button>
            </div>
          </div>
          
          {/* Détails Commande */}
          <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-bold text-ink">Détails & Facturation</h2>
            
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Référence</span>
                <span className="font-bold text-ink">{id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Type de véhicule</span>
                <span className="font-bold text-ink">Moto</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Format</span>
                <span className="font-bold text-ink">Pli (max 2kg)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Distance</span>
                <span className="font-bold text-ink">8.4 km</span>
              </div>
            </div>
            
            <div className="my-4 border-t border-line"></div>
            
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Tarif HT</span>
                <span className="font-bold text-ink">24,00 €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">TVA (20%)</span>
                <span className="font-bold text-ink">4,80 €</span>
              </div>
              <div className="mt-2 flex justify-between text-lg">
                <span className="font-bold text-ink">Total TTC</span>
                <span className="font-bold text-accent">28,80 €</span>
              </div>
            </div>
            
            <div className="mt-5 rounded-xl bg-green-50 p-3 text-center text-xs font-bold text-green-700">
              Facturé sur votre compte pro (fin de mois)
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
