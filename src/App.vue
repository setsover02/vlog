<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Top'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
