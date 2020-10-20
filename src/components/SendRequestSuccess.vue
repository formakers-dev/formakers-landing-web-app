<template>
  <section class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">요청을 성공적으로 전송하였습니다. 🎉</p>
    </header>
    <div class="modal-card-body">
      <p>이용해주셔서 감사합니다.</p>
      <p>빠른 시일내에 입력해주신 이메일로 연락드리겠습니다.</p>
    </div>
    <footer class="modal-card-foot">
      <b-button @click.prevent="$emit('close')">닫기</b-button>
    </footer>
  </section>
</template>

<script>
export default {
  name: "SendRequestSuccess"
};
</script>

<style scoped></style>
