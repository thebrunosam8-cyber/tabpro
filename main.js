const produtos = [
    {
      nome: "Água Mineral",
      categoria: "Água",
      quantidade: 100,
      preco: 2.50
    },
    {
        nome: "Suco de Laranja",
      categoria: "Suco",
      quantidade: 45,
      preco: 7.90
    },
    {
        nome: "Refrigerante",
      categoria: "Refrigerante",
      quantidade: 60,
      preco: 8.50
    },
    {
        nome: "Chá Gelado",
      categoria: "Chá",
      quantidade:80,
      preco: 6.00
    },

  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }