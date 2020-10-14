<template>
  <div class="result-page">
    <div v-if="loading">
      <h1>유저 정보를 불러오고 있습니다...</h1>
      <div id="skeleton">
        <b-skeleton width="25%" position="is-centered"></b-skeleton>
        <b-skeleton width="50%" position="is-centered"></b-skeleton>
        <b-skeleton width="75%" position="is-centered"></b-skeleton>
        <b-skeleton position="is-centered"></b-skeleton>
      </div>
    </div>

    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="!loading">
      <ShowFilters />
      <h2>선택하신 조건과 꼭 맞는 {{ userCount }}명의 유저가 검색되었습니다! 🎉 </h2>
      <div v-for="(user, index) in users" :key="user.id">
        <UserCard :user="user" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import ShowFilters from "@/components/ShowFilters";
import UserCard from "@/components/UserCard";
import config from "../../config";

export default {
  name: "Result",
  components: {
    ShowFilters,
    UserCard
  },
  data() {
    return {
      loading: false,
      error: "",
      userCount: 0,
      users: {}
    };
  },
  computed: {
    ...mapState(["selectedOptions"])
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      const serverURL = config.serverBaseUrl;
      axios
        .post(`${serverURL}/users/search`, this.selectedOptions)
        .then(({ data }) => {
          this.userCount = data.count;
          this.users = data.users;
        })
        .catch(() => {
          this.error =
            "유저를 불러오는데 에러가 발생했습니다. 다시 시도해주세요.";
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
#skeleton {
  width: 50vw;
  margin: 5rem auto;
}
</style>
