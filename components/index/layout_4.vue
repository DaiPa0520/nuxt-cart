<template>
  <div class="container">
    <section class="pt-5 pb-5">
      <div class="w-100 align-items-center d-flex column">
        <div class="pb-3 col-md-6">
          <img class="w-100" src="~/assets/images/01.png" alt />
        </div>
        <div class="text-left col-md-6">
          <h4>多商店行銷</h4>
          <h6>
            想多開幾種商店?
            <br />想多開幾個商店?
            <br />隨意～
          </h6>
          <p>
            一頁式購物或是品牌網站數量無上限
            <br />除了各商店後台，還有總後台讓你掌握所有商店通路
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    // 父組件來源
    item: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>