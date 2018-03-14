class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes: Negociacoes = new Negociacoes ();//posso omitir o tipo
    private _negociacoesView = new NegociacoesView('#negociacoesview');
    private _mensagemView = new MensagemView('#mensagemView');
    constructor(){
        //casting em js
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event){
        event.preventDefault();

        const negociacao = new Negociacao(
            //cria a data baseada na data vinda do formulario
            //com a espressão regular troca tudo que for - por ,
           new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.adiciona(negociacao)
        this._negociacoes.parraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.volume); 
        });

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!')
    }


}