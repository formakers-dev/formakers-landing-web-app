<template>
  <section class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">에러가 발생했습니다. 🥺</p>
    </header>
    <div class="modal-card-body">
      <p>이용에 불편을 드려 죄송합니다.</p>
      <p>다시 요청 버튼을 눌러 재시도해주시기 바랍니다.</p>
    </div>
    <footer class="modal-card-foot">
      <b-button @click.prevent="$emit('close')">닫기</b-button>
    </footer>
  </section>
</template>

<script>
export default {
  name: "SendRequestError"
};
</script>

<style scoped></style>
