<script lang="ts" setup>
import { useRouter } from '#app';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRightSideBar } from '~/stores/client/rightSidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faBell,faMagnifyingGlass);
const router = useRouter();
const { setIsOpenRightSideBar } = useRightSideBar();
</script>

<template>
  <div class="mobile-navbar">
   <header class="menu-mobile__root shadow-sm">
      <div class="menu-mobile search-area">
        <NuxtLink class="mobile-menu__custom-link my-logo" to="/">
          <svg width="106" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 25.16" fill="var(--header--ViCN-typography)">
              <g>
                <g>
                  <path fill="#E4002B" d="M13.49,0H43.17a0,0,0,0,1,0,0L28.94,16H21.62a0,0,0,0,1,0,0L30.9,5.56a0,0,0,0,0,0,0H8.58L13.47,0h0"></path>
                  <polygon fill="#E4002B" points="29.71 25.16 0 25.16 14.25 9.16 21.6 9.16 12.27 19.62 34.62 19.62 29.71 25.16"></polygon>
                  <polygon points="62.27 6.16 49.64 6.16 52.78 2.66 70.47 2.66 56.3 19 69.47 19 67.19 22.5 48.1 22.5 62.27 6.16"></polygon>
                  <path d="M77.7,22.5a5.84,5.84,0,0,1-5.83-5.83V8.49a5.62,5.62,0,0,1,1.71-4.12A5.62,5.62,0,0,1,77.7,2.66h8.17A5.62,5.62,0,0,1,90,4.37,5.62,5.62,0,0,1,91.7,8.49v8.17a5.84,5.84,0,0,1-5.83,5.83Zm-2.33-5.83A2.33,2.33,0,0,0,77.7,19h8.17a2.33,2.33,0,0,0,2.33-2.33V8.49a2.33,2.33,0,0,0-2.33-2.33H77.7a2.33,2.33,0,0,0-2.33,2.33Z"></path>
                  <path d="M101.17,22.5a5.84,5.84,0,0,1-5.83-5.83V8.49A5.62,5.62,0,0,1,97,4.37a5.62,5.62,0,0,1,4.12-1.71h8.17a5.62,5.62,0,0,1,4.12,1.71,5.62,5.62,0,0,1,1.71,4.12v8.17a5.84,5.84,0,0,1-5.83,5.83Zm-2.33-5.83A2.33,2.33,0,0,0,101.17,19h8.17a2.33,2.33,0,0,0,2.33-2.33V8.49a2.33,2.33,0,0,0-2.33-2.33h-8.17a2.33,2.33,0,0,0-2.33,2.33Z"></path>
                  <rect x="143.52" y="2.66" width="3.5" height="19.83"></rect>
                  <polygon points="161.83 6.16 161.83 22.5 158.33 22.5 158.33 6.16 150.16 6.16 150.16 2.66 170 2.66 170 6.16 161.83 6.16"></polygon>
                  <polygon points="136.21 2.66 129.32 9.35 122.44 2.66 118.82 2.66 118.82 22.5 122.32 22.5 122.32 7.19 129.32 13.83 136.32 7.19 136.32 22.5 139.82 22.5 139.82 2.66 136.21 2.66"></polygon>
                </g>
              </g>
          </svg>
        </NuxtLink>
        <button @click="router.push({ name : 'tim-kiem' })" class="menu-mobile__search-mini lg:w-[240px]">
          <div class="MenuHeader_SearchIcon">
            <FontAwesomeIcon class="text-gray-500 w-[2rem]" :icon="['fas', 'magnifying-glass']" />
          </div>
          <input class="hidden lg:inline-block focus:outline-none pl-0 pr-4 py-1 bg-transparent" name="searchTexbox" placeholder="Tìm kiếm trên ViCN" type="text">
        </button>
      </div>
      <div class="menu-mobile notify-area">
        <div class="notify-badge">
          <Button @click="setIsOpenRightSideBar" type="button" class="notifiy-badge__btn" severity="secondary">
            <FontAwesomeIcon class="text-gray-700 w-[1.3rem] h-[1.3rem]" :icon="['fas', 'bell']" />
          </Button>
          <div class="bell-alert">
            <span class="bell-alert__number">7</span>
          </div>
        </div>
        <div class="menu-mobile user-setting">
          <NuxtLink :to="{ name:'cai-dat' }" class="user-avarta">
            <NuxtImg class="base-image" src="/images/icons/sondang-profile.jpg" alt="my-profile"/>
          </NuxtLink>
        </div>
      </div>
   </header>
  </div>
