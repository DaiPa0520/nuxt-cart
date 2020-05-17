<template>
  <div>
    <Loading />
    <Headers />
    <nuxt  data-aos="fade-up" data-aos-delay="300" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  transition: 'fadeOpacity',
  data() {
    return {};
  },
  methods: {
    // 初始
    ...mapActions({
      _store: "_store",
    }),
  },
  created() {
    console.log(9999);
    this._store({act:'set_loading',data:false})
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>
