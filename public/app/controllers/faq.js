'use strict';

angular.module('movme').controller('FAQCtrl',

  ['$scope',

    function ($scope) {

    	$scope.questions = [
    		{
    			"title": "Como funciona e quais as vantagens da pré venda?",
    			"answer": "A pré venda consiste, basicamente, em uma reserva antecipada do produto, com valores e benefícios exclusivos.<br><br>Vantagens:<ul><li>R$750,00 de desconto do preço final (somente para os 100 primeiros);</li><li>Fazer parte da comunidade go2 e receber informações exclusivas sobre o produto;</li><li>Estar por dentro de todos os processos de desenvolvimento e produção do movme go2;</li><li>Ganhar prêmios exclusivos da comunidade (camisetas, bonés, chaveiros, etc.);</li><li>Ser convidado a conhecer a sede da movme em Sorocaba-SP e participar de Happy hours (serão vários) com os fundadores;</li><li>Update semanal de todas as atividades;</li><li>Os 100 primeiros clientes terão o nome no nosso site para sempre.</li></ul>"
    		},
    		{
    			"title": "Qual o cronograma de entrega?",
    			"answer": "Começaremos a produção em outubro e a previsão de entrega do primeiro lote será para Janeiro 2018. Mas quem sabe seu movme go2 não chega para o natal :)"
    		},
    		{
    			"title": "Como meu Movme Go2 será entregue?",
    			"answer": "Através de transportadora, direto no endereço cadastrado. Ah! O frete é por conta do comprador e deve custar aproximadamente R$ 50,00 (cinquenta reais). Ou, se preferir, você vem conhecer a Movme e entregaremos o seu Movme Go2 em mãos."
    		},
    		{
    			"title": "Cancelamento da compra - Como funciona?",
    			"answer": "Caso você opte pelo cancelamento do pedido, ele deve ser feito antes da data de envio do produto. Esta operação será feita conforme sugerido pelo Código de Defesa do Consumidor.<br><br>Em caso de pagamento via Boleto bancário - será feito um depósito na conta do titular da compra no mesmo valor do total do pedido.<br><br>Via cartão de crédito - será solicitado o estorno junto com a operadora de cartão de crédito. Enviaremos o comprovante da solicitação e a efetivação será feita de acordo com a política da bandeira do cartão.<br><br>Resumindo: Nós queremos a sua satisfação. Cancele quando quiser, sem dor de cabeça."
    		},
    		{
    			"title": "Terei assistência técnica, manutenção e garantia?",
    			"answer": "Oferecemos assistência técnica online e se necessário basta enviar o produto para nosso endereço que realizaremos o reparo.<br><br>O movme go2 foi desenvolvido com componentes robustos e que precisam de um mínimo de manutenção. Periodicamente será necessária a calibragem dos pneus.<br><br>Oferecemos a garantia de 1(um) ano contra defeito de fabricação. Para acioná-la, basta comunicar a Movme através dos seus canais de comunicação e então passaremos os procedimentos para troca da peça defeituosa.<br><br>Vale ressaltar que a garantia só poderá ser acionada com a apresentação da Nota Fiscal ou documento similar que comprove a compra do produto em questão."
    		},
    		{
    			"title": "O que acompanha o Movme Go2?",
    			"answer": "<ul><li>Carregador da bateria bivolt</li><li>Manual</li><li>Certificado de garantia</li></ul>"
    		},
    		{
    			"title": "Características técnicas",
    			"answer": "<ul><li>Peso: 15Kg</li><li>Dimensões: 30cmL X 30cmP X 50cmA (com a alça retrátil)</li><li>Suporta até 100kg</li><li>Velocidade máxima: 20kmh</li><li>Autonomia da bateria: 10km</li><li>Tempo de recarga total 90 min</li><li>Potência do motor: 2x400w</li><li>Inclinação máxima de subida: 15 graus</li><li>Bateria com todas as certificações exigidas internacionalmente.</li></ul>"
    		}
    	]

    }]);