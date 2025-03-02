<script lang="ts" setup>
import Footer from '~/components/layouts/client/Footer.vue';
</script>

<template>
  <div class="default-layout">
    <img src="/public/images/ads/header.gif" />
    <slot />
    <Footer/>
  </div>
</template>
