export default class Reservation {
  constructor({
    id_res = null,
    id_utilisateur = null,
    id_agent = null,
    date_res = '',
    date_utilisation = '',
    hdebut = '',
    hfin = '',
    stat_res = '',
  } = {}) {
    this.id_res = id_res
    this.id_utilisateur = id_utilisateur
    this.id_agent = id_agent
    this.date_res = date_res
    this.date_utilisation = date_utilisation
    this.hdebut = hdebut
    this.hfin = hfin
    this.stat_res = stat_res
  }
}
