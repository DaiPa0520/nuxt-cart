// https://vuex.vuejs.org/en/actions.html

export default {
    async nuxtServerInit({ commit }, { req }) {
        const token = await this.$axios.$get("https://ingress.4ding.site/guest");
        commit("set_token", token);
    },
    // 通用
    setStore(context, o) {
        // 檢查包含以下參數
        switch (true) {
            case (!o.act): //動作
            case (o.data === undefined): //資料
                break;
            default:
                context.commit(o.act, o.data)
        }
    }
}
