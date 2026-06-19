<script setup>
defineProps({
  equipement: {
    type: Object,
    required: true,
  },
})

const getEtatClass = (etat) => {
  if (etat === 'Disponible') {
    return 'text-bg-success'
  }

  if (etat === 'Reserve') {
    return 'text-bg-primary'
  }

  if (etat === 'En maintenance') {
    return 'text-bg-warning'
  }

  return 'text-bg-danger'
}
</script>

<template>
  <article class="card equipement-card h-100">
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
        <span class="equipement-icon" aria-hidden="true">EQ</span>
        <span class="badge rounded-pill" :class="getEtatClass(equipement.etat_equipe)">
          {{ equipement.etat_equipe }}
        </span>
      </div>

      <h3 class="equipement-card-title">{{ equipement.nom_equip }}</h3>

      <ul class="list-unstyled equipement-card-list">
        <li>
          <span>Adresse</span>
          <strong>{{ equipement.adresse_equip }}</strong>
        </li>
        <li>
          <span>Capacite</span>
          <strong>{{ equipement.cap_equipe }} personnes</strong>
        </li>
        <li>
          <span>Reference</span>
          <strong>#{{ equipement.id_equipement }}</strong>
        </li>
      </ul>

      <button type="button" class="btn btn-outline-success mt-auto">
        Voir details
      </button>
    </div>
  </article>
</template>
