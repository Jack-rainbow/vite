<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>

  <div>

    测试测试冷启动和热更新的
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
