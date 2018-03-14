class View {
    constructor(seletor) {
        this._elemnto = document.querySelector(seletor);
    }
    update(modelo) {
        this._elemnto.innerHTML = this.template(modelo);
    }
    template(model) {
        throw new Error('Tu deve implementar o metodo template');
    }
}
