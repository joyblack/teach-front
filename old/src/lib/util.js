// 与业务有实际关系的
const mainTitle = 'vue学习'

export const setTitle = (title) => {
  window.document.title = title || mainTitle
}
