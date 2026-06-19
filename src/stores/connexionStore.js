import {defineStore} from 'pinia'

export const useConnexionStore = defineStore('connexion', {
    state: () => ({
        isLoggedIn: false,
        user: null,
        isConnectVue: false
    }),
    actions: {
        login(user) {
            this.isLoggedIn = true
            this.user = user
        },
        afficherConnexion() {
            this.isConnectVue = true
        },
        masquerConnexion() {
            this.isConnectVue = false
        },
        logout() {
            this.isLoggedIn = false
            this.user = null
            this.isConnectVue = false
        }
    }
})
