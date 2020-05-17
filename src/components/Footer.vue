<template>
  <div>
    <footer>
      <span class="copyright">Copyright © 2020 ForMakers</span>
      <span class="companyName"
        >상호: 포메이커스 | 대표: 이보림 | 이메일: contact@formakers.net</span
      >
      <span class="companyDetails"
        >주소: 서울특별시 서초구 남부순환로289길 5 삼영빌딩 | 사업자등록번호:
        280-86-01268 | 통신판매: 2020-서울서초-1319</span
      >
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  height: 100%;
  background-color: #474747;
  color: #ffffff;
  .copyright {
    padding: 20px 0 35px 0;
    display: block;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.02em;
  }
  .companyName {
    display: block;
    text-align: center;
    font-size: 11px;
    color: #ffffff;
    font-weight: 400;
  }
  .companyDetails {
    padding: 10px 0 20px 0;
    display: block;
    text-align: center;
    font-size: 11px;
    color: #ffffff;
    font-weight: 400;
  }
}
</style>
