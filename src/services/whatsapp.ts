import type { BudgetFormData } from "../types/content";
import { siteConfig } from "../constants/site";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createBudgetMessage(data: BudgetFormData): string {
  return [
    "Olá, BackSlice. Gostaria de solicitar um orçamento.",
    `Nome: ${data.name}`,
    `Empresa: ${data.company || "Não informado"}`,
    `Email: ${data.email}`,
    `Telefone: ${data.phone}`,
    `Serviço: ${data.service}`,
    `Descrição: ${data.description}`,
  ].join("\n");
}
