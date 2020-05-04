<template>
  <header class="fixed-top">
    <div class="nav-wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">首頁</a>
        <div class="navbar-collapse justify-content-end collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">登入會員</a>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a class="nav-link" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <!-- <nuxt-link tag="a"  class="nav-link" to="/cart/123">購物車</nuxt-link> -->
                  購物車
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div class="cart-content">
                    <div class="cart_list">
                        <div class="product_item"> 
                          <div class="float-left"><img src="/images/noprod.png" alt=""></div> 
                              <div class="product-name">    
                                 <p class="title"><a href="/products/mb-041">MB-041 奧本水洗式電動鼻毛刀</a></p>
                                   <span class="price"> NT$489元<span class="color-gray-text"> *1</span></span>     
                              </div> 
                          </div>
                    </div>
                    <div class="color-gray-text text-right mb-2">總計: <span class="price">489</span></div>
                    <div class="buttons">
                      <a class="btn btn-primary btn-block btn-cart" href="#"">立即結帳</a>
                    </div>
                  </div>
                </div>
            </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
    <div class="nav-wrapper list">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- <a class="navbar-brand" href="/">LOGO</a> -->
        <img src="/images/icon/logo.png" class="logo" alt />
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-center collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link tag="a"  class="nav-link" to="/product/123">熱門商品</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link tag="a"  class="nav-link" to="/collections">節目推薦</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link tag="a"  class="nav-link" to="/cart/123">人氣商品</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link tag="a"  class="nav-link" to="/collections">促銷特價</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link tag="a"  class="nav-link" to="/collections">最新商品</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link tag="a"  class="nav-link" to="/collections">商品分類</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      left: [
        { title: "優勢特色", link: "/home" },
        { title: "系統簡介", link: "/introduction" },
        { title: "計畫費用", link: "/cost" },
        { title: "常見問題", link: "/question" }
      ],
      right: [
        { title: "開通帳號", link: "/registered" }
        // { title: "登入", link: "/login" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.logo {
  height: 50px;
}
.nav-wrapper.list {
  background-color: white;
  border-bottom: 1px solid #ccc;
}
li {
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid #ccc;
  &:first-child {
    border-left: 0px solid;
  }
}
</style>