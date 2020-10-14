<template>
  <div class="filter-box">
    <h2>[ 선택한 필터들 ]</h2>
    <p>성별 : {{ selectedOptions.gender }}</p>
    <p>연령대 : {{ selectedOptions.ageGroup }}</p>
    <p>게임 플레이 방식 : {{ selectedOptions.playStyle }}</p>
    <p>과금 여부 : {{ selectedOptions.payStyle }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ShowFilters",
  computed: {
    ...mapState(["selectedOptions"])
  }
};
</script>

<style scoped>
.filter-box {
  width: 60vw;
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid grey;
}
</style>
