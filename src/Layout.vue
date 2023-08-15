<template>
  <common-header :menu="headerMenu" :address="headerMapPoint" :social="headerSocial" :telephone="headerTelephone"
                 :button-modal="headerButtonModal"/>
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
import headerData from '@/assets/data/headerData.json';

export default {
  components: {
    CommonHeader,
    CommonFooter,
  },

  data() {
    return {
      headerMenu: headerData.menu,
      headerMapPoint: headerData.mapPoint.address,
      headerSocial: headerData.social,
      headerTelephone: headerData.telephone,
      headerButtonModal: headerData.buttonModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  @include sides-offset();
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
