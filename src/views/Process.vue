<template>
   <div>
      <div class="contentBox">
         <p>프로세스 소개</p>
      </div>
      <div style="display:flex; justify-content: center; background-color: #333333;">
         <img src="../assets/images/test_couse.png" alt="">
      </div>
      <div class="serviceContainer">
         <div>
            <p class="serviceTitle">[ 프로세스 ]</p>
            <p class="serviceSub">포메이커스와 함께하면, 게임 테스트는 정말 쉬워집니다.</p>
            <div class="divisionLine"></div>
            <img src="../assets/images/course.png" alt="">
            <div>
               <p class="serviceTitle">🙋‍♀️ STEP 01 : 의뢰/상담/결제</p>
               <p class="serviceSub">1. 상담 : 홈페이지를 통해 문의를 주시면 적어주신 전화나 이메일로 답변을 드립니다.</p>
               <p class="serviceSub">2. 의뢰 : 홈페이지의 버튼을 통해 의뢰주시면, 내용을 확인하고 포메이커스 팀에서 연락을 드립니다.</p>
               <p class="serviceSub">3. 결제 : 상담 후 최종 비용을 안내드리면, 무통장 입금으로 결제가 진행됩니다. (세금계산서 발급 가능)</p>

               <p class="serviceTitle">🕵️‍♂️ STEP 02 : 테스트 관련</p>
               <p class="serviceSub">4. 테스트 준비 : 맞춤설문이 가능한 플랜을 구매하신 경우, 설문 초안을 작성하여 공유드립니다.</p>
               <p class="serviceSub">5. 테스트 진행 : 포메이커스 팀이 게이머들을 대상으로 테스트를 열고 닫습니다.</p>
               <p class="serviceSub">6. 결과서 전달 : 테스트 종료 후 3일 내에 결과를 정리하여 이메일로 보내드립니다.</p>

               <p class="serviceTitle">💌 STEP 03 : 마무리</p>
               <p class="serviceSub">7. 만족도 설문 : 만족도 설문에 적어주신 내용을 바탕으로 게임사의 소감이 보여집니다.</p>
            </div>
         </div>
      </div>
      <div class="contentBox">
         <p>FAQ</p>
      </div>
      <div class="serviceContainer">
         <div>
            <p class="serviceTitle">Q. FGT 서비스 인가요? QA와의 차이점은 무엇인가요?</p>
            <p class="serviceSub">- 가벼운 온라인 FGT라고 생각하시면 됩니다. 일반 게이머들을 대상으로 진행하는 게임 사용자 테스트입니다.</p>
            <p class="serviceSub">- 버그를 위주로 찾아내는 기능적 QA와는 다릅니다. 사용자가 실제로 어떻게 반응했고, 왜 그렇게 행동했는지 그 이유를 받아보실 수 있습니다.</p>

            <p class="serviceTitle">Q. 게임사 측에서 진행해야하는 작업이 있나요? (SDK 적용 등)</p>
            <p class="serviceSub">- 테스트를 의뢰하시면 테스트 준비부터 결과서 제공까지 모든 과정을 저희가 진행하므로 게임사는 게임 개발에만 집중하실 수 있습니다.</p>
            <p class="serviceSub">- 클로즈 베타 테스트를 진행하거나, 설문 문항 수정이 포함된 플랜을 결제하실 경우 필요한 작업에 대해 따로 안내를 드립니다.</p>

            <p class="serviceTitle">Q. 특정 타겟유저에게 테스트 가능한가요?</p>
            <p class="serviceSub">- 원하는 타겟이 있으실 경우 결과서 작성 시 해당 타겟ㅇ을 우선순위 높여서 포함시키는 것이 가능합니다. (가능 플랜 : 라이트, 심플, 스탠다드)</p>
            <p class="serviceSub">- 특정 유저를 타겟팅하여 (나이, 성별, 플레이 장르 등) 테스트를 진행할 수 있는 플랜을 준비중에 있습니다. (2020년 하반기 프리미엄 플랜 오픈 예정)</p>
         </div>
      </div>
      <div class="backgroundDiv2 four">
         <div class="backgroundColor"></div>
         <div>
            <div class="feedbackContainer">
               <div class="feedbackTitle">유저 피드백 만큼 값진 것은 없습니다.<br>
                  <div class="feedbackBody">진짜 게이머에게 내 게임에 대한 의견을 들어보세요.</div><br>
                  <section>
                     <div class="buttons">
                        <button class="button is-medium is-warning" @click="warning">
                           테스트 플랜 보기
                        </button>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
    export default {
        methods: {
            snackbar() {
                this.$buefy.snackbar.open(`Default, positioned bottom-right with a green 'OK' button`)
            },
            warning() {
                this.$buefy.snackbar.open({
                    message: '"테스트 플랜 보기" 버튼이 클릭되었습니다!!!',
                    type: 'is-warning',
                    position: 'is-top',
                    actionText: 'OK',
                    indefinite: true,
                })
            },
        }
    }
</script>

<style scoped lang="scss" src="../components/Home.scss">

</style>
