<template>
  <footer class="Footer_Wrapper bg-gray-900 text-gray-200">
    <div class="boxBase__footer container pt-[8rem] pb-[2rem]">
      <div class="boxBase__footer--bottom flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div class="flex gap-4">
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" version="1.1" fill="var(--gray-1)">
                  <defs>
                    <filter id="alpha" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
                        <feColorMatrix type="matrix" in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                    </filter>
                    <image id="image7" width="16" height="16" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAJ0lEQVQ4jWNgoBAwMjAwMPz/w/yfLM0sfxmZKHXBqAGjBowaQCUAACboBBz/9bsEAAAAAElFTkSuQmCC"></image>
                    <mask id="mask0">
                        <g filter="url(#alpha)">
                          <use href="#image7"></use>
                        </g>
                    </mask>
                    <clipPath id="clip1">
                        <rect x="0" y="0" width="16" height="16"></rect>
                    </clipPath>
                    <g id="surface6" clip-path="url(#clip1)">
                        <path d="M 3 11 C 4.105469 11 5 11.894531 5 13 C 5 14.105469 4.105469 15 3 15 C 1.894531 15 1 14.105469 1 13 C 1 11.894531 1.894531 11 3 11 Z M 1 1 C 8.699219 1 15 7.300781 15 15 L 12.300781 15 C 12.300781 8.800781 7.199219 3.699219 1 3.699219 Z M 1 5.699219 C 6.101562 5.699219 10.300781 9.898438 10.300781 15 L 7.699219 15 C 7.699219 11.300781 4.699219 8.300781 1 8.300781 Z M 1 5.699219 "></path>
                    </g>
                  </defs>
                  <g id="surface1">
                    <use href="#surface6" mask="url(#mask0)"></use>
                  </g>
              </svg>
            </NuxtLink>
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--gray-1)">
                  <g>
                    <path d="M23 0H1a.945.945 0 0 0-1 1v22a.945.945 0 0 0 1 1h22a.945.945 0 0 0 1-1V1a.945.945 0 0 0-1-1zM7.1 20.5H3.6V9h3.6v11.5zM5.3 7.4a2.1 2.1 0 1 1 2.1-2.1 2.051 2.051 0 0 1-2.1 2.1zm15.2 13.1h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6a3.717 3.717 0 0 1 3.4-1.8c3.6 0 4.3 2.4 4.3 5.5z"></path>
                  </g>
              </svg>
            </NuxtLink>
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="var(--gray-1)" width="24" height="24">
                  <path d="M12 0c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8zm0 2H4c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2zM8 4c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm4.145-3.068c.53 0 .96.43.96.96s-.43.96-.96.96-.96-.43-.96-.96.43-.96.96-.96z"></path>
              </svg>
            </NuxtLink>
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" fill="var(--gray-1)">
                  <path d="M14.412 12.022l-.414 1.832c-.16.712-.597 1.33-1.214 1.72-.555.351-1.215.49-1.86.397l-.215-.04-1.817-.41c2.326-.274 4.328-1.605 5.52-3.499zM8 1.262c3.72 0 6.737 3.017 6.737 6.738 0 3.72-3.016 6.737-6.737 6.737S1.263 11.72 1.263 8 4.279 1.263 8 1.263zM.478 8.893c.263 2.23 1.497 4.16 3.266 5.367l.233.153-1.832-.414c-.712-.16-1.33-.597-1.72-1.214-.35-.555-.49-1.215-.397-1.86l.04-.215.41-1.817zm9.206.371c-.93 0-1.684.754-1.684 1.684 0 .93.754 1.685 1.684 1.685.93 0 1.684-.755 1.684-1.685s-.754-1.684-1.684-1.684zM5.052 8c-.93 0-1.684.754-1.684 1.684 0 .93.754 1.684 1.684 1.684.93 0 1.685-.754 1.685-1.684C6.737 8.754 5.982 8 5.052 8zm3.374-.746c-.263-.154-.59-.154-.853 0-.263.155-.422.44-.415.746.01.457.384.823.842.823.458 0 .831-.366.841-.824.007-.305-.152-.59-.415-.745zm2.521-2.623c-.93 0-1.684.754-1.684 1.684 0 .93.754 1.685 1.684 1.685.93 0 1.685-.754 1.685-1.685 0-.93-.755-1.684-1.685-1.684zm1.075-3.044l1.832.414c1.427.322 2.343 1.7 2.11 3.125l-.032.164-.41 1.817c-.275-2.325-1.606-4.327-3.5-5.52zM6.315 3.368c-.93 0-1.684.754-1.684 1.684 0 .93.754 1.685 1.684 1.685.93 0 1.685-.755 1.685-1.685s-.754-1.684-1.685-1.684zM5.076.028l.215.04 1.817.41C4.878.74 2.948 1.975 1.74 3.744l-.153.233.414-1.832c.16-.712.598-1.33 1.215-1.72.555-.35 1.215-.49 1.86-.397z"></path>
              </svg>
            </NuxtLink>
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="var(--gray-1)">
                  <path d="M15.8 4.8c-.2-1.3-.8-2.2-2.2-2.4C11.4 2 8 2 8 2s-3.4 0-5.6.4C1 2.6.3 3.5.2 4.8 0 6.1 0 8 0 8s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C4.6 14 8 14 8 14s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4C16 9.9 16 8 16 8s0-1.9-.2-3.2zM6 11V5l5 3-5 3z" transform="translate(-1228.000000, -1286.000000) translate(1228.000000, 1286.000000)"></path>
              </svg>
            </NuxtLink>
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="var(--gray-1)" width="24" height="24">
                  <path d="M15.968 1.293c-.026-.128-.114-.23-.232-.269-.21-.044-.428-.028-.63.048 0 0-14.019 5.348-14.82 5.94-.172.128-.23.202-.259.289-.138.424.293.608.293.608l3.613 1.25c.061.01.124.007.183-.012.822-.551 8.27-5.543 8.7-5.711.068-.021.118 0 .1.052-.172.637-6.606 6.707-6.641 6.744-.035.031-.053.078-.049.126l-.337 3.744s-.142 1.168.956 0c.779-.826 1.527-1.512 1.9-1.844 1.242.91 2.579 1.917 3.156 2.441.195.202.46.31.732.3.34-.044.618-.307.7-.66 0 0 2.561-10.906 2.646-12.374.008-.143.021-.23.021-.337.004-.112-.007-.225-.032-.335z"></path>
              </svg>
            </NuxtLink>
            <NuxtLink to="/">
              <svg width="24" height="24" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" fill="var(--gray-1)">
                  <g fill-rule="nonzero">
                    <path d="m10.804 14.603-6.648 7.591H.473l8.611-9.837zM12.814 7.464 18.902.5h3.68L14.52 9.722z"></path>
                    <path d="M24 22.194h-7.406L0 .5h7.594L24 22.194zm-6.39-2.203h2.039L6.486 2.587H4.298L17.61 19.991z"></path>
                  </g>
              </svg>
            </NuxtLink>
        </div>
        <div class="Footer__Context--right">
          © Copyright 2024 - Chỉ có thể sao chép một phần hoặc toàn bộ nội dung của Zoom khi có sự cho phép bằng văn bản
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.Footer_Wrapper::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: var(--black-5);
}
</style>
