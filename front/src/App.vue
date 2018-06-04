<template>
  <v-app id="app">

    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-tile
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isUserLoggedIn" @click="logOut">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Log Out'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Vue.js Blog</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          flat
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn
          @click="logOut"
          flat
          v-if="isUserLoggedIn"
        >
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PostService from './services/PostService'
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
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Create post', icon: 'create', url: '/create'},
          {title: 'Profile', icon: 'person', url: '/profile'}
        ]
      }
      return [
        {title: 'Log In', icon: 'lock', url: '/login'},
        {title: 'Register', icon: 'person_add', url: '/register'}
      ]
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('logoutUser')
        .then(() => this.$router.push('/'))
        .catch(error => console.log(error))
    }
  },
  async mounted () {
    if (localStorage.getItem('user')) {
      const userID = JSON.parse(localStorage.getItem('user'))._id
      const user = await PostService.getUser({id: userID})
      return this.$store.dispatch('setUser', user)
    }
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }

  @media only screen and (max-width: 599px) {
    .container {
      padding: 16px;
    }
  }
</style>
