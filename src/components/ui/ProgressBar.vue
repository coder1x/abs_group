<template>
  <label class="progress-bar">
    <span class="progress-bar__text">{{essence}} {{value}} {{separator}} {{max}}</span>
    <progress class="progress-bar__line" :value="value" :max="max" />
  </label>
</template>

<script>
export default {
  name: 'progress-bar',
  props: {
    essence:{
      type: String
    },
    separator: {
      type: String
    },
    value: {
      type: Number
    },
    max: {
      type: Number
    }
  }
};
</script>

<style lang="scss">

@mixin style-progress-bar {
  background-color: $white;
  border: 0;
  height: 4px;
  border-radius: 0;
}

.progress-bar{
  display: flex;
  flex-direction: column;
  width: 100%;

  &__text{
    color: $grey;
    font-family: $font-lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    margin-bottom: 8px;

    @include media-breakpoint-down('md') {
      font-size: 14px;
    }
  }

  &__line {
    width: 100%;
    @include style-progress-bar();

    &::-webkit-progress-bar {
      @include style-progress-bar();
    }

    &::-webkit-progress-value {
      background-color: $golden;
    }

    &::-moz-progress-bar {
      background-color: $golden;
    }
  }
}


</style>
