<template>
  <div class="questionnaire">
    <progress-bar :essence="essence" :separator="separator" :value="question+1" :max="optionsList.length"/>
    <div class="questionnaire__content">
      <div class="questionnaire__container" v-for="(item, index) in optionsList" :key="index" :class="{ 'questionnaire__container_current': question === index }">
        <options-list :title="item.title" :options="item.options"/>
      </div>
    </div>
    <hr class="questionnaire__line" />
    <button-action title="Следующий вопрос" @click="handleNextClick" is-arrow/>
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar.vue';
import OptionsList from '@/components/ui/OptionsList.vue';
import ButtonAction from '@/components/ui/Button.vue';

export default {
components: {
  ButtonAction,
  ProgressBar,
  OptionsList,
},
  data() {
    return {
      question: 0,
    };
  },
  methods:{
    handleNextClick(){
      if(this.question < this.optionsList.length - 1){
        this.question += 1;
      }else{
        this.question = 0;
      }
    }
  },
  props: {
    essence:{
      type: String
    },
    separator: {
      type: String
    },
    optionsList: {
      type: Array
    }
  }
};
</script>

<style lang="scss">

.questionnaire{
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: $grey-block;
  padding: 32px 40px;
  border-radius: 16px;
  flex-grow: 1;
  overflow: hidden;

  @include media-breakpoint-down('md') {
    padding: 29px 16px 32px;
  }

  &__content{
    width: 100%;
    position: relative;
  }

  &__container{
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: -1;

    &_current {
      position: static;
      z-index: 1;
      animation-name: opacity-animation;
      animation-duration: 0.8s;
      animation-fill-mode: forwards;
    }
  }

  &__line{
    width: 160%;
    height: 1px;
    margin-left: -40px;
    background-color: $white;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-top: 1px solid $grey-light2;
  }

  .button-action{
    margin-top: 25px;
    margin-right: auto;

    @include media-breakpoint-down('md') {
      margin-top: 20px;
      padding: 14px 24px 14px 32px;
    }
  }

}

@include opacity-animation();
</style>
