<template>
    <div class="home">
        <h1>Home Page</h1>
        <input type="text" id="input" v-model="msg" placeholder="Type something here" @click="clearInput"/>
        <h2>{{ msg }}</h2>

        <router-link to="/change">Go next</router-link>
    </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        msg: null
      }
    },
    methods: {
      clearInput () {
        this.msg = null
      }
    }
  }
</script>
