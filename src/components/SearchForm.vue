<template>
  <div class="search-wrapper">
    <b-button
      rounded
      class="initial-search"
      @click="isExpanded = !isExpanded"
      v-show="!isExpanded"
    >
      🔍 원하는 게이머 타입을 선택하세요
    </b-button>

    <section class="box expanded-search" v-show="isExpanded">
      <div v-for="(field, index) in fields" :key="index">
        <span>{{ field.name }} : </span>
        <b-checkbox
          type="is-info"
          v-for="(option, index) in field.displayText"
          v-model="selectedOptions[field.key]"
          :key="index"
          :native-value="field.options[index]"
        >
          <span>{{ option }}</span>
        </b-checkbox>
      </div>

      <p class="control">
        <b-button class="search-button" type="submit" @click.prevent="search">
          <router-link :to="{ name: 'Result' }">찾 기</router-link>
        </b-button>
      </p>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchForm",
  data() {
    return {
      isExpanded: false,
      fields: [
        {
          name: "성별",
          key: "gender",
          displayText: ["무관", "남자", "여자"],
          options: ["all", "male", "female"]
        },
        {
          name: "연령대",
          key: "ageGroup",
          displayText: [
            "무관",
            "10세 미만",
            "10대",
            "20대",
            "30대",
            "40대",
            "50대",
            "60대 이상"
          ],
          options: [
            "all",
            "under10",
            "10s",
            "20s",
            "30s",
            "40s",
            "50s",
            "over60"
          ]
        },
        {
          name: "게임 플레이 방식",
          key: "playStyle",
          displayText: [
            "무관",
            "PC",
            "모바일",
            "콘솔",
            "액션",
            "어드벤처",
            "아케이드",
            "보드",
            "카드",
            "카지노",
            "캐주얼",
            "교육",
            "음악",
            "퍼즐",
            "레이",
            "롤플레잉",
            "시뮬레이션",
            "스포츠",
            "전략",
            "퀴즈",
            "단어"
          ],
          options: [
            "all",
            "pc",
            "mobile",
            "console",
            "action",
            "adventure",
            "arcade",
            "board",
            "card",
            "casino",
            "casual",
            "educational",
            "music",
            "puzzle",
            "racing",
            "rolePlaying",
            "simulation",
            "sports",
            "strategy",
            "trivia",
            "word"
          ]
        },
        {
          name: "과금 여부",
          key: "payStyle",
          displayText: ["무관", "과금", "무과금"],
          options: ["all", "pay", "free"]
        }
      ]
    };
  },
  computed: {
    ...mapState(["selectedOptions"])
  },
  methods: {
    async search() {
      await this.$store.commit("SET_SELECTED_OPTIONS", this.selectedOptions);
    }
  }
};
</script>

<style scoped>
.expanded-search {
  width: 60vw;
  margin: 0 auto;
}

.search-button {
  width: 10rem;
  margin: 1rem auto;
}

.search-button a {
  color: black;
}
</style>
