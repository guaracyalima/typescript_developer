class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor(){
        //casting em js
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event){
        event.preventDefault();

        const negociacao = new Negociacao(
            //cria a data baseada na data vinda do formulario
            //com a espressão regular troca tudo que for - por ,
           new Date(this._inputData.value.replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        console.log(negociacao.quantidade + 666)
    }


}