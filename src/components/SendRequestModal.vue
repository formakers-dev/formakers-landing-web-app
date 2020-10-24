<template>
  <section class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        {{ selectedUsers.length }}명의 타겟 게이머에게 연락하기
      </p>
      <button type="button" class="delete" @click="$emit('close')" />
    </header>

    <div class="modal-card-body">
      <p>
        연락받으실 이메일 주소와 간단한 정보를 적어주시면 포메이커스에서 곧
        연락드리겠습니다.
      </p>

      <p class="label-section"><span>*</span>이름</p>
      <b-field>
        <b-input v-model="requestForm.customerName" rounded />
      </b-field>

      <p class="label-section"><span>*</span>이메일</p>
      <b-field>
        <b-input
          type="email"
          icon="email"
          validation-message="유효한 이메일을 입력해주세요."
          v-model="requestForm.customerEmail"
          rounded
        />
      </b-field>

      <p class="label-section">
        <span>*</span>선택하신 게이머 분들과 무엇을 진행하고 싶으신가요? (복수
        선택 가능)
      </p>
      <b-field>
        <b-checkbox
          v-for="(field, index) in requestFields"
          v-model="requestForm.interests"
          :key="index"
          :native-value="field.key"
        >
          <span>{{ field.displayKey }}</span>
        </b-checkbox>
      </b-field>
      <b-input
        v-model="customInterest"
        placeholder="그 외 관심사를 적어주세요"
      />
    </div>

    <footer class="modal-card-foot">
      <b-button
        @click.prevent="createRequest()"
        v-if="
          requestForm.customerName &&
            requestForm.customerEmail &&
            (requestForm.interests.length || customInterest)
        "
      >
        제 출
      </b-button>
      <b-button v-else disabled>필수값을 입력해주세요</b-button>
    </footer>
  </section>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
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
        selectedUsers: this.selectedUsers,
        selectedOptions: []
      },
      customInterest: ""
    };
  },
  computed: {
    ...mapState(["selectedOptions"])
  },
  methods: {
    createRequest() {
      const serverURL = config.serverBaseUrl;
      if (this.customInterest) {
        this.requestForm.interests.push(this.customInterest);
      }
      this.requestForm.selectedOptions.push(this.selectedOptions);
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
  p:first-child {
    font-family: "Noto Sans KR", sans-serif;
    margin-bottom: 2rem;
  }

  .label-section {
    margin: 1.5rem auto 0.7rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;

    span {
      color: red;
      font-weight: bold;
      margin: 0 0.5rem;
    }
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
