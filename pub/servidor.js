function listar() {
    const url = "http://localhost:3000/archivos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        renderList(data);
      });
  }
  function renderList(data) {
    let html = "<h3>Archivos</h3><hr>\n";
    html += "<ul>\n";
    const contenedor = document.querySelector("#boxContent-second");
  
    for (var i = 0; i < data.length; i++){
      html += "<li class='file' onclick='leer(this)'>" + data[i] + "</li>\n";
    } 
    
    html += "</ul>\n";
    contenedor.innerHTML = html;
  }