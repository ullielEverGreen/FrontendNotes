- ### `Teleport`

传送门，跳出当前组件的DOM层级限制，解决z-index问题。
常见场景：弹窗Modal、提示Toast。可使用teleport将其传送到body。

- ### `Suspense`

异步加载组件的实验性功能

- ### `toRef`、`toRefs`
将一个响应式对象中的每一个属性，转换为`ref`对象。二者功能一致，但`toRefs`可以批量转换

```js
  let person = reactive({name:'张三', age:18, gender:'男'})
	
  // 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
  let {name,age} =  toRefs(person)
  // 否则，直接操作name或者gender将不具备响应式效果
  const addAge = () => {
    age.value += 1
  }
```

- ### `storeToRefs`
将`store`中的数据转为`ref`对象，方便在模板中使用。

注：如果不使用`storeToRefs`，使用`toRefs`的话，也可以达到效果，但开销会非常大。因为`toRefs`会将`store`中的所有state数据与action方法都包装为ref。

即：`pinia`提供的`storeToRefs`只会将数据做转换，而`Vue`的`toRefs`会转换`store`中所有数据。

- ### `$subscribe`

通过 store 的 `$subscribe()` 方法侦听 `state` 及其变化

```ts
talkStore.$subscribe((mutate,state)=>{
  console.log('LoveTalk',mutate,state)
  localStorage.setItem('talk',JSON.stringify(talkList.value))
})
```

- ### `mitt`


概述：与消息订阅与发布（`pubsub`）功能类似，可以实现任意组件间通信。

```typescript
import emitter from "@/utils/emitter";
import { onUnmounted } from "vue";

// 绑定事件
emitter.on('send-toy',(value)=>{
  console.log('send-toy事件被触发',value)
})

onUnmounted(()=>{
  // 解绑事件
  emitter.off('send-toy')
})

function sendToy(){
  // 触发事件
  emitter.emit('send-toy',toy.value)
}
```
### 组件通信
- ### `$attrs`
实现**当前组件的父组件**，向**当前组件的子组件**通信（**祖→孙**）

父组件：

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import { ref } from "vue";
	let a = ref(1)
	let b = ref(2)
	let c = ref(3)
	let d = ref(4)

	function updateA(value){
		a.value = value
	}
</script>
```

子组件：

```vue
<template>
	<div class="child">
		<h3>子组件</h3>
		<GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
</script>
```

孙组件：

```vue
<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<h4>c：{{ c }}</h4>
		<h4>d：{{ d }}</h4>
		<h4>x：{{ x }}</h4>
		<h4>y：{{ y }}</h4>
		<button @click="updateA(666)">点我更新A</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	defineProps(['a','b','c','d','x','y','updateA'])
</script>
```

- ### `$refs`和`$parent`

* `$refs`用于 ：**父→子。**
* `$parent`用于：**子→父。**

| 属性      | 说明                                                     |
| --------- | -------------------------------------------------------- |
| `$refs`   | 值为对象，包含所有被`ref`属性标识的`DOM`元素或组件实例。 |
| `$parent` | 值为对象，当前组件的父组件实例对象。   

`$refs`可获取当前父组件的所有子组件，并操作子组件数据
`$parent`可获取当前父组件的数据，并操作父组件数据

前提：子组件和父组件数据能够被操作的前提是使用defineExpose暴露

- ### `$provide`和`$inject`

实现**祖孙组件**直接通信
* 在祖先组件中通过`provide`配置向后代组件提供数据
* 在后代组件中通过`inject`配置来声明接收数据