<template>
  <section class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        {{ selectedUsers.length }}명의 타겟 게이머에게 연락하기
      </p>
      <button type="button" class="delete" @click="$emit('close')" />
    </header>
    <div class="modal-card-body">
      <b-field label="이름">
        <b-input v-model="requestForm.customerName" rounded />
      </b-field>

      <b-field label="이메일">
        <b-input
          type="email"
          validation-message="유효한 이메일을 입력해주세요."
          v-model="requestForm.customerEmail"
          rounded
        />
      </b-field>

      <b-field label="원하는 관심사를 선택해주세요">
        <b-checkbox
          v-for="(field, index) in requestFields"
          v-model="requestForm.interests"
          :key="index"
          :native-value="field.key"
        >
          <span>{{ field.displayKey }}</span>
        </b-checkbox>
        <b-input v-model="customInterest" placeholder="기타 입력" />
      </b-field>
    </div>
    <footer class="modal-card-foot">
      <b-button @click.prevent="createRequest()">요청하기</b-button>
    </footer>
  </section>
</template>

<script>
import axios from "axios";
import config from "../../config";
import SendRequestSuccess from "@/components/SendRequestSuccess";
import SendRequestError from "@/components/SendRequestError";

export default {
  name: "SendRequestModal",
  props: ["selectedUsers"],
  data() {
    return {
      requestFields: [
        { key: "fgtRequest", displayKey: "FGT 의뢰" },
        { key: "offlineMeeting", displayKey: "오프라인 미팅" },
        { key: "onlineMeeting", displayKey: "온라인 미팅" },
        { key: "recruitment", displayKey: "채용" },
        { key: "marketing", displayKey: "마케팅" },
        { key: "buyUserData", displayKey: "유저 추가정보 구매" }
      ],
      requestForm: {
        customerName: "",
        customerEmail: "",
        interests: [],
        selectedUsers: this.selectedUsers
      },
      customInterest: ""
    };
  },
  methods: {
    createRequest() {
      const serverURL = config.serverBaseUrl;
      this.requestForm.interests.push(this.customInterest);
      axios
        .post(`${serverURL}/requests`, this.requestForm)
        .then(() => {
          this.$emit("close");
          this.$buefy.modal.open({
            parent: this,
            component: SendRequestSuccess,
            hasModalCard: true,
            trapFocus: false
          });
        })
        .catch(() => {
          this.$buefy.modal.open({
            parent: this,
            component: SendRequestError,
            hasModalCard: true,
            trapFocus: false
          });
        });
    }
  }
};
</script>

<style scoped></style>
