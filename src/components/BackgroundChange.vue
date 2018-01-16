<template>
    <div class="change">
        <h1>Change Background</h1>
        <h2 id="count">{{ counter }}</h2>
        <br>
        <button @click="change">Add to Counter</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <div id="boxmove">
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
        msg: 'You loaded this page on ' + new Date().toLocaleString(),
      }
    },
    methods: {
      changeCounter () {
        this.counter += 1
      },
      changeColor () {
        const x = Math.floor(Math.random() * 256)
        const y = Math.floor(Math.random() * 256)
        const z = Math.floor(Math.random() * 256)
        const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')'
        const c = document.getElementById('count')
        console.log(bgColor)
        c.style.background = bgColor
      },
      changeRotate () {
        const b = document.getElementById('box')
        const degree = 'rotate(' + this.counter * 15 + 'deg)'
        console.log(degree)
        b.style.transform = degree
      },
      changeTranslate () {
        const m = document.getElementById('boxmove')
        if (this.move < 20) {
          this.move += 1
        }
        const translate = 'translate(' + this.move * 5 + '%)'
        console.log(this.move)
        m.style.transform = translate
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