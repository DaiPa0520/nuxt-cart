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
                      <div v-for="(item, key, index) in list"  class="carousel-item " :class="{'active':carousel==key}">
                        <img :src="item.image" class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <!-- <a
                      class="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span> -->
                    </a>
                  </div>
                </section>
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
                  <ul class="mt-2 mb-2">
                    <li class="option"><a href="">素顏霜</a></li>
                    <li class="option"><a href="">眼影</a></li>
                    <li class="option"><a href="">唇彩</a></li>
                    <li class="option"><a href="">氣墊粉餅</a></li>
                    <li class="option"><a href="">蜜粉</a></li>
                  </ul>
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
            <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
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
export default {
  data() {
    return{
      carousel:0,
      list: [
        { image:'/images/prod01.jpg' },
        { image:'/images/prod02.jpg' },
        { image:'/images/prod03.jpg' },
        { image:'/images/prod04.jpg' },
        { image:'/images/prod05.jpg' },
        { image:'/images/prod06.jpg' },
      ]
    }
  }
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


</style>
