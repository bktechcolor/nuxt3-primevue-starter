<script lang="ts" setup>
import { useFsBreakpoints } from '@/composables/useBreakpoint';
import RightSideBar from '@/components/common/RightSideBar.vue';
import DesktopNavbar from '@/components/client/DesktopNavbar.vue'
import MobileNavbar from '@/components/client/MobileNavbar.vue'
import Footer from '@/components/client/Footer.vue';
const { responsive } = useFsBreakpoints();
const isActive = ref<boolean>(false);
</script>
<template>
  <div class="simple-layout">
    <DesktopNavbar v-if="!responsive.mobile"/>
    <MobileNavbar v-else/>
      <slot/>
    <Footer/>
    <RightSideBar :isActive="isActive"/>
  </div>
</template>
<style lang="css" scoped>
.simple-layout{
  position: relative;
}
</style>

