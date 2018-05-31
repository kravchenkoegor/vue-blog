<template>
  <div>
    <v-layout row justify-center wrap>
      <v-flex xs12 md3 v-for="post in posts" :key="post._id" class="mr-2 mb-2">
        <v-card class="hover-elevation">
          <v-card-media :src="post.image" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{post.title}}</h3>
              <div class="my-2">
                <span>{{ post.created | moment("MMMM Do YYYY")}}</span> by <span>{{post.author}}</span>
              </div>
              <div>{{post.text}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="red" @click="remove(post._id)">Delete</v-btn>
            <v-btn flat color="orange" @click="edit(post._id)">Edit</v-btn>
            <v-btn flat color="blue" @click="single(post._id)">More</v-btn>
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
  </div>
</template>

<script>
  import PostService from '../services/PostService'
  export default {
    name: 'Home',
    data: () => ({
      posts: null,
      page: 1,
      length: 1
    }),
    methods: {
      async next () {
        this.posts = await PostService.changePage({page: this.page})
      },
      single (id) {
        this.$router.push('/post/' + id)
      },
      edit (id) {
        this.$router.push('/edit/' + id)
      },
      async remove (id) {
        PostService.deletePost(id)
          .then(() => this.$router.push('/posts'))
          .catch(error => console.log(error))
      }
    },
    // request posts from database
    async mounted () {
      const result = await PostService.index()
      this.posts = result.posts
      this.length = Math.ceil(result.count / 9)
    }
  }
</script>

<style scoped>

</style>
