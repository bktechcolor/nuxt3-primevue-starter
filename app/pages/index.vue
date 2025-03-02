<script setup lang="ts">
definePageMeta({
  layout: 'client-simple',
});

useHead({
  titleTemplate: (title) => `My App - ${title}`,
  title: 'ViCN Tin tức công nghệ, hướng dẫn, hướng dẫn mua hàng và đánh giá',
  meta: [
    { name: 'description', content: 'ViCN là nơi tham khảo tin tức công nghệ, giáo dục, hướng dẫn mua hàng và đánh giá chuyên ngành về các sản phẩm điện tử, video và thông số kỹ thuật cũng như so sánh điện thoại di động, máy tính xách tay, máy tính và ô tô.' },
    { name: 'keywords', content: 'tin tức công nghệ, đánh giá sản phẩm công nghệ, khoa học, khoa học máy tính, mạng xã hội công nghệ' },
    { property: 'og:title', content: 'Your Page Title' },
    { property: 'og:description', content: 'Page description for social media' },
    { property: 'og:image', content: 'https://yourdomain.com/image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://yourdomain.com/current-page-url' }
  ],
  script: [
    {
      hid: "breadcrumbs-json-ld",
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to SEO in Nuxt 3",
        "description": "A guide to improving SEO in Nuxt 3 apps",
        "author": {
          "@type": "Person",
          "name": "Your Name"
        }
      })
    }
  ]
})

