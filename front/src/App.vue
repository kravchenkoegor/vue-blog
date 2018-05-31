<template>
  <v-app id="app">
    <!--<v-navigation-drawer-->
      <!--app-->
      <!--v-model="drawer"-->
    <!--&gt;-->
    <!--</v-navigation-drawer>-->
    <v-toolbar app dark class="primary">
      <!--<v-toolbar-side-icon-->
        <!--@click.stop="drawer = !drawer"-->
      <!--&gt;-->
      <!--</v-toolbar-side-icon>-->
      <v-toolbar-title @click="toHome" class="pointer">
        <h4>Application</h4>
      </v-toolbar-title>
      <v-btn
        v-if="isUserLoggedIn"
        flat
        dark
        to="posts"
      >
        Browse
      </v-btn>
      <v-btn
        v-if="isUserLoggedIn"
        flat
        dark
        to="create"
      >
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
        <v-btn flat to="profile">
          <v-icon class="mr-1">person</v-icon>
          Profile
        </v-btn>
        <v-btn flat @click="logOut">
          Log Out
        </v-btn>
      </template>
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
    logOut () {
      this.$store.dispatch('logoutUser')
        .then(() => this.$router.push('/'))
        .catch(error => console.log(error))
    }
    // toProfile () {
    //   Api().get('/profile')
    //     .then(data => {
    //       if (data.status === 200 && data.request.readyState === 4) {
    //         this.$router.push('/profile')
    //       } else {
    //         this.$router.push('/login')
    //       }
    //     }).catch(error => console.log(error))
    // }
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>
