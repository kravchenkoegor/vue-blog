<template>
  <div class="cs-main-content">
    <app-header />
    <div class="cs-content-area">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/general/AppHeader.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    AppHeader
  }
});
</script>
