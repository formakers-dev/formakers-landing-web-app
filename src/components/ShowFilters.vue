<template>
  <div class="filter-box">
    <h2>[ 선택한 필터들 ]</h2>
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

<style scoped>
.filter-box {
  width: 60vw;
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid grey;
}
</style>
