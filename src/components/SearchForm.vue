<template>
  <section>
    <b-button
      rounded
      class="initial-search"
      @click="isExpanded = !isExpanded"
      v-show="!isExpanded"
    >
      🔍 원하는 게이머 타입을 선택하세요
    </b-button>

    <section class="box expanded-search" v-show="isExpanded">
      <div v-for="(field, index) in fields" :key="index" class="search-filters">
        <span class="filter-name">{{ field.displayKey }} : </span>
        <b-checkbox
          v-for="(text, index) in field.displayText"
          v-model="selectedOptions[field.key]"
          :key="index"
          :native-value="field.encodedText[index]"
        >
          <span class="filter-text">{{ text }}</span>
        </b-checkbox>
      </div>

      <b-button class="search-button" type="submit" @click.prevent="search">
        찾 기
      </b-button>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { displayText } from "@/utils/textFormatter";

export default {
  name: "SearchForm",
  data() {
    return {
      isExpanded: false,
      fields: [
        { key: "gender", displayKey: "성별" },
        { key: "ageGroup", displayKey: "연령대" },
        { key: "playStyle", displayKey: "게임 플레이 방식" },
        { key: "payStyle", displayKey: "과금 여부" }
      ]
    };
  },
  computed: {
    ...mapState(["selectedOptions"])
  },
  created() {
    this.setText();
  },
  methods: {
    async setText() {
      await this.fields.forEach(field => {
        const fieldCategory = displayText[field.key];
        field.encodedText = Object.keys(fieldCategory);
        field.displayText = Object.values(fieldCategory);
      });
    },
    async search() {
      await this.$store.commit("SET_SELECTED_OPTIONS", this.selectedOptions);
      await this.$router.push({ name: "Result" });
    }
  }
};
</script>

<style lang="scss" scoped>
.initial-search {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.3rem;
  background-color: #ebebeb;
  padding: 1.2rem 3rem;
}

.expanded-search {
  width: 50vw;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.3rem 1rem;
  background-color: #ebebeb;

  .search-filters {
    width: 90%;
    margin: 1.5rem auto;
    text-align: start;
    z-index: 10;

    .filter-name {
      font-family: "Do Hyeon", sans-serif;
      font-size: 1.3rem;
    }

    .checkbox {
      z-index: 10;
    }
  }

  .search-button {
    background-color: #00bfba;
    color: #ebebeb;
    width: 20%;
    height: 2.5rem;
    margin: 0 auto 1rem;
    padding: 0;
    border: none;
    border-radius: 10px;
    font-family: "Do Hyeon", sans-serif;
    font-size: 1.5rem;
    transition: ease 0.3s;
    z-index: 10;

    &:hover {
      background-color: #198380;
    }
  }
}
</style>
