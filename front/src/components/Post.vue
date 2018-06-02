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
            <v-btn flat color="red" @click="dialog = true">
              <v-icon class="mr-1">delete</v-icon>
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="justify-center">
          <div class="subheading">
            Are you sure you want to delete this post?
          </div>
        </v-card-title>
        <v-card-actions class="justify-center mt-4">
          <v-btn flat color="red" @click="remove(post._id)">Yes</v-btn>
          <v-btn flat color="primary" @click.stop="dialog=false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    post: {},
    dialog: false
  }),
  methods: {
    edit (id) {
      this.$router.push('/edit/' + id)
    },
    async remove (id) {
      PostService.deletePost(id)
        .then(() => this.$router.push('/'))
        .catch(error => console.log(error))
    },
    showDialog () {

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
  async created () {
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

  .text {
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0 , .7);
  }
</style>
