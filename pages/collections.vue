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
            <img src="/images/banner01.png" class="img-fluid" alt="Responsive image" />
            <div class="row">
              <div class="card col-lg-3 col-md-3 col-xs-6 p-2">
                <div class="product">
                  <img src="/images/01.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div class="caption">
                      <h5>商品名稱</h5>
                      <div class="originalPrice">NT200</div>
                      <div class="offer">NT150</div>
                      <div class="cart-button">
                        <a href>
                          <i class="far fa-heart"></i>
                        </a>
                        <a href>
                          <i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card col-lg-3 col-md-3 col-xs-6 p-2">
                <div class="product">
                  <img src="/images/01.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div class="caption">
                      <h5>商品名稱</h5>
                      <div class="originalPrice">NT200</div>
                      <div class="offer">NT150</div>
                      <div class="cart-button">
                        <a href>
                          <i class="far fa-heart"></i>
                        </a>
                        <a href>
                          <i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card col-lg-3 col-md-3 col-xs-6 p-2">
                <div class="product">
                  <img src="/images/01.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div class="caption">
                      <h5>商品名稱</h5>
                      <div class="originalPrice">NT200</div>
                      <div class="offer">NT150</div>
                      <div class="cart-button">
                        <a href>
                          <i class="far fa-heart"></i>
                        </a>
                        <a href>
                          <i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card col-lg-3 col-md-3 col-xs-6 p-2">
                <div class="product">
                  <img src="/images/01.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div class="caption">
                      <h5>商品名稱</h5>
                      <div class="originalPrice">NT200</div>
                      <div class="offer">NT150</div>
                      <div class="cart-button">
                        <a href>
                          <i class="far fa-heart"></i>
                        </a>
                        <a href>
                          <i class="fas fa-cart-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footers />
  </div>
</template>

<script>
export default {};
</script>

<style >
section.content {
  padding-top: 20px;
  min-height: 700px;
}
</style>
