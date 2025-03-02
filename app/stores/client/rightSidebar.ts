
import { PAGE_SIZE } from '@/types/constGlobal'
import { defineStore } from 'pinia'
export const useRightSideBar = defineStore('useRightSideBar',()=>{
  const isOpen = ref<boolean>(false);

function setIsOpenRightSideBar(){
  isOpen.value = !isOpen.value
}
  return{
    isOpen,
    setIsOpenRightSideBar
  }
})