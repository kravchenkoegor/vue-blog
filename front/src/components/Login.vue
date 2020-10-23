<template>
  <v-layout row align-center justify-center>
    <v-flex xs12 md6>
      <panel title="Log In">
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="email"
              name="email"
              label="Email"
              type="text"
              v-model="email"
            >
            </v-text-field>
            <v-text-field
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
              v-model="password"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="login"
          >
            Login
          </v-btn>
        </v-card-actions>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data: () => ({
    title: 'Log In',
    email: '',
    password: ''
  }),
  methods: {
    async login () {
      try {
        const user = {
          email: this.email,
          password: this.password
        }
        await AuthenticationService.login(user)
          .then(data => this.$store.dispatch('loginUser', data))
          .then(() => this.$store.dispatch('setToken', localStorage.getItem('jwtToken')))
          .then(() => this.$router.push('/'))
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  }
}
</script>

<style scoped>

</style>
