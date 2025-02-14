function add_carro() {

    container = document.getElementById('form-carro')

    html =
        "<br>  <div class = 'row'><div class = 'col-md'><input type='text' placeholder='Carro' class='form-control' name='caro'></input></div><div class = 'col-md'><input type='text' placeholder='Placa' class='form-control' name='placa'></input></div><div class = 'col-md'><input type='number' placeholder='Ano' class='form-control' name='ano'></input></div></div>"

    container.innerHTML += html
}