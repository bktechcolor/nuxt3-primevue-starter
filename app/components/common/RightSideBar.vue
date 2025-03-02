<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useRightSideBar } from '~/stores/client/rightSidebar';
library.add(faComments,faEnvelope,faCircleXmark);
const props = defineProps({
  isActive: Boolean,
})
const { isOpen } = storeToRefs(useRightSideBar());
</script>

<template>
  <div class="client-ui right-modal" :class="{ 'active': isOpen }">
    <div class="right-modal__header">
      <button type="button" class="notification">
        <FontAwesomeIcon class="setting-icon" :icon="['fas', 'comments']" />
        <span>Bình luận</span>
      </button>
      <button type="button" class="mailbox">
        <FontAwesomeIcon class="setting-icon" :icon="['far', 'envelope']" />
        <span>Hộp thư</span>
      </button>
      <button type="button" class="right-modal__close">
        <FontAwesomeIcon :icon="['far', 'circle-xmark']" />
      </button>
    </div>
    <div class="right-modal__body">
      <div class="notification_item">
        <div class="avarta-base">
          <nuxtImage class="image-base" src="images/test/tuantran.jpg" alt="no content" rounded/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .client-ui{
    color: var(--gray-8);
    &.right-modal{
      display: absolute;
      position: fixed;
      top:4rem;
      right: 0;
      width: 300px;
      height: calc(100vh - 4rem);
      transform: translate(350px);
      border-left: 1px solid var(--border-primary);
      box-shadow: -0.2px 1px 2px 0 var(--elevation);
      background-color: var(--background-2);
      transition: transform .3s;
      z-index: 10;
      -webkit-animation: fadeInFromNone 0.5s ease-out;
      -moz-animation: fadeInFromNone 0.5s ease-out;
      -o-animation: fadeInFromNone 0.5s ease-out;
      animation: fadeInFromNone 0.5s ease-out;
    }
    &.active{
      transition: transform .3s;
      transform: translate(0px) !important;
    }
  }
  .right-modal__header{
    height: 4rem;
    border-bottom: 1px solid var(--gray-2);
    display: flex;
    padding: 14px 14px;
    justify-content: space-between;
    .notification, .mailbox{
      display: flex;
      align-items: center;
      gap:0.5rem;
      .setting-icon{
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
  .right-modal__body{
    display: block;
    padding: 0px 14px;
    height: 50%;
    overflow-y: scroll;
  }
</style>
