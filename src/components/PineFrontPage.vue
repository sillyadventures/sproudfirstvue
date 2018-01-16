<template>
    <div class="FrontPage">
        <h1 id="titleOne">{{ titleOne }}</h1>
        <h1 id="titleTwo">{{ titleTwo }}</h1>
        <div id="but">
        <button id="startGame">Start Game</button>
        <button id="gametask">Game Task</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        titleOne: 'Pine',
        titleTwo: 'Ville'
      }
    }
  }
</script>

<style lang="scss" scoped>
    .FrontPage h1{
        font-size: 200px;
        font-weight: bold;
        margin: 0px;
    }
    #but {
        display: flex;
        justify-content: space-around;
    }
    .FrontPage button {
        height: 100px;
        width: 100px;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }
    @keyframes floating {
        from { transform: translate(0,  0px); }
        65%  { transform: translate(0, 20px); }
        to   { transform: translate(0, -0px); }
    }
    #titleOne {
        color: lawngreen;
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    #titleTwo {
        color: yellow;
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-direction: reverse;
        animation-timing-function: ease-in-out;
    }
    #startGame {
        background-color: darkorange;
        border-top-right-radius: 50%;
    }
    #gametask {
        background-color: cornflowerblue;
        border-top-left-radius: 50%;
    }
</style>