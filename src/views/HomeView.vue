<template>
  <h1 class="visually-hidden">Бронирование банкета в отеле Stavropol</h1>
  <hall-layouts :tabs="hallTabs" :title="hallTitle"/>
</template>

<script>
import HallLayouts from '@/components/sections/HallLayouts.vue';
import hallLayoutsData from '@/assets/data/hallLayoutsData.json';

export default {
components:{
  HallLayouts
},
  data() {
    return {
      hallTabs: hallLayoutsData.tabs,
      hallTitle: hallLayoutsData.title,
    };
  },
};
</script>

<style lang="scss">

</style>
