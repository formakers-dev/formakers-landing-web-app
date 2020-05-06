<template>
  <div>
    <div class="backgroundDiv one">
      <div>
        <div class="captionContainer">
          <div class="captionTitle">지인, 개발자, 상사에게 물어보지 마세요.
            실제 게이머에게 물어보세요.</div>
          <div class="captionBody">예측은 그만! 게이머의 마음을 정확히 알고 싶다면,
            게이머에게 물어봐야 합니다.</div>
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
        <p class="majorGameSubTitle">버프스튜디오 김도형 대표님</p>
        <div class="divisionLine"></div>
        <p class="majorGameSubBody">포메이커스, 너무 만족했습니다.
          게임에 대해 유저 분들의 퀄리티 좋은 피드백을 받아 게임을
          개선하고 싶다면 추천드려요!!</p>
        <img src="../assets/images/buf_logo.png" alt="">
      </div>
      <div>
        <p class="majorGameSubTitle" style="color: #EDAE30">원더스쿼드 서관희 대표님</p>
        <div class="divisionLine" style="background-color: #EDAE30"></div>
        <p class="majorGameSubBody">솔직하고 정성스럽게 써주신 분들이 많아서
          단지 게임 평점에서는 알 수 없었던 속마음과
          좋은 의견들을 들을 수 있어서 좋았습니다.</p>
        <img src="../assets/images/wonder_logo.png" alt="">
      </div>
      <div>
        <p class="majorGameSubTitle" style="color: #EE8292">자밥 스튜디오 권대현 대표님</p>
        <div class="divisionLine" style="background-color: #EE8292"></div>
        <p class="majorGameSubBody">스토어 리뷰나 지인 평가는 참고만 해야지,
          믿을게 못됩니다. 이 서비스를 통해 내 게임의 반응을
          적나라하게 파악할 수 있었습니다.</p>
        <img src="../assets/images/zabob_logo.png" alt="">
      </div>
    </div>

    <div class="backgroundDiv two">
      <div class="captionTitle">1</div>

    </div>
    <div class="contentBox">
      <p>본문</p>
    </div>

    <div class="backgroundDiv three">
      <div class="captionTitle">1</div>
    </div>
    <div class="contentBox">
      <p>본문</p>
    </div>

    <div class="backgroundDiv four">
      <div class="captionTitle">1</div>
    </div>
    <div class="contentBox">
      <p>본문</p>
    </div>

    <div class="backgroundDiv five">
      <div class="captionTitle">1</div>
    </div>
    <div class="contentBox">
      <p>본문</p>
    </div>

    <footer>
      <span class="copyright">&copy; 이거슨 푸터</span>


    </footer>
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

<style lang="scss" src="./Home.scss">

</style>
