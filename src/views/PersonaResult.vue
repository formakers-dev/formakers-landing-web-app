<template>
  <div class="result-page">
    <SearchLoading v-if="loading" />

    <SearchError v-if="error" />

    <div v-else class="result">
      <div class="result-body">
        <div class="result-title">
          <h1>
            선택하신 조건과 꼭 맞는 {{ userCount }}명의 게이머가 검색되었습니다!
            🎉
          </h1>
          <p>
            원하시는 게이머를 아래에서 선택하시면 연락을 취하거나, 게임 테스트를
            문의하실 수 있습니다.
          </p>
        </div>

        <div>
          <b-checkbox
            v-for="(user, index) in displayUsers"
            :key="user.id"
            v-model="selectedUsers"
            :native-value="users[index]"
          >
            <UserCard :user="user" :index="index" />
          </b-checkbox>
        </div>
      </div>

      <div class="fixed-sidebar">
        <ShowFilters />
        <div>
          <button
            class="change-filter-button"
            @click.prevent="$router.push('/')"
          >
            검색 조건 다시 설정하기
          </button>
          <button
            class="request-button"
            :class="{ active: selectedUsers.length }"
            @click.prevent="openModal()"
          >
            선택한 게이머<br />
            {{ selectedUsers.length }}명에게 연락하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import SearchLoading from "@/components/SearchLoading";
import SearchError from "@/components/SearchError";
import ShowFilters from "@/components/ShowFilters";
import UserCard from "@/components/UserCard";
import SendRequestModal from "@/components/SendRequestModal";
import { showDisplayText } from "@/utils/textFormatter";
import config from "../../config";

export default {
  name: "PersonaResult",
  components: {
    SearchLoading,
    SearchError,
    ShowFilters,
    UserCard
  },
  data() {
    return {
      loading: false,
      error: false,
      userCount: 0,
      users: [],
      displayUsers: [],
      selectedUsers: []
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
          this.displayUsers = data.users.map(user => showDisplayText(user));
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    openModal() {
      if (this.selectedUsers.length) {
        this.$buefy.modal.open({
          parent: this,
          props: {
            selectedUsers: this.selectedUsers
          },
          component: SendRequestModal,
          hasModalCard: true,
          trapFocus: false
        });
      } else {
        this.$buefy.snackbar.open({
          message: "게이머를 먼저 선택해주세요!",
          position: "is-bottom-right",
          type: "is-warning"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.result-page {
  margin: 0 auto;
}

.result {
  display: flex;
}

.fixed-sidebar {
  position: sticky;
  top: 0;
  left: 0;
  width: 25vw;
  min-width: 250px;
  height: 100vh;
  background-color: #00bfba;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .change-filter-button {
    background-color: #198380;
    width: 70%;
    margin: 0 auto 3rem;
    padding: 0.2rem 0;
    border: none;
    border-radius: 10px;
    font-family: "Do Hyeon", sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .request-button {
    background-color: #ebebeb;
    color: #808080;
    width: 70%;
    margin: 0 auto;
    padding: 1.5rem;
    border: none;
    border-radius: 10px;
    font-family: "Do Hyeon", sans-serif;
    font-size: 1.5rem;
    cursor: pointer;

    &.active {
      background-color: #f8ab1c;
      color: initial;

      &:hover {
        transform: scale(1.05);
        transition: ease-in-out 0.1s;
      }
    }
  }
}

.result-body {
  width: 100%;
}

.result-title {
  margin: 3rem auto;

  h1 {
    font-family: "Do Hyeon", sans-serif;
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
