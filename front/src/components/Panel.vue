<template>
  <v-card class="elevation-4 mt-4">
    <v-toolbar dark color="primary">
      <v-toolbar-title>
        {{title}}
      </v-toolbar-title>
    </v-toolbar>
    <div class="pa-2 text-xs-center">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Panel',
  props: ['title'],
  data: () => ({})
}
</script>

<style scoped>

</style>
