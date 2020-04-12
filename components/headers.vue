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
              <a class="nav-link">購物車</a>
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
        <img src="/images/icon/logo.png" class="logo" alt="">
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
              <a class="nav-link" href="#">商品分類</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">商品分類</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">商品分類</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">商品分類</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">商品分類</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">商品分類</a>
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
.logo{
  height: 50px;
}
.nav-wrapper.list{
  background-color:white;
  border-bottom: 1px solid #ccc;
}

</style>