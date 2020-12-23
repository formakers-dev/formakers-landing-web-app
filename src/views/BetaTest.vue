<template>
  <div class="container">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="betaTestInfo.iconImageUrl" alt="coverImage">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong style="margin-right: 1rem">{{ betaTestInfo.title }}</strong>
              <small>{{ betaTestInfo.tags.join(", ") }}</small>
              <br>
              {{ betaTestInfo.description }}
              <br>
              테스트기간: {{ testPeriod }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import request from "@/common/utils/http";

export default {
  name: "BetaTest",
  data() {
    return {
      betaTestInfo: {},
      testPeriod: '',
    };
  },
  created() {
    this.fetchBetaTestInfo();
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
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 70vw;
  margin: 2rem auto;
}
</style>
