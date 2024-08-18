import { useLocale, useTranslations } from "next-intl";

export const useTranslation = (namespace?: string) => {
  const t = useTranslations(namespace ?? "");

  const locale = useLocale();

  return { t, locale };
};
