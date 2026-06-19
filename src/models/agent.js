import Utilisateur from './utilisateur.js'

export default class Agent extends Utilisateur {
  constructor({
    id = null,
    nom = '',
    prenom = '',
    mail = '',
    mot_de_passe = '',
    telephone = '',
    adresse_postale = '',
    fonction = '',
  } = {}) {
    super({
      id,
      nom,
      prenom,
      mail,
      mot_de_passe,
      telephone,
      adresse_postale,
    })

    this.fonction = fonction
  }
}
