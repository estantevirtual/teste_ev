# Teste prático da EstanteVirtual #
## Jogos Olímpicos ##

Com a chegada dos jogos olímpicos, fomos designados para construir uma API **REST** em **Ruby** para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

* 100m rasos: Menor tempo vence
* Lançamento de Dardo: Maior distância vence

## API 

Através da API, deveremos ser capazes de:

1. Criar uma competição
2. Cadastrar resultados para uma competição (todos os campos são obrigatórios), 
ex: 
```json
{
  "competicao": "100m classificatoria 1", 
  "atleta": "Joao das Neves", 
  "value": "10.234", 
  "unidade": "s"
}
```
ex: 
```json
{
  "competicao": "Dardo semifinal", 
  "atleta": "Claudio", 
  "value": "70.43", 
  "unidade": "m"
}
```
4. Finalizar uma competição.
3. Retornar o ranking da competição, exibindo a posição final de cada atleta.


### **Detalhes**:
1. A API não deve aceitar cadastros de resultados se a competição já estiver encerrada.
2. A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada.
3. No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta.
4. O Design da API, bem como input e output dos dados, fica a seu critério, sendo inclusive um dos pontos de avaliação.
5. Testes são obrigatórios.
6. Necessária criação de um Readme para informar o passo a passo de como rodar a API.
7. Não é necessário criar um banco de dados, podendo manter os dados na memória.
8. É imperativo a utilização de Ruby para a criação da API Rest.



