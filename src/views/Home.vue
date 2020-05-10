<template>
  <div>
    <div class="backgroundDiv one">
      <div>
        <div class="captionContainer">
          <div class="captionTitle">지인에게 물어보지 마세요.<br>
            게이머에게 양보하세요.</div>
          <div class="captionBody">게이머의 마음을 정확히 알고 싶다면, 직접 물어봐야 합니다.</div>
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
    <div class="contentBox">
        <p>주요 이용 게임</p>
    </div>
    <div class="majorGameImg">
      <img src="../assets/images/major_game.png" alt="">
    </div>
    <div class="majorGameSubContainer">
      <div>
        <img src="../assets/images/buf_logo.png" alt="">
        <p class="majorGameSubTitle">버프스튜디오 김도형 대표님</p>
        <p class="majorGameSubBody">포메이커스, 너무 만족했습니다.<br>
          게임에 대한 퀄리티 좋은 유저 피드백을 받아
          게임을 개선하고 싶다면 추천드려요!!</p>
        <div class="divisionLine"></div>
      </div>
      <div>
        <img src="../assets/images/wonder_logo.png" alt="">
        <p class="majorGameSubTitle" style="color: #EDAE30">원더스쿼드 서관희 대표님</p>
        <p class="majorGameSubBody">솔직하고 정성스럽게 써주신 분들이 많아서 <br>
          단지 게임 평점에서는 알 수 없었던 속마음과
          좋은 의견들을 들을 수 있어서 좋았습니다.</p>
        <div class="divisionLine" style="background-color: #EDAE30"></div>
      </div>
      <div>
        <img src="../assets/images/zabob_logo.png" alt="">
        <p class="majorGameSubTitle" style="color: #EE8292">자밥 스튜디오 권대현 대표님</p>
        <p class="majorGameSubBody">스토어 리뷰나 지인 평가는 참고만 해야지, <br>
          믿을게 못됩니다. 이 서비스를 통해 내 게임의 반응을
          적나라하게 파악할 수 있었습니다.</p>
        <div class="divisionLine" style="background-color: #EE8292"></div>
      </div>
    </div>
    <div class="backgroundDiv two">
      <div class="backgroundColor"></div>
      <div>
        <div class="aboutContainer">
          <div class="aboutTitle">About Us</div>
          <div class="eveImgBox">
            <img src="../assets/images/eve_img.png" alt="">
          </div>
          <div class="aboutHeader">" 사용자 의견은 점점 중요해지는데, <br>왜 듣는 방법은 여전히 원시적일까요? "</div>
          <div class="aboutBody">저는 전세계 사용자를 대상으로 제품을 만들던 UX 전문가였습니다. <br>매년 개발 툴이 쏟아져도 사용자 의견 수집 방법은 늘 똑같았습니다. <br><div style="font-weight: bold;">느리거나, 비싸거나, 복잡하거나.</div></div>
          <div class="aboutBody">사용자 의견을 더 합리적으로 들을 수 있어야 한다고 생각했습니다. <br>작은 기업의 위험성을 줄여주고, 큰 기업의 리소스를 아껴주고 싶었습니다. <br>이 사업을 통해 기업들이 본질에 집중할 수 있게 돕고 싶습니다.</div>
          <div class="aboutBody"> - 포메이커스 대표 이보림 올림-</div>
        </div>
      </div>
    </div>
    <div class="contentBox">
      <p>서비스</p>
    </div>
    <div class="serviceContainer">
      <div>
        <p class="serviceTitle">게임사 규모에 맞춘 테스트 플랜</p>
        <div class="divisionLine"></div>
        <p class="serviceSub">부담 없는 트라이얼부터 디테일한 스탠다드까지.</p>
        <section>
          <div class="buttons">
            <button class="button is-medium is-warning" @click="warning">
              자세히 보기
            </button>
          </div>
        </section>
      </div>
    </div>
    <div class="backgroundDiv three">
      <div class="backgroundColor"></div>
      <div>
        <div class="teamContainer">
          <div class="teamTitle">삼성이 선택한 젊은 IT 스타트업, <br>" 포메이커스 "
            <section>
              <div class="buttons">
                <button class="button is-medium is-warning" @click="warning">
                  팀 소개 보기
                </button>
              </div>
            </section>
          </div>
          <div class="teamBody">포메이커스는 삼성전자에서 직접 선정하고, <br>삼성벤처투자에서 투자한 주목받는 스타트업입니다.</div>
        </div>
      </div>
    </div>
    <div class="contentBox">
      <p>특장점</p>
    </div>
    <div class="advantageContainer">
      <div class="advantageBox1">
        <div class="advantageImg"></div>
        <p class="advantageTitle">실제 게이머로 이루어진 테스터</p>
        <p class="advantageInt">5,000+</p>
        <p class="advantageBody">단순 알바가 아닌, 게임을 정말 좋아하는 <br>
          실제 게이머들이 테스터로 활동하고 있습니다.</p>
        <div class="divisionLine"></div>
      </div>
      <div class="advantageBox2">
        <div class="advantageImg2"></div>
        <p class="advantageTitle">다양한 규모의 포메이커스 이용사</p>
        <p class="advantageInt">80+</p>
        <p class="advantageBody">대형 퍼블리셔 부터 인디 게임사까지. <br>
          다양한 고객들이 포메이커스를 사용하고 계십니다.</p>
        <div class="divisionLine"></div>
      </div>
    </div>
    <div class="partnerContainer">
      <div class="partnerDiv">
        <p class="partnerTitle">포메이커스는 든든한 파트너와 함께합니다.</p>
      </div>
      <div class="partnerDiv">
        <img src="../assets/images/partner_logo.png" alt="">
      </div>
    </div>
    <div class="backgroundDiv2 four">
      <div class="backgroundColor"></div>
      <div>
        <div class="feedbackContainer">
          <div class="feedbackTitle">유저 피드백 만큼 값진 것은 없습니다.<br>
            <div class="feedbackBody">진짜 게이머에게 내 게임에 대한 의견을 들어보세요.</div><br>
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
      this.$buefy.snackbar.open(`Default, positioned bottom-right with a green 'OK' button`)
    },
    warning() {
      this.$buefy.snackbar.open({
        message: '"테스트 플랜 보기" 버튼이 클릭되었습니다!!!',
        type: 'is-warning',
        position: 'is-top',
        actionText: 'OK',
        indefinite: true,
      })
    },
  }
};
</script>

