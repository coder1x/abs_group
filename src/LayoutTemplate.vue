<template>
  <common-header :menu="headerMenu" :address="headerMapPoint" :social="headerSocial" :telephone="headerTelephone"
                 :button-modal="headerButtonModal"/>
  <div class="page__wrapper">
    <main class="content">
      <slot/>
    </main>
  </div>
  <common-footer :copyright="copyright" :social="social"/>
  <modal-window ref="modal" :title="modalTitle" :text="modalText" :description="modalDescription"
                :submit-name="modalSubmitName" :action="modalAction"/>
</template>

<script>
import CommonFooter from '@/components/common/Footer.vue';
import CommonHeader from '@/components/common/Header.vue';
import headerData from '@/assets/data/headerData.json';
import footerData from '@/assets/data/footerData.json';
import modalData from '@/assets/data/modalData.json';
import ModalWindow from '@/components/blocks/ModalWindow.vue';

export default {
  name: 'layout-template',
  components: {
    CommonHeader,
    CommonFooter,
    ModalWindow,
  },
  data() {
    return {
      headerMenu: headerData.menu,
      headerMapPoint: headerData.mapPoint.address,
      headerSocial: headerData.social,
      headerTelephone: headerData.telephone,
      headerButtonModal: headerData.buttonModal,
      copyright: footerData.copyright,
      social: footerData.social,
      modalTitle: modalData.title,
      modalText: modalData.text,
      modalDescription: modalData.description,
      modalAction: modalData.action,
      modalSubmitName: modalData.submitName,
    };
  },
  mounted() {
    document.addEventListener('mousedown', this.handleClickElement);
  },
  methods: {
    handleClickElement(event) {
      if (!this.$refs.modal) return;
      const element = event.target;

      if (this.$refs.modal.$el.contains(element)) return;

      if (element instanceof HTMLButtonElement) {
        if (element.classList.contains('formCall')) {
          this.$refs.modal.openModal();
          return;
        }
      }

      this.$refs.modal.closeModal();
    }
  },
  beforeUnmount() {
    document.removeEventListener('mousedown', this.handleClickElement);
  }
};
</script>

<style lang="scss">
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
