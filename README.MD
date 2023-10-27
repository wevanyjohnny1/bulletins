# Desafio Simova

O Desafio é criar um Painel simples para poder visualizar e acompanhar funcionários e suas últimas atividades. Ao clicar num funcionário é possível ver mais detalhes, como boletins(Conjunto de apontamentos) atuais e de dias anteriores.

Cada funcionário tem um boletim (bulletin) por dia com N apontamentos (appointment).

![Fluxo](assets/images/test_frontend_panel.png)

## Consumo de dados

- [Atividades](/assets/data/activities.json)
- [Funcionários](/assets/data/employees.json)
- [Boletins](/assets/data/bulletins.json)

## Itens obrigatórios

### Regras de Negócio

- Painel deve ser por funcionário
- Ter 2 ou mais filtros para facilitar a busca por funcionário e outros dados
- Ao clicar no card do funcionário ir para uma nova tela/abra e mostrar os boletins com todos os apontamentos do funcionário separados por boletim

### Frameworks

- NodeJS
- Vue/JavaScript
- Jest

### Outros

- Ser responsivo
- Ser componentizado

### Item não obrigatório

- Não é necessário realizar autenticação na API
- Docker não é obrigatório, se você já possuir experiência pode utilizar
- Não é necessário 100% de coverage no tests, faça apenas nas funções que você acredite ser as mais importantes e com grande impacto

## Dicas

- Mais é menos, mas não seje muito genérico
- Se atente ao Prazo de Entrega
- Se não for possível terminar, entregue até onde conseguiu fazer
- Não se prenda ao que somente foi pedido, se achar necessário pode fazer mudanças no fluxo do painel que na sua opinião fiquem melhores, também explicar porque mudou.
