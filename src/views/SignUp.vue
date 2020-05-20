<template>
  <div class="background">
    <div class="menuBackground"></div>
    <div class="loginTitle">
      <span>로그인</span>
    </div>

    <form v-on:submit.prevent="onSubmit">
      <div class="inputContainer">
        <div class="emailInput">
          <label for="email">이메일 *</label>
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
        <div class="nameInput">
          <label for="name">이름 *</label>
          <input
            v-model="name"
            id="name"
            type="text"
            placeholder="이름을 입력해주세요."
            ref="nameInputStyle"
          />
          <span v-if="msg.name">{{ msg.name }}</span>
        </div>
        <div class="passwordInput">
          <label for="password">비밀번호 *</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            ref="passwordInputStyle"
          />
          <span v-if="msg.password">{{ msg.password }}</span>
        </div>
        <div class="passwordConfirmInput">
          <label for="passwordConfirm">비밀번호 확인 *</label>
          <input
            v-model="passwordConfirm"
            id="passwordConfirm"
            type="password"
            placeholder="비밀번호를 재입력해주세요."
            ref="passwordConfirmInputStyle"
          />
          <span v-if="msg.passwordConfirm">{{ msg.passwordConfirm }}</span>
        </div>
        <div class="phoneInput">
          <label for="phone1">전화번호 *</label>
          <div>
            <input
              v-model="phone1"
              id="phone1"
              type="text"
              v-on:keypress="checkNum"
              maxlength="3"
              ref="phoneInputStyle1"
            />
            <div class="element">-</div>
            <label for="phone2"></label>
            <input
              v-model="phone2"
              id="phone2"
              type="text"
              v-on:keypress="checkNum"
              maxlength="4"
              ref="phoneInputStyle2"
            />
            <div class="element">-</div>
            <label for="phone3"></label>
            <input
              v-model="phone3"
              id="phone3"
              type="text"
              v-on:keypress="checkNum"
              maxlength="4"
              ref="phoneInputStyle3"
            />
          </div>
          <span v-if="msg.phone1 || msg.phone2 || msg.phone3">{{
            msg.phone1 || msg.phone2 || msg.phone3
          }}</span>
        </div>
      </div>

      <div class="checkboxContainer">
        <div class="agreeCheckBox">
          <label for="checkbox1"></label>
          <input type="checkbox" id="checkbox1" v-model="checked1" />
          <span
            ><router-link to="/policy" target="_blank">이용약관</router-link>과
            <a href="#">개인정보 수집 및 이용</a>에 동의합니다. <br />본
            약관에는 마케팅 정보 수신 동의에 관한 내용이 포함되어 있으며,
            <br />회원은 언제든지 회원 정보 수정에서 수신 거부로 변경할 수
            있습니다.</span
          >
        </div>

        <div class="agreeCheckBox">
          <label for="checkbox2"></label>
          <input type="checkbox" id="checkbox2" v-model="checked2" />
          <span>만 14세 이상입니다.</span>
        </div>
        <span class="error" v-if="msg.checked1 || msg.checked2">{{
          msg.checked1 || msg.checked2
        }}</span>
      </div>
      <div class="signUpBtn">
        <button
          v-bind:disabled="!isEmailValid || !password"
          type="submit"
          class="button is-medium is-warning"
        >
          가입하기
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { validateEmail } from "../utills/validation";

