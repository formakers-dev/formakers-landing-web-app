<template>
  <div>

    <div class="backgroundDiv one">
      <div>

      </div>
      <div class="captionTitle">지인, 개발자, 상사에게 물어보지 마세요.
      실제 게이머에게 물어보세요.</div>
      <div class="captionBody">예측은 그만! 게이머의 마음을 정확히 알고 싶다면,
        게이머에게 물어봐야 합니다.</div>
      <a>
        <div>테스트 플랜 보기</div>
      </a>
    </div>
    <div class="content">
      <div>
        <p>본문</p>
      </div>
    </div>

    <div class="backgroundDiv two">
      <div class="captionTitle">1</div>
    </div>
    <div class="content">
      <p>본문</p>
    </div>

    <div class="backgroundDiv three">
      <div class="captionTitle">1</div>
    </div>
    <div class="content">
      <p>본문</p>
    </div>

    <div class="backgroundDiv four">
      <div class="captionTitle">1</div>
    </div>
    <div class="content">
      <p>본문</p>
    </div>

    <div class="backgroundDiv five">
      <div class="captionTitle">1</div>
    </div>
    <div class="content">
      <p>본문</p>
    </div>

    <footer>
      <span class="copyright">&copy; 이거슨 푸터</span>


    </footer>
  </div>
</template>

<script>


export default {

};
</script>

<style scoped lang="scss">

  .backgroundDiv{
    text-align: inherit;
    /*height: 100%;*/
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    background-size: cover;
    background-attachment: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    border: 0;
    display: table-cell;
    vertical-align: middle;
    .captionTitle {
      /*height: 100vh;*/
      width: 100%;
      max-width: 800px;
      font-family: sans-serif;
      font-weight: 700;
      font-size: 50px;
      text-align: inherit;
      letter-spacing: -0.02em;
      line-height: 1.15em;
      /*display: table-cell;*/
      /*vertical-align: middle;*/
    }
    .captionBody {
      margin-top: 20px;
      font-family: sans-serif;
      font-weight: 700;
      font-size: 20px;
      text-align: inherit;
      letter-spacing: 0.01em;
      line-height: 2em;
      vertical-align: middle;
    }
  }

  .content{
    position: relative;
    min-height: 100%;
    /*padding: 1em 0;*/
    z-index: 1;
    font-size: 24px;
    background-color: #41BFB9;
  }

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
  }
  .three{
    background-image: url('../assets/images/home_back3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .four{
    background-image: url('../assets/images/home_back4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .five{
    background-image: url('../assets/images/home_back5.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  footer{
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
  }
  .copyright {
    text-align: center;
    padding: 15px;
    display: block;
  }


</style>
