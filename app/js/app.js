const controller = new NegociacaoController();
// document
//         .querySelector('.form')
//         .addEventListener('submit', controller.adiciona.bind(controller))
//esse bind é para que o this tenha foco no objeto controller - meotdo submit
//sem ele o foco do this seria perdido para o proposito de submeter o formulario
$('.form').submit(controller.adiciona.bind(controller));
