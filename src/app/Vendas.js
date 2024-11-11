import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { theme, commonStyles } from '../theme/theme';

export default function Vendas() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  // Dados mockados
  const vendasMock = [
    {
      id: 1,
      produto: 'iPhone 13 Pro',
      valor_total: 5999.99,
      data: '2024-03-15T14:30:00',
      status: 'completed'
    },
    {
      id: 2,
      produto: 'MacBook Air M1',
      valor_total: 7999.99,
      data: '2024-03-15T10:45:00',
      status: 'process'
    },
    {
      id: 3,
      produto: 'AirPods Pro',
      valor_total: 1899.99,
      data: '2024-03-14T16:20:00',
      status: 'completed'
    },
    {
      id: 4,
      produto: 'iPad Air',
      valor_total: 4599.99,
      data: '2024-03-14T09:15:00',
      status: 'completed'
    }
  ];

  // Função para filtrar vendas
  const getVendasFiltradas = () => {
    if (activeFilter === 'all') return vendasMock;
    return vendasMock.filter(venda => venda.status === activeFilter);
  };

  // Renderiza cada item de venda
  const renderVendaItem = (venda) => (
    <View key={venda.id} style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View style={[styles.iconContainer, { backgroundColor: '#FFE8EC' }]}>
          <MaterialIcons name="shopping-bag" size={24} color="#FF4471" />
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{venda.produto}</Text>
          <Text style={styles.transactionTime}>
            {new Date(venda.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </View>
      </View>
      <Text style={styles.transactionAmount}>
        R$ {venda.valor_total.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={commonStyles.screenContainer}>
      {/* Header */}
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>Vendas</Text>
        <TouchableOpacity 
          style={styles.dateFilterButton}
          onPress={() => setDatePickerVisible(true)}
        >
          <MaterialIcons name="date-range" size={20} color={theme.colors.text.secondary} />
          <Text style={styles.dateFilterText}>Março 2024</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color={theme.colors.text.secondary} />
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        <TouchableOpacity 
          style={[
            styles.filterTab,
            activeFilter === 'all' && styles.filterTabActive
          ]}
          onPress={() => setActiveFilter('all')}
        >
          <Text style={[
            styles.filterText,
            activeFilter === 'all' && styles.filterTextActive
          ]}>
            Todas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.filterTab,
            activeFilter === 'process' && styles.filterTabActive
          ]}
          onPress={() => setActiveFilter('process')}
        >
          <Text style={[
            styles.filterText,
            activeFilter === 'process' && styles.filterTextActive
          ]}>
            Em Processo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.filterTab,
            activeFilter === 'completed' && styles.filterTabActive
          ]}
          onPress={() => setActiveFilter('completed')}
        >
          <Text style={[
            styles.filterText,
            activeFilter === 'completed' && styles.filterTextActive
          ]}>
            Concluídas
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de Seleção de Data */}
      <View
        visible={isDatePickerVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDatePickerVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setDatePickerVisible(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.dateOption}>
              <Text style={styles.dateOptionText}>Hoje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateOption}>
              <Text style={styles.dateOptionText}>Esta Semana</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateOption}>
              <Text style={styles.dateOptionText}>Este Mês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateOption}>
              <Text style={styles.dateOptionText}>Últimos 3 Meses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dateOption, styles.customDateOption]}>
              <Text style={[styles.dateOptionText, styles.customDateText]}>Escolher Período</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>

      {/* Lista de Vendas */}
      <ScrollView style={styles.transactionsList}>
        {getVendasFiltradas().map(venda => renderVendaItem(venda))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },
  filterTab: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    marginRight: theme.spacing.md,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    minWidth: 90,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterTabActive: {
    backgroundColor: theme.colors.primary,
  },
  filterText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '400',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  dateFilterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.round,
    height: 30,
  },
  dateFilterText: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
    marginHorizontal: theme.spacing.xs,
  },
  transactionsList: {
    paddingHorizontal: theme.spacing.lg,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  transactionInfo: {
    justifyContent: 'center',
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: theme.spacing.xs,
  },
  transactionTime: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    maxWidth: 300,
  },
  dateOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  dateOptionText: {
    fontSize: 16,
    color: '#333',
  },
  customDateOption: {
    borderBottomWidth: 0,
    marginTop: 8,
  },
  customDateText: {
    color: '#12A5BC',
    fontWeight: '500',
  }
});