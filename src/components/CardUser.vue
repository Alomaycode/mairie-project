<script setup>
const users = [
  {
    id: 1,
    nom: 'Ali',
    prenom: 'Samira',
    mail: 'samira.ali@mail.com',
    telephone: '0639000000',
    adresse_postale: 'Mamoudzou, Mayotte',
    fonction: 'Responsable administratif',
    image: 'https://i.pravatar.cc/160?img=47',
  },
  {
    id: 2,
    nom: 'Bacar',
    prenom: 'Yanis',
    mail: 'yanis.bacar@mail.com',
    telephone: '0639011122',
    adresse_postale: 'Koungou, Mayotte',
    fonction: 'Charge d accueil',
    image: 'https://i.pravatar.cc/160?img=12',
  },
  {
    id: 3,
    nom: 'Soihili',
    prenom: 'Inaya',
    mail: 'inaya.soihili@mail.com',
    telephone: '0639022233',
    adresse_postale: 'Dembeni, Mayotte',
    fonction: 'Gestionnaire RH',
    image: 'https://i.pravatar.cc/160?img=32',
  },
  {
    id: 4,
    nom: 'Madi',
    prenom: 'Nassim',
    mail: 'nassim.madi@mail.com',
    telephone: '0639033344',
    adresse_postale: 'Sada, Mayotte',
    fonction: 'Coordinateur technique',
    image: 'https://i.pravatar.cc/160?img=68',
  },
]
</script>

<template>
  <section class="user-section py-5">
    <div class="container">
      <div class="row g-4">
        <div v-for="user in users" :key="user.id" class="col-12 col-md-6 col-xl-3">
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
                  <p class="user-card-role mb-0">{{ user.fonction }}</p>
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
