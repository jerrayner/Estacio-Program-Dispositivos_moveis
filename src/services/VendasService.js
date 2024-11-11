import { executarQuery } from '../database';

export const VendasService = {
  // Buscar todas as vendas
  getAllVendas: () => {
    return executarQuery(`
      SELECT v.*, e.produto 
      FROM vendas v 
      JOIN estoque e ON e.id = v.produto_id 
      ORDER BY v.data DESC
    `);
  },

  // Registrar nova venda
  registrarVenda: (produtoId, quantidade, valorTotal) => {
    const data = new Date().toISOString().split('T')[0];
    return executarQuery(
      'INSERT INTO vendas (produto_id, quantidade_vendida, data, valor_total) VALUES (?, ?, ?, ?)',
      [produtoId, quantidade, data, valorTotal]
    );
  },

  // Buscar vendas por período
  getVendasPorPeriodo: (dataInicio, dataFim) => {
    return executarQuery(
      `SELECT v.*, e.produto 
       FROM vendas v 
       JOIN estoque e ON e.id = v.produto_id 
       WHERE v.data BETWEEN ? AND ?
       ORDER BY v.data DESC`,
      [dataInicio, dataFim]
    );
  },

  // Calcular total de vendas do mês
  getTotalVendasMes: () => {
    const primeiroDiaMes = new Date();
    primeiroDiaMes.setDate(1);
    const dataInicio = primeiroDiaMes.toISOString().split('T')[0];
    
    const ultimoDiaMes = new Date(
      primeiroDiaMes.getFullYear(),
      primeiroDiaMes.getMonth() + 1,
      0
    );
    const dataFim = ultimoDiaMes.toISOString().split('T')[0];

    return executarQuery(
      'SELECT SUM(valor_total) as total FROM vendas WHERE data BETWEEN ? AND ?',
      [dataInicio, dataFim]
    );
  }
}; 