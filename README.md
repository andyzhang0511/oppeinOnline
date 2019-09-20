# traveltest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---------------------------------------------------------------------
Alphabet组件 

e.target.innerText
在触发DOM上的事件都会产生一个对象，即事件对象（也称event对象），
这里用e接收事件对象。事件对象有很多属性和方法，
此处的target属性是获取事件目标，即li元素DOM对象，然后获取其相应的属性
把这个字母传给List这个组件，然后让List组件把对应的区块展示出来

touchstart 手指触摸屏幕时触发，即使已经有手指在屏幕上也会触发。
touchmove 手指在屏幕滑动时触发。
touchend 手指从屏幕时移开时触发。
---------------------------------------------------------------------
<<<<<<< HEAD
vuex相关讲解: this.store指的是什么？this.store指的是store.js里创建的Vuex.Store export default new Vuex.Store({ state:{ city:'北京' } }) 为什么每个组件里都能够用这个store呢？是因为在main.js里面创建根实例的时候把store传递进去了紧接着，vuex创建的这个store会被派发到每一个子组件里面所以在每一个子组件里面都可以用this.store取到这个store new Vue({ el: '#app', router, store, ← // store传递进去了 components: { App }, template: '' })
vuex执行流程分析 export default new Vuex.Store({ state:{ city:'上海' }, actions:{ changeCity(ctx,city){ // console.log(ctx)//上下文 // console.log(city)//打印的是传过来的城市名称 ctx.commit('changeCityyy',city) } }, mutations:{ // stateee指的是上面的state changeCityyy(stateee,cityyy){ stateee.city = cityyy } } }) 流程分析: 首先，组件调用actions, 然后actions调用mutations,最后mutation改变state里面的数据

但是可以忽略掉actions这个操作，直接mutation即可
=======
vuex相关讲解:
this.$store指的是什么？
this.$store指的是store.js里创建的Vuex.Store
export default new Vuex.Store({
    state:{
        city:'北京'
    }
})
为什么每个组件里都能够用这个$store呢？
是因为在main.js里面创建根实例的时候把store传递进去了
紧接着，vuex创建的这个store会被派发到每一个子组件里面
所以在每一个子组件里面都可以用this.$store取到这个store
new Vue({
  el: '#app',
  router,
  store,  ← // store传递进去了
  components: { App },
  template: '<App/>'
})
---------------------------------------------------------------------
vuex执行流程分析
export default new Vuex.Store({
    state:{
        city:'上海'
    },
    actions:{
        changeCity(ctx,city){
            // console.log(ctx)//上下文
            // console.log(city)//打印的是传过来的城市名称
            ctx.commit('changeCityyy',city)
        }
    },
    mutations:{
        // stateee指的是上面的state
        changeCityyy(stateee,cityyy){
            stateee.city = cityyy
        }
    }
})
流程分析: 首先，组件调用actions, 然后actions调用mutations,最后mutation改变state里面的数据 

但是可以忽略掉actions这个操作，直接mutation即可
---------------------------------------------------------------------
>>>>>>> city-vuex
注意下vuex的高级写法