export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      phone1: "",
      phone2: "",
      phone3: "",
      msg: [],
      checked1: false,
      checked2: false
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
    name(value) {
      this.name = value;
      this.validateName(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
    passwordConfirm(value) {
      this.passwordConfirm = value;
      this.validatePasswordConfirm(value);
    },
    phone1(value) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (reg.exec(value) !== null) {
        return (this.phone1 = this.phone1.slice(0, -1));
      }
    },
    phone2(value) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (reg.exec(value) !== null) {
        return (this.phone2 = this.phone2.slice(0, -1));
      }
    },
    phone3(value) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (reg.exec(value) !== null) {
        return (this.phone3 = this.phone3.slice(0, -1));
      }
    }
  },
  methods: {
    // submit 이벤트
    onSubmit() {
      console.log(`email : ${this.email}`);
      console.log(`password : ${this.password}`);
      this.msg = [];
      const {
        email,
        name,
        password,
        passwordConfirm,
        phone1,
        phone2,
        phone3,
        checked1,
        checked2
      } = this;
      if (!email) {
        this.msg["email"] = "이메일 입력 필수";
        this.$refs.emailInputStyle.style.border = "2px solid indianred";
      }
      if (!name) {
        this.msg["name"] = "이름 입력 필수";
        this.$refs.nameInputStyle.style.border = "2px solid indianred";
      }
      if (!password) {
        this.msg["password"] = "비밀번호 필수";
        this.$refs.passwordInputStyle.style.border = "2px solid indianred";
      }
      if (!passwordConfirm) {
        this.msg["passwordConfirm"] = "비밀번호 재입력 필수";
        this.$refs.passwordConfirmInputStyle.style.border =
          "2px solid indianred";
      }
      if (!phone1 || !phone2 || !phone3) {
        this.msg["phone1" || "phone1" || "phone1"] = "전화번호 입력 필수";
      }
      if (!checked1 || !checked2) {
        this.msg["checked1" || "checked2"] = "체크 필수";
      }
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
    validateName(value) {
      if (value.length < 3) {
        // console.log(value.length);
        this.msg["name"] = `이름을 정확히 입력해주세요.`;
        this.$refs.nameInputStyle.style.border = "2px solid indianred";
      } else {
        this.msg["name"] = "";
        this.$refs.nameInputStyle.style.border = "2px solid #41bfb9";
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
    },
    validatePasswordConfirm(value) {
      if (this.password !== value) {
        // console.log(this.password);
        // console.log(value);
        this.msg["passwordConfirm"] = `비밀번호가 일치하지 않습니다`;
        this.$refs.passwordConfirmInputStyle.style.border =
          "2px solid indianred";
      } else {
        this.msg["passwordConfirm"] = "";
        this.$refs.passwordConfirmInputStyle.style.border = "2px solid #41bfb9";
      }
    },
    checkNum(e) {
      if (e.keyCode < 48 || e.keyCode > 57) {
        e.returnValue = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.background {
  background-color: #333333;
  height: 1200px;
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
  padding: 40px 0 30px 0;
  .emailInput,
  .nameInput,
  .passwordInput,
  .passwordConfirmInput {
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

// 휴대폰 번호 인풋
.phoneInput {
  padding: 0 50px;
  max-width: 500px;
  margin: auto;
  label {
    display: block;
    color: #ffffff;
    padding: 15px 0;
    font-size: 16px;
  }
  span {
    color: indianred;
    display: block;
    padding-top: 20px;
  }
  div {
    display: flex;
    input {
      padding: 10px;
      width: 100%;
      color: #ffffff;
      font-size: 16px;
      background-color: #333333;
      border: 2px solid #41bfb9;
    }
    .element {
      display: inline-block;
      color: #ffffff;
      text-align: center;
      font-size: 17px;
      margin: 10px;
    }
  }
}

// 체크박스
.checkboxContainer {
  padding: 0 50px;
  max-width: 500px;
  margin: auto;
  color: #ffffff;
  font-size: 15px;
  .error {
    color: indianred;
    display: block;
    padding-top: 20px;
  }
  .agreeCheckBox {
    padding: 10px 0;
    display: flex;
    #checkbox1 {
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
      width: 14px;
      height: 20px;
      margin-right: 10px;
      margin-top: 3px;
    }
    #checkbox2 {
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
      width: 14px;
      height: 14px;
      margin-right: 10px;
      margin-top: 3px;
    }
    span {
      display: block;
      color: #ffffff;
      font-size: 14px;
      a {
        color: #41bfb9;
        cursor: pointer;
      }
    }
  }
}

// 가입하기 버튼
.signUpBtn {
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
</style>
