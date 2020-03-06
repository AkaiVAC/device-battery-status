<script>
  import Navbar from "./components/Navbar.svelte";
  import data from "./data/data";
  import {
    getAcademyDetails,
    getDeviceDetails,
    getDeviceDailyAvg
  } from "./data/battery_details";
  import Panel from "./components/Panel.svelte";
  import HelpModal from "./components/HelpModal.svelte";

  // Get all academy data.
  const academies = getAcademyDetails(data);
  const academyPanel = {
    title: "Academies",
    listItems: academies,
    NoItemsMessage: "No academies found",
    current: ""
  };

  // Get all device data based on academy selection.
  let selectedAcademy = "";
  let devices = [];
  const selectAcademy = e => {
    selectedAcademy = e.detail.target.childNodes[0].childNodes[2].textContent.trim();
    devicePanel.current = "";
  };
  $: if (selectedAcademy) {
    devices = getDeviceDetails(selectedAcademy, data);
    devicePanel.listItems = devices;
  }
  const devicePanel = {
    title: "Devices",
    listItems: devices,
    NoItemsMessage: "Select an academy to view devices",
    current: ""
  };

  //   Get device specific data based on device selection.
  let selectedDevice = "";
  const selectDevice = e => {
    selectedDevice = e.detail.target.children[0].textContent.trim();
    console.log(selectedDevice);
  };

  let isHelpOpen = false;
  const openHelpModal = () => {
    isHelpOpen = !isHelpOpen;
  };
</script>

<style>
  .section {
    padding-top: 1rem;
  }
</style>

<Navbar on:click={openHelpModal} />
<section class="section">
  <div class="container">
    <div class="columns">
      <Panel on:selected={selectAcademy} {...academyPanel} />
      <Panel on:selected={selectDevice} {...devicePanel} />
    </div>
  </div>
</section>

{#if isHelpOpen}
  <HelpModal />
{/if}
