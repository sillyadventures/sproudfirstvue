<template>
    <div class="change">
        <h1>Change Background</h1>
        <h2 class="counter">{{ counter}}</h2>
        <br>
        <button @click="change">Add to Counter</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <div class="box"></div>
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
      this.counter += 1;
    },
    changeColor () {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      console.log(bgColor);
      document.counter.style.background = bgColor;
    },
    change () {
      this.changeCounter ()
      this.changeColor ()
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