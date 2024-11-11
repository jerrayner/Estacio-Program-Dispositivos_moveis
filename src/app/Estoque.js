import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      const produtosStorage = await AsyncStorage.getItem('@produtos');
      if (!produtosStorage) {
        // Dados iniciais de exemplo
        const dadosIniciais = [
          { id: '1', produto: 'Produto 1', quantidade: 10, preco: 29.99 },
          { id: '2', produto: 'Produto 2', quantidade: 15, preco: 39.99 },
          { id: '3', produto: 'Produto 3', quantidade: 5, preco: 19.99 },
        ];
        await AsyncStorage.setItem('@produtos', JSON.stringify(dadosIniciais));
        setProdutos(dadosIniciais);
      } else {
        setProdutos(JSON.parse(produtosStorage));
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  const atualizarQuantidade = async (id, novaQuantidade) => {
    try {
      const novosProdutos = produtos.map(produto => 
        produto.id === id ? { ...produto, quantidade: novaQuantidade } : produto
      );
      await AsyncStorage.setItem('@produtos', JSON.stringify(novosProdutos));
      setProdutos(novosProdutos);
    } catch (error) {
      console.error('Erro ao atualizar quantidade:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>{item.produto}</Text>
      <Text>Quantidade: {item.quantidade}</Text>
      <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
      <View style={styles.botoesContainer}>
        <TouchableOpacity 
          onPress={() => atualizarQuantidade(item.id, item.quantidade - 1)}
          style={styles.botao}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => atualizarQuantidade(item.id, item.quantidade + 1)}
          style={styles.botao}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estoque</Text>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  botao: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
    minWidth: 40,
    alignItems: 'center',
  },
});

export default Estoque;