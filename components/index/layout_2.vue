<template>
  <section class="container">
    <!-- todo 寬1200*600 -->
    <div id="bannerAds" class="carousel slide">
      <ol class="carousel-indicators">
        <li
          data-target="#bannerAds"
          v-for="( data , i ) in item.prod"
          :data-slide-to="i"
          :class="{'active': i == selected }"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          v-for="( data , i ) in item.prod"
          class="carousel-item"
          :class="{'active': i == selected }"
        >
          <img src="~/assets/images/banner02.jpg" class="d-block w-100" alt="..." />
          <!-- <img :src="IMG_URL+data.photox[0].src" class="d-block w-100" :alt="data.alt" /> -->
        </div>
      </div>
      <a class="carousel-control-prev" href="#bannerAds" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#bannerAds" role="button" data-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
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
  },
  data() {
    return {
      _: this.item,
      selected: 0,
      IMG_URL:process.env.IMG_URL
    };
  },
  methods: {
    // 初始
    // 輪播開始
    run_carousel() {
      setTimeout(() => {
        if (this.item.image.length == 1) return;

        this.selected =
          this.item.image.length == this.selected + 1 ? 0 : this.selected + 1;
        this.run_carousel();
      }, 5000);
    }
  },

  created() {
    // this.run_carousel();
    console.log("layout2:>>>>",this.item);
  }
};
</script>