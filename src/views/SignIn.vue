<template>
  <div class="background">
    <div class="menuBackground"></div>
    <div class="loginTitle">
      <span>로그인</span>
    </div>

    <form v-on:submit.prevent="submit">
      <div class="inputContainer">
        <div class="emailInput">
          <label for="email">이메일</label>
          <input
            v-model="email"
            id="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            autofocus
          />
        </div>
        <div class="passwordInput">
          <label for="password">비밀번호</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
      </div>

      <div class="infoBox">
        <span>비밀번호 찾기</span>
        <span>비회원 주문 조회하기</span>
      </div>

      <div class="signInBtn">
        <button type="submit" class="button is-medium is-warning">
          로그인하기
        </button>
      </div>
    </form>

    <section>
      <div class="signUpBtn">
        <button class="button is-medium is-warning" @click="warning">
          회원 가입하기
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
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
  height: 810px;
}

//메뉴 백그라운드
.menuBackground {
  padding-top: 55px;
  padding-bottom: 50px;
  background-color: #333333;
}

.loginTitle {
  background-color: #333333;
  padding: 70px 50px 0 50px;
  max-width: 500px;
  margin: auto;
  font-size: 25px;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.02em;
}

// 인풋
.inputContainer {
  padding: 40px 0;
  .emailInput,
  .passwordInput {
    padding: 0 50px;
    max-width: 500px;
    margin: auto;
    label {
      display: block;
      color: #ffffff;
      padding: 15px 0;
      font-size: 16px;
    }
    input {
      padding: 10px;
      width: 100%;
      color: #ffffff;
      font-size: 16px;
      background-color: #333333;
      border: 2px solid #41bfb9;
    }
  }
}

// 비밀번호 찾기, 비회원 조회
.infoBox {
  text-align: center;
  display: flex;
  justify-content: space-between;
  max-width: 240px;
  margin: auto;
  color: #ffffff;
  font-size: 15px;
}
.infoBox span {
  cursor: pointer;
  &:hover {
    color: #00bfba;
  }
}

// 로그인 버튼
.signInBtn {
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
.signUpBtn {
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
      background-color: #00bfba;
      color: #ffffff;
      font-weight: bold;
      border-color: #53c6c2;
    }
  }
}
</style>
