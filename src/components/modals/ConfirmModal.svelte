<script lang="ts">
  import {fade} from 'svelte/transition';
  import {confirmModalStore} from "../../stores/store";
  import {GodVariantsConstants} from "../../constants/GodVariantsConstants";

  function close(value: GodVariantsConstants) {

    $confirmModalStore.confirm(value);
    $confirmModalStore.visible = false;
  }
</script>

{#if $confirmModalStore.visible}
  <div class="modal confirm-modal" transition:fade={{ duration: 200 }}>
    <div class="modal__body scrollbar">
      <div class="modal__box">
<!--          <button class="close__btn" on:click={() => close(false)}></button>-->
        <div class="modal__content">
          <p class="modal__title">Make a choice!!!</p>
          <div class="button__row">
            <button class="m-btn" on:click={() => close(GodVariantsConstants.Happy)}><span>Хороший знак</span></button>
            <button class="m-btn transparent" on:click={() => close(GodVariantsConstants.Bomb)}><span>Взрив джепи</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .button__row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 30px;
    gap: 20px;
  }
</style>
