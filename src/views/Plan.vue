<template>
  <div>
    <div class="menuBackground"></div>
    <div class="contentBox">
      <p>테스트 플랜 소개</p>
    </div>
    <div class="pricingContainer">
      <div>
        <p class="pricingTitle">한눈에 보는 플랜 비교표</p>
        <div class="divisionLine"></div>
        <p class="pricingSub">
          게임사의 니즈에 맞춘 다양한 플랜이 마련되어 있습니다.<br />
          (PC로 보시는게 더 편합니다.)
        </p>
      </div>
    </div>
    <div class="pricingImgBox">
      <img src="../assets/images/pricing.png" alt="" />
    </div>
    <div class="contentBox">
      <p>테스트 플랜 구매하기</p>
    </div>
    <div class="pricingContainer">
      <div>
        <p class="pricingSub">
          아래 이미지를 클릭하여 자세한 설명 확인 & 구매가 가능합니다.
        </p>
      </div>
    </div>

    <div class="backgroundDiv2 five">
      <div class="backgroundColor"></div>
      <div>
        <div class="feedbackContainer">
          <div class="feedbackTitle">
            어떤 플랜이 괜찮을지 고민되시나요?<br />
            <div class="feedbackBody">
              오른쪽 아래 초록색 버튼으로 채팅상담이 가능합니다.<br />
              궁금하신 점을 알려주시면 안내드리도록 하겠습니다.
            </div>
            <div class="feedbackBody2">
              (채팅 상담 시간 : 평일 11시 ~ 19시)
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
//메뉴 백그라운드
.menuBackground {
  padding-top: 55px;
  padding-bottom: 50px;
  background-color: #333333;
}

// 공통 백그라운드(유저 피드백 부분)
.five {
  background-image: url("../assets/images/home_back6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: block;
  position: relative;
  .backgroundColor {
    background-color: #000000;
    opacity: 0.5;
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
  }
}

// 프라이싱 이미지
.pricingImgBox {
  display: flex;
  justify-content: center;
  background-color: #333333;
  padding: 30px 0 150px 0;
  img {
    width: 80%;
    min-width: 700px;
  }
}
@media screen and (max-width: 640px) {
  .pricingImgBox {
    /*padding: 20px;*/
    img {
      min-width: 350px;
      width: 80%;
    }
  }
}

// 테스트 플랜 소개 & 테스트 플랜 구매하기
.contentBox {
  z-index: 1;
  width: 100%;
  min-height: 100%;
  margin-bottom: 0;
  top: 0;
  left: 0;
  padding: 16px;
  position: relative;
  background-color: #41bfb9;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.02em;
  line-height: 1.5em;
}
@media screen and (max-width: 640px) {
  .contentBox {
    font-size: 20px;
  }
}

// 테스트 플랜 소개
.pricingContainer {
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
  text-align: center;
  display: flex;
  justify-content: center;
  .pricingTitle {
    padding: 100px 0 15px 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0.02em;
    line-height: 1.5em;
  }
  .divisionLine {
    width: 100%;
    background-color: #00bfba;
    min-height: 1px;
    display: inline-block;
  }
  .pricingSub {
    color: #ffffff;
    padding-top: 30px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 2em;
  }
}
@media screen and (max-width: 640px) {
  .pricingContainer {
    .pricingTitle {
      font-size: 16px;
    }
    .pricingSub {
      font-size: 12px;
    }
  }
}

// 유저 피드백
.backgroundDiv2 {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  margin: 0;
  top: 0;
  left: 0;
  background-size: cover;
  background-attachment: fixed;
  border: 0;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  font-size: 100%;
  text-align: center;
}
.feedbackContainer {
  max-width: 1480px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .feedbackTitle {
    z-index: 10000;
    max-width: 800px;
    width: 100%;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 50px;
    text-align: inherit;
    letter-spacing: 0.02em;
    line-height: 0.7em;
  }
  .feedbackBody {
    margin-top: 50px;
    vertical-align: middle;
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-size: 25px;
    text-align: inherit;
    letter-spacing: 0.02em;
    line-height: 2em;
  }
  .feedbackBody2 {
    vertical-align: middle;
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-size: 17px;
    text-align: inherit;
    letter-spacing: 0.02em;
    line-height: 2em;
  }
}
@media screen and (max-width: 640px) {
  .backgroundDiv2 .feedbackContainer {
    .feedbackTitle {
      font-size: 24px;
    }
    .feedbackBody {
      margin: 20px 0 20px 0;
      font-size: 15px;
    }
    .feedbackBody2 {
      font-size: 13px;
    }
  }
}
</style>
