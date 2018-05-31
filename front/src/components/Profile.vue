<template>
    <v-layout row>
      <v-flex xs12 md4>
        <v-avatar
          :size="size"
          color="grey lighten-4"
        >
          <img src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex xs12 md4>
        <v-card class="hover-elevation">
          <v-card-title primary-title>
            <h1 class="headline mb-0">1</h1>
          </v-card-title>
          <!--<v-card-text>-->
            <!--<div class="mb-2">-->
              <!--<span>{{ post.created | moment("MMMM Do YYYY")}}</span> by <a href="#">{{post.author}}</a>-->
            <!--</div>-->
            <!--<div>{{post.text}}</div>-->
          <!--</v-card-text>-->
          <v-btn @click="User">
            Click
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    size: 200,
    user: this.getUser
  }),
  computed: {
    getUser () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    User () {
      console.log(this.user)
    }
  }
}
</script>

<style scoped>
</style>
