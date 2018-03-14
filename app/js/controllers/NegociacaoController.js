class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes(); //posso omitir o tipo
        this._negociacoesView = new NegociacoesView('#negociacoesview');
        //casting em js
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(
        //cria a data baseada na data vinda do formulario
        //com a espressão regular troca tudo que for - por ,
        new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.parraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.volume);
        });
        this._negociacoesView.update(this._negociacoes);
    }
}
