<template>
  <section class="login-page">
    <img src="/logo.png" />
    <div class="login-form">
      <b-field label="이메일">
        <b-input type="email" v-model="email" required rounded />
      </b-field>
      <b-field label="비밀번호">
        <b-input
          type="password"
          v-model="password"
          @keyup.native.enter="login"
          required
          password-reveal
          rounded
        />
      </b-field>

      <div class="login-button-container">
        <b-button @click.prevent="login" expanded>
          로그인
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import config from "../../config";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  // created() {
  //   this.$store.isLoggedIn = false;
  // },
  methods: {
    login() {
      const serverURL = config.serverBaseUrl;
      const reqBody = {
        email: this.email,
        password: this.password
      };

      axios
        .post(`${serverURL}/auth/login`, reqBody)
        .then(res => {
          // this.$store.commit("SET_COOKIE");
          console.log(res);
          // this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
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

  img {
    width: 10vw;
    min-width: 100px;
    margin-bottom: 1rem;
  }
}

.login-form {
  width: 30vw;
  min-width: 400px;
  background-color: #00bfba;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
}

.login-button-container {
  margin-top: 2rem;

  button {
    background-color: #f8ab1c;
    border: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
}
</style>
