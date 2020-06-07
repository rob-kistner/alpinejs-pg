const theContent = `
  <p>Just some test content</p>
`;

const theNavbar = `
<nav class="navbar navbar-light bg-light shadow-sm">
  
  <div class="container">
    <a class="navbar-brand" href="/">Alpine JS Testing</a>
        
    <ul class="nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/tabs.html">Tabs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/reveals.html">Reveals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/tests.html">Tests</a>
      </li>
    </ul>

  </div>

</nav>
`;

function titleCase(s) {
  let arr = s.split(' ')
  return arr.map(item => {
    return item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()
  }).join(' ')
}


/**
 * Genre list management
 */
function genreData() {
  return {
    genres: [],
    genre_item: '',
    addGenre() {
      this.genres.push(titleCase(this.genre_item));
      this.genre_item='';
      document.getElementById('genre_name').focus();
    }
  }
}