import { faAnglesLeft, faEllipsis, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { SwiperOptionType } from '@/types/swiperOptionType';
import productCategoryImage from '@/stores/client/data/productCategoryImage';
import SwiperOption from '@/components/common/SwiperOption.vue';
import type { ArticleListPageResult, ListArticleListPageResult } from '@/types/articles/articleResult';
import { useNuxtApp } from '#app';
import { useArticleStore } from '@/stores/client/articlesStore';
import { ClientArticlesQuerySchema } from '~/types/articles/articleInput';
library.add(faAnglesLeft, faCalendar, faComment, faEllipsis, faFireFlameCurved);
const slides = ref(productCategoryImage);
const { $slugImage } = useNuxtApp()
const articleStore = useArticleStore();
const threeFeature = ref<ArticleListPageResult[]>([]);
const listHostArticle = ref<ArticleListPageResult[]>([]);
const mostViewArticles = ref<ArticleListPageResult[]>([]);

onBeforeMount( async() =>{
  const [data1, data2,data3] = await Promise.all([
    articleStore.getArticleListPage(ClientArticlesQuerySchema.parse({
      PageNumber: 1,
      PageSize: 2,
      IsTrend: true
    })),
    articleStore.getArticleListPage(ClientArticlesQuerySchema.parse({
      PageNumber: 1,
      PageSize: 10,
    })),
    articleStore.getArticleListPage(ClientArticlesQuerySchema.parse({
      PageNumber: 1,
      PageSize: 2,
    }))
  ]);
  threeFeature.value = data1;
  listHostArticle.value = data2;
  mostViewArticles.value = data3;
})
</script>

<template>
  <div class="main bg-gray-100">
    <div v-if="threeFeature" class="w-full mb-[2rem]">
      <SwiperOption
        :data="threeFeature"
        :option="SwiperOptionType.LatestArticles"
        v-slot="{ item }"
      >
        <NuxtLink to="#" class="image-frame relative w-full h-full">
          <NuxtImg class="object-cover w-full h-full" :src="`${$slugImage(item.coverImageLink.storedDocumentPath)}`" :alt="item.title"/>
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-end px-[3.2rem] py-[4rem]">
            <h2 class="font-[2.2rem] text-white mt-auto h-[fit-content]">
            {{ item.title }}
            </h2>
          </div>
        </NuxtLink>
      </SwiperOption>
    </div>
    <!-- Box Base -->
    <div class="box-base container">
      <div class="box-inside flex flex-col md:flex-row">
        <div class="box-shop__right">
          <div class="vertical-content mb-[0.5rem]">
            <div class="vertical-hr left"></div>
            <strong>Tận hưởng mua sắm</strong>
          </div>
          <p class="mb-[0.5rem]">ViCN hướng dẫn bạn đưa ra lựa chọn tốt hơn và mua rẻ hơn </p>
          <button type="button" class="btn-thin gray btn-product">
            <FontAwesomeIcon :icon="['fas', 'angles-left']" />
            <span class="text-white">vào mục sản phẩm</span>
          </button>
        </div>
        <div class="box-shop__left">
          <swiperOption
            :data="slides"
            :option="SwiperOptionType.ProductOptions"
            v-slot="{ item }"
          >
          <NuxtImg class="w-[88px]" :src="item.url" :alt="item.name"/>
          </swiperOption>
        </div>
      </div>
    </div>
    <!-- container -->
     <div class="section-context">
      <div class="container article-slide">
        <div class="article-slide header mb-4">
          <div class="article-slide header-text">
            Bài viết đề xuất
          </div>
          <div class=" article-slide option">
            <button type="button" class="btn-thin gray">Mục</button>
            <button type="button" class="btn-thin rounded-border">Video</button>
          </div>
        </div>
        <SwiperOption
        :data="listHostArticle"
        :option="SwiperOptionType.HotArticles"
        v-slot="{ item }"
        >
        <div class="shadow-md w-full h-full">
          <NuxtImg class="base-image" :src="`${$slugImage(item.coverImageLink.storedDocumentPath)}`" :alt="item.title"/>
          <div class="p-[1rem] flex flex-col justify-between bg-white">
            <h2 class="font-semibold">{{ item.title }}</h2>
            <div class="card-bottom flex justify-between">
              <FontAwesomeIcon :icon="['fas', 'ellipsis']" />
              <div class="flex gap-[0.5rem]">
                <div class="card-time flex gap-[0.5rem]">
                  <span>{{ $moment(item.createdDate).fromNow() }}</span>
                  <FontAwesomeIcon :icon="['far', 'calendar']" />
                </div>
                <div class="flex gap-[0.5rem]">
                  <span>{{ item.likedCount }}</span>
                  <FontAwesomeIcon :icon="['far', 'comment']" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperOption>
      </div>
     </div>
     <!-- main content -->
    <div class="sectionContent">
      <div class="container grid grid-cols-1 md:grid-cols-2">
        <div class="article-list__module pr-0 md:pr-[4rem] pt-[4.4rem]">

          <div class="article-list__header font-semibold text-[20px]">Bài viết mới nhất</div>
          <SwiperOption
          :data="['Đào tạo','Khoa học','Chủ đề hot','Tin trong nước','Bài viết mới nhất']"
          v-slot="{ item }"
          class="mb-[20px]"
          >
          <div class="article-text__option inline-block btn-thin normal">{{ item }}</div>
          </SwiperOption>
          <div class="box__boxBase">
            <div v-for="(item,index) in listHostArticle" :key="index" class="article-single__card">
              <div class="article-single__card--inside flex">
                <div class="w-[140px] h-[120px] rounded-md overflow-hidden">
                  <NuxtImg class="w-full h-full" :src="`${$slugImage(item.coverImageLink.storedDocumentPath)}`" :alt="item.title"/>
                </div>
                <div class="flex flex-col justify-between pl-[1rem] md:pr-[0.5rem]">
                  <div class="article-title flex justify-between">
                    <h2 class="title font-semibold text-[14px]">{{ item.title }}</h2>
                    <svg v-if="item.isTrend" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="var(--primary-1)" style="flex-shrink: 0; height: 22px;"><path d="M9.635 6.293S10.343 1.905 7.454 0c-.087 1.525-.787 2.938-1.923 3.887C4.296 5.03 1.976 7.6 2 10.34c-.019 2.39 1.25 4.583 3.275 5.66.072-1.068.549-2.061 1.323-2.755.657-.532 1.083-1.32 1.183-2.185 1.728.968 2.846 2.822 2.943 4.881v.013c1.91-.922 3.167-2.895 3.254-5.106.205-2.574-1.133-6.074-2.32-7.218-.45 1.054-1.146 1.971-2.024 2.663z" transform="translate(-1196 -1035) translate(1196 1035)"></path></svg>
                  </div>
                  <p class="article-single__description hidden lg:inline-block text-gray-600 text-[13px] leading-6">
                    {{ $selectWords(item.description) }}
                  </p>
                  <div class="card-bottom flex justify-between text-[13px] text-gray-600">
                    <FontAwesomeIcon :icon="['fas', 'ellipsis']" />
                    <div class="flex gap-[0.5rem]">
                      <div class="card-time flex gap-[0.5rem]">
                        <span class="text-[13px]">{{ $moment(item.createdDate).fromNow() }}</span>
                        <FontAwesomeIcon :icon="['far', 'calendar']" />
                      </div>
                      <div class="flex gap-[0.5rem]">
                        <span>{{ item.likedCount }}</span>
                        <FontAwesomeIcon :icon="['far', 'comment']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- advertisement right column -->
        <div class="page-right__col md:pl-[4rem] overflow-hidden">
          <div class="relative">
            <div class="flex flex-col gap-[2rem]">
              <div class="advertisement_Boxbase flex">
                <NuxtImg class="flex-1" src="/images/ads/ads-1.gif" />
                <NuxtImg class="flex-1" src="/images/ads/ads-2.gif" />
              </div>
              <div class="box__boxBase relative">
                <div class="article-list__header font-semibold text-[16px]">Xem nhiều nhất</div>
                <div class="grid grid-cols-2 gap-[1rem]">
                  <div v-for="(item, index) in mostViewArticles" :key="index" :class="index === 0 ? 'col-span-2 max-h-[400px]': ''" class="rounded-md overflow-hidden">
                    <NuxtImg class="w-full" :src="`${$slugImage(item.coverImageLink.storedDocumentPath)}`" :alt="item.title" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.box-inside{
  gap: 1rem;
  &.box-shop__left{
    flex: 1;
  }
}

.box-shop__right{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
    .vertical-content{
    display: flex;
    gap: 1rem;
    position: relative;
    .vertical-hr{
      &.left{
      content: " ";
      display: absolute;
      top:0;
      left:0;
      width: 4px;
      height: 15px;
      background-color: red;
      }
    }
  }
}
.btn-product{
  display: flex;
  gap: 6px;
  white-space: nowrap;
}
/* slide suggest */
.article-slide{
  &.header{
    position: relative;
  }
  &.option{
    display: flex;
    gap: 0.5rem;
  }
  .header-text{
    margin-bottom: 1rem;
    padding-left: 1rem;
    font-weight: 600;
    &::after{
      content: " ";
      width: 4px;
      height: 15px;
      left: 0;
      top:0;
      position:absolute;
      background-color: var(--primary-1);
    }
  }
}

.box-base{
  .box-inside{
    display: flex;
    overflow: hidden;
    /* padding: 3.2rem 4.8rem; */
  }
}

.article-list__header{
  width: 100%;
  position: relative;
  height: 20px;
  margin-bottom: 20px;
  &::after{
    content:" ";
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background-color: var(--primary-1);
  }
}
.article-text__option{
  white-space: nowrap;
}

.article-single__card{
  position: relative;
  margin-bottom: 2rem;
  .article-single__card--inside{
    &::after{
      content:" ";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: var(--border-primary);
      transform: translateY(1rem);
    }
  }
}

/* content */
.sectionContent{
  background-image: linear-gradient(90deg, var(--background-2) 50%, #ffffff00 50%);
}

@media only screen and (max-width: 768px) 
{
  .sectionContent{
  background-color: var(--background-2);
  background-image: none;
  }
}
</style>
