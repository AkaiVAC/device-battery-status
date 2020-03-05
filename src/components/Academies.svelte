<script>
  import { createEventDispatcher } from "svelte";
  import data from "../data/data.js";
  import { getAcademyDetails } from "../data/battery_details";
  const academies = getAcademyDetails(data);

  const dispatch = createEventDispatcher();

  let current = "";
  const handleClick = e => {
    current = e.target.classList[1];
    dispatch("academy", {
      text: e.target.textContent.trim()
    });
  };
</script>

<div class="column">
  <div class="panel has-background-white">
    <div class="panel-heading has-background-white">
      <h2 class="has-text-link title is-4">Academies</h2>
    </div>
    {#each academies as academy, i}
      <label
        class="panel-block academy_{i}"
        class:is-active={current === `academy_${i}`}
        on:click={e => handleClick(e)}>
        <span class="panel-icon">
          <i class="fas fa-university" aria-hidden="true" />
        </span>
        {academy}
      </label>
    {/each}
  </div>
</div>
