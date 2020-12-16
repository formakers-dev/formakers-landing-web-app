<template>
  <div id="home">
    <section class="main">
      <h1 class="title">내부 게임 테스트 힘드셨죠?</h1>
      <h3 class="sub-title">실제 유저에게 물어보면 더 정확하고 편합니다. #비대면 #온라인 #정성조사 #FQA</h3>
      <b-button class="is-primary">무료 인디 플랜 신청</b-button>
    </section>

    <section class="about">
      <h1 class="title">About Us</h1>
      <img src="/eve.png" />
      <h3 class="sub-title">" 사용자 의견은 점점 중요해지는데, 왜 듣는 방법은 여전히 원시적일까요? "</h3>
      <p>저는 전세계 사용자를 대상으로 제품을 만들던 UX 전문가였습니다.</p>
      <p>매년 개발 툴이 쏟아져도 사용자 의견 수집 방법은 늘 똑같았습니다.</p>
      <p>느리거나, 비싸거나, 복잡하거나.</p>
      <br />
      <p>사용자 의견을 더 합리적으로 들을 수 있어야 한다고 생각했습니다.</p>
      <p>작은 기업의 위험성을 줄여주고, 큰 기업의 리소스를 아껴주고 싶었습니다.</p>
      <p>이 사업을 통해 기업들이 본질에 집중할 수 있게 돕고 싶습니다.</p>
      <br />
      <p>- 포메이커스 대표 이보림 올림-</p>
    </section>

    <section class="contact">
      <h2 class="title">궁금하신 점이 있으신가요?</h2>
      <p>support@formakers.net</p>
      <p>메일 보내주시면 안내드리도록 하겠습니다.</p>
      <p>(상담 시간 : 평일 10시 ~ 17시)</p>
    </section>

    <section class="footer">
      <p>Copyright © 2020 ForMakers</p>
      <p>상호: 포메이커스 | 대표: 이보림 | 이메일: support@formakers.net</p>
      <p>주소: 서울특별시 서초구 남부순환로289길 5 삼영빌딩 | 사업자등록번호: 280-86-01268 | 통신판매: 2020-서울서초-1319</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1.1rem;
}

section {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}

.main {
  min-height: 95vh;
}

.about {
  min-height: 100vh;
  background-color: #2c3e50;

  * {
    color: #fff;
  }

  img {
    margin: 2rem 0;
  }
}

.contact {
  min-height: 50vh;
}

.footer {
  height: 10vh;
  background-color: #d6d2c4;

  p {
    font-size: 0.8rem;
  }
}
</style>
