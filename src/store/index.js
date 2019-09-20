import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'


Vue.use(Vuex)

export default new Vuex.Store({
  // state:state,
  // mutations:mutations
  // 键值名一样的话就可以简写
  state,
  mutations,
//   getters: {
//     doubleCity(state) {
//         return state.city + ' ' + state.city
//     }
//   }
})

// export default new Vuex.Store({
//     state:{
//         city:localStorage.city || '北京'
//     },
//     actions:{
//         changeCity(ctx,city){
//             // console.log(ctx)//上下文
//             // console.log(city)//打印的是传过来的城市名称
//             ctx.commit('changeCityyy',city)
//         }
//     },
//     mutations:{
//         // stateee指的是上面的state
//         changeCityyy(stateee,cityyy){
//             stateee.city = cityyy
//             localStorage.city = cityyy
//         }
//     }
// })