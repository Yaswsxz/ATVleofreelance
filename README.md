# ATVleofreelance

# Simulador de Orcamento Freelancer - Rover Dev

Projeto desenvolvido como atividade prática da disciplina de Desenvolvimento Web, com foco em JavaScript Client-side. O simulador permite que um cliente selecione os serviços de TI desejados e visualize o valor total do orçamento atualizado em tempo real.


## Sobre o Projeto

A ideia é simples: o cliente acessa a página, marca os serviços que precisa e o total é calculado automaticamente na tela, sem precisar recarregar a página. Ao finalizar, basta clicar no botão para solicitar o orçamento.


## Funcionalidades

- Seleção de serviços por checkbox
- Cálculo automático do total ao marcar ou desmarcar um serviço
- Aviso de confirmação ao solicitar o orçamento
- Layout responsivo e organizado


## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)


## Estrutura de Arquivos

```
projeto/
├── index.html    → estrutura da página
├── style.css     → estilização e cores
├── script.js     → lógica e interatividade
└── README.md     → documentação
```

## Requisitos Técnicos Atendidos

**Variáveis com let e const**
```js
let total = 0;
const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
```

**Manipulação de eventos com onchange e onclick**
```html
<input type="checkbox" value="1800" onchange="calcularTotal()">
<button onclick="solicitarOrcamento()">Solicitar Orcamento</button>
```

**Uso de parseFloat para converter valores**
```js
total += parseFloat(checkbox.value);
```

**Arrow Functions**
```js
const calcularTotal = () => { ... };
const solicitarOrcamento = () => { ... };
```

## Serviços e Preços

| Serviço | Valor |
|---|---|
| Landing Page | R$ 1.800 |
| Site Institucional | R$ 4.500 |
| E-commerce | R$ 9.800 |
| API REST | R$ 5.500 |
| Integração de API | R$ 2.200 |
| Hospedagem Mensal | R$ 350/mês |
| Manutenção Mensal | R$ 900/mês |
| Banco de Dados | R$ 2.400 |

Os valores foram baseados em pesquisa de mercado com as calculadoras da 99Freelas, Workana e Contabilizei, levando em conta uma renda mensal desejada de R$ 8.000 e cerca de 160 horas trabalhadas por mês.


## Como Usar

1. Abra o arquivo `index.html` no navegador
2. Selecione os serviços desejados
3. Veja o total atualizado automaticamente
4. Clique em "Solicitar Orcamento" para confirmar


## Deploy

Projeto publicado via GitHub Pages:
```
https://<seu-usuario>.github.io/<nome-do-repositorio>/
```

Para ativar o GitHub Pages: Settings → Pages → Branch: main → Save.



