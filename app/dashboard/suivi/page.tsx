"use client";

import React from "react";
import { Truck, Search, MapPin, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function SuiviPage() {
  const deliveries = [
    {
      id: "C-9428",
      date: "Aujourd'hui, 14:30",
      pickup: "75008 Paris",
      dropoff: "92100 Boulogne",
      status: "en_cours",
      driver: "Marc",
    },
    {
      id: "C-9425",
      date: "Aujourd'hui, 09:15",
      pickup: "75001 Paris",
      dropoff: "75016 Paris",
      status: "livre",
      driver: "Sophie",
    },
    {
      id: "C-9390",
      date: "Hier, 16:45",
      pickup: "75010 Paris",
      dropoff: "94000 Créteil",
      status: "livre",
      driver: "Karim",
    },
    {
      id: "C-9355",
      date: "10 Sept, 11:20",
      pickup: "75008 Paris",
      dropoff: "92200 Neuilly",
      status: "annule",
      driver: "-",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "en_cours":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
            <Truck size={12} /> En cours
          </span>
        );
      case "livre":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-700">
            <CheckCircle2 size={12} /> Livré
          </span>
        );
      case "annule":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">
            <AlertCircle size={12} /> Annulé
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-700">
            <Clock size={12} /> En attente
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-ink">Suivre vos livraisons</h1>
          <p className="mt-1 text-sm text-muted">Consultez l'historique et le statut de vos courses.</p>
        </div>
        
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={16} className="text-label" />
          </div>
          <input
            type="text"
            placeholder="N° de course, adresse..."
            className="w-full rounded-[4px] border border-line bg-white py-2 pl-9 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:w-64"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink">
            <thead className="border-b border-line bg-paper-card text-xs font-bold uppercase text-muted">
              <tr>
                <th scope="col" className="px-6 py-4">N° Course</th>
                <th scope="col" className="px-6 py-4">Date</th>
                <th scope="col" className="px-6 py-4">Itinéraire</th>
                <th scope="col" className="px-6 py-4">Coursier</th>
                <th scope="col" className="px-6 py-4">Statut</th>
                <th scope="col" className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {deliveries.map((delivery) => (
                <tr key={delivery.id} className="transition-colors hover:bg-gray-50/50">
                  <td className="whitespace-nowrap px-6 py-4 font-bold">{delivery.id}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-muted">{delivery.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        {delivery.pickup}
                      </div>
                      <div className="ml-0.5 h-2 w-px border-l border-dashed border-line"></div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                        {delivery.dropoff}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-muted">{delivery.driver}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {getStatusBadge(delivery.status)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <button className="text-sm font-semibold text-accent hover:text-accent-dark hover:underline">
                      Détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
