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
7. Não é necessário criar um banco de dados, podendo manter os dados na memória. (hint: sqlite)
8. É imperativo a utilização de Ruby para a criação da API Rest.
9. Sugerimos a utilização do git para versionar a solução. Um Pull Request (PR) para este repo, num branch com seu nome_sobrenome seria excelente, pois mais do que analisar o código, queremos analisar o fluxo de trabalho, a linha de pensamento e como evoluiu o código até chegar na solução.




API Jogos Olímpicos
API REST em TypeScript para gerenciamento de competições e resultados de Jogos Olímpicos. A API é capaz de criar competições, cadastrar resultados e exibir o ranking da competição.

Instalação
Clone o Repositório
git clone [https://github.com/mlt3800/teste_ev]

Instale as dependências
npm install

Uso
Rode a aplicação
npm run start

||

npm run dev

Leia a documentação e faça as requisições com a aplicação rodando
## 📌 Link Documentação Postman
[postman](https://documenter.getpostman.com/view/22350515/2s93XyU3m1)

Funcionalidades da API
Criar uma nova competição;
Retornar os dados de todas as competições;
Finalizar uma competição;
Criar pontuação;
Retornar o ranking de determinada competição;
Retornar os dados de uma pontuação;
Deletar uma competição;
A API impede a criação de novas pontuações caso a competição tenha sido encerrada;
A API impede a criação de novas pontuações de um mesmo usuário por mais de 3 vezes.
O Ranking retorna em ordem crescente para competições de 100m e em ordem decrescente para competições de lançamento de dardos.

Tecnologias utilizadas;
Node.js;
Typescript;
Jest (para testes unitários);
Express;
Git;
SQLite; 

Link do render:
[render](https://estante.onrender.com)
## Testes ##
npm run testA;

npm run testB;
