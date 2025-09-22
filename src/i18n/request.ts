import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "tr";
  // i18n/ -> messages/ arası için yol: ../messages/...
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return { locale, messages };
});
