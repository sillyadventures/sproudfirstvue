<template>
    <div class="change">
        <h1>Change Background</h1>
        <h2 id="counter">{{ counter }}</h2>
        <br>
        <button @click="change">Add to Counter</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <div id="box"></div>
    </div>
</template>

<script>
  export default {
    name: 'BackgroundChange',
    data () {
      return {
        counter: 0,
        msg: 'You loaded this page on ' + new Date().toLocaleString(),
      }
    },
    methods: {
      changeCounter () {
        this.counter += 1
      },
      changeColor () {
        const x = Math.floor(Math.random() * 255)
        const y = Math.floor(Math.random() * 255)
        const z = Math.floor(Math.random() * 255)
        const bgColor = `rgb(${x}, ${y}, ${z})`

        document.getElementById('box').style.background = bgColor
      },
      change () {
        this.changeCounter()
        this.changeColor()
      }
    }
  }
</script>

<style lang="scss" scoped>
    .counter {
        background-color: blueviolet;
        width: 100%;
        height: 40px;
    }

    .box {
        background-color: indianred;
        width: 200px;
        height: 200px;
    }
</style>