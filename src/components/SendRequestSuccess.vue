<template>
  <section class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">요청을 성공적으로 전송하였습니다. 🎉</p>
    </header>
    <div class="modal-card-body">
      <p>이용해주셔서 감사합니다. 🙏</p>
      <p>입력해주신 이메일로 빠른 시일내에 연락드리겠습니다.</p>
      <p>
        포메이커스에 대해 더 알아보고 싶으시다면
        <a href="https://formakers.net" target="_blank">여기</a>를 클릭해보세요! 😉
      </p>
    </div>
    <footer class="modal-card-foot">
      <b-button @click.prevent="$emit('close')">닫 기</b-button>
    </footer>
  </section>
</template>

<script>
export default {
  name: "SendRequestSuccess"
};
</script>

<style lang="scss" scoped>
.modal-card {
  width: 50vw;
  min-width: 700px;
}

.modal-card-head {
  background-color: #00bfba;
  text-align: center;

  .modal-card-title {
    font-family: "Do Hyeon", sans-serif;
    font-size: 1.7rem;
  }
}

.modal-card-body {
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;

  p {
    margin: 0.3rem auto;
  }

  a {
    color: #198380;
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.modal-card-foot {
  display: flex;
  justify-content: center;

  button {
    background-color: #f8ab1c;
    min-width: 30%;
    font-family: "Do Hyeon", sans-serif;
    font-size: 1.2rem;

    &:hover {
      background-color: #198380;
      color: #ebebeb;
    }
  }
}
</style>
