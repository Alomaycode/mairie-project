export default class Equipement {
  constructor({
    id_equipement = null,
    id_categorie = null,
    nom_equip = '',
    adresse_equip = '',
    cap_equipe = 0,
    etat_equipe = '',
  } = {}) {
    this.id_equipement = id_equipement
    this.id_categorie = id_categorie
    this.nom_equip = nom_equip
    this.adresse_equip = adresse_equip
    this.cap_equipe = cap_equipe
    this.etat_equipe = etat_equipe
  }
}
