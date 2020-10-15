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
        <span>{{ field.displayKey }} : </span>
        <b-checkbox
          type="is-info"
          v-for="(text, index) in field.displayText"
          v-model="selectedOptions[field.key]"
          :key="index"
          :native-value="field.encodedText[index]"
        >
          <span>{{ text }}</span>
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
