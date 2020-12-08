<template>
  <div class="filter-box">
    <h1>[ 선택한 검색 조건들 ]</h1>
    <p><span>성별:</span> {{ displayFilters.gender.join(", ") || "-" }}</p>
    <p><span>연령대:</span> {{ displayFilters.ageGroup.join(", ") || "-" }}</p>
    <p><span>게임 플레이 방식:</span> {{ displayFilters.playStyle.join(", ") || "-" }}</p>
    <p><span>과금 여부:</span> {{ displayFilters.payStyle.join(", ") || "-" }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { displayText } from "@/common/utils/textFormatter";

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
  margin: 0 auto 2rem;

  h1 {
    font-family: "Do Hyeon", sans-serif;
    font-size: 2rem;
    margin: 0 3px;
  }

  p {
    margin: 0.5rem 2rem;
    text-align: start;

    span {
      font-size: 1.1rem;
      font-weight: bold;
      margin-right: 5px;
    }
  }
}
</style>
