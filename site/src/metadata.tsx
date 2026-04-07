import { useEffect } from "react";
import { useLocale } from "./i18n";

type PageMetadataProps = {
  title: string;
  description: string;
};

const getDescriptionMeta = () => {
  let meta = document.querySelector('meta[name="description"]');

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }

  return meta;
};

export const PageMetadata = ({ title, description }: PageMetadataProps) => {
  const { locale } = useLocale();

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = locale;
    getDescriptionMeta().setAttribute("content", description);
  }, [description, locale, title]);

  return null;
};
