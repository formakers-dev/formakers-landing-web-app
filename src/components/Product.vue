<template>
  <div>
    <div class="menuBackground"></div>

    <div class="productContainer">
      <div style="display: flex">
        <div class="productBox">
          <div style="padding: 40px 0">
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
                <!--              <option>-->
                <!--                {{ data.options[0].data[0].label }}-->
                <!--              </option>-->
                <!--              <option>-->
                <!--                {{ data.options[0].data[1].label }}-->
                <!--              </option>-->
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
            <!--                    <h1>{{ data }}</h1>-->
          </div>
        </div>

        <!-- 이미지 탭 -->
        <div class="productImgContainer">
          <div class="productTitleImgBox">
            <img src="../assets/images/standard.png" alt="" />
          </div>

          <div class="productImgBox" v-if="data.productImages">
            <img
              v-for="(images, index) in data.productImages"
              v-bind:key="index"
              :src="images"
              alt=""
              v-on:click="clickImg"
            />
            {{ images }}
          </div>
        </div>
      </div>

      <!-- contents -->
      <div class="contentsContainer">
        <div>
          <img
            src="https://contents.sixshop.com/thumbnails/uploadedFiles/107454/product/image_1587458446255_1000.png"
            alt=""
          />
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
    clickImg() {
      console.log(this.images);
    }
  }
};
</script>

<style scoped lang="scss">
//메뉴 백그라운드
.menuBackground {
  padding-top: 55px;
  padding-bottom: 50px;
  background-color: #333333;
}

.productContainer {
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
  padding: 100px;
  .productBox {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background-color: #333333;
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

.productImgContainer {
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
  .productTitleImgBox {
    width: 60%;
    /*height: 50%;*/
    img {
      width: 500px;
      height: 500px;
      padding: 10px;
    }
  }
  .productImgBox {
    width: 60%;
    height: 100%;
    img {
      width: 150px;
      height: 150px;
      margin: 10px;
      cursor: pointer;
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

// contents
.contentsContainer {
  display: flex;
  justify-content: center;
}
</style>
