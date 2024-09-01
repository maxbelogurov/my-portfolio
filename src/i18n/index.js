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
    fallbackLocale: 'ru',
    messages,
}
