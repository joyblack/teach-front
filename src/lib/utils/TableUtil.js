/**
 * 将分页结果
 */
const format = (data, page, size) => {
  // 新增一条key属性
  const keyStart = (page - 1) * size + 1

  for (let i = 0; i < data.length; i++) {
    data[i]['key'] = keyStart + i
  }
}

export { format }
