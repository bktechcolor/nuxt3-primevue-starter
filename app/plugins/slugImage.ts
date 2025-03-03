export default defineNuxtPlugin(() => {

  const slugImage =  (url: string) => {       
    return `${'https://storage.googleapis.com/zoomtous/'+ url}`
  }
  const selectWords = (text: string) =>{
    const wordSplit = text.split(" ");
    const result = wordSplit.splice(0,25).join(" ");
    return result;
  }
  return {
    provide: {
      slugImage,
      selectWords
      }
    }
  }
)