import { executarQuery } from '../database';

export const EstoqueService = {
  // Buscar todos os produtos
  getAllProdutos: () => {
    return executarQuery('SELECT * FROM estoque ORDER BY produto');
  },

  // Buscar produto por ID
  getProdutoById: (id) => {
    return executarQuery('SELECT * FROM estoque WHERE id = ?', [id]);
  },

  // Adicionar novo produto
  addProduto: (produto, quantidade, preco) => {
    return executarQuery(
      'INSERT INTO estoque (produto, quantidade, preco) VALUES (?, ?, ?)',
      [produto, quantidade, preco]
    );
  },

  // Atualizar quantidade em estoque
  atualizarQuantidade: (id, novaQuantidade) => {
    return executarQuery(
      'UPDATE estoque SET quantidade = ? WHERE id = ?',
      [novaQuantidade, id]
    );
  },

  atualizarProduto: (id, quantidade, preco) => {
    return executarQuery(
      'UPDATE estoque SET quantidade = ?, preco = ? WHERE id = ?',
      [quantidade, preco, id]
    );
  },
}; 