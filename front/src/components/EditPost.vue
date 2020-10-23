<template>
  <v-layout row align-center justify-center>
    <v-flex xs12 md6>
      <panel title="Edit a post">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="post.title"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="post.image"
            label="Image"
            required
          ></v-text-field>
          <v-text-field
            v-model="post.text"
            label="Text"
            multi-line
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            @click="submit"
            color="green"
            dark
          >
            save
          </v-btn>
          <v-btn @click="backToPost">Cancel</v-btn>
        </v-form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import PostService from '../services/PostService'
  export default {
    name: 'EditPost',
    data: () => ({
      valid: true,
      post: {
        title: '',
        image: '',
        text: ''
      }
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          const newPost = {
            id: this.$route.params.id,
            title: this.post.title,
            image: this.post.image,
            text: this.post.text
          }
          PostService.savePost(newPost)
            .then(() => this.backToPost())
            .catch(error => console.log(error))
        }
      },
      backToPost () {
        this.$router.push('/post/' + this.$route.params.id)
      }
    },
    async created () {
      this.post = await PostService.single(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
