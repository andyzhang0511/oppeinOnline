// 解决浏览器用户关闭本地存储功能/隐身模式的规范写法

let defaultCity = "北京"
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity 
}