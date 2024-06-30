import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        scheme: 'dark',
    }),
    getters: {
        getScheme: (state) => state.scheme,
    },
    actions: {
        setScheme(theme) {
            this.scheme = theme
        },
    },
})
