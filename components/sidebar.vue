<template>
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
li {
  border-color: transparent;
  margin-bottom: 0px;
  border-bottom: 1px dashed #e9e9e9;
  padding: 10px;
}
</style>