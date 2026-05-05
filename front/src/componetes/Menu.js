function Menu() {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div className="container">
  <a className="navbar-brand fw-bold" href="index.html">
      <i className="bi bi-book-half me-2" />
      BiblioTech
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="index.html">
            Início/Catálogo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="usuarios-lista.html">
            Listar Usuários
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="usuarios-cadastro.html">
            Novo Usuário
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );  
}
export default Menu;