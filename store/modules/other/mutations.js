/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */



export default {
  // token
  set_token(state, o) {
    state.token = o
  },
  set_test(state, o) {
    state.test = o
  },
}
