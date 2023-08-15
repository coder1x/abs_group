<template>
  <div class="map-point" v-show="isVisible">
    <map-pin/>
    <p class="map-point__address" v-if="address" v-html="address"/>
  </div>
</template>

<script>
import MapPin from '@/assets/icons/header/MapPin.vue';

export default {
  name: 'map-point',
  components: {
    MapPin,
  },
  props: {
    address: {
      type: String,
    },
    isVisible: {
      type: Boolean,
      default: true,
    }
  }
};
</script>

<style lang="scss" scoped>
.map-point {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__address {
    display: inline-flex;
    flex-direction: column;
    margin-left: 16px;
    color: $grey;
    font-family: $font-lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
}
</style>
