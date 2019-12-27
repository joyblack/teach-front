import { META_TITLE } from '@/constant/common.js'
/**
 * 设置网站title
 */
const setTile = (title, front) => {
  if (front) {
    window.document.title = title || META_TITLE.FRONT
  } else {
    window.document.title = title || META_TITLE.ADMIN
  }
}

export { setTile }
