<template>
  <footer class="footer">
    <div class="footer__wrapper">
    <p>Подвал сайта</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'common-footer',
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  font-size: #{$font-size}px;

  &__wrapper{
    @include sides-offset();
  }
}
</style>
