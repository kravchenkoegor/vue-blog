<template>
  <div class="cs-posts-area">
    <div class="cs-posts-area__outer">
      <div class="cs-posts-area__main cs-posts-area__grid">
        <Post v-for="i in 10" :key="i" />
      </div>
      <div class="cs-posts-area__pagination">
        <button class="cs-load-more">Load More</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { fetchPosts } from '@/api/posts';
import Post from '@/components/Post.vue';
// import { Post } from '@/interfaces';

export default defineComponent({
  name: 'Home',
  components: {
    Post
  },
  setup() {
    const posts = ref([]);

    const getLatestPosts = async () => {
      posts.value = await fetchPosts();
    };

    onMounted(getLatestPosts);
    return {
      posts,
      getLatestPosts
    };
  }
});
</script>
