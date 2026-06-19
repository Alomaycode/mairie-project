<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useConnexionStore } from '../stores/connexionStore.js'
import { useProfilStore } from '../stores/profilStore.js'
import { useUserStore } from '../stores/userStore.js'
import { useUtilisateurProfilStore } from '../stores/utilisateurProfilStore.js'

const router = useRouter()
const connexionStore = useConnexionStore()
const profilStore = useProfilStore()
const userStore = useUserStore()
const utilisateurProfilStore = useUtilisateurProfilStore()

const mail = ref('')
const motDePasse = ref('')
const messageErreur = ref('')

const connecter = () => {
  messageErreur.value = ''

  const utilisateur = userStore.users.find((user) => {
    return user.mail === mail.value && user.mot_de_passe === motDePasse.value
  })

  if (!utilisateur) {
    messageErreur.value = 'Mail ou mot de passe incorrect.'
    return
  }

  const utilisateurProfil = utilisateurProfilStore.utilisateurProfils.find((item) => {
    return item.id_utilisateur === utilisateur.id
  })

  const profil = profilStore.profils.find((item) => {
    return item.id_profil === utilisateurProfil?.id_profil
  })

  if (!profil) {
    messageErreur.value = 'Aucun profil associe a cet utilisateur.'
    return
  }

  connexionStore.login(utilisateur)
  connexionStore.afficherConnexion()

  if (profil.nom_profil === 'admin' || profil.nom_profil === 'agent') {
    router.push({ name: 'users' })
    return
  }

  if (profil.nom_profil === 'user') {
    router.push({ name: 'equipements' })
  }
}
</script>

<template>
  <form class="hero-login card" @submit.prevent="connecter">
    <div class="card-body">
      <h2 class="hero-login-title">Connexion</h2>

      <div v-if="messageErreur" class="alert alert-danger py-2" role="alert">
        {{ messageErreur }}
      </div>

      <div class="mb-3">
        <label for="identifiant" class="form-label">Mail</label>
        <input
          id="identifiant"
          v-model="mail"
          type="email"
          class="form-control"
          placeholder="Votre adresse mail"
          autocomplete="username"
          required
        >
      </div>

      <div class="mb-4">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          id="password"
          v-model="motDePasse"
          type="password"
          class="form-control"
          placeholder="Votre mot de passe"
          autocomplete="current-password"
          required
        >
      </div>

      <button type="submit" class="btn btn-success w-100">
        Se connecter
      </button>
    </div>
  </form>
</template>
