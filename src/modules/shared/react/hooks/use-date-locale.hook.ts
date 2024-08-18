import { useTranslation } from "@root/modules/shared/react/hooks/use-translation.hook";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/fr";

export const useDateLocale = () => {
  const { locale } = useTranslation("common");
  dayjs.locale(locale);

  return {
    dayjs,
  };
};
