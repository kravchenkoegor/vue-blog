<template>
  <v-container v-if="!isLoading">
    <v-layout row justify-center wrap>
      <v-flex xs12 lg9>
        <v-card class="hover-elevation">
          <v-card-media :src="post.image" height="320px">
          </v-card-media>
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{post.title}}</h3>
          </v-card-title>
          <v-card-text>
            <div class="pb-2">
              <span>{{ post.created | moment("MMMM Do YYYY")}} by {{post.author}}</span>
            </div>
            <v-divider></v-divider>
            <div class="py-4 text">{{post.text}}</div>
            <v-divider v-if="isAuthor"></v-divider>
          </v-card-text>
          <v-card-actions v-if="isAuthor">
            <v-spacer></v-spacer>
            <v-btn flat color="orange" @click="edit(post._id)">
              <v-icon class="mr-1">edit</v-icon>
              Edit
            </v-btn>
            <v-btn flat color="red" @click="remove(post._id)">
              <v-icon class="mr-1">delete</v-icon>
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else>
    <v-layout row align-center justify-center class="full-height">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
import PostService from '../services/PostService'
export default {
  name: 'Post',
  data: () => ({
    post: {}
  }),
  methods: {
    edit (id) {
      this.$router.push('/edit/' + id)
    },
    async remove (id) {
      PostService.deletePost(id)
        .then(() => this.$router.push('/posts'))
        .catch(error => console.log(error))
    }
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    },
    isAuthor () {
      const username = JSON.parse(localStorage.getItem('user')).username
      return this.post.author === username
    }
  },
  async mounted () {
    this.$store.dispatch('setLoading', true)
    const result = await PostService.single(this.$route.params.id)
    if (result) {
      this.$store.dispatch('setLoading', false)
      this.post = result
    }
  }

}
</script>

<style scoped>
  .full-height {
    height: 100vh;
  }
</style>
