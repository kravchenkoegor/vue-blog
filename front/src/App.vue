<template>
  <v-app id="app">
    <v-navigation-drawer app v-model="drawer" class="hidden-md-and-down">
      <v-list v-if="isUserLoggedIn">
        <v-list-tile class="text-xs-center" @click="toCreate">
          <v-btn color="primary" flat>
            <v-icon class="mr-1">create</v-icon>
            Create post
          </v-btn>
        </v-list-tile>
        <v-list-tile class="text-xs-center" @click="toProfile">
          <v-btn color="primary" flat>
            <v-icon class="mr-1">person</v-icon>
            Profile
          </v-btn>
        </v-list-tile>
        <v-list-tile class="text-xs-center" @click="logOut">
          <v-btn color="primary" flat >
            <v-icon class="mr-1">exit_to_app</v-icon>
            Log Out
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark class="primary">
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title @click="toHome" class="pointer">
        <h4>Application</h4>
      </v-toolbar-title>
      <div class="hidden-md-and-down d-flex">
        <v-btn
          v-if="isUserLoggedIn"
          flat
          dark
          @click="toCreate"
        >
          <v-icon class="mr-1">create</v-icon>
          Create post
        </v-btn>
        <v-spacer></v-spacer>
        <template v-if="!isUserLoggedIn">
          <v-btn flat to="login">
            Log In
          </v-btn>
          <v-btn flat to="register">
            Register
          </v-btn>
        </template>
        <template v-else>
          <v-btn flat @click="toProfile">
            <v-icon class="mr-1">person</v-icon>
            Profile
          </v-btn>
          <v-btn flat @click="logOut">
            <v-icon class="mr-1">exit_to_app</v-icon>
            Log Out
          </v-btn>
        </template>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view>
        </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Panel from './components/Panel'
export default {
  name: 'App',
  components: {
    Panel
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    toCreate () {
      this.$router.push('/create')
    },
    toProfile () {
      this.$router.push('/profile')
    },
    logOut () {
      this.$store.dispatch('logoutUser')
        .then(() => this.$router.push('/'))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>
