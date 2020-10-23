<template>
  <article>
    <div class="cs-entry__outer">
      <div class="cs-overlay-ratio cs-ratio-landscape">
        <div class="cs-overlay-background">
          <img
            width="300"
            height="220"
            src="https://uppercasetheme.com/uppercase/wp-content/uploads/sites/11/demo-image-00007-80x58.jpg"
            alt=""
          />
        </div>
        <a href="#" class="cs-overlay-link"></a>
      </div>
      <div class="cs-entry__inner cs-entry__content">
        <div class="cs-entry__post-meta">
          <div class="cs-meta-category">
            <ul class="post-categories">
              <li>
                <a
                  href="https://uppercasetheme.com/uppercase/category/interior/"
                  rel="category tag"
                  >Interior</a
                >
              </li>
            </ul>
          </div>
        </div>
        <h2 class="cs-entry__title">
          <a
            href="https://uppercasetheme.com/uppercase/2020/02/27/tips-for-helping-to-make-your-startup-a-success/"
            >Tips for Helping to Make Your Startup a Success</a
          >
        </h2>
        <div class="cs-entry__excerpt">
          Structured gripped tape invisible moulded cups for sauppor firm hold
          strong powermesh front liner sport detail. Warmth comfort&hellip;
        </div>
        <div class="cs-entry__post-meta">
          <div class="cs-meta-reading-time">
            <span class="cs-meta-icon"
              ><i class="cs-icon cs-icon-clock"></i></span
            >2 minute read
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Post'
});
</script>

<style lang="scss" scoped>
article {
  text-align: left;
}
</style>
