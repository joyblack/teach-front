const mutations = {
  // state即同级的state对象
  // params即载荷，可以为对象，如果只有一个值直接使用即可
  SET_APP_NAME: (state, params) => {
    console.log('hahah')
    state.appName = params
  }
}
export default mutations
