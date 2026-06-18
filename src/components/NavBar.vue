<script setup>
import LogoImage from '../assets/img/logo-mamoudzou.svg'
</script>

<template>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg modern-navbar">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-3" href="#accueil">
          <img :src="LogoImage" alt="Logo Mairie de Mamoudzou" class="logo">
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Ouvrir le menu de navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav mx-auto align-items-lg-center gap-lg-2">
            <li class="nav-item">
              <RouterLink class="nav-link" exact-active-class="active" to="/">Accueil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" exact-active-class="active" to="/Equipement">Equipement</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" exact-active-class="active" to="/Reservation">Reservations</RouterLink>
            </li>
          </ul>

          <div class="navbar-actions d-flex align-items-lg-center gap-2">
            <button
              type="button"
              class="btn btn-login"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
