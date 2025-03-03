import moment from 'moment';
import 'moment/dist/locale/vi';

export default defineNuxtPlugin((nuxtApp) => {
  moment.locale('vi');
  nuxtApp.provide('moment', moment);
});