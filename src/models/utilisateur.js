export default class Utilisateur {
  constructor({
    id = null,
    nom = '',
    prenom = '',
    mail = '',
    mot_de_passe = '',
    telephone = '',
    adresse_postale = '',
    image = ''
  } = {}) {
    this.id = id
    this.nom = nom
    this.prenom = prenom
    this.mail = mail
    this.mot_de_passe = mot_de_passe
    this.telephone = telephone
    this.adresse_postale = adresse_postale
    this.image = image
  }
}
