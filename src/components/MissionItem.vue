<template>
  <div class="container">
    <div class="box">
      <div class="tags-container">
        <div class="types-container">
          <b-tag type="is-danger is-light">{{ types[mission.type] }}</b-tag>
        </div>
        <div
          class="options-container"
          v-for="option in mission.options.map(option => options[option])"
          :key="option.index"
        >
          <b-tag type="is-info is-light">{{ option }}</b-tag>
        </div>
      </div>

      <div class="content-container">
        <p><strong>[{{ mission.order }}번째] {{ mission.title }}</strong></p>
        <p v-if="mission.packageName">- 게임패키지명: {{ mission.packageName }}</p>
        <p>- 미션참여 URL: {{ mission.action }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionItem",
  props: ["mission"],
  data() {
    return {
      options: {
        mandatory: "필수",
        repeatable: "여러번 참여 가능",
        recheckable: "종료 후 열람 가능"
      },
      types: {
        install: "설치형",
        play: "플레이형",
        survey: "설문형"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.types-container,
.options-container {
  display: inline;
}

.tags-container {
  span {
    margin-right: 5px;
  }
}

.content-container {
  margin-top: 0.5rem;
}
</style>
