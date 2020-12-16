<template>
  <div class="request-list-page">
    <h1 class="title">내 의뢰 목록</h1>

    <div class="tile is-ancestor">
      <div
        class="tile is-parent is-4"
        v-for="request in requestList"
        :key="request._id"
      >
        <div class="tile is-child notification is-primary">
          <!--          :style="{ backgroundImage: `url(${request.coverImageUrl})`, backgroundSize: '100% 100%' }"-->
          <p class="title">{{ request.title }}</p>
          <p class="content">
            테스트기간 : {{ request.openDate }} ~ {{ request.closeDate }}
          </p>
          <img class="cover-image" :src="request.coverImageUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/common/utils/http";

export default {
  name: "RequestList",
  data() {
    return {
      requestList: []
    };
  },
  created() {
    this.fetchRequestList();
  },
  methods: {
    fetchRequestList() {
      request
        .get("/beta-tests")
        .then(res => this.requestList = res.data)
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.request-list-page {
  margin: 3rem 2rem;
  text-align: center;

  .title {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
}

.tile,
.is-child {
  .title {
    font-size: 2rem;
  }
}

.cover-image {
  width: 50%;
}
</style>
