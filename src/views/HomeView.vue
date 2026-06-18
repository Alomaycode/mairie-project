<script setup>
import Hero from '../components/Hero.vue'
import CardEquipement from '../components/CardEquipement.vue'

const equipements = [
  {
    id_equipement: 1,
    nom_equipement: 'Salle polyvalente de Mamoudzou',
    adresse_equipement: 'Rue du Commerce, Mamoudzou',
    capacite_equipement: 180,
    Etat_equipement: 'Disponible',
  },
  {
    id_equipement: 2,
    nom_equipement: 'Terrain municipal de Kaweni',
    adresse_equipement: 'Quartier Kaweni, Mamoudzou',
    capacite_equipement: 300,
    Etat_equipement: 'Reserve',
  },
  {
    id_equipement: 3,
    nom_equipement: 'Maison des associations',
    adresse_equipement: 'Place de la Mairie, Mamoudzou',
    capacite_equipement: 80,
    Etat_equipement: 'Disponible',
  },
  {
    id_equipement: 4,
    nom_equipement: 'Salle de reunion municipale',
    adresse_equipement: 'Boulevard Halidi Selemani, Mamoudzou',
    capacite_equipement: 45,
    Etat_equipement: 'En maintenance',
  },
]

</script>

<template>
  <main>

    <!-- Equipements municipaux -->
    <section class="equipement-section py-5">
      <div class="container">
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <p class="section-kicker">Equipements municipaux</p>
            <h2 class="equipement-section-title mb-0">Equipements disponibles a la location</h2>
          </div>
        </div>

        <div class="row g-4">
          <div
            v-for="equipement in equipements"
            :key="equipement.id_equipement"
            class="col-12 col-md-6 col-xl-3"
          >
            <CardEquipement :equipement="equipement" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
