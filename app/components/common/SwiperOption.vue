<script lang="ts" setup>
import { SwiperOptionType } from '@/types/swiperOptionType';
import {
  Navigation,
  Scrollbar,
  Pagination,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

type Props = {
  data: any;
  option: SwiperOptionType;
  height?: number;
};

const props = withDefaults(defineProps<Props>(), {
  data: undefined,
  space: 0,
  loop: false,
  autoplay:false,
  option: SwiperOptionType.ProductOptions
});


// slider for product options
const productOptions = {
  width: 500,
  breakpoints: {
    1920: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
    920: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    350: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
};

const latestArticles = {
  initialSlide: 0,
  notNextTick: true,
  spaceBetween: 0,
  direction: "horizontal",
  grabCursor: true,
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const hotArticles = {
  notNextTick: true,
  initialSlide: 0,
  direction: "horizontal",
  height: 400,
  grabCursor: true,
  breakpoints: {
    1920: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
}

const themeOptions = {
  initialSlide: 0,
  notNextTick: true,
  spaceBetween: 0,
  direction: "horizontal",
  grabCursor: true,
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
}

const option:Object = computed(()=> {
  switch(props.option){
    case SwiperOptionType.ProductOptions:
      return productOptions;
    case SwiperOptionType.LatestArticles:
      return latestArticles;
    case SwiperOptionType.HotArticles:
      return hotArticles;
    case SwiperOptionType.ThemeOptions:
      return themeOptions;
    default:
      return productOptions;
  }
})
const modules = ref([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
</script>

<template>
  <swiper
    v-bind="option"
    :modules="modules"
    class="swiper">
    <swiper-slide v-for="(slide,index) in data" :key="index">
      <slot :item="slide"></slot>
    </swiper-slide>
  </swiper>
</template>
<style lang="scss" scoped>
.swiper{
  overflow: hidden;
}
</style>
