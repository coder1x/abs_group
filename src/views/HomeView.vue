<template>
  <h1 class="visually-hidden">Бронирование банкета в отеле Stavropol</h1>
  <banquet-price :title="banquetPriceTitle" :progress-bar="banquetPriceProgressBar" :banner="banquetPriceBanner"
                 :options-list="banquetPriceOptionsList"/>
  <hall-layouts :tabs="hallTabs" :title="hallTitle"/>
</template>

<script>
import HallLayouts from '@/components/sections/HallLayouts.vue';
import BanquetPrice from '@/components/sections/BanquetPrice.vue';
import hallLayoutsData from '@/assets/data/hallLayoutsData.json';
import banquetPriceData from '@/assets/data/banquetPriceData.json';

export default {
  components: {
    HallLayouts,
    BanquetPrice
  },
  data() {
    return {
      hallTabs: hallLayoutsData.tabs,
      hallTitle: hallLayoutsData.title,
      banquetPriceTitle: banquetPriceData.title,
      banquetPriceProgressBar: banquetPriceData.progressBar,
      banquetPriceBanner: banquetPriceData.banner,
      banquetPriceOptionsList: banquetPriceData.optionsList,
    };
  },
};
</script>

<style lang="scss">

</style>
