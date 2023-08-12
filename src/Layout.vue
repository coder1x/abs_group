<template>
  <common-header/>
  <div class="page__wrapper">
      <main class="content">
        <slot/>
      </main>
  </div>
  <common-footer/>
</template>

<script lang="ts">
import CommonFooter from '@/components/common/Footer.vue';
import CommonHeader from '@/components/common/Header.vue';

export default {
  components: {
    CommonHeader,
    CommonFooter,
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

.page {
  &__wrapper {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    width: 100%;
  }
}
</style>
