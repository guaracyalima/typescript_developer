class View<T> { //define que a classe é do tipo generico

    protected _elemnto: Element;

    constructor(seletor: string) {
        this._elemnto = document.querySelector(seletor);
    }

    update(modelo: T): void {
        this._elemnto.innerHTML = this.template(modelo);
    }

    template(model: T): string{
        throw new Error('Tu deve implementar o metodo template')
    }
}