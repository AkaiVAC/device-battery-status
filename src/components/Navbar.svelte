<style>
  .navbar-brand {
    height: 80px;
  }

  .icon {
    margin-right: 1rem;
  }
</style>

<nav
  class="navbar is-family-primary has-background-danger"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a
        class="navbar-item is-size-5 has-text-weight-bold has-text-white"
        href="/">
        <span class="icon is-size-3">
          <i class="fas fa-car-battery" />
        </span>
        <h1 class="is-uppercase has-text-weight-bold">Battery Status</h1>
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button class=" button button is-rounded is-warning" on:click>
            <p class="is-uppercase has-text-weight-bold">Help</p>
            &nbsp;
            <i class="fas fa-question-circle" />
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
