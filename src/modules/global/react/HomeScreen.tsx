import TextHighlightParser from "@root/modules/shared/react/components/TextHighlightParser/TextHighlightParser";
import { useTranslation } from "@root/modules/shared/react/hooks/use-translation.hook";

export default function HomeScreen() {
  const { t } = useTranslation("pages.home");

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        <TextHighlightParser text={t("title")} />
      </h1>
      <h2 className="text-2xl font-medium mt-3 opacity-70">
        {t("description")}
      </h2>
    </main>
  );
}
