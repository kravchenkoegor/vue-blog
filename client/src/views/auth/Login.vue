<template>
  <div class="">
    <h2>Sign in to create and manage your posts</h2>
    <div class="cnvs-block-column-inner">
      <form style="width: 100%;" @submit.prevent="onSubmit">
        <div class="input-field">
          <label for="email">
            Enter your email
          </label>
          <input v-model="email" type="text" name="email" />
        </div>
        <div class="input-field">
          <label for="password">
            Enter your password
          </label>
          <input v-model="password" type="password" name="password" />
        </div>
        <button type="submit" :disabled="buttonDisabled">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { login } from '../../api/auth';

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();
    const { dispatch } = useStore();

    // const error = ref<string | null>(null);
    const email = ref<string>('');
    const password = ref<string>('');
    const buttonDisabled = computed(() => {
      return Boolean(!email.value || !password.value);
    });
    const onSubmit = async () => {
      try {
        const response: any = await login({
          email: email.value,
          password: password.value
        });

        if (!response.success) {
          alert('No success!');
          return;
        }

        await dispatch('setUser', response.user);
        router.push('/');
      } catch (error) {
        console.log(error);
      }
    };

    return {
      buttonDisabled,
      email,
      password,
      onSubmit
    };
  }
});
</script>

<style lang="scss" scoped>
label {
  font-size: 1rem;
  text-align: left;
}

.input-field + .input-field {
  margin-top: 1.5rem;
}

button {
  margin-top: 1.5rem;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
