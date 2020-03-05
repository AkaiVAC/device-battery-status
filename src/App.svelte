<script>
  import Navbar from "./components/Navbar.svelte";
  import Academies from "./components/Academies.svelte";
  import Devices from "./components/Devices.svelte";
  $: academy = "";
  const handleClick = e => {
    academy = e.detail.text;
  };
</script>

<Navbar />
<section class="section">
  <div class="container">
    <h1 class="title">Hello World</h1>
    <div class="columns">
      <Academies on:academy={handleClick} />
      <Devices {academy} />
    </div>
  </div>
</section>
