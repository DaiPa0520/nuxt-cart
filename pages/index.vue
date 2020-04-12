<template>
  <div id="page">
    <Headers />

    <section class="content" >
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">首頁</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">活動館1</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>
      <div class="container">
        <div class="row">
          <div class="sidebar col-md-2 pt-3 mb-4">
            <div class="wrapper">
              <nav id="sidebar">
                <ul class="list-unstyled components">
                  <p>全部商品</p>
                  <li class="active">
                    <a
                      href="#homeSubmenu"
                      data-toggle="collapse"
                      aria-expanded="false"
                      class="dropdown-toggle"
                    >活動館1</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                      <li>
                        <a href="#">分類1</a>
                      </li>
                      <li>
                        <a href="#">分類2</a>
                      </li>
                      <li>
                        <a href="#">分類3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#pageSubmenu"
                      data-toggle="collapse"
                      aria-expanded="false"
                      class="dropdown-toggle"
                    >活動館2</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                      <li>
                        <a href="#">分類1</a>
                      </li>
                      <li>
                        <a href="#">分類2</a>
                      </li>
                      <li>
                        <a href="#">分類3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
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
section.content{
  /* padding-top:60px; */
}
</style>
