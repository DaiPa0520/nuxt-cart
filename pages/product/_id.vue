<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <!-- 麵包屑 -->
        <Breadcrumb />
      </div>
      <div class="container">
        <div class="row">
          <div class="sidebar col-md-2 pt-3 mb-4">
            <Sidebar />
          </div>
          <div class="content col-md-10">
            <div class="row pt-5 pb-5">
              <div class="col-md-6">
                <section class>
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li
                        v-for="(item, key, index) in list"
                        data-target="#carouselExampleIndicators"
                        :data-slide-to="index"
                        :class="{'active':carousel==key}"
                        :style="`background-image: url(${item.image})`"
                        @click="carousel=key"
                      ></li>
                    </ol>
                    <div class="carousel-inner">
                      <div
                        v-for="(item, key, index) in list"
                        class="carousel-item"
                        :class="{'active':carousel==key}"
                      >
                        <img :src="item.image" class="d-block w-100" alt="..." />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-md-6">
                <div class="product-name">
                  <div class="cart-button">
                    <a href>
                      <i class="far fa-heart"></i>
                    </a>
                  </div>

                  <h4>{{product_info.name.tw}}</h4>
                  <div class="originalPrice">NT{{product_info.price}}</div>
                  <div class="offer">NT{{product_info.reduce}}</div>
                  <br />
                  <div>尺寸:</div>
                  <div class="row">
                    <div v-for="(o,id) in product_info.specx" class="col-md-4 p-2 mb-3">
                      <ButtonChoice
                        :title=" specxName(o.itemx) "
                        :free="false"
                        :active="specx===id"
                        @selected="specx=id"
                      />
                    </div>
                  </div>
                </div>
                <div class="pt-5">
                  <label for>數量:</label>
                  <div class="w-50">
                    <ButtonSubAdd :count.sync="count" />
                  </div>
                  <div class="input-group">
                    <nuxt-link
                      tag="button"
                      class="col-md-5 l-btn pick-btn btn-block mt-3"
                      :to="`/cart/${product_info.product_id}`"
                    >加入購物車</nuxt-link>
                    <nuxt-link
                      tag="button"
                      class="col-md-5 l-btn checkout-btn mt-3 ml-3"
                      :to="`/cart/${product_info.product_id}`"
                    >立即結帳</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- 規格說明 -->
            <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
              <li class="nav-item" v-for="(item,i) in product_info.link.block">
                <a
                  class="nav-link"
                  :class="{'active':i==0}"
                  data-toggle="tab"
                  :href="'#tab_'+i"
                  :aria-controls="'tab_'+i"
                >{{item.title.tw}}</a>
              </li>
            </ul>
            <div class="tab-content mb-2" id="myTabContent">
              <div
                v-for="(item,i) in product_info.link.block"
                class="tab-pane fade"
                :class="{'active show':i==0}"
                :id="'tab_'+i"
                role="tabpanel"
              >{{item.content.tw}}</div>
            </div>
            <!-- 瀏覽器紀錄 -->
            <div class="history p-2">瀏覽紀錄</div>
            <div class="history-contect mb-2"></div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >本分類熱銷</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >全站方式</a>
              </li>
            </ul>
            <div class="tab-content mb-2" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >AAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >SSSSSSSSSSSSSSSSSSSSSSSSS</div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat">
        <i class="fas fa-comments"></i>
      </div>
    </section>

    <Footers />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      carousel: 0,
      product_info: {},
      // 所選擇的產品資訊
      specx: "",
      count: 1,
      list: [
        { image: "/images/prod01.jpg" },
        { image: "/images/prod02.jpg" },
        { image: "/images/prod03.jpg" },
        { image: "/images/prod04.jpg" },
        { image: "/images/prod05.jpg" },
        { image: "/images/prod06.jpg" }
      ]
    };
  },
  async asyncData({ context, app, store, route, redirect }) {
    // todo:拉到store去
    if (typeof route.params.id !== "string") redirect.go(-1);
    let req = new app.sqlpb.Query();
    let cond = new app.sqlpb.Condition();
    cond.setF("product_id").setV(route.params.id);
    req.addCondition(cond)
    let metadata = { "x-4d-token": store.state.other.token };
    let method = "FindProduct";
    let product = await app.serverFetch(method, metadata, req, (err, resp) => {
      const data = app.sqlpb.Response.deserializeBinary(resp);
      return data.getResult().toJavaScript();
    });
    if (product.length >= 1) {
      console.log("xx>>>>", product[0]);
      return { product_info: product[0] };
    }
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },

  /*created(){
    $(function () {
      var swiper = new Swiper('.carousel-indicators', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true
        preventClicks: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  }*/
  methods: {
    // 初始
    ...mapActions({
      loading: "loading"
    }),
    // get 規格名稱
    specxName(data) {
      let name = "";
      data.forEach(element => {
        name += element.tw;
      });
      return name;
    },

  },
  mounted: async function() {
    //元素已掛載， el 被建立。
    this.loading(false);
  }
};
</script>

<style lang="scss" scoped >
.carousel-indicators {
  top: 100%;
  margin-right: 0px;
  margin-left: 0px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  height: 100px;
  & li {
    // background-image: url(/images/prod01.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 60px;
    height: 60px;
  }
}
.shipping-item {
  height: auto;
}
#myTabContent {
  border: 1px solid #ccc;
  border-top: 0px solid #dee2e6;
  padding: 12px;
}
</style>
