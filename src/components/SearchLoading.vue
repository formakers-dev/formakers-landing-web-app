<template>
  <div class="loading">
    <h1>유저 정보를 불러오고 있습니다... 🧐</h1>
    <p>잠시만 기다려주세요 🙏</p>
    <div id="skeleton">
      <b-skeleton width="25%" height="20px" position="is-centered"></b-skeleton>
      <b-skeleton width="50%" height="20px" position="is-centered"></b-skeleton>
      <b-skeleton width="75%" height="20px" position="is-centered"></b-skeleton>
      <b-skeleton height="20px" position="is-centered"></b-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchLoading"
};
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: "Do Hyeon", sans-serif;
    font-size: 2.3rem;
  }

  p,
  a {
    font-size: 1.5rem;
  }
}

#skeleton {
  width: 50vw;
  margin: 3rem auto 0;

  .b-skeleton {
    margin: 5px auto;
  }
}
</style>
