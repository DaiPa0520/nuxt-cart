// var fetch = require('node-fetch');

export default {
  async get_token(context, o) {
    const token = await this.$axios.$get("https://ingress.4ding.site/guest");
    context.commit("set_token",token)
    return token;
  },
 
}