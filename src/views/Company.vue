<template>
  <div>
    <div class="menuBackground"></div>
    <div class="contentBox">
      <p>포메이커스 소개</p>
    </div>

    <div class="introContainer">
      <div class="introBox">
        <div style="padding: 40px 0">
          <p class="introTitle">
            따듯하지만 솔직한 사람들, 성장을 사랑하는 사람들이 모였습니다.
          </p>
          <p class="introSub">
            삼성 출신의 UX & SW 인재들이 모여 초기 멤버가 구성되었으며, 삼성전자
            사내벤처 제도를 통하여 높은 경쟁률을 뚫고 회사를 설립하였습니다.
          </p>
        </div>
        <div class="introImgBox" style="padding-bottom: 90px">
          <img src="../assets/images/company.png" alt="" />
        </div>
        <div class="divisionLine"></div>
        <div style="padding-bottom: 90px">
          <div style="padding: 20px 0">
            <p class="mediaTitle">언론보도</p>
            <p class="mediaSub">
              [플레이어] 게임 테스트, 지인에 묻지 마세요 '포메이커스'에
              양보하세요
            </p>
            <section>
              <div class="buttons">
                <a
                  href="http://it.chosun.com/site/data/html_dir/2019/11/09/2019110900381.html?fbclid=IwAR0QBL0fWkF4Wva3SlUucxQ5zIskxUdKR7b1tOLIVlHRxI7W5GZHBQUaofI"
                  target="_blank"
                >
                  <button class="button is-medium is-warning">
                    기사 보기
                  </button>
                </a>
              </div>
            </section>
          </div>
          <div style="padding: 20px 0">
            <p class="mediaSub">
              삼성전자, 사내벤처 C랩 3개 우수 과제 스타트업 창업 지원
            </p>
            <section>
              <div class="buttons">
                <a
                  href="https://newsis.com/view/?id=NISX20180606_0000328667&cID=13001&pID=13000"
                  target="_blank"
                >
                  <button class="button is-medium is-warning">
                    기사 보기
                  </button>
                </a>
              </div>
            </section>
          </div>
          <div style="padding: 20px 0">
            <p class="mediaSub">
              스마일게이트 오렌지팜 입주사 '포메이커스' 인터뷰
            </p>
            <section>
              <div class="buttons">
                <a
                  href="https://blog.naver.com/orangefarm1234/221650992215"
                  target="_blank"
                >
                  <button class="button is-medium is-warning">
                    인터뷰 보기
                  </button>
                </a>
              </div>
            </section>
          </div>
        </div>
        <div class="divisionLine"></div>
        <p class="mediaTitle">포메이커스 비전</p>
        <div>
          <img src="../assets/images/our_vision.png" alt="" />
        </div>
      </div>
    </div>

    <div class="backgroundDiv2 four">
      <div class="backgroundColor"></div>
      <div>
        <div class="feedbackContainer">
          <div class="feedbackTitle">
            유저 피드백 만큼 값진 것은 없습니다.<br />
            <div class="feedbackBody">
              진짜 게이머에게 내 게임에 대한 의견을 들어보세요.
            </div>
            <br />
            <section>
              <div class="buttons">
                <button class="button is-medium is-warning" @click="warning">
                  테스트 플랜 보기
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    snackbar() {
      this.$buefy.snackbar.open(
        `Default, positioned bottom-right with a green 'OK' button`
      );
    },
    warning() {
      this.$buefy.snackbar.open({
        message: "🚨 버튼이 클릭되었습니다!!! 🚨",
        type: "is-warning",
        position: "is-top",
        actionText: "OK",
        indefinite: true
      });
    }
  }
};
</script>

<style scoped lang="scss">
//메뉴 백그라운드
.menuBackground {
  padding-top: 55px;
  padding-bottom: 50px;
  background-color: #333333;
}

// 공통 백그라운드(유저 피드백 부분)
.four {
  background-image: url("../assets/images/home_back5.jpg");
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

// 포메이커스 타이틀
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

// 회사 소개
.introContainer {
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
  padding: 100px;
  display: flex;
  justify-content: center;
  .introBox {
    margin: 0 auto;
    background-color: #333333;
    .introTitle {
      padding: 20px 0 30px 0;
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.02em;
    }
    .introSub {
      color: rgb(73, 187, 184);
      font-weight: 400;
      font-size: 20px;
      padding: 20px 0 0 0;
      max-width: 700px;
      letter-spacing: 0.02em;
      line-height: 2em;
    }
  }

  // 프로세스 소개 이미지
  .introImgBox {
    width: 40%;
    min-width: 350px;
    background-color: #333333;
    img {
      width: 100%;
    }
  }

  .divisionLine {
    width: 100%;
    background-color: #00bfba;
    min-height: 1px;
    display: inline-block;
  }

  // 언론보도
  .mediaTitle {
    padding: 20px 0 30px 0;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 0.02em;
    line-height: 1.5em;
  }
  .mediaSub {
    color: #ffffff;
    font-weight: 400;
    font-size: 15px;
    max-width: 700px;
    letter-spacing: 0.02em;
    line-height: 2em;
  }

  // 스낵바
  .button.is-medium {
    z-index: 9;
    width: auto;
    height: auto;
    padding: 1em 1.75em;
    margin-top: 25px;
    position: relative;
    background-color: transparent;
    border: 2px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: normal;
    outline: none;
    transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1);
    &:hover {
      background-color: rgb(255, 255, 255);
      color: rgb(34, 34, 34);
      font-weight: bold;
      border-color: rgb(255, 255, 255);
      animation: ease-in 5s;
    }
  }
}
@media screen and (max-width: 640px) {
  .introContainer {
    padding: 50px 100px;
    .introBox {
      // 인트로
      .introTitle {
        font-size: 18px;
        padding: 0;
      }
      .introSub {
        font-size: 12px;
      }

      // 언론보도
      .mediaTitle {
        font-size: 18px;
      }
      .mediaSub {
        font-size: 12px;
      }
      .buttons {
        .button.is-medium {
          font-size: 12px;
        }
      }
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
  // 스낵바
  .buttons {
    z-index: 10000;
    position: relative;
    display: flex;
    justify-content: center;
    .button.is-medium {
      z-index: 9;
      width: auto;
      height: auto;
      padding: 1em 1.75em;
      position: relative;
      background-color: #00bfba;
      border: 2px solid #00bfba;
      color: #ffffff;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.02em;
      line-height: normal;
      outline: none;
      transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1);
      &:hover {
        background-color: #53c6c2;
        color: #ffffff;
        font-weight: bold;
        border-color: #53c6c2;
        opacity: 0.8;
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .backgroundDiv2 .feedbackContainer .feedbackTitle {
    font-size: 20px;
    .feedbackBody {
      margin: 20px 0 20px 0;
      font-size: 15px;
    }
    .buttons {
      .button.is-medium {
        font-size: 15px;
      }
    }
  }
}
</style>
