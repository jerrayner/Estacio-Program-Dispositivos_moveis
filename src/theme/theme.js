import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#12A5BC',
    secondary: '#FF4471',
    background: '#FEFFFF',
    surface: '#F5F5F5',
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#FFFFFF'
    },
    status: {
      success: '#4CAF50',
      warning: '#FFC107',
      error: '#FF5252'
    }
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  borderRadius: {
    small: 8,
    medium: 15,
    large: 20,
    round: 999
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 20,
      fontWeight: '600'
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal'
    },
    caption: {
      fontSize: 14,
      fontWeight: 'normal'
    }
  }
};

// Componentes comuns estilizados
export const commonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    ...theme.typography.h1,
    color: theme.colors.text.primary
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md
  },
  filterButton: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.surface,
    marginRight: theme.spacing.sm
  },
  filterButtonActive: {
    backgroundColor: theme.colors.primary
  },
  filterButtonText: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary
  },
  filterButtonTextActive: {
    color: theme.colors.text.light
  }
}); 