export default store => {
  // 每次刷新浏览器执行的代码
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }

  // 每次提交mutations执行
  store.subscribe((mutations, state) => {
    localStorage.state = JSON.stringify(state)
  })
}
