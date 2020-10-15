<template>
  <div class="user-card">
    <b-checkbox />
    <h3>{{ index + 1 }}</h3>
    <p>
      성별 : {{ user.gender || "-" }} / 출생연도 : {{ user.birthday || "-" }}년
      / 직업 : {{ user.job || "-" }}
    </p>
    <p>선호 플랫폼 : {{ user.favoritePlatforms.join(", ") || "-" }}</p>
    <p>
      선호 장르 : {{ user.favoriteGenres.join(", ") || "-" }} / 비선호 장르 :
      {{ user.leastFavoriteGenres.join(", ") || "-" }}
    </p>
    <p>
      디바이스 : 제조사 - {{ user.device.manufacturer || "-" }}, 모델명 -
      {{ user.device.model || "-" }}, OS버전 -
      {{ user.device.osVersion || "-" }}
    </p>
    <p>인생게임 : {{ user.lifeApps.join(", ") || "-" }}</p>
    <p>월 과금규모 : {{ user.monthlyPayment || "-" }}만원</p>
    <p>최근 접속일 : {{ displayDate }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user", "index"],
  computed: {
    displayDate() {
      if (this.user.activatedDate) {
        const date = new Date(this.user.activatedDate);
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.user-card {
  width: 70vw;
  margin: 2rem auto;
}
</style>
