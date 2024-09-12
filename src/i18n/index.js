import ru from "./ru.json"
import en from "./en.json"
const defaultLocale = "ru"
const messages = {
    ru,
    en
}
export const options = {
    legacy: false,
    locale: defaultLocale,
    warnHtmlMessage: false, // disable warning HTML in message
    fallbackLocale: 'ru',
    messages,
}
