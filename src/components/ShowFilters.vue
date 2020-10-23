<template>
  <div class="filter-box">
    <h1>[ 선택한 필터들 ]</h1>
    <p>성별 : {{ displayFilters.gender.join(", ") || "-" }}</p>
    <p>연령대 : {{ displayFilters.ageGroup.join(", ") || "-" }}</p>
    <p>게임 플레이 방식 : {{ displayFilters.playStyle.join(", ") || "-" }}</p>
    <p>과금 여부 : {{ displayFilters.payStyle.join(", ") || "-" }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { displayText } from "@/utils/textFormatter";

export default {
  name: "ShowFilters",
  data() {
    return {
      displayFilters: {}
    };
  },
  computed: {
    ...mapState(["selectedOptions"])
  },
  created() {
    this.showDisplayText(this.selectedOptions);
  },
  methods: {
    showDisplayText(fields) {
      Object.keys(fields).forEach(field => {
        this.displayFilters[field] = fields[field].map(
          value => displayText[field][value]
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-box {
  width: 100%;
  margin: 0 auto 5rem;

  h1 {
    font-family: "Do Hyeon", sans-serif;
    font-size: 2rem;
    margin: 0 3px;
  }

  p {
    margin: 0.5rem 2rem;
    text-align: start;
  }
}
</style>
