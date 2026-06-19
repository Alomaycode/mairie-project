<script setup>
import Connexion from './Connexion.vue'
import { useConnexionStore } from '../stores/connexionStore.js'

const connexionStore = useConnexionStore()
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-12 col-lg-6">
          <p class="section-kicker">Mairie de Mamoudzou</p>
          <h1 class="hero-title">Location d'equipements municipaux</h1>
          <p class="hero-text">
            Consultez les equipements disponibles et preparez votre demande de reservation.
          </p>
        </div>

        <div class="col-12 col-lg-5 offset-lg-1">
          <Connexion v-if="!connexionStore.isConnectVue" />
        </div>
      </div>
    </div>
  </section>
</template>
