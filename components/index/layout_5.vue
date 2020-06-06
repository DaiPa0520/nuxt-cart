<template>
  <div class="container">
    <section class="pt-5 pb-5">
      <div class="w-100 align-items-center d-flex column-reverse">
        <div class="text-left col-md-7">
          <h4>完整報表分析</h4>
          <h6>不是只有訂單報表看營業額而已</h6>
          <p>
            完整會員報表、商品追蹤報表、購物車未結帳
            <br />完整會員報表，可看細節查看每個會員的商品相關報表
            <br />完整訂單報表，可多訂單分析會員比例跟商品比例
            <br />完整活動報表，更了解消費者喜歡撿哪種便宜
          </p>
        </div>
        <div class="pb-3 col-md-5">
          <img class="w-100" src="~/assets/images/02.png" alt />
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