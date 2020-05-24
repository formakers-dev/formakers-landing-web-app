<template>
  <div class="background">
    <div class="menuBackground"></div>
    <div>
      <div class="nfpTitle">
        <span>잘못된 경로! 🥺<br />페이지를 찾을 수 없습니다!</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.background {
  background-color: #333333;
  padding-bottom: 200px;
}

//메뉴 백그라운드
.menuBackground {
  padding-top: 55px;
  padding-bottom: 50px;
  background-color: #333333;
}
.nfpTitle {
  padding: 210px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #333333;
  margin: auto;
  font-size: 30px;
  color: #ffffff;
  font-weight: 700;
}
</style>
