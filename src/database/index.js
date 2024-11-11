import * as SQLite from 'expo-sqlite';

// Corrigindo a forma de abrir o banco
const db = SQLite.openDatabase('mercadolivre.db');

// Função para executar queries
export const executarQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        query,
        params,
        (_, result) => resolve(result.rows._array),
        (_, error) => {
          console.error('Erro na query:', error);
          reject(error);
          return false;
        }
      );
    });
  });
};

// Função para inicializar o banco de dados
export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        // Criando tabela de estoque
        tx.executeSql(`
          CREATE TABLE IF NOT EXISTS estoque (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            produto TEXT NOT NULL,
            quantidade INTEGER NOT NULL,
            preco DECIMAL(10,2) NOT NULL
          );
        `);

        // Verificando se já existem dados
        tx.executeSql(
          'SELECT COUNT(*) as count FROM estoque',
          [],
          (_, { rows }) => {
            if (rows._array[0].count === 0) {
              // Inserindo dados iniciais apenas se a tabela estiver vazia
              tx.executeSql(`
                INSERT INTO estoque (produto, quantidade, preco)
                VALUES 
                  ('Smartphone XYZ', 10, 1299.99),
                  ('Notebook ABC', 5, 3499.99),
                  ('Fone de Ouvido Pro', 20, 299.99);
              `);
            }
          }
        );

        // Criando tabela de vendas
        tx.executeSql(`
          CREATE TABLE IF NOT EXISTS vendas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            produto_id INTEGER,
            quantidade_vendida INTEGER NOT NULL,
            data TEXT NOT NULL,
            valor_total DECIMAL(10,2) NOT NULL,
            FOREIGN KEY (produto_id) REFERENCES estoque (id)
          );
        `);
      },
      error => {
        console.error('Erro ao inicializar banco:', error);
        reject(error);
      },
      () => {
        console.log('Banco de dados inicializado com sucesso!');
        resolve();
      }
    );
  });
};

export const getDBConnection = () => db;