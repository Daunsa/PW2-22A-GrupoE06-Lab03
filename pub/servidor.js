function listar() {
    const url = "http://localhost:3000/archivos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        renderList(data);
      });
  }