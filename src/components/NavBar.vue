<template>
  <b-navbar shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="/formakers_logo.png" alt="ForMakers" />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <div class="button is-light is-small" @click.prevent="moveToSignUp">회원가입</div>
          <div class="button is-primary is-small" @click.prevent="moveToLogin">로그인</div>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    moveToLogin() {
      this.$router.push("/login");
    },
    moveToSignUp() {
      this.$router.push("/sign-up");
    }
  }
}
</script>

<style scoped>

</style>
