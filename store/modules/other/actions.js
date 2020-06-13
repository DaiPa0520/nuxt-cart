// var fetch = require('node-fetch');

export default {
  async get_token(context, o) {
    // console.log('get_token>>>>>',this.app.sqlpb)
    const token = await this.$axios.$get(`${process.env.TOKEN_URL}/guest`);
    context.commit("set_token", token)
    return token;
  },
  async get_template(context, url) {
    const html = await this.$axios.$get(`${process.env.IMG_URL}${url}`);
    console.log(html)
    return html
  },

}