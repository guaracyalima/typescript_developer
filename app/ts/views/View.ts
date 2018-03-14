abstract class View<T> { //define que a classe é do tipo generico

    //se ha algo que preciso ser implementado devo usar abstract
    private _elemnto: JQuery;

    constructor(seletor: string) {
        this._elemnto = $(seletor);
    }

    update(modelo: T): void {
        this._elemnto.html(this.template(modelo));
    }

    //metodos abstratos são aquels que não possuem implementação
    //quem erda é obrigado a implemntar o metodo
    abstract template(model: T): string;
}