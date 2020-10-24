<template>
  <div class="card user-card">
    <div class="card-content">
      <span class="index">{{ index + 1 }}</span>
      <span class="user-profile">{{ user.gender }} / {{ user.birthday }}년생 / {{ user.job }}</span>
      <p><img src="mobile.svg" /> <span class="field-title">제조사:</span> {{ user.device.manufacturer }} / <span class="field-title">모델명:</span> {{ user.device.model }} / <span class="field-title">OS버전:</span> {{ user.device.osVersion }}</p>
      <p><span class="field-title">선호 플랫폼:</span> {{ user.favoritePlatforms }}</p>
      <p><span class="field-title">선호 장르:</span> {{ user.favoriteGenres }} / <span class="field-title">비선호 장르:</span> {{ user.leastFavoriteGenres }}</p>
      <p><span class="field-title">인생게임:</span> {{ user.lifeApps }}</p>
      <p><span class="field-title">월 과금규모:</span> {{ user.monthlyPayment }}만원</p>
      <p><span class="field-title">총 게임플레이시간:</span> {{ user.totalPlayTime }}</p>
      <p><span class="field-title">최근 접속일:</span> {{ user.activatedDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user", "index"]
};
</script>

<style lang="scss" scoped>
.user-card {
  width: 50vw;
  margin: 2rem auto;
  border-radius: 10px;
  text-align: start;

  .index {
    font-size: 1.7rem;
    font-weight: 900;
    margin-right: 1.5rem;
  }

  .user-profile {
    font-family: "Do Hyeon", sans-serif;
    font-size: 1.4rem;
  }

  p {
    margin: 0.7rem auto;
  }

  img {
    margin-bottom: -6px;
  }

  .field-title {
    font-weight: bold;
    margin-right: 5px;
  }
}
</style>
