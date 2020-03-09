<script>
  import { fade } from "svelte/transition";

  import Navbar from "./components/Navbar.svelte";
  import Panel from "./components/Panel.svelte";
  import Modal from "./components/Modal.svelte";
  import DataView from "./components/DataView.svelte";
  import Help from "./components/Help.svelte";

  import getAcademyStatuses from "./data/all_academy_statuses";
  import getDeviceStatus from "./data/device_status";
  import getAllBatteryStatuses from "./data/all_device_statuses";
  import data from "./api/data";

  // Get all academy data with status.
  let allAcademyData = getAcademyStatuses(data);
  const academyPanel = {
    title: "Academies",
    listItems: allAcademyData,
    NoItemsMessage: "No academies found"
  };

  // Get all device data based on academy selection.
  let selectedAcademy = "";
  let devices = [];
  const selectAcademy = e => {
    selectedAcademy = e.detail.current;
    if (selectedAcademy) {
      devices = getDeviceStatus(selectedAcademy, data);
      devicePanel.listItems = devices;
    }
  };
  const devicePanel = {
    title: "Devices",
    listItems: devices,
    NoItemsMessage: "Select an academy to view devices"
  };

  // Get all device details based on device selection.
  let selectedDevice = "";
  let deviceData = [];
  const selectDevice = e => {
    selectedDevice = e.detail.current;
    deviceData = getAllBatteryStatuses(data).allDeviceDetails.filter(
      item => item.deviceId === selectedDevice
    );
    document.querySelector("body").classList.add("is-clipped");
    isDataViewOpen = true;
  };

  //Modal functionality
  let isHelpOpen = false;
  let isDataViewOpen = false;
</script>

<style>
  .section {
    padding-top: 1rem;
    background-color: rgb(231, 231, 231);
  }

  .helpButton {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 100px 100px 100px 100px;
    box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.35);
  }
</style>

<Navbar />

<section class="section" in:fade={{ duration: 500 }}>
  <div class="container">
    <div class="columns">
      <Panel on:selected={selectAcademy} {...academyPanel} />
      <Panel on:selected={selectDevice} {...devicePanel} />
    </div>
  </div>
</section>

<Modal
  isModalOpen={isHelpOpen}
  on:modal-close={() => {
    isHelpOpen = !isHelpOpen;
  }}
  content={Help} />

<DataView
  isModalOpen={isDataViewOpen}
  on:modal-close={() => {
    isDataViewOpen = !isDataViewOpen;
  }}
  {deviceData} />

<button
  class="button is-warning helpButton"
  data-target="modal"
  aria-label="Help Button"
  on:click={() => {
    isHelpOpen = !isHelpOpen;
  }}
  aria-haspopup="true">
  <i class="fas fa-question" />
</button>
