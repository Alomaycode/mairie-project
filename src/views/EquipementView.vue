<script setup>
import CardEquipement from '../components/CardEquipement.vue'
import { useEquipementStore } from '../stores/equipementStore.js'

const equipementStore = useEquipementStore()
</script>

<template>
  <main>
    <section class="equipement-section py-5">
      <div class="container">
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <p class="section-kicker">Equipements municipaux</p>
            <h1 class="equipement-section-title mb-0">Liste des equipements</h1>
          </div>
        </div>

        <div class="row g-4">
          <div
            v-for="equipement in equipementStore.equipements"
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
