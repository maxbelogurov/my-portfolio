import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        theme: 'light',
    }),
    getters: {
        getTheme: (state) => state.theme,
    },
    actions: {
        setTheme(theme) {
            this.theme = theme
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem('theme', theme);
        },
    },
})
