<script>
  export let condition = false;
  export let academy = 42;
  $: {
    console.log(academy);
  }

  const handleClick = e => {
    console.log(e.target.textContent.trim());
  };
</script>

<div class="column">
  <div class="panel has-background-white">
    <div class="panel-heading has-background-white">
      <h2 class="has-text-link title is-4">Devices</h2>
    </div>
    {#if condition}
      <label class="panel-block" on:click={handleClick}>
        <span class="panel-icon">
          <i class="fas fa-tablet-alt" aria-hidden="true" />
        </span>
        bulma
      </label>
    {:else}
      <label class="panel-block has-text-grey">
        Select an academy to view devices
      </label>
    {/if}
  </div>
</div>
