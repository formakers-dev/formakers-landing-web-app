<template>
  <div class="search-wrapper">
    <b-button
        rounded
        class="initial-search"
        @click="isExpanded = !isExpanded"
        v-show="!isExpanded">
      🔍 원하는 게이머 타입을 선택하세요
    </b-button>

    <div class="box expanded-search" v-show="isExpanded">
      <!--검색 필터링옵션 넣기-->
      <p class="control">
        <b-button class="button is-dark" expanded>찾 기</b-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      isExpanded: false,
    }
  }
};
</script>

<style scoped>
  .expanded-search {
    width: 60vw;
    margin: 0 auto;
  }

  .button.is-dark {
    width: 10rem;
    margin: 0 auto;
  }
</style>
