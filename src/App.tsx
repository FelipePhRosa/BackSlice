import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SeoJsonLd } from "./components/SeoJsonLd";
import { PageWrapper } from "./layouts/PageWrapper";

const Home = lazy(() => import("./pages/Home"));
const Empresa = lazy(() => import("./pages/Empresa"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Projetos = lazy(() => import("./pages/Projetos"));
const Contato = lazy(() => import("./pages/Contato"));
const Orcamento = lazy(() => import("./pages/Orcamento"));
const Blog = lazy(() => import("./pages/Blog"));

const router = createBrowserRouter([
  {
    element: <PageWrapper />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/empresa", element: <Empresa /> },
      { path: "/servicos", element: <Servicos /> },
      { path: "/projetos", element: <Projetos /> },
      { path: "/contato", element: <Contato /> },
      { path: "/orcamento", element: <Orcamento /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
});

export function App() {
  return (
    <Suspense fallback={<div className="container py-16 text-ink-300">Carregando...</div>}>
      <SeoJsonLd />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </Suspense>
  );
}
