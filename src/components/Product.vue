<template>
  <div>
    <div class="menuBackground"></div>

    <div class="productContainer">
      <div style="display: flex; justify-content: center; padding: 0 40px">
        <div class="productBox">
          <div>
            <p class="productTitle">
              {{ data.title }}
            </p>
            <p
              class="productSub"
              v-for="(items, index) in data.description"
              v-bind:key="index"
            >
              {{ items }}
            </p>

            <p class="productPrice">{{ data.price | currency }}원</p>

            <div>
              <label for="selected1" class="selectInput" v-if="data.options">{{
                data.options[0].title
              }}</label>
              <select id="selected1" v-model="selected1">
                <option disabled value="">선택하세요.</option>
                <option>10명 추가 (+500,000원)</option>
                <option>20명 추가 (+1,000,000원)</option>
                <option>인원 추가 안함</option>
              </select>
            </div>

            <div>
              <label for="selected2" class="selectInput" v-if="data.options">{{
                data.options[1].title
              }}</label>
              <select id="selected2" v-model="selected2">
                <option disabled value="">선택하세요.</option>
                <option>클로즈베타 (+300,000원)</option>
                <option>오픈베타</option>
              </select>
            </div>

            <div style="margin-bottom: 35px">
              <label for="testDate" class="selectInput" v-if="data.options">{{
                data.options[2].title
              }}</label>
              <input
                type="date"
                id="testDate"
                name="testDate"
                v-model="selected3"
              />
            </div>

            <!-- select total 테스트 -->
            <div class="selectTotalBox" v-if="selectTotal">
              <span style="color: red"
                >{{ selected1 }} / {{ selected2 }} / {{ selected3 }}
              </span>
            </div>

            <div style="display: flex">
              <div class="buyBtn">
                <button
                  class="button is-medium is-warning"
                  v-on:click="buyTotal"
                >
                  구매하기
                </button>
              </div>

              <div class="cartBtn">
                <button class="button is-medium is-warning">
                  장바구니에 담기
                </button>
              </div>
            </div>

            <div style="height: 100px"></div>

            <!-- data 테스트 -->
            <!--   <h1>{{ data }}</h1>-->
          </div>
        </div>

        <!-- 이미지 탭 -->
        <div class="productImgContainer">
          <div class="productTitleImgBox">
            <img ref="titleImg" src="../assets/images/standard.png" alt="" />
          </div>

          <div class="productImgBox" v-if="data.productImages">
            <div
              v-for="(images, index) in data.productImages"
              v-bind:key="index"
            >
              <img :src="images" alt="" @click="clickImg(images)" />
              <!--   {{ images }}-->
            </div>
          </div>
        </div>
      </div>

      <!-- contents -->
      <div
        class="contentsContainer"
        style="padding: 100px 40px; width: 800px; margin: 0 auto; background-color: #333333; text-align: center;"
      >
        <div style="display: flex; justify-content: start; margin-bottom: 40px">
          <img
            style="width: 600px;"
            src="https://contents.sixshop.com/thumbnails/uploadedFiles/107454/product/image_1587458446255_1000.png"
            alt=""
          />
        </div>

        <div style="text-align: start">
          <div style="margin: 50px 0">
            <span
              class="planTitle"
              style="background-color: #1abc9c; letter-spacing: 0.02em; line-height: 2em; font-size: 24px; font-weight: bold; color: #000000;"
            >
              Standard 플랜 주요 안내
            </span>
            <p class="planSub" style="color: #ffffff; line-height: 2em">
              * 이 플랜은
              <strong style="color: #ffffff; text-decoration: none"
                >구글플레이에
              </strong>
              <strong style="color: #e74c3c; text-decoration: underline;"
                >출시된 게임</strong
              >과
              <span style="color: #e74c3c; text-decoration: underline;"
                ><strong style="color: #e74c3c; text-decoration: underline;"
                  >미출시 게임</strong
                >
                모두 이용 가능</span
              >합니다.
              <br />
              * 미출시 게임의 경우 옵션에서
              <span style="color: #e74c3c; text-decoration: none"
                ><strong style="color: #e74c3c; text-decoration: underline;"
                  >"클로즈 베타 테스트 진행"을 선택</strong
                >하여 구매</span
              >해주세요. <br />
              * 인원추가를 원하실 경우
              <span style="color: #e74c3c; text-decoration: none"
                >옵션에서
                <strong style="color: #e74c3c; text-decoration: underline;"
                  >"10명추가" 혹은 "20명 추가"를 선택</strong
                >하여 구매</span
              >해주세요. <br />
            </p>
          </div>

          <div style="margin: 50px 0">
            <span
              class="planTitle"
              style="background-color: #1abc9c; letter-spacing: 0.02em; line-height: 2em; font-size: 24px; font-weight: bold; color: #000000;"
            >
              Standard 플랜 샘플 보기
            </span>
            <div>
              <a
                class="sampleLink"
                href="https://forms.gle/FPTboW8gYbpd3fSH8"
                target="_blank"
              >
                <span>1. Standard 설문 샘플 (클릭)</span>
              </a>
            </div>
            <div>
              <a
                class="sampleLink"
                href="https://drive.google.com/file/d/1mamYs1Y-XKSj107nSpMmVIvzuPNKyjg4/view"
                target="_blank"
              >
                <span>2. Standard 결과 시트 샘플 (클릭)</span>
              </a>
            </div>
            <div>
              <a
                class="sampleLink"
                href="https://docs.google.com/spreadsheets/u/1/d/1JNnVrBGN3tr397mTptaA9Si-ZpFqWWaPghbtN4U274Q/edit?usp=sharing"
                target="_blank"
              >
                <span>3. 유저 데이터 샘플 (클릭)</span>
              </a>
            </div>
          </div>

          <div style="margin: 50px 0">
            <span
              class="planTitle"
              style="background-color: #1abc9c; letter-spacing: 0.02em; line-height: 2em; font-size: 24px; font-weight: bold; color: #000000;"
            >
              Standard 플랜 FAQ
            </span>
            <p
              class="planSub"
              style="color: #ffffff; line-height: 2em; font-weight: bold"
            >
              Q. 심플 플랜과 스탠다드 플랜의 차이점은 무엇인가요?
            </p>
            <p class="planSub" style="color: #ffffff; line-height: 2em">
              A. 가장 큰 차이는 더 많은 카테고리의 의견을 들을 수 있고, 유저
              데이터를 제공한다는 점입니다. 특히 클로즈 베타테스트가 가능하기
              때문에 원하실 경우 추가구매가 가능합니다. (클로즈 베타 테스트가
              필요없는 경우 옵션 선택 X)
            </p>
          </div>

          <div
            style="border-left: 5px solid #ccc; margin: 18px 20px; padding: 2px 20px;"
          >
            <strong>
              <span
                style="background-color: #000000; font-style: italic; color: #f39c12;"
              >
                심플 플랜 카테고리
              </span>
            </strong>

            <p
              style="color: #f39c12; font-style: italic; line-height: 2em; letter-spacing: 0.02em;"
            >
              : 참여 정보, 재미 점수, 이탈 의향, 플레이 지속 의향, 흥미요소,
              부정적 요소, 첫인상&튜토리얼, 난이도, 광고 및 과금, 이탈포인트,
              유지할 점, 개선할 점, 게임사에 하고싶은 말
            </p>
            <br />
            <br />

            <strong>
              <span
                style="background-color: #000000; font-style: italic; color: #1abc9c;"
              >
                심플 플랜 카테고리
              </span>
            </strong>

            <p
              style="color: #1abc9c; font-style: italic; line-height: 2em; letter-spacing: 0.02em;"
            >
              : 참여 정보, 재미 점수, 이탈 의향, 플레이 지속 의향, 흥미요소,
              부정적 요소, 첫인상&튜토리얼, 난이도, 광고 및 과금, 이탈포인트,
              유지할 점, 개선할 점, 게임사에 하고싶은 말
            </p>
          </div>

          <div style="margin: 50px 0">
            <p
              class="planSub"
              style="color: #ffffff; line-height: 2em; font-weight: bold"
            >
              Q. 스탠다드 플랜은 어떤 게임사에게 추천하나요?
            </p>
            <p class="planSub" style="color: #ffffff; line-height: 2em;">
              A. 유저의 실제 데이터와 유저가 왜 그렇게 행동하는지 모두를 알고
              싶은 게임사에게 추천합니다. 정성조사와 정량조사를 한번에 진행하여
              디테일한 분석을 하고 싶으신 경우 추천드립니다.
            </p>
          </div>

          <div style="margin: 50px 0">
            <p
              class="planSub"
              style="color: #ffffff; line-height: 2em; font-weight: bold"
            >
              Q. 몇명의 결과를 얻을 수 있나요? 10명, 20명을 추가하는게 좋은가요?
            </p>
            <p class="planSub" style="color: #ffffff; line-height: 2em;">
              A. 게임사마다 원하시는 인원은 다릅니다만, 피드백 결과의 신뢰성
              확보를 위해 30명 이상은 꼭 하시기를 추천드립니다. 제공해드리는
              응답 중 불성실 응답자는 제외해서 결과서를 제공합니다. (무성의한
              응답이나 욕설 등)
            </p>
          </div>

          <!-- 플랜 선택 -->
          <div class="choicePlan">
            <p>
              <span
                ><strong
                  >혹시, 어떤 플랜을 선택해야 할지 고민되시나요?</strong
                ></span
              >
            </p>
            <p>
              <span
                ><strong
                  >오른쪽 하단의 무료 채팅 상담을 진행해 보세요 :-)
                </strong></span
              >
            </p>
            <p>(채팅 상담 시간 : 평일 11시 ~ 19시)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Product",
  data() {
    return {
      selected1: "",
      selected2: "",
      selected3: "",
      selectTotal: false,
      images: ""
    };
  },
  filters: {
    currency: value => {
      if (!value) return "";
      return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    }
  },
  mounted() {
    this.init();
  },
  computed: {
    ...mapState({
      data: "db"
    })
  },
  methods: {
    ...mapActions({
      init: "dbInit"
    }),
    buyTotal() {
      this.selectTotal = true;
    },
    clickImg(images) {
      // console.log(images)
      this.$refs.titleImg.src = images;
    }
  }
};
</script>

