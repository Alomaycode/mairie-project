<script setup>
  import NavBar from './components/NavBar.vue'
  import Hero from './components/Hero.vue'
  import Footer from './components/Footer.vue'
  import {RouterView} from 'vue-router'
</script>

<template>
  <NavBar />
  <Hero />
  <RouterView />
  <Footer />
</template>
