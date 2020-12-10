<template>
  <div>
    <div class="columns">
      <div class="column is-narrow">
        <b-menu class="menu">
          <b-menu-list>
            <b-menu-item label="내 의뢰 목록" tag="router-link" to="/my-page/request-list"/>
            <b-menu-item label="로그아웃" @click="onClickLogout"/>
          </b-menu-list>
        </b-menu>
      </div>

      <div class="column">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPage",
  data() {
    return {
      isSidebarOpened: true
    };
  },
  methods:{
    onClickLogout() {
      console.log("logout!");
    }
  }
};
</script>

<style scoped>
.menu {
  padding: 4rem 3rem 2rem 4rem;
}
</style>