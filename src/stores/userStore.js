import { defineStore } from 'pinia'
import Utilisateur from '../models/utilisateur.js'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  actions: {
    initialiserUsers() {
      this.users = [
        new Utilisateur({
          id: 1,
          nom: 'Ali',
          prenom: 'Samira',
          mail: 'samira.ali@mail.com',
          mot_de_passe: 'samira123',
          telephone: '0639000000',
          adresse_postale: 'Mamoudzou, Mayotte',
          image: 'https://i.pravatar.cc/160?img=47',
        }),
        new Utilisateur({
          id: 2,
          nom: 'Bacar',
          prenom: 'Yanis',
          mail: 'yanis.bacar@mail.com',
          mot_de_passe: 'yanis123',
          telephone: '0639011122',
          adresse_postale: 'Koungou, Mayotte',
          image: 'https://i.pravatar.cc/160?img=12',
        }),
        new Utilisateur({
          id: 3,
          nom: 'Soihili',
          prenom: 'Inaya',
          mail: 'inaya.soihili@mail.com',
          mot_de_passe: 'inaya123',
          telephone: '0639022233',
          adresse_postale: 'Dembeni, Mayotte',
          image: 'https://i.pravatar.cc/160?img=32',
        }),
        new Utilisateur({
          id: 4,
          nom: 'Madi',
          prenom: 'Nassim',
          mail: 'nassim.madi@mail.com',
          mot_de_passe: 'nassim123',
          telephone: '0639033344',
          adresse_postale: 'Sada, Mayotte',
          image: 'https://i.pravatar.cc/160?img=68',
        }),
      ]
    },
  },
})
