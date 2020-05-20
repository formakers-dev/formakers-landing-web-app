<template>
  <div class="background">
    <div class="menuBackground"></div>
    <div>
      <div class="PrivacyTitle">
        <span>개인정보의 수집 및 이용에 대한 동의</span>
      </div>
      <div class="PrivacySubContainer">
        <span class="PrivacySubTitle">■ 개인정보 수집목적 및 이용목적</span>
        <span class="PrivacySubContent">쇼핑몰 회원 서비스 제공</span>
      </div>

      <div class="PrivacySubContainer">
        <span class="PrivacySubTitle">■ 수집하는 개인정보 항목</span>
        <span class="PrivacySubContent">성명, 이메일, 전화번호, 주소</span>
      </div>

      <div class="PrivacySubContainer">
        <span class="PrivacySubTitle">■ 개인정보의 보유기간 및 이용기간</span>
        <span class="PrivacySubContent"
          >원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
          지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한
          기간 동안 보존합니다. <br />
          ο 회사 내부 방침에 의한 정보 보유 사유· 부정거래 방지 및 쇼핑몰
          운영방침에 따른 보관: 5년 <br />
          ο 관련 법령에 의한 정보보유 사유 <br />
          가. 계약 또는 청약철회 등에 관한 기록 <br />
          - 보존이유: 전자상거래등에서의소비자보호에관한법률 <br />
          - 보존기간: 5년 <br />
          나. 대금 결제 및 재화 등의 공급에 관한 기록 <br />
          - 보존이유: 전자상거래등에서의소비자보호에관한법률 <br />
          - 보존기간: 5년 <br />
          다. 소비자 불만 또는 분쟁처리에 관한 기록 <br />
          - 보존이유: 전자상거래등에서의소비자보호에관한법률 <br />
          - 보존기간: 3년 <br />
          라. 로그 기록 <br />
          - 보존이유: 통신비밀보호법 <br />
          - 보존기간: 3개월</span
        >
      </div>

      <div class="PrivacySubContainer">
        <span class="PrivacySubContent"
          >※ 동의를 거부할 수 있으나 거부 시 쇼핑몰 회원 서비스 이용이
          불가능합니다.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupPrivacy"
};
</script>

<style scoped lang="scss">
.background {
  background-color: #333333;
  padding-bottom: 200px;
}

//메뉴 백그라운드
.menuBackground {
  padding-top: 55px;
  padding-bottom: 50px;
  background-color: #333333;
}
.PrivacyTitle {
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #333333;
  margin: auto;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
}
.PrivacySubContainer {
  background-color: #333333;
  padding: 40px 50px 0 50px;
  max-width: 1000px;
  margin: auto;
  .PrivacySubTitle {
    display: block;
    padding: 10px 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
  }
  .PrivacySubContent {
    display: block;
    font-size: 14px;
    color: #ffffff;
    line-height: 30px;
    span {
      color: #b12324;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
