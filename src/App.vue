<template>
  <div id="app">
     <NavBar style="position: absolute;"></NavBar>
     <router-view></router-view>
     <Footer></Footer>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
        NavBar,
        Footer,
    }
  }
</script>

<style lang="scss" src="./assets/commons/reset.scss">

</style>