<style scoped lang="scss">
//메뉴 백그라운드
.menuBackground {
  padding-top: 100px;
  padding-bottom: 50px;
  background-color: #333333;
}

.productContainer {
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
  .productBox {
    width: 100%;
    background-color: #333333;
    max-width: 500px;
    .productTitle {
      color: #ffffff;
      font-weight: 700;
      font-size: 40px;
      letter-spacing: 0.02em;
      line-height: 1.2em;
      margin-bottom: 30px;
    }
    .productSub {
      color: #ffffff;
      font-weight: 400;
      font-size: 14px;
      max-width: 700px;
      letter-spacing: 0.02em;
      line-height: 2em;
      margin-bottom: 30px;
    }
    .productPrice {
      font-size: 26px;
      color: #bdbdbd;
    }
  }
}

.selectInput {
  color: #ffffff;
  font-size: 13px;
  line-height: 1.2em;
  margin-bottom: 10px;
  display: block;
  margin-top: 35px;
}
.selectTotalBox {
  width: 450px;
}

// 구매하기 버튼
.buyBtn {
  padding: 30px 20px 20px 0;
  .button.is-medium {
    width: auto;
    height: auto;
    padding: 1em 4em;
    background-color: #00bfba;
    border: 2px solid #00bfba;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: normal;
    outline: none;
    transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1);
    &:hover {
      background-color: #53c6c2;
      color: #ffffff;
      font-weight: bold;
      border-color: #53c6c2;
      opacity: 0.8;
    }
  }
}

