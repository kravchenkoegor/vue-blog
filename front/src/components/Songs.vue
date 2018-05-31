<template>
  <v-layout row justify-center wrap>
    <v-flex xs12 md3 v-for="image in songs" :key="image._id" class="mr-2">
      <panel title="Songs">
        <img class="image" :src="image.url" alt="">
        <!--<v-card-text-->
          <!--v-for="song in songs"-->
          <!--:key="song.title"-->
        <!--&gt;-->
          <!--{{ song.title }}-->
          <!--{{ song.artist }}-->
          <!--{{ song.album }}-->
        <!--</v-card-text>-->
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '../services/SongService'
export default {
  name: 'Songs',
  data: () => ({
    songs: null
  }),
  // request songs from database
  async mounted () {
    this.songs = await SongService.index()
  }
}
</script>

<style scoped>
  .image {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
</style>
