import TextHighlightParser from "@root/modules/shared/react/components/TextHighlightParser/TextHighlightParser";
import { useTranslation } from "@root/modules/shared/react/hooks/use-translation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8 mt-20 flex items-center justify-center flex-col">
      <h1 className="text-center text-6xl font-semibold text-black lg:w-2/3 leading-tight">
        <TextHighlightParser
          text={t("pages.home.hero.title")}
          highLightColor="text-blue-500"
        />
      </h1>

      <h3 className="text-center text-xl text-gray-500 lg:w-2/3 leading-tight mt-6">
        {t("pages.home.hero.description")}
      </h3>
    </div>
  );
}
