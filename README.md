# README

Segue o desafio proposto por vocês. Infelizmente me esqueci de guardar um histórico de commits, também fiz o desafio em praticamente um dia(tempo livre pós-trab). Acho que de forma apressada posso não ter tomado as melhores decisões do mundo para estruturar o projeto. Há uma cobertura mínima de testes, mas não tive tempo de adicionar os testes de controllers :confused:. Não versionei a API também, há realmente espaço pra fazer coisas legais.

Bom, vamos ao que interessa, para rodar o desafio você precisará apenas de um docker instalado na sua máquina. Eu criei um Makefile na raíz desse projeto para ajudar.

```shell
# build e execução o container, pre-requisito
# para os proximos comandos.
make setup

# executa os seeds
make seed

# executa os testes
make test

# executa um robocop basicão
make rubocop

```

## Rotas disponíveis

```
Prefix                Verb  URI                                 Pattern      Controller#Action

competition_finish    PUT  /competitions/:competition_id/finish(.:format)    competitions#finish
competition_ranking   GET  /competitions/:competition_id/ranking(.:format)   competitions#ranking
competitions          POST /competitions(.:format)                           competitions#create
results               POST /results(.:format)                                results#create
                      GET  /results(.:format)                                results#index


```
