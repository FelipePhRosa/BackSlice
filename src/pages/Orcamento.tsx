import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Input, Textarea } from "../components/Input";
import { SectionHeader } from "../components/SectionHeader";
import { activeServices } from "../constants/services";
import { pageMeta } from "../constants/site";
import { usePageMeta } from "../hooks/usePageMeta";
import { createBudgetMessage, createWhatsAppUrl } from "../services/whatsapp";
import type { BudgetFormData } from "../types/content";

const initialData: BudgetFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: activeServices[0]?.title ?? "",
  description: "",
};

export default function Orcamento() {
  usePageMeta(pageMeta.orcamento);
  const [data, setData] = useState<BudgetFormData>(initialData);

  function updateField(field: keyof BudgetFormData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(createWhatsAppUrl(createBudgetMessage(data)), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section-spacing">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <SectionHeader
          eyebrow="Orçamento"
          titleAs="h1"
          title="Envie contexto suficiente para um diagnóstico inicial melhor."
          description="O formulário organiza informações básicas antes do contato pelo WhatsApp."
        />
        <form className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Nome" name="name" value={data.name} onChange={(event) => updateField("name", event.target.value)} required />
            <Input label="Empresa" name="company" value={data.company} onChange={(event) => updateField("company", event.target.value)} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Email" name="email" type="email" value={data.email} onChange={(event) => updateField("email", event.target.value)} required />
            <Input label="Telefone" name="phone" value={data.phone} onChange={(event) => updateField("phone", event.target.value)} required />
          </div>
          <label className="grid gap-2 text-sm font-semibold text-ink-100" htmlFor="service">
            Serviço
            <select
              id="service"
              className="min-h-11 rounded-md border border-white/12 bg-ink-900 px-3 py-2 text-ink-100 focus:border-red-500"
              value={data.service}
              onChange={(event) => updateField("service", event.target.value)}
            >
              {activeServices.map((service) => (
                <option key={service.id}>{service.title}</option>
              ))}
            </select>
          </label>
          <Textarea
            label="Descreva o problema ou objetivo"
            name="description"
            value={data.description}
            onChange={(event) => updateField("description", event.target.value)}
            required
          />
          <Button type="submit">Enviar pelo WhatsApp</Button>
        </form>
      </div>
    </section>
  );
}
