<template>
  <section class="login-page">
    <div class="box" style="padding: 3rem; width: 35%; min-width: 300px">
      <img src="/logo.png" style="display: block; margin: 0 auto 2rem auto" />
      <b-field label="이메일">
        <b-input type="email" v-model="email" required />
      </b-field>
      <b-field label="비밀번호">
        <b-input
          type="password"
          v-model="password"
          @keyup.native.enter="login"
          required
          password-reveal
        />
      </b-field>

      <div class="auth-button-container">
        <b-button class="is-primary login-button" @click.prevent="login" expanded>
          로그인
        </b-button>
        <b-button class="is-light" @click.prevent="signUp" expanded>회원가입</b-button>
      </div>
    </div>
  </section>
</template>

<script>
import request from "../common/utils/http";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    openToast(type, message) {
      this.$buefy.toast.open({ type, message });
    },
    login() {
      const reqBody = {
        email: this.email,
        password: this.password
      };

      request
        .post("/auth/login", reqBody)
        .then(res => {
          if (res.status === 200) {
            this.openToast('is-success', '👏 로그인 성공 👏');
            this.$router.push("/");
          } else if (res.status === 204) {
            this.openToast('is-warning', '회원가입 후 로그인을 진행해주세요!');
          } else {
            console.log(res.status);
          }
        })
        .catch(err => {
          console.error(err);
          // 로그인 실패 관련 토스트 띄우기

          if (err.response.status === 401) {
            this.openToast('is-danger', '비밀번호가 일치하지 않습니다!');
          } else if (err.response.status === 400) {
            this.openToast('is-danger', '이메일과 비밀번호를 입력해 주세요!');
          } else {
            this.openToast('is-danger', '로그인 실패! 잠시 후 재시도해주세요!');
          }
        });
    },
    signUp() {
      this.$router.push('/sign-up');
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    width: 10vw;
    min-width: 100px;
    margin-bottom: 1rem;
  }
}

.auth-button-container {
  margin-top: 2rem;

  .login-button {
    margin-bottom: 1rem;
  }
}
</style>
