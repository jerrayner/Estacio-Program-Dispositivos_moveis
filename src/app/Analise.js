import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Analise() {
  const [timeFilter, setTimeFilter] = useState('Monthly');

  return (
    <ScrollView style={styles.container}>
      {/* Header Card */}
      <View style={styles.headerCard}>
        <Text style={styles.headerTitle}>Relatório de Vendas Março</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Pagas</Text>
            <Text style={styles.statValue}>1.500</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Não Pagas</Text>
            <Text style={styles.statValue}>123</Text>
            <Text style={styles.statTrend}>+5.4%</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Atrasadas</Text>
            <Text style={styles.statValue}>320</Text>
          </View>
        </View>
      </View>

      {/* Line Chart Section */}
      <View style={styles.chartSection}>
        <View style={styles.chartHeader}>
          <View>
            <Text style={styles.chartValue}>R$ 53.200</Text>
            <Text style={styles.chartLabel}>Recebido</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>{timeFilter}</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <LineChart
          data={{
            labels: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(18, 165, 188, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={styles.chart}
        />
      </View>

      {/* Bar Chart Section */}
      <View style={styles.chartSection}>
        <View style={styles.timeFilterContainer}>
          <TouchableOpacity style={[styles.timeFilterButton, styles.timeFilterActive]}>
            <Text style={styles.timeFilterActiveText}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timeFilterButton}>
            <Text style={styles.timeFilterText}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timeFilterButton}>
            <Text style={styles.timeFilterText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timeFilterButton}>
            <Text style={styles.timeFilterText}>A</Text>
          </TouchableOpacity>
        </View>

        <BarChart
          data={{
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
              data: [20, 45, 28, 80, 99, 43]
            }]
          }}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 84, 84, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFFFF',
  },
  headerCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#005454',
    borderRadius: 15,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'flex-start',
  },
  statLabel: {
    color: '#FFF',
    opacity: 0.7,
    fontSize: 12,
    marginBottom: 5,
  },
  statValue: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  statTrend: {
    color: '#4CAF50',
    fontSize: 12,
  },
  chartSection: {
    padding: 20,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  chartLabel: {
    color: '#666',
    fontSize: 14,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 20,
  },
  filterButtonText: {
    color: '#666',
    marginRight: 5,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  timeFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timeFilterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  timeFilterActive: {
    backgroundColor: '#005454',
    borderRadius: 20,
  },
  timeFilterText: {
    color: '#666',
  },
  timeFilterActiveText: {
    color: '#FFF',
  },
});