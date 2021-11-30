# Desafio 2

Pra começar, note que tem um arquivo que você provavelmente não conhece ainda:
O .gitignore. Nele a gente coloca tudo que não queremos enviar no git =) Apenas isso.
Simples, né?

Você já aprendeu HTML, CSS e JavaScript básicos. 
Além disso, fofinha, você aprendeu git.

No seu primeiro desafio, você fez um HTML simples, 
um CSS simples e um JavaScript simples... Então agora vamos
deixar as coisas mais interessantes.

Leia atentamente e interprete direitinho o que tem que fazer.

__Eu te amo__

![Gatinho](images/gif_gatinho.gif)

## O que fazer?

1. Primeiro de tudo, faz o `git clone` desse repositório.

### Não lembra como faz?

__PESQUISA!__

![Birra](images/birra.gif)

> Dica: Como fazer git clone

2. Segundo, cria os arquivos básicos: `index.html`, `style.css` e `script.js`

3. Coloque a `estrutura básica do HTML` no arquivo HTML e faça as conexões
da folha de estilo e da folha de script.

### Dica:

````html
<link rel="stylesheet", href="style.css">
````
> O "rel" é de RELAÇÃO =) "stylesheet", em português, significa "Folha de estilo",
>  então você tá dizendo que o arquivo style.css vai ter uma relação de Folha de Estilo
>  no seu HTML <3
````html
<script src="script.js"></script>
````
> Aqui você tá só importando o seu script no seu HTML, mesmo.

Uma última dica: Testa um `console.log()` de qualquer coisa pra ver se o seu script
foi importado corretamente! E também coloca qualquer elemento dentro do seu HTML
e tenta colocar qualquer cor nele pelo CSS pra ver se seu style foi importado 
corretamente.

4. Estando tudo OK até aqui, agora vamos pro código.

## HTML

Coloque um h1 de classe "titulo" e de conteúdo "Este é o meu Desafio 2"

## CSS

Selecione o elemento de classe "titulo" e dê a cor de fundo #ff6900 para ele.

Coloque também uma fonte bem legal de sua preferência.

Centralize o texto na tela.

## JavaScript

Faça uma função chamada "filtraCores" que recebe dois parâmetros: lista, cor.

````js
function filtraCores(lista, cor) {
    
}
````

Essa função retornar uma nova lista com os itens da variável `lista` que sejam iguais
ao valor da varíável `cor`.

### Exemplo:

````js
filtraCores(["azul", "vermelho", "azul", "azul", "rosa"], "azul")

// Deve retornar para mim:
["azul", "azul", "azul"]
````
````js
filtraCores(["azul", "vermelho", "azul", "azul", "rosa"], "rosa")

// Deve retornar para mim:
["rosa"]
````
````js
filtraCores(["azul", "vermelho", "azul", "azul", "rosa"], "vermelho")

// Deve retornar para mim:
["vermelho"]
````

5. Conseguiu fazer? PARABÉNS!!
![Comemoração](./images/comemoracao.gif)

Agora você precisar fazer o `git commit -m ""`, depois dar o git push.

> OBS: Você não precisa dar o git init, porque eu já iniciei o repositório aqui =)

## Finalização

Após terminar todos os passos acima, vai no repositório e veja se seus arquivos estão
lá. Se estiver tudo OK, manda o link do repositório pra mim que eu vou corrigir!
