const navbar_backup = `
<nav class="navbar navbar-expand-md navbar-light bg-light shadow-sm">

  <div class="container">

    <a class="navbar-brand" href="#">Alpine JS Testing</a>

    <button type="button" 
      class="navbar-toggler" 
      @click="open = !open"
      >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Tabs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>

  </div>

</nav>
`;