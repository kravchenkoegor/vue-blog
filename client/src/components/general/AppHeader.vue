<template>
  <div class="cs-page-header-area" data-scheme="inverse">
    <div class="cs-page-header-overlay">
      <div
        class="cs-page-header-background cs-overlay-gradient-top cs-overlay-gradient-bottom"
      >
        <img src="/images/demo-image-00001.jpg" class="lazyload" alt="" />
      </div>
      <div class="cs-page-header-item">
        <header class="cs-header cs-header-primary">
          <div class="cs-header__inner cs-header__inner-desktop">
            <div class="cs-header__col cs-col-left">
              <div class="cs-logo">
                <router-link class="cs-header__logo cs-logo-default " to="/">
                  <img
                    src="https://uppercasetheme.com/uppercase/wp-content/uploads/sites/11/2020/06/logo.png"
                    alt="Uppercase"
                    srcset="
                      https://uppercasetheme.com/uppercase/wp-content/uploads/sites/11/2020/06/logo.png    1x,
                      https://uppercasetheme.com/uppercase/wp-content/uploads/sites/11/2020/06/logo@2x.png 2x
                    "
                  />
                </router-link>
              </div>
            </div>
            <div class="cs-header__col cs-col-right">
              <router-link
                v-if="isLoggedIn"
                class="cs-header__menu-toggle"
                to="/create-post"
              >
                Create a post
              </router-link>
              <template v-else>
                <router-link class="cs-header__menu-toggle" to="/register">
                  Sign up
                </router-link>
                <router-link class="cs-header__menu-toggle" to="/login">
                  Sign in
                </router-link>
              </template>
            </div>
          </div>
        </header>
        <div class="cs-page-header-inner">
          <div class="cs-page__header">
            <h1 class="cs-page-header-title">
              Vue.js blog application.
            </h1>
            <h2 class="cs-page-header-subtitle">
              Perfect for any genre of content.
            </h2>
            <div class="cs-entry__category">
              <ul class="post-categories">
                <li
                  v-for="category in categories"
                  :key="category"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category"
                >
                  <router-link to="/category">{{ category }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const { getters } = useStore();
    const isLoggedIn = computed(() => getters.isLoggedIn);
    const categories = ['Interior', 'Travel', 'Growth', 'Money', 'Inspiration'];

    return {
      categories,
      isLoggedIn
    };
  }
});
</script>

<style></style>
