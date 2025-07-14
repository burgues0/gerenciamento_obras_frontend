"use client";
import { useState } from "react";
import { ObrasService } from "@/lib/api";
import { Button } from "@/components/ui/button";

interface ObraEnderecoFormProps {
  obraId: string;
  initialData?: any;
  onSaved: () => void;
  onCancel: () => void;
}

export default function ObraEnderecoForm({ obraId, initialData, onSaved, onCancel }: ObraEnderecoFormProps) {
  const [form, setForm] = useState<any>(initialData || {
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (initialData) {
        await ObrasService.updateEndereco(obraId, form);
      } else {
        await ObrasService.createEndereco(obraId, form);
      }
      onSaved();
    } catch (err: any) {
      setError(err.message || "Erro ao salvar endereço.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 bg-gray-50 p-4 rounded border">
      <div className="grid grid-cols-2 gap-2">
        <input className="border rounded p-2" name="logradouro" placeholder="Logradouro" value={form.logradouro} onChange={handleChange} required />
        <input className="border rounded p-2" name="numero" placeholder="Número" value={form.numero} onChange={handleChange} required />
        <input className="border rounded p-2" name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} required />
        <input className="border rounded p-2" name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} required />
        <input className="border rounded p-2" name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} required />
        <input className="border rounded p-2" name="cep" placeholder="CEP" value={form.cep} onChange={handleChange} required />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div className="flex gap-2 mt-2">
        <Button type="submit" disabled={loading}>{loading ? "Salvando..." : "Salvar"}</Button>
        <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>
      </div>
    </form>
  );
}
