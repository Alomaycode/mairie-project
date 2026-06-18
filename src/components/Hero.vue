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
          <form class="hero-login card">
            <div class="card-body">
              <h2 class="hero-login-title">Connexion</h2>

              <div class="mb-3">
                <label for="identifiant" class="form-label">Identifiant</label>
                <input
                  id="identifiant"
                  type="text"
                  class="form-control"
                  placeholder="Votre identifiant"
                  autocomplete="username"
                >
              </div>

              <div class="mb-4">
                <label for="password" class="form-label">Mot de passe</label>
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="Votre mot de passe"
                  autocomplete="current-password"
                >
              </div>

              <button type="submit" class="btn btn-success w-100">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
