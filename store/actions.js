// https://vuex.vuejs.org/en/actions.html

export default {
    async nuxtServerInit({ commit , dispatch, app }, { req }) {
        // let token = await dispatch("other/get_token");
        // commit("other/set_token",token)

        let token = await dispatch("other/get_token2");
        commit("other/set_token",token)

        // const q = new Query();
        // this.G('MyCar', q, { 'x-4d-token': this.token }, (err, ba) => {
        //     console.log(err);
        //     console.log(ba);

        //     const resp = Response.deserializeBinary(ba);
        //     console.log(resp.getResult().toJavaScript());

        // });
        console.log(app)
        // dispatch("other/MyCar", {app:this , token:token} );
    },
    loading(context, o) {
        context.commit("set_loading", o);
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
