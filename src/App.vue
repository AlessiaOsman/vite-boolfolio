<script>
import AppHeader from '../src/components/AppHeader.vue';
export default {
  name: 'Boolfolio',
  components: {AppHeader}
}
</script>

<template>
  <AppHeader />
  <main class="container pt-5">
    <RouterView/>
  </main>
</template>

<style lang="scss">
@use'./assets/scss/style.scss';
</style>
