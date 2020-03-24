<!--
 * @Date         : 2020-03-24 12:27:01
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-24 17:50:56
 * @FilePath     : /src/App.vue
 -->
<template lang="pug" src="./pages/app.pug" />

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  message: string = 'Hello!'

  // 组件方法也可以直接声明为实例的方法
  onClick (): void {
    window.alert(this.message)
  }
}
</script>

<style scoped lang="stylus" src="./stylus/app.styl"/>