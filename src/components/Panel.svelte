<script>
  import { createEventDispatcher } from "svelte";
  export let title;
  export let listItems;
  export let NoItemsMessage;
  export let current = "";
  const dispatch = createEventDispatcher();
  const handleClick = e => {
    // const clickedItemName = e.target.childNodes[0].childNodes[2].textContent.trim();
    dispatch("selected", {
      target: e.target
    });
  };
</script>

<style>
  .panel {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }

  .panel-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .panel-body {
    max-height: 60vh;
    overflow-y: auto;
  }

  .panel-block.is-active .panel-icon {
    color: #f14668;
  }

  .panel-block {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .panel-name {
    display: flex;
    align-items: center;
    pointer-events: none;
  }
</style>

<div class="column">
  <div class="panel has-background-white">
    <div class="panel-heading has-background-white">
      <h2 class="title is-4">
        {title}
        <span class="tag is-light is-medium">
          No. of entries: {listItems.length}
        </span>
      </h2>
    </div>
    <div class="panel-body">
      {#each listItems as item, i}
        <label
          class="panel-block is-size-5 academy_{i}"
          class:is-active={current === `item_${i}`}
          class:has-background-warning={current === `item_${i}`}
          on:click={e => {
            current = `item_${i}`;
            handleClick(e);
          }}>
          <div class="panel-name">
            <span class="panel-icon is-size-5">
              <i
                class="fas {title === 'Academies' ? 'fa-university' : 'fa-tablet-alt'}"
                aria-hidden="true" />
            </span>
            <p>{item}</p>
          </div>
          <span class="tag is-danger is-dark is-medium">5</span>
        </label>
      {:else}
        <label class="panel-block has-text-grey">
          <p>{NoItemsMessage}</p>
        </label>
      {/each}
    </div>
  </div>
</div>
