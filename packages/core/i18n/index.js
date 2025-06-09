import { createI18n } from "vue-i18n";
import en from "./language/en";
import zh_CN from "./language/zh-CN";

const messages = {
  en,
  "zh-CN": zh_CN,
};

const i18n = createI18n({
  legacy: false,
  locale: "zh-CN",
  fallbackLocale: "en",
  messages,
});

const { t, locale } = i18n.global;

export { i18n, t, locale };
