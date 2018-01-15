<template>
    <div class="change">
        <h1>Change Background</h1>
        <h2 v-bind:style="bgc">{{ counter}}</h2>
        <br>
        <button v-on:click="changeColor">Add to Counter</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <div style="width: 200px; height: 200px;" v-bind:style="styles"></div>
    </div>
</template>

<script>
export default {
  name: 'BackgroundChange',
  data () {
    return {
      counter: 0,
      msg: 'You loaded this page on ' + new Date().toLocaleString(),
      bgc: {
        backgroundColor: 'blue'
      },
      styles: {
        backgroundColor: 'blue',
        width: '200px',
        height: '200px'
      }
    }
  },
  methods: {
    changeCounter () {
      this.counter += 1;
    },
    changeColor () {
      alert("Hello Sir")
    }
  }
}
</script>
