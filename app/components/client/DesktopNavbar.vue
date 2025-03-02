<script lang="ts" setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrochip,
         faBell,
         faUser,
         faGear,
         faStore,
         faMagnifyingGlassDollar
} from '@fortawesome/free-solid-svg-icons';
import { useRightSideBar } from '~/stores/client/rightSidebar';
library.add(faUser,faGear,faMicrochip,faStore,faMagnifyingGlassDollar,faBell);
const IsProfileSettingActive = ref<Boolean>(false);
const IsSearchBarOpen = ref<Boolean>(false);
const { setIsOpenRightSideBar } = useRightSideBar();
</script>

<template>
  <div class="w-full sticky top-0 z-20">
   <header class="desktop-menu__root shadow-sm">
      <div class="desktop-menu_logo-search">
        <NuxtLink class="link__CustomNextLink logo-search" to="/">
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
        <div @click="IsSearchBarOpen != IsSearchBarOpen" class="desktop-menu__Search lg:w-[240px] bg-gray-200 relative flex items-center rounded-full overflow-hidden">
          <div class="MenuHeader_SearchIcon px-3 py-3">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="var(--gray-5)">
              <g fill-rule="evenodd" transform="translate(-448 -544)">
                  <g fill-rule="nonzero">
                    <path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path>
                    <path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path>
                    <path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path>
                    <path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path>
                  </g>
              </g>
            </svg>
          </div>
          <input class="hidden lg:inline-block focus:outline-none pl-0 pr-4 py-1 bg-transparent" name="searchTexbox" placeholder="Tìm kiếm trên ViCN" type="text">
        </div>
      </div>
      <nav class="desktop-menu__Nav hidden lg:flex flex-1 items-center justify-between">
         <ul class="desktop-menu__menu-group">
            <li class="UdXYz">
              <NuxtLink class="link__CustomNextLink" to="/">
                <div class="hidden lg:inline-block desktop-menu__MenuItem">
                  <FontAwesomeIcon class="icon-navbar store" :icon="['fas', 'store']" />
                  <font>Sản phẩm</font>
                </div>
              </NuxtLink>
            </li>
            <div class="desktop-menu__Hr hidden lg:inline-block"></div>
            <li class="UdXYz">
              <NuxtLink class="link__CustomNextLink" to="/">
                <div class="desktop-menu__MenuItem">
                  <FontAwesomeIcon class="icon-navbar technology" :icon="['fas', 'microchip']" />
                   <font>Công nghệ</font>
                </div>
              </NuxtLink>
            </li>
            <div class="desktop-menu__Hr hidden lg:inline-block"></div>
            <li class="UdXYz">
              <NuxtLink class="link__CustomNextLink" to="/">
                <div class="desktop-menu__MenuItem">
                  <font>Học tập</font>
                </div>
              </NuxtLink>
            </li>
            <div class="desktop-menu__Hr hidden lg:inline-block"></div>
            <li class="UdXYz">
              <NuxtLink class="link__CustomNextLink" to="/">
                <div class="desktop-menu__MenuItem">
                  <FontAwesomeIcon class="icon-navbar glass-dolar" :icon="['fas', 'magnifying-glass-dollar']" />
                  <font>Reviews</font>
                </div>
              </NuxtLink>
            </li>
            <div class="desktop-menu__Hr hidden lg:inline-block"></div>
            <li class="UdXYz">
              <NuxtLink class="link__CustomNextLink" to="/">
                <div class="desktop-menu__MenuItem">Hướng dẫn <span class="hidden lg:inline-block">mua sắm</span></div>
              </NuxtLink>
            </li>
            <div class="desktop-menu__Hr hidden lg:inline-block"></div>
            <li class="UdXYz">
              <NuxtLink class="link__CustomNextLink" to="/">
                  <div class="desktop-menu__MenuItem">Video</div>
              </NuxtLink>
            </li>
            <div class="desktop-menu__Hr hidden lg:inline-block"></div>
            <li class="UdXYz">
              <NuxtLink class="link__CustomNextLink" to="/">
                <div class="desktop-menu__MenuItem">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="var(--text)" viewBox="0 0 6 6" width="8" height="8">
                        <path d="M3.75 0L2.25 0 2.25 2.25 0 2.25 0 3.75 2.25 3.75 2.25 6 3.75 6 3.75 3.75 6 3.75 6 2.25 3.75 2.25z"></path>
                   </svg>
                   <font>Về ViCN</font>
                </div>
              </NuxtLink>
            </li>
         </ul>
      </nav>
      <div class="max-w-[200px] flex right-0 items-center gap-2">
        <div class="NotifBadge__Root relative flex justify-center items-center">
          <button @click="setIsOpenRightSideBar" type="button" class="NotifBadge__btn" severity="secondary">
            <FontAwesomeIcon class="text-gray-700 w-[1.3rem] h-[1.3rem]" :icon="['fas', 'bell']" />
          </button>
          <div class="absolute top-[-0.5rem] right-[-0.5rem] w-[1.7rem] h-[1.7rem] border-2 border-white flex justify-center items-center z-10 bg-red-primary text-white rounded-full p-2">
            <span class="text-[12px] font-semibold">7</span>
          </div>
        </div>
        <div class="desktop-menu-user__ProfileButton relative flex items-center p-0">
            <Button @click="IsProfileSettingActive = !IsProfileSettingActive" class="avarta-base">
              <NuxtImg class="cover-fit w-full h-full" src="/images/icons/sondang-profile.jpg"/>
            </Button>
            <div v-if="IsProfileSettingActive" class="desktop-menu-user__profile-wrapper flex flex-col gap-2 z-20">
              <div class="desktop-menu-user__profile-image boder border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200">
                <Button class="avarta-base">
                  <NuxtImg class="cover-fit w-full h-full" src="/images/icons/sondang-profile.jpg"/>
                </Button>
                <span class="text-md font-semibold">Mùa đông không lạ</span>
              </div>
              <div class="desktop-menu-user__detail-warapper">
                  <div class="cdSGj">
                    <div class="kDyGrB">
                        <div class="evxRPL">asdfsadf</div>
                        <div class="cUtomf">asdfasdf</div>
                    </div>
                    <div class="eQahpo">safasdfasdfas</div>
                  </div>
              </div>
              <div class="hr_HrBase"></div>
              <div class="flex gap-2 text-gray-700">
                  <div class="cfkljU cIFsld">
                      <NuxtLink to="/">
                        <div class="ProfileLinks__ProfileActionButton hskuTQ">
                          <FontAwesomeIcon class="setting-icon gray" :icon="['fas', 'user']" />
                          <span class="font-semibold">Trang của tôi</span>
                        </div>
                      </NuxtLink>
                  </div>
                  <div class="cfkljU fCzclq">
                    <NuxtLink to="/">
                        <div class="ProfileLinks__ProfileActionButton hskuTQ">
                          <FontAwesomeIcon class="setting-icon gray" :icon="['fas', 'hand-middle-finger']" />
                          <span class="font-semibold">Hoạt động</span>
                        </div>
                    </NuxtLink>
                  </div>
                  <div class="cfkljU hVeKcM">
                    <NuxtLink to="/">
                      <div class="ProfileLinks__ProfileActionButton hskuTQ" >
                        <FontAwesomeIcon class="setting-icon gray" :icon="['fas', 'gear']" />
                        <span class="font-semibold">Cài đặt</span>
                      </div>
                    </NuxtLink>
                  </div>
              </div>
              <div class="hr_HrBase"></div>
                <button type="button" class="logout-btn">
                  <div class="flex gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" version="1.1" fill="var(--gray-5)">
                        <path d="M 11.300781 3.898438 C 11.699219 3.5 12.300781 3.398438 12.699219 3.800781 C 14.199219 5.101562 15 7 15 9 C 15.011719 10.859375 14.277344 12.648438 12.960938 13.960938 C 11.648438 15.277344 9.859375 16.011719 8 16 C 6.140625 16.011719 4.351562 15.277344 3.039062 13.960938 C 1.722656 12.648438 0.988281 10.859375 1 9 C 1 7 1.898438 5.101562 3.398438 3.800781 C 3.828125 3.480469 4.421875 3.523438 4.800781 3.898438 C 5.101562 4.300781 5.101562 4.898438 4.699219 5.300781 C 3.601562 6.199219 3 7.601562 3 9 C 3 11.800781 5.199219 14 8 14 C 10.800781 14 13 11.800781 13 9 C 13 7.601562 12.398438 6.199219 11.398438 5.300781 C 11 4.898438 10.898438 4.300781 11.300781 3.898438 Z M 9 0 L 9 6 L 7 6 L 7 0 Z M 9 0 "></path>
                    </svg>
                    <span class="font-semibold text-gray-700">Đăng xuất</span>
                  </div>
                </button>
                <div class="desktop-menu-user extraInformation flex gap-2 text-sm text-gray-500 justify-center text-center">
                  <NuxtLink class="hover:underline" to="/">Quyền riêng tư  ·  </NuxtLink>
                  <NuxtLink class="hover:underline" to="/">Điều khoản  ·  </NuxtLink>
                  <NuxtLink class="hover:underline" to="/">Quảng cáo  ·  </NuxtLink>
                  <NuxtLink class="hover:underline" to="/">Lựa chọn</NuxtLink>
                </div>
            </div>
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
    background-color: #fff;
    padding:0px;
  }
}

