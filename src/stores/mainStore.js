import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        theme: 'light',
        mobile: false,
    }),
    getters: {
        getTheme: (state) => state.theme,
        isMobile: (state) => state.mobile,
    },
    actions: {
        setTheme(theme) {
            this.theme = theme
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem('theme', theme);
        },
        setMobile(value) {
            this.mobile = value
        }
    },
})
