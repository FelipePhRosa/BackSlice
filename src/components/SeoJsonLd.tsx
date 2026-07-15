import { useEffect } from "react";
import { localBusinessJsonLd } from "../utils/seo";

export function SeoJsonLd() {
  useEffect(() => {
    const id = "local-business-json-ld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(localBusinessJsonLd());
  }, []);

  return null;
}
