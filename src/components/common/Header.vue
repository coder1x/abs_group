<template>
  <header class="header">
    <p>Шапка сайта</p>
  </header>
</template>

<script>
export default {
  name: 'common-header',
};
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  font-size: #{$font-size}px;
}
</style>