.icon-navbar{
  width: 1.4rem;
  height: 1.4rem;
  color: var(--gray-8);
}

.desktop-menu__root {
  width: 100%;
  display: flex;
  padding: .3rem 2.5rem;
  -webkit-box-align: center;
  transition: 0.2s;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-primary);
  background-color: var(--header--header-background);
}
.desktop-menu_logo-search{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0.5rem;
  gap: 1rem;
  position:relative;
  padding-left: 10px;
  transform: translateX(-2.5rem);
  .link__CustomNextLink.logo-search {
    cursor: pointer;
    text-decoration: none;
    &::before{
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0.3rem;
      height: 80%;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      background-color: var(--primary-1);
    }
  }
}

.desktop-menu__Nav {
    -webkit-box-align: center;
    margin-left: 6vw;
}
.desktop-menu__menu-group {
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
      &:hover font, &:hover .desktop-menu__MenuItem{
        color: var(--primary-1) !important;
      }
    }
}
.desktop-menu__MenuItem {
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
.desktop-menu__Hr {
    width: 1px;
    height: 14px;
    background-color: var(--gray-4);
}
.eJkGLX {
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.4rem;
}

.NotifBadge__btn {
    position: relative;
    width: 2.8rem;
    height: 2.8rem;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18.7px;
    border: none;
    background-color: var(--gray-3);
    padding: 8px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    cursor: pointer;
    padding: 0px;
    opacity: 1;
    z-index: 1;
}
.hskuTQ {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    width: auto;
    height: 5.4rem;
    border: 1px solid var(--border-primary);
    background: none;
    border-radius: var(--radius-md);
    &:hover{
       background-color: var(--gray-2);
    }
}

.cfkljU {
    flex-basis: 0px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-width: 100%;
}
.cJosRW {
    display: none;
}
.desktop-menu-user__profile-wrapper {
    //display: none;
    position: absolute;
    top: 2.8rem;
    left: 0px;
    transform: translateX(-87%);
    width: 360px;
    background-color: var(--card);
    box-shadow: 0 0 16px 0 var(--elevation);
    padding: 16px;
    border-radius: var(--radius-md);
}
.cIFsld {
    cursor: pointer;
}

.desktop-menu-user__profile-image {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.8rem;
}

.desktop-menu-user__detail-warapper {
    display: grid;
    gap: 3rem 1rem;
    grid-template-columns: auto auto;
}

@media only screen and (max-width: 1024px) {
  .desktop-menu__root {
    padding: .5rem 0.5rem;
    -webkit-box-align: left;
    transition: 0.2s;
    border-bottom: 1px solid var(--border-primary);
    background-color: var(--header--header-background);
  }
  .desktop-menu__Nav {
    margin-left: 0;
  }
  .desktop-menu__Search{
    cursor: pointer;
  }
}
</style>
