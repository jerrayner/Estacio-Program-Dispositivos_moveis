import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { theme, commonStyles } from '../theme/theme';

export default function HomeScreen() {
  return (
    <View style={commonStyles.screenContainer}>
      {/* Header */}
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>Olá, bem-vindo!</Text>
        <TouchableOpacity style={styles.profileButton}>
          <MaterialIcons name="person" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Resumo Cards */}
      <ScrollView style={styles.content}>
        <View style={styles.cardsContainer}>
          {/* Card de Vendas */}
          <Link href="/Vendas" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.iconContainer, { backgroundColor: '#FFE8EC' }]}>
                <MaterialIcons name="shopping-bag" size={24} color={theme.colors.secondary} />
              </View>
              <Text style={styles.cardTitle}>Vendas</Text>
              <Text style={styles.cardValue}>R$ 15.999,00</Text>
              <Text style={styles.cardSubtitle}>Último mês</Text>
            </TouchableOpacity>
          </Link>

          {/* Card de Estoque */}
          <Link href="/Estoque" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.iconContainer, { backgroundColor: '#E8F5FF' }]}>
                <MaterialIcons name="inventory" size={24} color={theme.colors.primary} />
              </View>
              <Text style={styles.cardTitle}>Estoque</Text>
              <Text style={styles.cardValue}>127</Text>
              <Text style={styles.cardSubtitle}>Produtos</Text>
            </TouchableOpacity>
          </Link>

          {/* Card de Análise */}
          <Link href="/Analise" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.iconContainer, { backgroundColor: '#F0FFE8' }]}>
                <MaterialIcons name="analytics" size={24} color={theme.colors.status.success} />
              </View>
              <Text style={styles.cardTitle}>Análise</Text>
              <Text style={styles.cardValue}>+12.5%</Text>
              <Text style={styles.cardSubtitle}>Crescimento</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  profileButton: {
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.round,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    width: '48%',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  cardTitle: {
    ...theme.typography.body,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  cardValue: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  cardSubtitle: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  },
});