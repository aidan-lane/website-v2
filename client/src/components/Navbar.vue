<template>
  <div>
    <div id="nav">
      <b-navbar 
        :fixed-top="true"
        :spaced="true"
        type="is-dark"
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
          <b-navbar-item @click="toggleNightMode()">
            <i
              title="toggle night mode"
              :class="[nightMode ? 'fas fa-moon fa-lg' : 'far fa-moon fa-lg']"
            />
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nightMode: false
    }
  },
  methods: {
    toggleNightMode () {
      this.nightMode = !this.nightMode
    }
  }
}
</script>

<style scoped>
  #nav {
    background-color: #273238;
  }

  .navbar-item:hover {
    color: #ff9a44;
  }

  .router-link-exact-active {
    color: #ff9a44 !important;
  }
</style>