<template>
  <section class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">에러가 발생했습니다. 🥺</p>
    </header>
    <div class="modal-card-body">
      <p>이용에 불편을 드려 대단히 죄송합니다.</p>
      <p>다시 요청 버튼을 눌러 재시도해주시기 바랍니다.</p>
    </div>
    <footer class="modal-card-foot">
      <b-button @click.prevent="$emit('close')">닫 기</b-button>
    </footer>
  </section>
</template>

<script>
export default {
  name: "SendRequestError"
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
