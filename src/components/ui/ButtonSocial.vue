<template>
  <a :href="link" class="button-social" :class="[classGolden, classGray]" :aria-label="name">
    <TelegramIcon v-if="name === 'telegram'"/>
    <WhatsApp v-if="name === 'whats-app'"/>
    <FbIcon v-if="name === 'fb'"/>
    <VkIcon v-if="name === 'vk'"/>
  </a>
</template>

<script>
import TelegramIcon from '@/assets/icons/social/TelegramIcon.vue';
import WhatsApp from '@/assets/icons/social/WhatsApp.vue';
import FbIcon from '@/assets/icons/social/FbIcon.vue';
import VkIcon from '@/assets/icons/social/VkIcon.vue';

export default {
  name: 'button-social',
  components: {
    TelegramIcon,
    WhatsApp,
    FbIcon,
    VkIcon,
  },
  props: {
    name: {
      type: String
    },
    type: {
      type: String
    },
    link: {
      type: String
    }
  },
  computed: {
    classGolden() {
      return {
        'button-social_golden': this.type === 'golden'
      };
    },
    classGray() {
      return {
        'button-social_gray': this.type === 'gray'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.button-social {
  padding: 12px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    fill: $white;
  }

  &_golden {
    background-color: $golden;
  }

  &_gray {
    padding: 14px;
    background-color: #ACADA5;
    border-radius: 16px;
  }
}
</style>
