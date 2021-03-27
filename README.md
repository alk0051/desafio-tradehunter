# desafio-tradehunter

<div align="center">
	<img src="/app_screenshot.png" />
</div>



Desafio Trade Hunter

- Frontend
 	- Necessário utilizar AngularJs (https://angularjs.org/)
	- Criar uma página de consulta simples com um campo em que o usuário possa digitar um ticker e um botão para enviar a consulta;
	- No sucesso (caso encontre o ticker), exibir o resultado abaixo:
		- Exibir o resultado da consulta abaix	o com os seguintes campos:
		
			- Informações sobre a empresa:
				(https://polygon.io/docs/get_v1_meta_symbols__stocksTicker__company_anchor)
				- Logo da empresa;
				- Nome da empresa;
				- País;
				- Tipo industrial;
				- Setor;
				- Número de empregados;
				- Quem é o CEO;
				- Site da empresa;
				- Descrição;
				- Qual a bolsa de valores que ela é listada;
				- Endereço completo;
				- Tags referentes à empresa.
			- Informações sobre o ticker:
				(https://polygon.io/docs/get_v1_open-close__stocksTicker___date__anchor)
				- Abertura;
				- Máxima;
				- Mínima;
				- Fechamento;
				- Volume de negociação;
		- No erro, exibir uma mensagem de que o ticker não foi encontrado.

- Construir backend em NodeJs
	- Integrar API gratuita disponível em https://polygon.io/
		- Documentação: https://polygon.io/docs/
		- Endpoints necessários:
			- https://polygon.io/docs/get_v1_meta_symbols__stocksTicker__company_anchor
			- https://polygon.io/docs/get_v1_open-close__stocksTicker___date__anchor
				- A data pode ser sempre do dia 24/03/2021
	- Tratamento em caso erro;


Tickers de exemplo para consulta: AAPL, MSFT, TSLA, GME

