<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/LayoutTemplate.vue';
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
