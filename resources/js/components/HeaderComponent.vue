<template>
  <header class="header navbar-expand navbar-light bg-light">
    <div class="container">
      <nav class="navbar py-3">
        <router-link class="navbar-brand" :to="{ name: 'home' }">LOGO</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarText"
        >
          <ul class="navbar-nav float-right">
            <li class="nav-item">
              <router-link exact :to="{ name: 'home' }" class="nav-link"
                >home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="logout" class="nav-link">logout</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link"
                >login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link"
                >registertation</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {};
</script>