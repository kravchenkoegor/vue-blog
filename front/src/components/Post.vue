<template>
  <v-layout row justify-center wrap>
    <v-flex xs12 lg9>
      <v-card class="hover-elevation">
        <v-card-media :src="post.image" height="320px">
        </v-card-media>
        <v-card-title primary-title>
          <h1 class="headline mb-0">{{post.title}}</h1>
        </v-card-title>
        <v-card-text>
          <div class="mb-2">
            <span>{{ post.created | moment("MMMM Do YYYY")}}</span> by <a href="#">{{post.author}}</a>
          </div>
          <div>{{post.text}}</div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PostService from '../services/PostService'
export default {
  name: 'Post',
  data: () => ({
    post: {}
  }),
  async mounted () {
    const post = await PostService.single(this.$route.params.id)
    this.post = post
  }

}
</script>

<style scoped>
</style>
