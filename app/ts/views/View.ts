class View {
    
    protected _elemnto: Element;

    constructor(seletor: string) {
        this._elemnto = document.querySelector(seletor);
    }
}