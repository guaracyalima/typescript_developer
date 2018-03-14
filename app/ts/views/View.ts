abstract class View<T> { //define que a classe é do tipo generico

    //se ha algo que preciso ser implementado devo usar abstract
    private _elemnto: Element;

    constructor(seletor: string) {
        this._elemnto = document.querySelector(seletor);
    }

    update(modelo: T): void {
        this._elemnto.innerHTML = this.template(modelo);
    }

    //metodos abstratos são aquels que não possuem implementação
    //quem erda é obrigado a implemntar o metodo
    abstract template(model: T): string;
}