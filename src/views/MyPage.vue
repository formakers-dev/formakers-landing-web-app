<template>
  <div>
    <div class="columns">
      <div class="column is-narrow">
        <b-menu class="menu">
          <b-menu-list>
            <b-menu-item
              label="내 의뢰 목록"
              tag="router-link"
              to="/my-page/request-list"
            />
            <b-menu-item label="로그아웃" @click="onClickLogout" />
          </b-menu-list>
        </b-menu>
      </div>

      <div class="column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/common/utils/http";

export default {
  name: "MyPage",
  methods: {
    onClickLogout() {
      request
        .post("/auth/logout")
        .then(() => {
          this.$buefy.toast.open({
            type: "is-success",
            message: "성공적으로 로그아웃되었습니다 👋"
          });
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
          this.$buefy.toast.open({
            type: "is-danger",
            message: "에러가 발생했습니다. 다시 한 번 시도해주세요. 🙏"
          });
        });
    }
  }
};
</script>

<style scoped>
.menu {
  padding: 4rem 3rem 2rem 4rem;
}
</style>
