export type ServiceStatus = "active" | "future";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  benefit: string;
  practicalUse: string;
  businessValue: string;
  status: ServiceStatus;
}

export interface FutureService {
  id: string;
  title: string;
  status: "planned";
}

export interface Project {
  id: string;
  title: string;
  type: "conceito" | "interno";
  context: string;
  problem: string;
  solution: string;
  technologies: string[];
  expectedResult: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

export interface BudgetFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}
