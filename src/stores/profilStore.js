import { defineStore } from 'pinia'
import Profil from '../models/profil.js'

export const useProfilStore = defineStore('profil', {
  state: () => ({
    profils: [],
  }),
  actions: {
    initialiserProfils() {
      this.profils = [
        new Profil({
          id_profil: 1,
          nom_profil: 'admin',
        }),
        new Profil({
          id_profil: 2,
          nom_profil: 'user',
        }),
        new Profil({
          id_profil: 3,
          nom_profil: 'agent',
        }),
      ]
    },
  },
})
