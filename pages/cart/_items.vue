<template>
  <div id="page">
    <section class="content">
      <Step />
      <div class="container">
        <table class="table">
          <thead>
            <th>圖片</th>
            <th>名稱</th>
            <th>規格</th>
            <th>單價</th>
            <th width="18%">數量</th>
            <th>小計</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="item in list">
              <td>
                <img :src="item.image" alt width="80px" />
              </td>
              <td>{{item.name}}</td>
              <td>{{item.size}}</td>
              <td>NT${{item.price}}</td>
              <td>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button
                      style="min-width: 2.5rem"
                      class="btn btn-decrement btn-outline-secondary"
                      type="button"
                    >
                      <strong>-</strong>
                    </button>
                  </div>
                  <input
                    type="text"
                    inputmode="decimal"
                    style="text-align: center"
                    class="form-control"
                    :value="item.num"
                  />
                  <div class="input-group-append">
                    <button
                      style="min-width: 2.5rem"
                      class="btn btn-increment btn-outline-secondary"
                      type="button"
                    >
                      <strong>+</strong>
                    </button>
                  </div>
                </div>
              </td>
              <td>{{ item.num * item.price }}</td>
              <td>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- 小計 折價卷 -->
        <div class="row">
          <div class="col-lg-12 bord-top-dash p-2">
            <div class="cart-content-container">
              <div class="ecoupon-entry__content">
                <i class="fas fa-cart-plus"></i>
                <span class="ecoupon-entry__title">折價券</span>
              </div>
              <div class="ecoupon-entry__action">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div></div>
          <div class="total col-lg-6"></div>
          <div class="total col-lg-6">
            <div class="col-md-12 d-flex justify-content-between p-2">
              <div class="title">一般會員</div>
              <div class></div>
            </div>
            <div class="col-md-12 d-flex justify-content-between p-2">
              <div class>商品小計</div>
              <div class>NT$2666</div>
            </div>
            <div class="col-md-12 d-flex justify-content-between bord-top-dash p-2">
              <div class>共N項</div>
              <div class="total-money">NT$2666</div>
            </div>
            <div class="col-md-12">
              <button type="button" class="w-100 btn btn-outline-primary btn-sm">下一步</button>
            </div>
          </div>
        </div>
        <!-- 加購專區 -->
        <div class="purchase row p-3">
          <div class="col-lg-12 col-md-12 col-xs-12 p-2 title">加購專區</div>
          <div v-for="item in purchase" class="card col-lg-3 col-md-3 col-xs-6 p-2">
            <div class="product p-2">
              <img :src="item.image" class="card-img-top p-2" alt="..." />
              <div class="card-body">
                <!-- <div class="caption"> -->
                <b>{{item.name}}</b>
                <div class="offer">
                  <span class="price">>NT{{item.price}}</span>
                  NT{{item.offer}}
                </div>
                <div class="cart-button">
                  <button type="button" class="w-100 btn btn-outline-primary btn-sm">加入購物車</button>
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      purchase: [
        {
          image: "/images/prod01.jpg",
          name: "輕柔空氣感彩妝刷",
          price: "680",
          offer: "249"
        },
        {
          image: "/images/prod01.jpg",
          name: "輕柔空氣感彩妝刷",
          price: "680",
          offer: "249"
        },
        {
          image: "/images/prod01.jpg",
          name: "輕柔空氣感彩妝刷",
          price: "680",
          offer: "249"
        },
        {
          image: "/images/prod01.jpg",
          name: "輕柔空氣感彩妝刷",
          price: "680",
          offer: "249"
        },
        {
          image: "/images/prod01.jpg",
          name: "輕柔空氣感彩妝刷",
          price: "680",
          offer: "249"
        }
      ],
      list: [
        {
          image: "/images/noprod.png",
          name: "歐美高衩深V透膚雕花連體衣",
          size: "S",
          price: "227",
          num: "1"
        },
        {
          image: "/images/noprod.png",
          name: "歐美高衩深V透膚雕花連體衣",
          size: "S",
          price: "227",
          num: "1"
        },
        {
          image: "/images/noprod.png",
          name: "歐美高衩深V透膚雕花連體衣",
          size: "S",
          price: "227",
          num: "1"
        },
        {
          image: "/images/noprod.png",
          name: "歐美高衩深V透膚雕花連體衣",
          size: "S",
          price: "227",
          num: "1"
        },
        {
          image: "/images/noprod.png",
          name: "歐美高衩深V透膚雕花連體衣",
          size: "S",
          price: "227",
          num: "1"
        },
        {
          image: "/images/noprod.png",
          name: "歐美高衩深V透膚雕花連體衣",
          size: "S",
          price: "227",
          num: "1"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.cart-content-container {
  padding-left: 18px;
  padding-right: 4px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  &.ecoupon-entry__content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  &.ecoupon-entry__action {
    display: flex;
    padding: 16px;
    font-size: 16px;
    width: 20px;
    cursor: pointer;
  }
}
.total {
  color: #999;
  font-size: 0.8em;
  background: #e6e6e6;
  padding: 10px;
  & .title {
    font-size: 14px;
    color: #333;
    font-weight: bolder;
  }
  & .total-money {
    color: #ff5353;
    font-size: 18px;
    font-weight: bolder;
  }
}

.bord-top-dash {
  border-top: 1px dashed #a8a0a0;
}
.purchase {
  & .title {
    border-top: 1px dashed #e9e9e9;
  }
}
.offer {
  float: left;
  font-size: 0.9em;
  color: #ff5353;
  line-height: 1.2;
}
.price {
  font-size: 0.8em;
  color: #aaa;
  text-decoration: line-through;
  line-height: 1.2;
}
p {
  font-size: 15px;
  color: #333;
  font-weight: bold;
  padding-bottom: 0;
  cursor: default;
}
.table td,
.table th {
  vertical-align: middle;
}
</style>