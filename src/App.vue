<template>
  <div id="app">
    <app-top></app-top>
    <router-view class="router-view"/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Top from '@/components/layout/Top'
import Footer from '@/components/layout/Footer'
export default {
  name: 'App',
  components: {
    appTop: Top,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
