<template>
  <div class="background">
    <div class="menuBackground"></div>
    <div class="findPasswordTitle">
      <span>비밀번호 찾기</span>
    </div>

    <form v-on:submit.prevent>
      <div class="inputContainer">
        <div class="nameInput">
          <label for="name">이름</label>
          <input
            v-model="name"
            id="name"
            type="text"
            placeholder="이름을 입력해주세요."
            autofocus
            ref="nameInputStyle"
          />
          <span v-if="msg.name">{{ msg.name }}</span>
        </div>
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
      </div>

      <div class="emailBtn">
        <button
          type="submit"
          class="button is-medium is-warning"
          v-on:click="findPassword"
        >
          이메일 보내기
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";

export default {
  data() {
    return {
      name: "",
      email: "",
      msg: []
    };
  },
  watch: {
    name(value) {
      this.name = value;
      this.validateName(value);
    },
    email(value) {
      this.email = value;
      this.validateEmail(value);
    }
  },
  methods: {
    findPassword() {
      this.msg = [];
      const { email, name } = this;
      if (!email || !name) {
        this.msg["email"] = "모든 항목을 입력해주세요.";
      }
      if (name.length < 2) {
        return true;
      } else {
        firebase
          .auth()
          .sendPasswordResetEmail(this.email)
          .then(() => {
            alert("발송 완료! 이메일을 확인해주세요.");
            console.log(this.name);
          })
          .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + errorCode);
          });
      }
    },
    // 유효성 검증
    validateName(value) {
      if (value.length < 2) {
        // console.log(value.length);
        this.msg["name"] = `이름을 정확히 입력해주세요.`;
        this.$refs.nameInputStyle.style.border = "2px solid indianred";
      } else {
        this.msg["name"] = "";
        this.$refs.nameInputStyle.style.border = "2px solid #41bfb9";
      }
    },
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

.findPasswordTitle {
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
  .nameInput {
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

// 이메일 보내기
.emailBtn {
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
