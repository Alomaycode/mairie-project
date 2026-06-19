import { defineStore } from 'pinia'
import UtilisateurProfil from '../models/utilisateur_profil.js'

export const useUtilisateurProfilStore = defineStore('utilisateurProfil', {
  state: () => ({
    utilisateurProfils: [],
  }),
  actions: {
    initialiserUtilisateurProfils() {
      this.utilisateurProfils = [
        new UtilisateurProfil({
          id_utilisateur: 1,
          id_profil: 1,
        }),
        new UtilisateurProfil({
          id_utilisateur: 2,
          id_profil: 2,
        }),
        new UtilisateurProfil({
          id_utilisateur: 3,
          id_profil: 2,
        }),
        new UtilisateurProfil({
          id_utilisateur: 4,
          id_profil: 3,
        }),
      ]
    },
  },
})
