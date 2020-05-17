<template>
  <div class="background">
    <div class="menuBackground"></div>
    <div class="signupTitle">
      <span>회원가입</span>
    </div>
    <template>
      <section class="loginContainer">
        <form onsubmit="">
          <b-field label="이메일 *">
            <b-input
              type="email"
              maxlength="30"
              placeholder="이메일을 입력해주세요"
            >
            </b-input>
          </b-field>

          <b-field label="이름 *">
            <b-input
              type="email"
              maxlength="30"
              placeholder="이름을 입력해주세요"
            >
            </b-input>
          </b-field>

          <b-field label="비밀번호 *">
            <b-input
              type="password"
              placeholder="비밀번호는 6자리 이상이어야 합니다."
              password-reveal
            >
            </b-input>
          </b-field>

          <b-field label="비밀번호 확인 *">
            <b-input
              type="password"
              placeholder="비밀번호를 재확인 해주세요."
              password-reveal
            >
            </b-input>
          </b-field>

          <b-field label="전화번호 *">
            <b-input
              type="tel"
              pattern="\d{2,3}-\d{3,4}-\d{4}"
              placeholder="전화번"
            ></b-input>
          </b-field>
        </form>
      </section>
    </template>

    <div class="infoBox">
      <span>비밀번호 찾기</span>
      <span>비회원 주문 조회하기</span>
    </div>

    <section>
      <div class="loginBtn">
        <button class="button is-medium is-warning" @click="warning">
          가입하기
        </button>
      </div>
    </section>
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
.background {
  background-color: #333333;
  height: 900px;
}

//메뉴 백그라운드
.menuBackground {
  padding-top: 55px;
  padding-bottom: 50px;
  background-color: #333333;
}

.signupTitle {
  background-color: #333333;
  padding: 70px 50px 0 50px;
  max-width: 500px;
  margin: auto;
  font-size: 22px;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.loginContainer {
  background-color: #333333;
  padding: 50px;
  max-width: 500px;
  margin: auto;
}

// 비밀번호 찾기, 비회원 조회
.infoBox {
  text-align: center;
  display: flex;
  justify-content: space-between;
  max-width: 220px;
  margin: auto;
  color: #ffffff;
  font-size: 14px;
}
.infoBox span {
  cursor: pointer;
  &:hover {
    color: #00bfba;
  }
}

// 로그인 버튼
.loginBtn {
  z-index: 10000;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 30px 0 20px 0;
  .button.is-medium {
    z-index: 9;
    width: auto;
    height: auto;
    padding: 1em 6em;
    position: relative;
    background-color: #00bfba;
    border: 2px solid #00bfba;
    color: #ffffff;
    font-size: 15px;
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

// 회원가입 버튼
.signupBtn {
  z-index: 10000;
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
  .button.is-medium {
    z-index: 9;
    width: auto;
    height: auto;
    padding: 1em 5.45em;
    position: relative;
    border: 2px solid #00bfba;
    background-color: transparent;
    color: #00bfba;
    font-size: 15px;
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
</style>
