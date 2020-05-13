<template>
   <div>
      <div class="menuBackground">
      </div>
      <div class="contentBox">
         <p>프로세스 소개</p>
      </div>
      <div class="testImgBox">
         <img src="../assets/images/test_couse.png" alt="">
      </div>
      <div class="processContainer">
         <div>
            <p class="processTitle">[ 프로세스 ]</p>
            <p class="processSub">포메이커스와 함께하면, 게임 테스트는 정말 쉬워집니다.</p>
            <div class="divisionLine"></div>
            <div class="testCourse">
               <img src="../assets/images/course.png" alt="">
            </div>
            <div class="processStepBox">
               <p class="processStepTitle">🙋‍♀️ STEP 01 : 의뢰/상담/결제</p>
               <p class="processStepSub"><span>1. 상담</span> : 홈페이지를 통해 문의를 주시면 적어주신 전화나 이메일로 답변을 드립니다.</p>
               <p class="processStepSub"><span>2. 의뢰</span> : 홈페이지의 버튼을 통해 의뢰주시면, 내용을 확인하고 포메이커스 팀에서 연락을 드립니다.</p>
               <p class="processStepSub"><span>3. 결제</span> : 상담 후 최종 비용을 안내드리면, 무통장 입금으로 결제가 진행됩니다. (세금계산서 발급 가능)</p>
            </div>
            <div class="processStepBox">
               <p class="processStepTitle" style="color: rgb(237, 174, 48)">🕵️‍♂️ STEP 02 : 테스트 관련</p>
               <p class="processStepSub"><span>4. 테스트 준비</span> : 맞춤설문이 가능한 플랜을 구매하신 경우, 설문 초안을 작성하여 공유드립니다.</p>
               <p class="processStepSub"><span>5. 테스트 진행</span> : 포메이커스 팀이 게이머들을 대상으로 테스트를 열고 닫습니다.</p>
               <p class="processStepSub"><span>6. 결과서 전달 </span>: 테스트 종료 후 3일 내에 결과를 정리하여 이메일로 보내드립니다.</p>
            </div>
            <div class="processStepBox">
               <p class="processStepTitle" style="color: rgb(238, 130, 146)">💌 STEP 03 : 마무리</p>
               <p class="processStepSub"><span>7. 만족도 설문</span> : 만족도 설문에 적어주신 내용을 바탕으로 게임사의 소감이 보여집니다.</p>
            </div>
            <div class="processStepBox" style="padding: 20px 0 60px 0">
               <div class="divisionLine"></div>
               <p class="processSub" style="padding-top: 60px">이제 포메이커스와 함께 리소스를 절약하세요!</p>
            </div>
         </div>
      </div>
      <div class="contentBox">
         <p>FAQ</p>
      </div>
      <div class="faqContainer">
         <div class="faqBox">
            <div style="padding: 40px 0">
               <p class="faqTitle">Q. FGT 서비스 인가요? QA와의 차이점은 무엇인가요?</p>
               <p class="faqSub">- 가벼운 온라인 FGT라고 생각하시면 됩니다. 일반 게이머들을 대상으로 진행하는 게임 사용자 테스트입니다.</p>
               <p class="faqSub">- 버그를 위주로 찾아내는 기능적 QA와는 다릅니다. 사용자가 실제로 어떻게 반응했고, 왜 그렇게 행동했는지 그 이유를 받아보실 수 있습니다.</p>
            </div>
            <div style="padding: 40px 0">
               <p class="faqTitle">Q. 게임사 측에서 진행해야하는 작업이 있나요? (SDK 적용 등)</p>
               <p class="faqSub">- 테스트를 의뢰하시면 테스트 준비부터 결과서 제공까지 모든 과정을 저희가 진행하므로 게임사는 게임 개발에만 집중하실 수 있습니다.</p>
               <p class="faqSub">- 클로즈 베타 테스트를 진행하거나, 설문 문항 수정이 포함된 플랜을 결제하실 경우 필요한 작업에 대해 따로 안내를 드립니다.</p>
            </div>
            <div style="padding: 40px 0">
               <p class="faqTitle">Q. 특정 타겟유저에게 테스트 가능한가요?</p>
               <p class="faqSub">- 원하는 타겟이 있으실 경우 결과서 작성 시 해당 타겟을 우선순위 높여서 포함시키는 것이 가능합니다. (가능 플랜 : 라이트, 심플, 스탠다드)</p>
               <p class="faqSub">- 특정 유저를 타겟팅하여 (나이, 성별, 플레이 장르 등) 테스트를 진행할 수 있는 플랜을 준비중에 있습니다. (2020년 하반기 프리미엄 플랜 오픈 예정)</p>
            </div>
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
                    message: '🚨 버튼이 클릭되었습니다!!! 🚨',
                    type: 'is-warning',
                    position: 'is-top',
                    actionText: 'OK',
                    indefinite: true,
                })
            },
        }
    }
</script>

