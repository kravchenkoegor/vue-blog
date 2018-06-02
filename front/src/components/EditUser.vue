<template>
  <div>
    <v-layout row>
      <v-flex xs12 class="text-xs-center mt-2">
        <h2 class="title">Here you can edit your personal info</h2>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12 md6>
        <panel title="Edit user info">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="user.email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.username"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.fullName"
              label="Full Name"
            ></v-text-field>
            <v-text-field
              v-model="user.dateOfBirth"
              label="Date of Birth"
            ></v-text-field>
            <v-text-field
              v-model="user.location"
              label="Location"
            ></v-text-field>
            <v-btn
              :disabled="!valid"
              @click="submit"
              color="green"
              dark
            >
              save
            </v-btn>
            <v-btn :to="'/profile'">Cancel</v-btn>
          </v-form>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import PostService from '../services/PostService'
import store from '@/store/store'
export default {
  name: 'EditPost',
  data: () => ({
    valid: true,
    user: {}
  }),
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    },
    getUser () {
      return this.$store.getters.getUser
    }
  },
  watch: {
    getUser (newValue) {
      this.user = newValue
      this.setData(newValue)
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        PostService.saveUser(this.user)
          .then(() => this.$store.dispatch('setUser', this.user))
          .then(() => this.$router.push('/profile/'))
          .catch(error => console.log(error))
      }
    },
    setData (user) {
      this.user = user
    }
  },
  beforeRouteEnter (to, from, next) {
    const user = store.getters.getUser
    if (user) {
      next(vm => vm.setData(user))
      return
    }
    next()
  }
}
</script>

<style scoped>

</style>
