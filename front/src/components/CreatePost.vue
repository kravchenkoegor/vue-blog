<template>
  <v-layout row align-center justify-center>
    <v-flex xs6>
      <panel title="Create a new post">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="author"
            label="author"
            required
          ></v-text-field>
          <v-text-field
            v-model="created"
            label="created"
            required
          ></v-text-field>
          <v-text-field
            v-model="title"
            label="title"
            required
          ></v-text-field>
          <v-text-field
            v-model="image"
            label="image"
            required
          ></v-text-field>
          <v-text-field
            v-model="text"
            label="text"
            multi-line
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import PostService from '../services/PostService'
export default {
  name: 'CreatePost',
  data: () => ({
    valid: true,
    author: '',
    created: '',
    title: '',
    image: '',
    text: ''
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        const newPost = {
          author: this.author,
          created: this.created,
          title: this.title,
          image: this.image,
          text: this.text
        }
        PostService.createPost(newPost)
          .then(() => this.$router.push('posts'))
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>

</style>
