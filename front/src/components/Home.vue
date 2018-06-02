<template>
  <v-container v-if="!isLoading" v-bind="{ [`grid-list-${size}`]: true }">
    <v-layout row justify-center wrap>
      <v-flex xs12 md6 lg3
              v-for="post in posts"
              :key="post._id"
              grid-list-md
              class="mb-2">
        <v-card class="hover-elevation card">
          <v-card-media :src="post.image" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{post.title}}</h3>
          </v-card-title>
          <v-card-text>
            <div class="pb-2">
              <span>{{ post.created | moment("MMMM Do YYYY")}} by {{post.author}}</span>
            </div>
            <v-divider></v-divider>
            <div class="pt-2 text">{{post.text}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="single(post._id)">More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <div class="text-xs-center my-2">
        <v-pagination
          :length="length"
          v-model="page"
          @input="next"
        ></v-pagination>
      </div>
    </v-flex>
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
    name: 'Home',
    data: () => ({
      posts: null,
      page: 1,
      length: 1,
      size: 'md'
    }),
    computed: {
      isLoading () {
        return this.$store.getters.isLoading
      }
    },
    methods: {
      async next () {
        this.posts = await PostService.changePage({page: this.page})
      },
      single (id) {
        this.$router.push('/post/' + id)
      }
    },
    async mounted () {
      this.$store.dispatch('setLoading', true)
      const result = await PostService.index()
      if (result) {
        this.$store.dispatch('setLoading', false)
        this.posts = result.posts
        this.length = Math.ceil(result.count / 8)
      }
    }
  }
</script>

<style scoped>
  .full-height {
    height: 100vh;
  }

  @media screen and (min-width: 960px) {
    .headline {
      height: 64px;
      overflow: hidden;
    }

    .card {
      height: 510px !important;
    }

    .text {
      height: 92px;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
  }
</style>
