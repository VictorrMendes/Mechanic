function add_carro() {
    let container = document.getElementById('form-carro');

    let html = `
        <br>
        <div class='row'>
            <div class='col-md'><input type='text' placeholder='Carro' class='form-control' name='carro'></div>
            <div class='col-md'><input type='text' placeholder='Placa' class='form-control' name='placa'></div>
            <div class='col-md'><input type='number' placeholder='Ano' class='form-control' name='ano'></div>
        </div>`;

    container.insertAdjacentHTML('beforeend', html);
}
