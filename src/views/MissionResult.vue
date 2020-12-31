<template>
  <div>
    <h1 class="title">{{ mission.title }}의 응답 집계</h1>

    <div class="content">
      <b-table
        class="feedback-table"
        :data="answers"
        :columns="headerKeys"
        :sticky-header="true"
        :bordered="true"
        :striped="true"
        :loading="isLoading"
        :mobile-cards="true"
      >
      </b-table>
    </div>
  </div>
</template>

<script>
import request from "@/common/utils/http";

export default {
  name: "MissionResult",
  props: ["mission"],
  data() {
    return {
      headers: [],
      headerKeys: [],
      answers: [],
      isLoading: true
    };
  },
  created() {
    this.fetchMissionResult();
  },
  methods: {
    fetchMissionResult() {
      request
        .get(
          `/beta-tests/${this.$route.params.id}/missions/${this.mission._id}/result`
        )
        .then(res => {
          this.headers = res.data.headers;
          this.headerKeys = res.data.headerKeys.map(key => {
            return {
              field: key,
              label: key
            };
          });
          this.answers = res.data.answers;
          this.isLoading = false;
        })
        .catch(err => {
          console.error(err);
          this.isLoading = false;
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

</style>
