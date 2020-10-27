<template>
  <section class="title-section">
    <h1>{ Persona }</h1>
    <p>당신이 원하는 게이머를 빠르고 쉽게 만나보세요!</p>
  </section>
</template>

<script>
export default {
  name: "Title"
};
</script>

<style lang="scss" scoped>
.title-section {
  padding-top: 10vh;
  margin: 0 auto 2rem;

  h1 {
    font-family: "Pacifico", cursive;
    font-size: 5rem;
    font-weight: 800;
    text-shadow: 3px 3px #d6d2c4;
  }

  p {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
    font-size: 2rem;
  }
}
</style>
