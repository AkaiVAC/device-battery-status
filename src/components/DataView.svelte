<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	import Chart from 'chart.js/auto';
	import { deviceChargeLevelColor, chartColors } from '../data/utils';

	export let isModalOpen = false;
	export let deviceData;

	let device = '';
	let data = [];
	$: if (deviceData[0]) {
		device = deviceData[0].deviceId;
		let BatteryLevelData = deviceData[0].details.map((item) =>
			Math.round(item.batteryLevel),
		);

		let BattreyTimeData = deviceData[0].details.map((item) =>
			new Date(item.timestamp).toLocaleString(),
		);

		let colors = chartColors(deviceData[0].deviceId);

		data = {
			labels: BattreyTimeData,
			datasets: [
				{
					label: 'Battery level',
					data: BatteryLevelData,
					backgroundColor: [colors.areaColor],
					borderColor: [colors.lineColor],
					borderWidth: 1,
				},
			],
		};
		createChart(data);
		onMount(createChart);
	}

	let ctx;
	let deviceDataChart;
	const createChart = (data) => {
		if (deviceDataChart) deviceDataChart.destroy();
		ctx = document.querySelector('#canvas').getContext('2d');
		deviceDataChart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: {
				legend: {
					display: false,
				},
			},
		});
	};

	onMount(createChart);
	const dispatch = createEventDispatcher();
	const closeModal = (e) => {
		dispatch('modal-close');
		document.querySelector('body').classList.remove('is-clipped');
	};
</script>

<div class="modal" class:is-active={isModalOpen}>
	<div class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head has-background-white">
			<p class="modal-card-title">
				Device
				<span class="tag is-dark is-large">{device}</span>
				Usage Chart
			</p>
			<button
				class="delete is-large"
				aria-label="close"
				on:click={closeModal}
			/>
		</header>
		<section class="modal-card-body has-background-light">
			<div class="box has-background-white canvas-container">
				<canvas id="canvas" />
			</div>
			<div class="box battery-stats">
				{#if deviceData[0]}
					{#each deviceData[0].details as detail}
						<div class="panel-block is-size-6">
							<div class="panel-name">
								<p>
									{new Date(
										detail.timestamp,
									).toLocaleString()}
								</p>
							</div>
							<div class="tags has-addons">
								<span
									class="tag {deviceChargeLevelColor(
										Math.round(detail.batteryLevel),
									)}
                  is-light is-medium"
								>
									<i
										class="fas fa-battery-three-quarters"
										aria-hidden="true"
									/>
								</span>
								<span
									class="tag {deviceChargeLevelColor(
										Math.round(detail.batteryLevel),
									)}
                  has-text-black is-medium"
								>
									{Math.round(detail.batteryLevel)}%
								</span>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</section>
	</div>
</div>

<style>
	.modal-card {
		width: 100%;
		height: 100%;
		max-height: 100%;
	}

	.modal-card-head {
		border-radius: 0;
		flex-wrap: wrap;
	}

	.modal-card-body {
		display: grid;
		grid-template: 1fr /2fr 1fr;
		place-items: center;
		height: 100vh;
		z-index: 1;
	}

	.canvas-container {
		min-width: 95%;
		max-width: 95%;
	}

	.battery-stats {
		padding: 1rem;
		overflow-y: auto;
		width: 100%;
		max-height: 100%;
	}

	.panel-block {
		padding: 0.5rem;
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

	@media screen and (max-width: 800px) {
		.modal-card-body {
			grid-template: 1fr / 1fr;
			place-items: center;
		}
	}
</style>
