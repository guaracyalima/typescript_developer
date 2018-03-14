class View {
    constructor(seletor) {
        this._elemnto = $(seletor);
    }
    update(modelo) {
        this._elemnto.html(this.template(modelo));
    }
}
