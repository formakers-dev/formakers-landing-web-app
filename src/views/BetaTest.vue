<template>
  <section>
    <h1 class="title">상세페이지</h1>
    <div class="header">
      <div class="header-content">
        <img :src="betaTestInfo.iconImageUrl" alt="iconImage">
        <div class="header-text">
          <p>{{ "#" + betaTestInfo.tags.join(" #") }}</p>
          <p class="subtitle"><strong>{{ betaTestInfo.title }}</strong></p>

          <p>{{ betaTestInfo.description }}</p>
          <p>{{ testPeriod }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="missions-container">
        <h2 class="subtitle">미션</h2>
        <div class="mission-item"
             v-for="mission in missions"
             :key="mission._id">
          <MissionItem :mission="mission"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MissionItem from "@/components/MissionItem";
import request from "@/common/utils/http";

export default {
  name: "BetaTest",
  components: {
    MissionItem
  },
  data() {
    return {
      betaTestInfo: {},
      testPeriod: "",
      missions: []
    };
  },
  created() {
    this.fetchBetaTestInfo();
    this.fetchMissions();
  },
  methods: {
    fetchBetaTestInfo() {
      request
        .get(`/beta-tests/${this.$route.params.id}`)
        .then(res => {
          this.betaTestInfo = res.data;
          this.testPeriod = `${this.convertDate(res.data.openDate)} ~ ${this.convertDate(res.data.closeDate)}`;
        })
        .catch(err => {
          console.error(err);
          this.$buefy.toast.open({
            type: "is-danger",
            message: "에러가 발생했습니다. 다시 한 번 시도해주세요. 🙏"
          });
        });
    },
    convertDate(date) {
      return `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일`;
    },
    fetchMissions() {
      request
        .get(`/beta-tests/${this.$route.params.id}/missions`)
        .then(res => {
          this.missions = res.data.sort((a, b) => a.order > b.order ? 1 : -1);
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

<style lang="scss" scoped>
section {
  margin: 2rem auto;

  h1 {
    text-align: center;
  }
}

.header {
  width: 100vw;
  background-color: #F4F7FA;

  .header-content {
    width: 70%;
    margin: 2rem auto;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 2rem;
    }
  }
}

.container {
  margin: 2rem;

  .subtitle {
    text-align: center;
    font-weight: bold;
  }
}
</style>
