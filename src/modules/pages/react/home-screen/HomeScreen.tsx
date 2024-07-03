import { useTranslation } from "@root/modules/shared/react/hooks/use-translation";

export default function HomeScreen() {
  const { t } = useTranslation("pages.home");

  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}
