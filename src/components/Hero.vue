<script setup>
import Connexion from './Connexion.vue'
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-12 col-lg-6">
          <p class="section-kicker">Mairie de Mamoudzou</p>
          <h1 class="hero-title">Espace de connexion</h1>
          <p class="hero-text">
            Accedez a votre espace personnel pour consulter les informations et gerer les services municipaux.
          </p>
        </div>

        <div class="col-12 col-lg-5 offset-lg-1">
          <Connexion />
        </div>
      </div>
    </div>
  </section>
</template>
