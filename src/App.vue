<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR:wght@400;700;900&family=Pacifico&display=swap');

@import "~bulma/sass/utilities/_all";

$primary: #00BFBA;

@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
