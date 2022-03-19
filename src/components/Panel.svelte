<script>
	import { createEventDispatcher } from 'svelte';
	import { academyStatusColor, deviceStatusColor } from '../data/utils';

	export let title;
	export let listItems;
	export let NoItemsMessage;
	export let current = '';

	const dispatch = createEventDispatcher();
	const handleClick = (e) => {
		dispatch('selected', {
			current,
		});
	};
</script>

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
			{#each listItems as { item, status }, i}
				<div
					class="panel-block is-size-6"
					class:is-active={current === `${item}`}
					class:has-background-warning={current === `${item}`}
					on:click={(e) => {
						current = `${item}`;
						handleClick(e);
					}}
				>
					<div class="panel-name">
						<span class="panel-icon is-size-6">
							<i
								class="fas {title === 'Academies'
									? 'fa-university'
									: 'fa-tablet-alt'}"
								aria-hidden="true"
							/>
						</span>
						<p>{item}</p>
					</div>
					{#if title === 'Academies'}
						<span
							class="tag {academyStatusColor(
								status,
							)} has-text-black is-dark
              is-medium"
						>
							Critical Devices: {status}
						</span>
					{:else}
						<span
							class="tag {deviceStatusColor(
								status,
							)} has-text-black is-dark
              is-medium"
						>
							Daily Average: {status}%
						</span>
					{/if}
				</div>
			{:else}
				<div class="panel-block has-text-dark-grey has-no-items">
					<p>{NoItemsMessage}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

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
		max-height: 70vh;
		overflow-y: auto;
	}

	.panel-block.is-active .panel-icon {
		color: #f14668;
	}

	.panel-block.has-no-items {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.1rem;
		font-weight: bold;
	}

	.panel-block {
		padding: 0.7rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.panel-block:hover {
		background-color: #f5f5f5;
		cursor: pointer;
	}

	.panel-name {
		display: flex;
		align-items: center;
		pointer-events: none;
	}
</style>
