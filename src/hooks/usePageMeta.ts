import { useEffect } from "react";
import type { PageMeta } from "../types/content";
import { applyPageMeta } from "../utils/seo";

export function usePageMeta(meta: PageMeta): void {
  useEffect(() => {
    applyPageMeta(meta);
  }, [meta]);
}
