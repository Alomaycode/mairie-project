export default class Categorie {
  constructor({
    id_cat = null,
    nom_cat = '',
    description_cat = '',
  } = {}) {
    this.id_cat = id_cat
    this.nom_cat = nom_cat
    this.description_cat = description_cat
  }
}