// 장바구니 버튼
.cartBtn {
  padding: 30px 0 20px 0;
  .button.is-medium {
    width: auto;
    height: auto;
    padding: 1em 2.5em;
    border: 2px solid #00bfba;
    background-color: transparent;
    color: #00bfba;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: normal;
    outline: none;
    transition: all 0.2s cubic-bezier(0.33, 0, 0.2, 1);
    &:hover {
      background-color: #00bfba;
      color: #ffffff;
      font-weight: bold;
      border-color: #53c6c2;
    }
  }
}

select {
  background-color: #333333;
  color: #ffffff;
  width: 200px;
  padding: 1.2em 0.7em;
  border-color: #53c6c2;
  font-size: 14px;
}

input {
  width: 180px;
  font-size: 14px;
  background-color: #333333;
  color: #ffffff;
  padding: 1em 1em;
  border-color: #53c6c2;
  box-shadow: none;
  :focus {
    outline: none;
  }
}

// 이미지 프리뷰
.productImgContainer {
  max-width: 500px;
  margin-bottom: 200px;
  .productTitleImgBox {
    img {
    }
  }
  .productImgBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    img {
      width: 155px;
      margin-left: 0;
      margin-right: 10px;
      margin-top: 20px;
      cursor: pointer;
    }
  }
}

.sampleLink {
  color: #3498db;
  text-decoration: underline;
}

// 플랜 선
.choicePlan {
  padding: 50px 0;
  span > strong {
    color: #ffffff;
    letter-spacing: 0.02em;
    line-height: 2em;
    font-size: 24px;
  }
  p {
    color: #ffffff;
    letter-spacing: 0.02em;
    line-height: 2em;
  }
}
</style>
