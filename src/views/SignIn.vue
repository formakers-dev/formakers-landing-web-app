<template>
  <div class="background">
    <div class="menuBackground"></div>
    <div class="loginTitle">
      <span>로그인</span>
    </div>

    <form v-on:submit.prevent="onSubmit">
      <div class="inputContainer">
        <div class="emailInput">
          <label for="email">이메일</label>
          <input
            v-model="email"
            id="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            autofocus
            ref="emailInputStyle"
          />
          <span v-if="msg.email">{{ msg.email }}</span>
        </div>
        <div class="passwordInput">
          <label for="password">비밀번호</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            ref="passwordInputStyle"
          />
          <span v-if="msg.password">{{ msg.password }}</span>
        </div>
      </div>

      <div class="infoBox">
        <span>비밀번호 찾기</span>
        <span>비회원 주문 조회하기</span>
      </div>

      <div class="signInBtn">
        <button
          v-bind:disabled="!isEmailValid || !password"
          type="submit"
          class="button is-medium is-warning"
        >
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
import { validateEmail } from "../utills/validation";

export default {
  data() {
    return {
      email: "",
      password: "",
      msg: []
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    }
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
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
    },
    // submit 이벤트
    onSubmit() {
      console.log(`email : ${this.email}`);
      console.log(`password : ${this.password}`);
    },
    // 유효성 검증
    validateEmail(value) {
      if (
        /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(
          value
        )
      ) {
        this.msg["email"] = "";
        this.$refs.emailInputStyle.style.border = "2px solid #41bfb9";
      } else {
        this.msg["email"] = "이메일을 정확히 입력해주세요";
        this.$refs.emailInputStyle.style.border = "2px solid indianred";
      }
    },
    validatePassword(value) {
      let difference = 8 - value.length;
      if (value.length < 8) {
        this.msg[
          "password"
        ] = `8자 이상 입력해주세요. (현재 ${difference}자 이상 입력 필수)`;
        this.$refs.passwordInputStyle.style.border = "2px solid indianred";
      } else {
        this.msg["password"] = "";
        this.$refs.passwordInputStyle.style.border = "2px solid #41bfb9";
      }
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
    span {
      color: indianred;
      display: block;
      padding-top: 20px;
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
