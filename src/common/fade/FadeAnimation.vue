<template>
    <transition>
        <!-- slot是外部组件插入进来的一个插槽  -->
        <slot></slot>
    </transition>  
</template>

<script>
export default {
    name:"FadeAnimation"
}
</script>

<style lang="stylus" scoped>
    .v-enter , .v-leave-to
        opacity 0
    .v-enter-active , .v-leave-active
        transition  opacity .5s
</style>