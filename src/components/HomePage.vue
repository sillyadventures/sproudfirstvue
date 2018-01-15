<template>
    <div>
        <h1>Home Page</h1>
        <input type="text" id="input" v-model="msg">
        <h2>{{ msg }}</h2>
        <h3>This is pretty cool huh</h3>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Type Something Here'
    }
  }
}
</script>
