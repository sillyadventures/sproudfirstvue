<template>
    <div class="change">
        <h1>Change Background</h1>
        <h2 id="count">{{ counter }}</h2>
        <br>
        <button @click="change">Add to Counter</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <div id="box-move">
            <div id="box"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'BackgroundChange',
    data () {
      return {
        counter: 0,
        move: 0,
        moveUp: true,
        msg: `You loaded this page on ${new Date().toLocaleString()}`
      }
    },
    methods: {
      changeCounter () {
        this.counter++
      },
      changeColor () {
        const x = Math.floor(Math.random() * 256)
        const y = Math.floor(Math.random() * 256)
        const z = Math.floor(Math.random() * 256)

        document.getElementById('count').style.background = `rgb(${x},${y},${z})`
      },
      changeRotate () {
        document.getElementById('box').style.transform = `rotate(${this.counter * 15}deg)`
      },
      changeTranslate () {
        if (this.moveUp) {
          this.move++

          if (this.move >= 18) this.moveUp = false
        } else {
          this.move--

          if (this.move <= 0) this.moveUp = true
        }

        document.getElementById('box-move').style.transform = `translate(${this.move * 5}%)`
      },
      change () {
        this.changeCounter()
        this.changeColor()
        this.changeRotate()
        this.changeTranslate()
      }
    }
  }
</script>

<style lang="scss" scoped>
    #count {
        background-color: blueviolet;
        width: 100%;
        height: 40px;
    }

    #box {
        background-color: indianred;
        width: 200px;
        height: 200px;
    }
</style>