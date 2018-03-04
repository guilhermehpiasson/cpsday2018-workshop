export default {
	"swagger": "2.0",
	"schemes": ["https","http"],
	"paths": {
		"/subscribe/test": {
			"get": {
				"responses": {
					"200": {
						"description": ""
					}
				},
				"summary": "Rota de teste",
				"x-auth-type": "Application & Application User",
				"x-throttling-tier": "Unlimited"
			}
		},
		"/subscribe/logs": {
			"get": {
				"responses": {
					"200": {
						"description": ""
					}
				},
				"summary": "Rota de logs",
				"x-auth-type": "Application & Application User",
				"x-throttling-tier": "Unlimited"
			}
		},
		"/subscribe/store": {
			"get": {
				"responses": {
					"200": {
						"description": ""
					}
				},
				"summary": "Busca de todas as lojas físicas",
				"description": "Operação utilizada para a busca de todas as lojas físicas disponíveis.",
				"produces": ["Lista de lojas"],
				"x-auth-type": "Application & Application User",
				"x-throttling-tier": "Unlimited"
			}
		},
		"/subscribe/store/state": {
			"get": {
				"responses": {
					"200": {
						"description": ""
					}
				},
				"summary": "Busca de estados que possuem lojas",
				"description": "Operação utilizada para a busca de todos os estados (UF) que possuem lojas físicas.",
				"produces": ["Lista de estados (UF)"],
				"x-auth-type": "Application & Application User",
				"x-throttling-tier": "Unlimited"
			}
		},
		"/subscribe/store/state/{uf}": {
			"get": {
				"responses": {
					"200": {
						"description": ""
					}
				},
				"parameters": [{
					"name": "uf",
					"in": "path",
					"allowMultiple": false,
					"required": true,
					"type": "string"
				}],
				"summary": "Busca de todas as lojas físicas por estado",
				"description": "Operação utilizada para a busca de todas as lojas físicas disponíveis em um determinado estado (UF).",
				"produces": ["Lista de lojas"],
				"x-auth-type": "Application & Application User",
				"x-throttling-tier": "Unlimited"
			}
		},
		"/subscribe/store/id/{id}": {
			"get": {
				"responses": {
					"200": {
						"description": ""
					}
				},
				"parameters": [{
					"name": "id",
					"in": "path",
					"allowMultiple": false,
					"required": true,
					"type": "string"
				}],
				"summary": "Busca de lojas físicas por id",
				"description": "Operação utilizada para a busca de uma determinada lojas física a partir de um determinado id.",
				"produces": ["Lista de lojas"],
				"x-auth-type": "Application & Application User",
				"x-throttling-tier": "Unlimited"
			}
		},
		"/subscribe/store/listOfid/{id}": {
			"get": {
				"responses": {
					"200": {
						"description": ""
					}
				},
				"parameters": [{
					"name": "id",
					"in": "path",
					"allowMultiple": false,
					"required": true,
					"type": "string"
				}],
				"summary": "Busca de lojas físicas por lista de id",
				"description": "Operação utilizada para a busca de todas as lojas físicas a partir de uma determinada lista de id.",
				"x-auth-type": "Application & Application User",
				"x-throttling-tier": "Unlimited"
			}
		}
	},
	"info": {
		"title": "OCC-physicalstore-subscribe",
		"version": "v1.0.0",
        "description": "API responsável por operações utilizadas na consulta de informações referenes a lojas físicas.\n",
        "contact": {
			"email": "guilherme.piasson@compasso.com.br"
		}
	}
}