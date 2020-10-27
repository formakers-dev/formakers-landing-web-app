<template>
  <div class="error">
    <h1>유저를 불러오는데 에러가 발생했습니다. 😢</h1>
    <h1>다시 시도해주시기 바랍니다.</h1>
    <button @click.prevent="$router.push('/')">다시 시도하기</button>
  </div>
</template>

<script>
export default {
  name: "SearchError"
};
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: "Do Hyeon", sans-serif;
    font-size: 2.3rem;
  }

  button {
    background-color: #00bfba;
    margin: 1rem auto;
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 10px;
    font-family: "Do Hyeon", sans-serif;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>
