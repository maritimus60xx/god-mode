<script lang="ts">
  import ConfirmModal from "../components/modals/ConfirmModal.svelte";
  import {
    bodyImage, bombImage,
    faceDefault,
    faceSad,
    faceSmile, fireImage,
    groundImage,
    house1,
    house2, planeImage,
    roadImage,
  } from "../assets/img";
  import Preloader from "../components/shared/Preloader.svelte";
  import {confirmModalStore, preloaderStore} from "../stores/store";
  import Stars from "../components/shared/Stars.svelte";
  import {GodVariantsConstants} from "../constants/GodVariantsConstants";
  import {onMount} from "svelte";

  let groundMove: boolean = false;
  let happy: boolean = false;
  let sad: boolean = false;
  let humanMove: boolean = false;
  let humanSpeak: boolean = false;

  const onRequest = async () => {
    let request: Promise<GodVariantsConstants> = new Promise<GodVariantsConstants>(resolve => {
      confirmModalStore.update(store => {
        store.confirm = resolve;
        store.visible = true;
        return store
      });
    });

    return await request;
  }

  const secretScript = async () => {

    let value: GodVariantsConstants;

    groundMove = true;

    humanMove = true;

    setTimeout(() => {
      humanSpeak = true
    }, 16000)

    setTimeout(async () => {
      value = await onRequest();

      console.log("finally value: ", value);

      if (value === GodVariantsConstants.Happy) {
        happy = true;
      }
      else if (value === GodVariantsConstants.Bomb) {
        sad = true
      }
      else {
        console.log("error answer");
      }
    }, 22000)
  }

  onMount(() => {
    $preloaderStore.visible = true;
    setTimeout(() => {
      $preloaderStore.visible = false
    }, 5000)
  })

</script>

<div class="street-page">
  <div class="scene" class:after-active={happy}>
    {#if happy}
      <div class="sky">
        <Stars/>
        <Stars/>
      </div>
    {/if}

    <div class="street" class:move={groundMove} class:happy={happy}>
      <div class="houses">
        <div class="house house-1">
          <img src={house1} alt="">
        </div>
        <div class="house house-2">
          <img src={house2} alt="">
        </div>
      </div>
      <div class="road" style="background-image: url({roadImage})"></div>
      <div class="ground" style="background-image: url({groundImage})"></div>
    </div>
    <div class="human" class:speak={humanSpeak} class:move={humanMove} class:happy={happy} class:sad={sad}>
      <div class="human__face">
        <img src={faceDefault} alt="">
        <img src={faceSad} alt="">
      </div>
      <div class="human__body">
        <img src={bodyImage} alt="">
      </div>
      <div class="human__message">
        <p>- Бог кодінга, я зневірився! в депресії... <br/> - кругом одні темні тєми IDE <br/> - може подай якийсь знак... <br/> - чи я на правильному шляху! <br/> <br/>п.с. <br/> - можна без взрива жопи... </p>
      </div>
    </div>
    <div class="bomb" class:active={sad}>
      <img src={bombImage} alt="">
    </div>
    <div class="explosion" class:active={sad}>
      <img src={fireImage} alt="">
    </div>

    <div class="plane" class:active={happy}>
      <div class="plane__head">
        <img src={faceSmile} alt="">
      </div>
      <div class="plane__body">
        <img src={planeImage} alt="">
      </div>
    </div>

  </div>
  <div class="content">
    {#if !groundMove}
      <button class="m-btn" on:click={secretScript}><span>Start Mode</span></button>
    {/if}
  </div>

  <div class="message" class:active={sad}>
    <p>the developer lost hope</p>
    <button class="m-btn" on:click={() => location.reload()}><span>Refresh</span></button>
  </div>
</div>

<Preloader/>
<ConfirmModal/>

<style lang="scss">
  .street-page {
    min-height: 100vh;
    width: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  }

  .scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
    &:after {
      content: "happy🎈";
      position: absolute;
      bottom: 100px;
      left: 0;
      right: 0;
      font-size: 50px;
      letter-spacing: 6px;
      text-transform: uppercase;
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease-in-out 13s;
    }
    &.after-active {
      &:after {
        opacity: 1;
      }
    }
  }

  .content {
    position: relative;
    z-index: 2;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
  }

  .message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out 11s;
    p {
      text-transform: uppercase;
      font-size: 34px;
      margin-bottom: 30px;
    }

    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }
</style>