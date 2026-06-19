import { defineStore } from 'pinia'
import Equipement from '../models/equipement.js'

export const useEquipementStore = defineStore('equipement', {
  state: () => ({
    equipements: [],
  }),
  actions: {
    initialiserEquipements() {
      this.equipements = [
        new Equipement({
          id_equipement: 1,
          id_categorie: 1,
          nom_equip: 'Salle polyvalente de Mamoudzou',
          adresse_equip: 'Rue du Commerce, Mamoudzou',
          cap_equipe: 180,
          etat_equipe: 'Disponible',
        }),
        new Equipement({
          id_equipement: 2,
          id_categorie: 2,
          nom_equip: 'Terrain municipal de Kaweni',
          adresse_equip: 'Quartier Kaweni, Mamoudzou',
          cap_equipe: 300,
          etat_equipe: 'Reserve',
        }),
        new Equipement({
          id_equipement: 3,
          id_categorie: 1,
          nom_equip: 'Maison des associations',
          adresse_equip: 'Place de la Mairie, Mamoudzou',
          cap_equipe: 80,
          etat_equipe: 'Disponible',
        }),
        new Equipement({
          id_equipement: 4,
          id_categorie: 1,
          nom_equip: 'Salle de reunion municipale',
          adresse_equip: 'Boulevard Halidi Selemani, Mamoudzou',
          cap_equipe: 45,
          etat_equipe: 'En maintenance',
        }),
      ]
    },
  },
})
