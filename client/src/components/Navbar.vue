<template>
  <div>
    <div id="nav">
      <b-navbar 
        :fixed-top="true"
        :spaced="true"
        :shadow="true"
      >
        <template slot="start">
          <b-navbar-item tag="router-link" :to="{ path: '/'}">
            home
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/about'}">
            about
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/blog'}">
            blog
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/resume'}">
            resume
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/contact'}">
            contact
          </b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item href="https://github.com/aidan-lane" target="_blank">
            <i class="fab fa-github fa-lg"></i>
          </b-navbar-item>
          <b-navbar-item href="https://www.instagram.com/aidanl7/" target="_blank">
            <i class="fab fa-instagram fa-lg"></i>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #nav {
    margin-bottom: 1em;
  }

  .navbar-item:hover {
    color: #FFB61E;
  }

  .router-link-exact-active {
    color: #FFB61E !important;
  }
</style>