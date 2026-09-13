"use client";

import React, { useState, useEffect } from "react";
import { User, Building2, CreditCard, Lock, Save, ShieldCheck, Settings } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { PageHeader } from "@/components/dashboard/PageHeader";

export default function ParametresPage() {
  const supabase = createClient();
  const [activeTab, setActiveTab] = useState("profil");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [siret, setSiret] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setLoading(false);
          return;
        }

        setEmail(user.email || "");

        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (!error && data) {
          setFullName(data.full_name || "");
          setPhone(data.phone || "");
          setCompany(data.company || "");
          setSiret(data.siret || "");
          setVatNumber(data.vat_number || "");
          setBillingAddress(data.billing_address || "");
        }
      } catch (err) {
        console.error("Erreur de chargement du profil:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleSaveProfile = async () => {
    setSaving(true);
    setSaveMessage(null);
    setSaveError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setSaveError("Session expirée. Veuillez vous reconnecter.");
        setSaving(false);
        return;
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          phone,
          company,
          siret,
          vat_number: vatNumber,
          billing_address: billingAddress,
        })
        .eq("id", user.id);

      if (error) {
        setSaveError(`Erreur: ${error.message}`);
      } else {
        setSaveMessage("Modifications enregistrées.");
        setTimeout(() => setSaveMessage(null), 3000);
      }
    } catch (err) {
      setSaveError("Une erreur inattendue est survenue.");
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMessage(null);
    setPasswordError(null);

    if (newPassword.length < 6) {
      setPasswordError("Le nouveau mot de passe doit contenir au moins 6 caractères.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas.");
      return;
    }

    setPasswordSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) {
        setPasswordError(`Erreur: ${error.message}`);
      } else {
        setPasswordMessage("Mot de passe mis à jour.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      setPasswordError("Une erreur inattendue est survenue.");
    } finally {
      setPasswordSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      <PageHeader
        icon={Settings}
        eyebrow="Mon compte"
        title={<>Paramètres du <span className="text-accent">compte</span>.</>}
        subtitle="Gérez vos informations personnelles, professionnelles et vos préférences de facturation."
        action={
          (activeTab === "profil" || activeTab === "societe") && (
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={handleSaveProfile}
                disabled={saving || loading}
                className="flex shrink-0 items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-dark disabled:opacity-50"
              >
                <Save size={18} strokeWidth={2.5} />
                {saving ? "Enregistrement..." : "Enregistrer les modifications"}
              </button>
              {saveMessage && <span className="text-xs font-bold text-green-600">{saveMessage}</span>}
              {saveError && <span className="text-xs font-bold text-red-600">{saveError}</span>}
            </div>
          )
        }
      />

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Navigation des paramètres */}
        <div className="w-full lg:w-[240px] shrink-0">
          <nav className="flex flex-col gap-2 sticky top-[110px]">
            <button
              onClick={() => setActiveTab("profil")}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === "profil" ? "bg-white text-ink shadow-sm border border-line" : "text-muted hover:bg-white/50 hover:text-ink"
              }`}
            >
              <User size={18} className={activeTab === "profil" ? "text-accent" : ""} />
              Profil Utilisateur
            </button>
            <button
              onClick={() => setActiveTab("societe")}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === "societe" ? "bg-white text-ink shadow-sm border border-line" : "text-muted hover:bg-white/50 hover:text-ink"
              }`}
            >
              <Building2 size={18} className={activeTab === "societe" ? "text-accent" : ""} />
              Société
            </button>
            <button
              onClick={() => setActiveTab("facturation")}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === "facturation" ? "bg-white text-ink shadow-sm border border-line" : "text-muted hover:bg-white/50 hover:text-ink"
              }`}
            >
              <CreditCard size={18} className={activeTab === "facturation" ? "text-accent" : ""} />
              Facturation & Paiement
            </button>
            <button
              onClick={() => setActiveTab("securite")}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === "securite" ? "bg-white text-ink shadow-sm border border-line" : "text-muted hover:bg-white/50 hover:text-ink"
              }`}
            >
              <Lock size={18} className={activeTab === "securite" ? "text-accent" : ""} />
              Sécurité
            </button>
          </nav>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="text-muted">Chargement...</div>
            </div>
          ) : (
          <>
          {activeTab === "profil" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="border-b border-line pb-4">
                <h2 className="text-lg font-bold text-ink">Informations personnelles</h2>
                <p className="text-sm text-muted">Ces informations sont utilisées pour vous contacter au sujet de vos courses.</p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Nom complet</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Email professionnel</label>
                  <input
                    type="email"
                    value={email}
                    disabled
                    className="w-full rounded-xl border border-line bg-[#F0F0F0] px-4 py-3 text-sm font-semibold text-muted cursor-not-allowed"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Téléphone portable</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 XX XX XX XX"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "societe" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="border-b border-line pb-4">
                <h2 className="text-lg font-bold text-ink">Informations de l'entreprise</h2>
                <p className="text-sm text-muted">Les détails de votre structure juridique.</p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Nom de la société / Cabinet</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: Cabinet Dupont & Associés"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="flex min-h-[32px] items-end text-xs font-bold uppercase tracking-wider text-ink">Numéro de SIRET</label>
                  <input
                    type="text"
                    value={siret}
                    onChange={(e) => setSiret(e.target.value)}
                    placeholder="123 456 789 00012"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="flex min-h-[32px] items-end text-xs font-bold uppercase tracking-wider text-ink">Numéro de TVA Intracommunautaire</label>
                  <input
                    type="text"
                    value={vatNumber}
                    onChange={(e) => setVatNumber(e.target.value)}
                    placeholder="FR 12 123456789"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Adresse de facturation</label>
                  <input
                    type="text"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    placeholder="Adresse complète"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "facturation" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="border-b border-line pb-4 flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-ink">Facturation & Paiement</h2>
                  <p className="text-sm text-muted">Gérez vos méthodes de paiement et vos conditions.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-paper/50 p-6">
                <h3 className="mb-2 font-bold text-ink">Méthode de paiement</h3>
                <p className="mb-4 text-sm text-muted">Aucune méthode de paiement enregistrée pour le moment.</p>
                <button className="text-sm font-bold text-accent hover:underline">Ajouter un moyen de paiement</button>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[11.5px] font-semibold text-muted">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                  <ShieldCheck size={12} strokeWidth={3} />
                </div>
                Toutes les transactions sont chiffrées et sécurisées.
              </div>
            </div>
          )}

          {activeTab === "securite" && (
            <form onSubmit={handleChangePassword} className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="border-b border-line pb-4">
                <h2 className="text-lg font-bold text-ink">Sécurité du compte</h2>
                <p className="text-sm text-muted">Modifiez votre mot de passe et sécurisez votre accès.</p>
              </div>

              {passwordMessage && (
                <div className="rounded-xl bg-green-50 p-3 text-xs font-bold text-green-700 sm:max-w-md">
                  {passwordMessage}
                </div>
              )}
              {passwordError && (
                <div className="rounded-xl bg-red-50 p-3 text-xs font-bold text-red-600 sm:max-w-md">
                  {passwordError}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:max-w-md">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Nouveau mot de passe</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">Confirmer le nouveau mot de passe</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-line bg-[#FAFAFA] px-4 py-3 text-sm font-semibold text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={passwordSaving}
                  className="mt-2 flex w-fit items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-ink/90 disabled:opacity-50"
                >
                  {passwordSaving ? "Mise à jour..." : "Mettre à jour le mot de passe"}
                </button>
              </div>
            </form>
          )}
          </>
          )}

        </div>
      </div>
    </div>
  );
}
