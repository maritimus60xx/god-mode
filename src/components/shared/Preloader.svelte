<script lang="ts">
  import {preloaderStore} from "../../stores/store.js";
  import {fade} from 'svelte/transition';
</script>
{#if $preloaderStore.visible}
  <div class="loader" transition:fade={{ duration: 200 }}>
    <div class="load">Loading...</div>
    <div class="circ">
      <div class="hands"></div>
      <div class="body"></div>
      <div class="head">
        <div class="eye"></div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .loader {
    position: fixed;
    z-index: 6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #111;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .load {
    line-height: 32px;
    font-size: 28px;
    font-weight: 400;
    color: rgba(240, 220, 220, 1);
    display: block;
    text-transform: uppercase;
  }

  .circ {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    margin: 10px auto;
    width: 180px;
    height: 180px;
    position: relative;
    z-index: -1;
    overflow: hidden;
  }


  .eye {
    width: 20px;
    height: 8px;
    background-color: rgba(240, 220, 220, 1);
    border-radius: 0 0 20px 20px;
    position: relative;
    left: 10px;
    top: 40px;
    box-shadow: 40px 0 0 0 rgba(240, 220, 220, 1);
  }

  .head {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: relative;
    margin: -250px auto;
    width: 80px;
    height: 80px;
    background-color: #111;
    border-radius: 50px;
    box-shadow: inset -4px 2px 0px 0px rgba(240, 220, 220, 1);
    animation: headAnim 1.5s infinite alternate;
    animation-timing-function: ease-out;
  }

  .body {
    position: relative;
    margin: 90px auto;
    width: 140px;
    height: 120px;
    background-color: #111;
    border-radius: 50px/25px;
    box-shadow: inset -5px 2px 0px 0px rgba(240, 220, 220, 1);
    animation: bodyAnim 1.5s infinite alternate;
    animation-timing-function: ease-out;
  }

  @keyframes headAnim {
    0% {
      top: 0;
    }
    50% {
      top: 10px;
    }
    100% {
      top: 0;
    }
  }

  @keyframes bodyAnim {
    0% {
      top: -5px;
    }
    50% {
      top: 10px;
    }
    100% {
      top: -5px;
    }
  }


  .hands {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    margin-top: 140px;
    width: 120px;
    height: 120px;
    position: absolute;
    background-color: #111;
    border-radius: 20px;
    box-shadow: -1px -4px 0px 0px rgba(240, 220, 220, 1);
    transform: rotate(45deg);
    top: 75%;
    left: 16%;
    z-index: 1;
    animation: bodyAnim 1.5s infinite alternate;
    animation-timing-function: ease-out;
  }


</style>