<style scoped lang="scss">
   //메뉴 백그라운드
   .menuBackground {
      padding-top: 55px;
      padding-bottom: 50px;
      background-color: #333333;
   }

   // 공통 백그라운드(유저 피드백 부분)
   .four{
      background-image: url('../assets/images/home_back5.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      display: block;
      position: relative;
      .backgroundColor {
         background-color: #000000;
         opacity: 0.5;
         position: absolute;
         width: 100vw;
         height: 100%;
         top: 0;
         left: 0;
      }
   }

   // 프로세스 소개 이미지
   .testImgBox {
      display:flex;
      justify-content: center;
      background-color: #333333;
      padding: 85px;
      img {
         width: 58%;
         min-width: 700px;
      }
   }
   @media screen and (max-width: 640px) {
      .testImgBox {
         padding: 40px;
         img {
            min-width: 350px;
         }
      }
   }

   // 프로세스 소개 & FAQ 타이틀
   .contentBox{
      z-index: 1;
      width: 100%;
      min-height: 100%;
      margin-bottom: 0;
      top: 0;
      left: 0;
      padding: 16px;
      position: relative;
      background-color: #41BFB9;
      text-align: center;
      font-size: 26px;
      font-weight: 700;
      color: #FFFFFF;
      letter-spacing: 0.02em;
      line-height: 1.5em;
   }
   @media screen and (max-width: 640px) {
      .contentBox {
         font-size: 20px;
      }
   }

   // 프로세스
   .processContainer {
      width: 100%;
      margin: 0 auto;
      background-color: #333333;
      text-align: center;
      display: flex;
      justify-content: center;
      .processTitle {
         padding: 0 0 15px 0;
         color: #FFFFFF;
         font-weight: 700;
         font-size: 40px;
         letter-spacing: 0.02em;
         line-height: 1.5em;
      }
      .divisionLine {
         width: 60%;
         background-color: #00BFBA;
         min-height: 1px;
         display: inline-block;
      }
      .testCourse {
         width: 100%;
         padding: 60px 60px 30px 60px;
         img {
            width: 75%;
         }
      }
      .processSub {
         color: rgb(73, 187, 184);
         font-size: 18px;
         font-weight: 400;
         letter-spacing: 0.02em;
         line-height: 2em;
      }
      .processStepBox {
         padding: 30px;
         .processStepTitle {
            color: rgb(73, 187, 184);
            font-weight: bold;
            font-size: 30px;
            padding: 10px;
         }
         .processStepSub {
            font-size: 18px;
            color: #FFFFFF;
            font-weight: 400;
            letter-spacing: 0.02em;
            line-height: 2em;
            span {
               font-weight: bold
            }
         }
      }

   }
   @media screen and (max-width: 640px) {
      .processContainer {
         .processTitle {
            font-size: 20px;
         }
         .processSub {
            font-size: 12px;
         }
         .testCourse {
            width: 100%;
            padding: 60px 10px 20px 10px;
            img {
               width: 100%;
            }
         }
         .processStepBox {
            .processStepTitle {
               font-size: 18px;
            }
            .processStepSub {
               font-size: 12px;
            }
         }

      }
   }

   // FAQ
   .faqContainer {
      width: 100%;
      margin: 0 auto;
      background-color: #333333;
      padding: 30px;
      display: flex;
      justify-content: center;
      .faqBox {
         padding: 0 0 100px 0;
         width: 85%;
         margin: 0 auto;
         background-color: #333333;
         .faqTitle {
            padding: 10px 0 15px 0;
            color: rgb(255, 255, 255);
            font-weight: bold;
            font-size: 23px;
         }
         .faqSub {
            color: rgb(73, 187, 184);
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 0.02em;
            line-height: 2em;
         }
      }
   }
   @media screen and (max-width: 640px) {
      .faqContainer {
         padding: 10px;
         .faqBox {
            .faqTitle {
               font-size: 14px;
               padding: 5px 0 10px 0;
            }
            .faqSub {
               font-size: 12px;
            }
         }
      }
   }


   // 유저 피드백
   .backgroundDiv2 {
      width: 100vw;
      height: 100vh;
      padding: 20px;
      margin: 0;
      top: 0;
      left: 0;
      background-size: cover;
      background-attachment: fixed;
      border: 0;
      display: flex;
      justify-content: center;
      vertical-align: middle;
      font-size: 100%;
      text-align: center;
   }
   .feedbackContainer {
      max-width: 1480px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .feedbackTitle {
         z-index: 10000;
         max-width: 800px;
         width: 100%;
         color: rgb(255, 255, 255);
         font-weight: 700;
         font-size: 50px;
         text-align: inherit;
         letter-spacing: 0.02em;
         line-height: 0.7em;
      }
      .feedbackBody {
         margin-top: 50px;
         vertical-align: middle;
         color: rgb(255, 255, 255);
         font-weight: 400;
         font-size: 25px;
         text-align: inherit;
         letter-spacing: 0.02em;
         line-height: 2em;
      }
      // 스낵바
      .buttons {
         z-index: 10000;
         position: relative;
         display: flex;
         justify-content: center;
         .button.is-medium {
            z-index: 9;
            width: auto;
            height: auto;
            padding: 1em 1.75em;
            position: relative;
            background-color: #00BFBA;
            border: 2px solid #00BFBA;
            color: #FFFFFF;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.02em;
            line-height: normal;
            outline: none;
            &:hover{
               background-color:#53C6C2;
               color: #FFFFFF;
               font-weight:bold;
               border-color: #53C6C2;
               opacity: 0.8;
            }
         }
      }
   }
   @media screen and (max-width: 640px) {
      .backgroundDiv2 .feedbackContainer .feedbackTitle {
         font-size: 20px;
         .feedbackBody {
            margin: 20px 0 20px 0;
            font-size: 15px;
         }
         .buttons {
            .button.is-medium {
               font-size: 15px;
            }
         }
      }
   }

</style>
