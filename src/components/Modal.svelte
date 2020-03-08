<script>
  import { createEventDispatcher } from "svelte";
  export let isModalOpen = false;
  export let content;

  const dispatch = createEventDispatcher();
  const closeModal = e => {
    dispatch("modal-close");
  };
</script>

<div class="modal" class:is-active={isModalOpen}>
  <div class="modal-background" on:click={closeModal} />
  <div class="modal-card">

    <div class="box">
      <button
        class="modal-close is-large"
        on:click={closeModal}
        aria-label="close" />
      <section class="modal-card-body">
        <div class="content">
          <svelte:component this={content} />
        </div>
      </section>
    </div>
  </div>
</div>
