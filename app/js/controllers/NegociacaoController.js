class NegociacaoController {
    constructor() {
        //casting em js
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(
        //cria a data baseada na data vinda do formulario
        //com a espressão regular troca tudo que for - por ,
        new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao.quantidade + 666);
    }
}
