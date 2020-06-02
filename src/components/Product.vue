<template>
  <div>
    <div class="menuBackground"></div>

    <div class="productContainer">
      <div class="productBox">
        <div style="padding: 40px 0">
          <p class="productTitle">
            스탠다드 플랜
          </p>
          <p class="productSub">
            [ 대형 게임사를 위한 디테일 플랜 ] <br /><br />

            * 게임설치 + 플레이 + 설문 + 리포트+ 데이터 <br />
            * Standard Only 맞춤 분석 리포트 제공 <br />
            * 30명 결과 제공 (인원 추가 가능 / +20명) <br />
            * 클로즈 베타 테스트 가능 (옵션 추가) <br />
            * VAT 포함 <br />
          </p>

          <p class="productPrice">1,727,000원</p>

          <p>인원추가</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product"
};
</script>

<style scoped lang="scss">
//메뉴 백그라운드
.menuBackground {
  padding-top: 55px;
  padding-bottom: 50px;
  background-color: #333333;
}

// 플랜 디테일
.productContainer {
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
  padding: 100px;
  display: flex;
  justify-content: center;
  .productBox {
    margin: 0 auto;
    background-color: #333333;
    .productTitle {
      color: #ffffff;
      font-weight: 700;
      font-size: 40px;
      letter-spacing: 0.02em;
      line-height: 1.2em;
      margin-bottom: 30px;
    }
    .productSub {
      color: #ffffff;
      font-weight: 400;
      font-size: 14px;
      max-width: 700px;
      letter-spacing: 0.02em;
      line-height: 2em;
      margin-bottom: 30px;
    }
    .productPrice {
      font-size: 26px;
      color: #bdbdbd;
    }
  }
}
</style>
