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
            <div class="row">
              <div class="col-md-6">
                <div class="swiper-container gallery-top">
                  <div class="swiper-wrapper pb-4">
                    <div class="swiper-slide text-center">
                      <img src="/images/prod01.jpg" alt width="200px" />
                    </div>
                    <div class="swiper-slide text-center">
                      <img src="/images/prod02.jpg" alt width="200px" />
                    </div>
                    <div class="swiper-slide text-center">
                      <img src="/images/prod03.jpg" alt width="200px" />
                    </div>
                  </div>
                  <!-- Add Arrows -->
                  <div class="swiper-button-next swiper-button-white"></div>
                  <div class="swiper-button-prev swiper-button-white"></div>
                </div>
                <div class="swiper-container gallery-thumbs">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="/images/prod04.jpg" alt width="100px" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/images/prod05.jpg" alt width="100px" />
                    </div>
                    <div class="swiper-slide">
                      <img src="/images/prod06.jpg" alt width="100px" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product-name">
                  <h4>商品名稱</h4>
                  <div class="originalPrice">NT200</div>
                  <div class="offer">NT150</div>
                  <div class="cart-button">
                    <a href>
                      <i class="far fa-heart"></i>
                    </a>
                  </div>
                  <div>尺寸</div>
                  <div class="list-group">
                    <a
                      href="#"
                      class="list-group-item list-group-item-action active"
                    >Cras justo odio</a>
                    <a href="#" class="list-group-item list-group-item-action">
                      Dapibus ac facilisis
                      in
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                    <a href="#" class="list-group-item list-group-item-action">
                      Porta ac consectetur
                      ac
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      Porta ac consectetur
                      ac
                    </a>
                  </div>
                  <p>數量</p>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >選擇數量</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">1</a>
                      <a class="dropdown-item" href="#">2</a>
                      <a class="dropdown-item" href="#">3</a>
                    </div>
                  </div>
                  <p>預計N個工作天</p>
                </div>
              </div>
            </div>
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
                >詳細說明</a>
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
                >運送方式</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >尺寸規格</a>
              </li>
            </ul>
            <div class="tab-content mb-2" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu
                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                Food
                truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
                Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson
                artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo
                enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
                organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia
                yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson
                biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente
                accusamus tattooed echo park.
              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                Raw
                denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu
                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
              </div>
            </div>
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
              >
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu
                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                Food
                truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
                Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson
                artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo
                enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
                organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia
                yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson
                biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente
                accusamus tattooed echo park.
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
}
</style>
