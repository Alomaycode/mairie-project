<template>
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
</template>