</template>

<style lang="scss" scoped>
:deep(.p-button){
  background-color: #fff;
  border:none;
  box-shadow: none;
  background-color: #fff;
  padding:0px;
  &:hover, &:focus{
    background-color: #fff;
    border:none;
    box-shadow: none;
    background-color: var(--background-1);
    padding:0px;
  }
}

.mobile-navbar{
  width: 100%;
  position:sticky;
  top:0;
  z-index: 20;
  .menu-mobile__root {
    width: 100%;
    -webkit-box-align: center;
    transition: 0.2s;
    display: flex;
    height: 4rem;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-primary);
    background-color: var(--header--header-background);
  }
}

.menu-mobile{
  &.search-area{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0px 1rem 0px;
    position:relative;
    padding: 1rem;
    transform: translateX(-0.5rem);
    .mobile-menu__custom-link.my-logo {
      cursor: pointer;
      text-decoration: none;
      &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.35rem;
        height: 100%;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: var(--primary-1);
      }
    }
  }
  &.user-setting{
    border-radius: 9999px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    overflow: hidden;
    .user-avarta{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 9999px;
      background-color: var(--header--header-background);
    }
  }
}

.menu-mobile__nav {
  -webkit-box-align: center;
  margin-left: 6vw;
}
.menu-mobile__groups {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;    
    text-wrap: nowrap;
    list-style-type: none;
    padding: 0px;
    gap: 1.2rem;
    .UdXYz {
      display: flex;
      flex-wrap: wrap;
      -webkit-box-align: center;
      align-items: center;
      gap: 3.2rem;
      &:hover font, &:hover .menu-mobile__item{
        color: var(--primary-1) !important;
      }
    }
}
.menu-mobile{
  &.notify-area{
    max-width: 200px;
    display: flex;
    right:0;
    align-items: center;
    gap:8px;
    .notify-badge{
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      .bell-alert{
        position: absolute;
        top:-0.5rem;
        right: -0.5rem;
        width: 1.7rem;
        height: 1.7rem;
        border: 2px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        background-color: var(--primary-1);
        color:#fff;
        border-radius: 9999px;
        .bell-alert__number{
          color:white;
          font-weight: 600;
          font-size: 12px;
        }
      }
      .notifiy-badge__btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18.7px;
        width: 2.8rem;
        height: 2.8rem;
        border: none;
        background-color: var(--gray-3);
        padding: 8px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        cursor: pointer;
        opacity: 1;
        z-index: 1;
      }
    }
  }
}

.menu-mobile__item {
    color: var(--text);
    margin-right: 0px;
    font-weight: 600;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.4rem;
    line-height: 2;
    cursor: pointer;
}
.menu-mobile__hrBase {
    width: 1px;
    height: 14px;
    background-color: var(--gray-4);
}

@media only screen and (max-width: 1024px) {
  .menu-mobile__root {
    padding: .5rem 0.5rem;
    -webkit-box-align: left;
    transition: 0.2s;
    border-bottom: 1px solid var(--border-primary);
    background-color: var(--header--header-background);
  }
  .menu-mobile__nav {
    margin-left: 0;
  }
  .menu-mobile__search-mini{
    cursor: pointer;
    background-color: var(--gray-2);
    position: relative;
    display: flex;
    width: 2.8rem;
    height: 2.8rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    overflow: hidden;
  }
}
</style>
