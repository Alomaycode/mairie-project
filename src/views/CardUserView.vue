<script setup>
import { useUserStore } from '../stores/userStore.js'

const userStore = useUserStore()
</script>

<template>
  <section class="user-section py-5">
    <div class="container">
      <div class="row g-4">
        <div v-for="user in userStore.users" :key="user.id" class="col-12 col-md-6 col-xl-3">
          <article class="card user-card h-100">
            <div class="card-body">
              <div class="d-flex align-items-center gap-3 mb-4">
                <img
                  class="user-card-avatar"
                  :src="user.image"
                  :alt="`${user.prenom} ${user.nom}`"
                >
                <div class="min-w-0">
                  <span class="badge rounded-pill text-bg-success mb-2">#{{ user.id }}</span>
                  <h3 class="user-card-name mb-1">{{ user.prenom }} {{ user.nom }}</h3>
                  <p class="user-card-role mb-0">Utilisateur</p>
                </div>
              </div>

              <ul class="list-unstyled user-card-list mb-4">
                <li>
                  <span>Mail</span>
                  <a :href="`mailto:${user.mail}`">{{ user.mail }}</a>
                </li>
                <li>
                  <span>Telephone</span>
                  <a :href="`tel:${user.telephone}`">{{ user.telephone }}</a>
                </li>
                <li>
                  <span>Adresse</span>
                  <strong>{{ user.adresse_postale }}</strong>
                </li>
              </ul>

              <div class="d-flex gap-2">
                <a class="btn btn-success btn-sm flex-fill" :href="`mailto:${user.mail}`">
                  Contacter
                </a>
                <a class="btn btn-outline-secondary btn-sm" :href="`tel:${user.telephone}`">
                  Appeler
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
