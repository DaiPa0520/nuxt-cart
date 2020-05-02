export default {
  async get_token(context, o) {
    const token = await this.$axios.$get("https://ingress.4ding.site/guest");
    return token;
  },
}