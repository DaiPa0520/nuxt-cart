<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">
          <i class="fas fa-house-user"></i>
        </a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">熱門商品</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </nav>
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

</style>