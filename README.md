# AtividadeRotas

/////////////

Questao 01 - O que é Rota Dinâmica?

R= Rota dinâmica é uma rota que recebe um parâmetro variável na URL.

Exemplo que utilizei no projeto: /users-detail/:id

O :id é um parâmetro que muda conforme o usuário clicado.

/////////////

Questao 02 - O que é paramMap?

R= O paramMap é uma forma do Angular capturar os parâmetros da URL.

No projeto eu utilizei: 

this.route.paramMap.subscribe(params => {
  const idParam = params.get('id');
});

Ele serve para ler o valor do parâmetro :id, permitir reagir quando a URL muda e buscar o usuário correspondente ao ID informado.
Sem o paramMap, o componente não conseguiria saber qual usuário deve ser exibido.

/////////////

Questao 03 - Onde foi usado Observable e por quê?

O Observable foi usado no UserService para realizar as requisições à API.
No método this.http.get() do HttpClient do Angular retorna um Observable, pois nas requisições HTTP os dados não chegam imediatamente e o sistema precisa esperar a resposta do servidor.

No código, foi utilizado: this.http.get<User[]>()

Isso retorna um Observable, que permite que o componente receba os dados quando a API responder.
Já no componente, foi utilizado o .subscribe() para escutar esse Observable e obter os dados retornados pela API, por exemplo ao buscar um usuário pelo ID.

