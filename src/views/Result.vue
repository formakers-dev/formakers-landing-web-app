<template>
  <div class="result-page">
    <div v-if="loading" class="loading">
      <h1>유저 정보를 불러오고 있습니다... 🧐</h1>
      <p>잠시만 기다려주세요 🙏</p>
      <div id="skeleton">
        <b-skeleton
          width="25%"
          height="20px"
          position="is-centered"
        ></b-skeleton>
        <b-skeleton
          width="50%"
          height="20px"
          position="is-centered"
        ></b-skeleton>
        <b-skeleton
          width="75%"
          height="20px"
          position="is-centered"
        ></b-skeleton>
        <b-skeleton height="20px" position="is-centered"></b-skeleton>
      </div>
    </div>

    <div v-if="error" class="error">
      <h1>{{ error }}</h1>
      <router-link to="/">뒤로 가기</router-link>
    </div>

    <div v-else class="result">
      <div class="result-body">
        <div class="result-title">
          <h1>
            선택하신 조건과 꼭 맞는 {{ userCount }}명의 유저가 검색되었습니다! 🎉
          </h1>
          <p>
            원하시는 유저를 아래에서 선택하시면 연락을 취하거나, 게임 테스트를 문의하실 수 있습니다.
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
        <button class="change-filter-button" @click.prevent="$router.push('/')">필터 변경하기</button>
        <button
          class="request-button"
          :class="{ active: selectedUsers.length }"
          @click.prevent="openModal()"
        >
          선택한 유저<br />
          {{ selectedUsers.length }}명에게 연락하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import ShowFilters from "@/components/ShowFilters";
import UserCard from "@/components/UserCard";
import SendRequestModal from "@/components/SendRequestModal";
import { showDisplayText } from "@/utils/textFormatter";
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
          this.error =
            "유저를 불러오는데 에러가 발생했습니다. 😢 다시 시도해주시기 바랍니다.";
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
          message: "유저를 먼저 선택해주세요!",
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

.loading,
.error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: "Do Hyeon", sans-serif;
    font-size: 2.3rem;
  }

  p,
  a {
    font-size: 1.5rem;
  }
}

#skeleton {
  width: 50vw;
  margin: 3rem auto 0;

  .b-skeleton {
    margin: 5px auto;
  }
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
    font-size: 1.5rem;
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
