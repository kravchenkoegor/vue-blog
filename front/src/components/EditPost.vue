<template>
  <v-layout row align-center justify-center>
    <v-flex xs12 md6>
      <panel title="Edit a post">
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
            color="green"
            dark
          >
            save
          </v-btn>
          <v-btn @click="clear">Cancel</v-btn>
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
          PostService.editPost(newPost)
            .then(() => this.$router.push('/post/' + this.$route.params.id))
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    },
    async mounted () {
      const result = await PostService.single(this.$route.params.id)
      this.author = result.author
      this.created = result.created
      this.title = result.title
      this.image = result.image
      this.text = result.text
    }
  }
</script>

<style scoped>

</style>
