<template>
  <div class="">
    <h2>Create new post</h2>
    <div class="cnvs-block-column-inner">
      <form style="width: 100%;" @submit.prevent="onSubmit">
        <div class="input-field">
          <label for="title">
            Title
          </label>
          <input v-model="title" type="text" name="title" />
        </div>
        <div class="input-field">
          <label for="text">
            Text
          </label>
          <input v-model="text" type="text" name="text" />
        </div>
        <button type="submit" :disabled="buttonDisabled">Create post</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { createPost } from '../../api/posts';

export default defineComponent({
  name: 'CreatePost',
  setup() {
    const router = useRouter();
    const { getters } = useStore();

    if (!getters.isLoggedIn) {
      router.push('/login');
      return;
    }

    // const error = ref<string | null>(null);
    const title = ref<string>('');
    const text = ref<string>('');
    const buttonDisabled = computed(() => {
      return Boolean(!title.value || !text.value);
    });
    const username = getters.username;

    const onSubmit = async () => {
      try {
        const response: any = await createPost({
          author: username,
          image: '',
          text: text.value,
          title: title.value
        });

        router.push('/');
      } catch (error) {
        console.log(error);
      }
    };

    return {
      buttonDisabled,
      text,
      title,
      onSubmit
    };
  }
});
</script>

<style lang="scss" scoped>
button {
  margin-top: 1rem;

  &[disabled] {
    opacity: 0.5;
  }
}
</style>