<style scoped lang="scss">
  // 백그라운드 배경
  .one{
    background-image: url('../assets/images/home_back1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .two{
    background-image: url('../assets/images/home_back2.jpg');
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
  .three{
    background-image: url('../assets/images/home_back4.jpg');
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
  .four{
    background-image: url('../assets/images/home_back5.jpg');
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

  // 첫번째 백그라운드
  .backgroundDiv{
    width: 100vw;
    height: 100vh;
    padding: 20px;
    margin: 0;
    top: 0;
    left: 0;
    background-size: cover;
    background-attachment: fixed;
    border: 0;
    display: table-cell;
    vertical-align: middle;
    font-size: 100%;
    text-align: inherit;
    .captionContainer {
      max-width: 1480px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      vertical-align: middle;
      .captionTitle {
        max-width: 800px;
        width: 100%;
        display: table;
        color: #222222;
        font-weight: 700;
        font-size: 50px;
        text-align: inherit;
        letter-spacing: -0.02em;
        line-height: 1.15em;
      }
      .captionBody {
        margin-top: 20px;
        vertical-align: middle;
        color: #222222;
        font-weight: 700;
        font-size: 20px;
        text-align: inherit;
        letter-spacing: 0.01em;
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
        background-color: #00BFBA;
        border: 2px solid #00BFBA;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: normal;
        outline: none;
        &:hover{
          background-color:#53C6C2;
          color: #FFFFFF;
          font-weight:bold;
          border-color: #53C6C2;
        }
      }
    }
  }

  // 주요 이용 게임 & 그외 컨텐츠박스 공통 style
  .contentBox{
    z-index: 1;
    width: 100%;
    min-height: 100%;
    margin-bottom: 0;
    top: 0;
    left: 0;
    padding: 16px;
    position: relative;
    background-color: #41BFB9;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    letter-spacing: 0.02em;
    line-height: 1.5em;
  }
  .majorGameImg {
    padding: 15px;
    text-align: center;
  }
  .majorGameSubContainer {
    width: 100%;
    padding: 50px 20px 60px 20px;
    margin: 0 auto;
    background-color: #333333;
    text-align: center;
    display: flex;
    justify-content: center;
    .majorGameSubTitle {
      color: rgb(0, 191, 186);
      font-weight: bold;
      font-size: 20px;
    }
    .divisionLine {
      width: 25%;
      background-color: #00BFBA;
      min-height: 1px;
      display: inline-block;
    }
    .majorGameSubBody {
      color: rgb(255, 255, 255);
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.02em;
      line-height: 2em;
      max-width: 410px;
      padding: 30px 40px 20px 40px;
    }
    img {
      width: 25%;
      margin-bottom: 30px;
    }
  }

  // 두번째 백그라운드
  .aboutContainer {
    z-index: 10000;
    position: relative;
    max-width: 1480px;
    width: 100%;
    height: 100%;
    margin: 220px auto;
    vertical-align: middle;
    .aboutTitle {
      color: #FFFFFF;
      font-weight: 700;
      font-size: 28px;
      text-align: inherit;
      letter-spacing: 0.02em;
      line-height: 1.5em;
      padding: 16px 0;
    }
    .eveImgBox {
      width: 28%;
      padding: 16px 0;
      img {
        width: 100%;
        padding: 16px 0;
      }
    }
    .aboutHeader {
      padding: 16px 0;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 30px;
      text-align: inherit;
      letter-spacing: 0.02em;
      line-height: 1.5em;
    }
    .aboutBody {
      padding: 16px 0;
      color: #FFFFFF;
      font-weight: 400;
      font-size: 20px;
      text-align: inherit;
      letter-spacing: 0.02em;
      line-height: 2em;
    }
  }

  // 서비스
  .serviceContainer {
    width: 100%;
    padding: 70px 0;
    margin: 0 auto;
    background-color: #333333;
    text-align: center;
    display: flex;
    justify-content: center;
    .serviceTitle {
      padding: 10px 0 15px 0;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0.02em;
      line-height: 1.5em;
    }
    .divisionLine {
      width: 100%;
      background-color: #00BFBA;
      min-height: 1px;
      display: inline-block;
    }
    .serviceSub {
      color: #FFFFFF;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0.02em;
      line-height: 2em;
      padding: 25px 95px 20px 95px;
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
        margin-top: 25px;
        position: relative;
        background-color: #00BFBA;
        border: 2px solid #00BFBA;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: normal;
        outline: none;
        &:hover{
          background-color:#53C6C2;
          color: #FFFFFF;
          font-weight:bold;
          border-color: #53C6C2;
        }
      }
    }
  }

  // 세번째 백그라운드
  .teamContainer {
    z-index: 10000;
    position: relative;
    max-width: 1480px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    vertical-align: middle;
    display: flex;
    .teamTitle {
      max-width: 800px;
      width: 100%;
      display: table;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 53px;
      text-align: inherit;
      letter-spacing: 0.02em;
      line-height: 1.5em;
    }
    .teamBody {
      margin-top: 20px;
      vertical-align: middle;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 20px;
      text-align: inherit;
      letter-spacing: 0.01em;
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
      &:hover{
        background-color:rgb(255, 255, 255);
        color: rgb(34, 34, 34);
        font-weight:bold;
        border-color: rgb(255, 255, 255);
      }
    }
  }

  // 특장점
  .advantageContainer {
    width: 100%;
    margin: 0 auto;
    background-color: #333333;
    text-align: center;
    display: flex;
    justify-content: center;
    .advantageBox1 {
      margin: 80px;
      width: 34%;
      .advantageImg {
        padding-top: 34%;
        background-image: url("../assets/images/service1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .advantageTitle {
        margin: 30px 0 0 0;
        color: #00BFBA;
        font-weight: bold;
        font-size: 30px;
      }
      .divisionLine {
        width: 100%;
        background-color: #00BFBA;
        min-height: 1px;
        display: inline-block;
      }
      .advantageInt {
        color: #FFFFFF;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: 1.5em;
      }
      .advantageBody {
        color: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.02em;
        line-height: 2em;
        padding: 30px 40px 20px 40px;
      }
    }
    .advantageBox2 {
      margin: 80px;
      width: 34%;
      .advantageImg2 {
        padding-top: 34%;
        background-image: url("../assets/images/service2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .advantageTitle {
        margin: 30px 0 0 0;
        color: #EE8292;
        font-weight: bold;
        font-size: 30px;
      }
      .divisionLine {
        width: 100%;
        background-color: #EE8292;
        min-height: 1px;
        display: inline-block;
      }
      .advantageInt {
        color: #FFFFFF;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: 1.5em;
      }
      .advantageBody {
        color: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.02em;
        line-height: 2em;
        padding: 30px 40px 20px 40px;
      }
    }
  }

  // 든든한 파트너
  .partnerContainer {
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .partnerDiv {
      margin: 40px 80px;
      width: 34%;
      .partnerTitle {
        color: rgb(51, 51, 51);
        font-weight: bold;
        font-size: 30px;
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
        background-color: #00BFBA;
        border: 2px solid #00BFBA;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: normal;
        outline: none;
        &:hover{
          background-color:#53C6C2;
          color: #FFFFFF;
          font-weight:bold;
          border-color: #53C6C2;
          opacity: 0.8;
        }
      }
    }
  }


</style>
