<template>
  <b-navbar class="is-link" :fixed-top="true" :transparent="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/images/formakers_logo.png" alt="formakers_logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        HOME
      </b-navbar-item>
      <b-navbar-item href="#">
        플랜 소개
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/process' }">
        프로세스
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/company' }">
        회사 소개
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link to="signin">
            <a class="button is-light">
              LOG IN
            </a>
          </router-link>
          <a class="button is-light">
            CART
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
// 네브바
nav.navbar.is-fixed-top {
  background: transparent;
  font-size: 18px;
  font-weight: 700;
  padding: 20px;
  img {
    padding-right: 40px;
  }
}

// 메뉴 텍스트
.navbar.is-link .navbar-start > .navbar-item.router-link-exact-active {
  color: #49bbb8;
}
.navbar.is-link .navbar-start > .navbar-item {
  transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1);
  &:hover {
    color: #49bbb8;
  }
}

// 로긴 & 카트 버튼
.navbar-end > .navbar-item {
  .button {
    margin: 0 10px;
    background-color: #41bfb9;
    color: #ffffff;
    transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1);
    &:hover {
      background-color: #53c6c2;
    }
  }
}

// 반응형
@media screen and (max-width: 1024px) {
  // 메뉴 텍스트
  .navbar-item {
    color: #49bbb8;
  }
  .navbar-item.router-link-exact-active {
    color: #49bbb8;
  }

  // 메뉴
  .navbar-item {
    background: transparent;
    color: black;
  }
  .navbar.is-link .navbar-start > .navbar-item {
    display: flex;
    justify-content: center;
    &:hover {
      color: #49bbb8;
    }
  }

  // 로긴 & 카트 버튼
  .navbar-end > .navbar-item {
    display: flex;
    justify-content: center;
    .button {
      background-color: #41bfb9;
      color: #ffffff;
      &:hover {
        background-color: #53c6c2;
      }
    }
  }
}
</style>
