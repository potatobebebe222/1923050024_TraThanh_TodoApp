import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Todo } from '@/types/todo';
import { getStudentTheme, getStudentMetrics } from '@/constants/student';

interface TodoStatsProps {
  todos: Todo[];
}

export const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const theme = getStudentTheme();
  const metrics = getStudentMetrics();

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const highPriority = todos.filter((t) => !t.completed && t.priority === 'HIGH').length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderRadius: metrics.cardRadius,
          borderColor: theme.cardBorder,
          padding: metrics.containerPadding - 2,
        },
      ]}
    >
      <View style={styles.headerRow}>
        <Text style={[styles.heading, { color: theme.textPrimary }]}>
          📊 Tiến độ công việc (Counter)
        </Text>
        <Text style={[styles.percentBadge, { color: theme.primaryLight }]}>
          {percent}% Hoàn thành
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={[styles.progressBarTrack, { backgroundColor: theme.surfaceSubtle }]}>
        <View
          style={[
            styles.progressBarFill,
            {
              backgroundColor: theme.primary,
              width: `${percent}%`,
            },
          ]}
        />
      </View>

      {/* Counter Cards */}
      <View style={styles.cardsRow}>
        <View
          style={[
            styles.statCard,
            {
              backgroundColor: theme.surfaceSubtle,
              borderRadius: metrics.badgeRadius,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <Text style={[styles.statValue, { color: theme.textPrimary }]}>{total}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Tổng số</Text>
        </View>

        <View
          style={[
            styles.statCard,
            {
              backgroundColor: theme.surfaceSubtle,
              borderRadius: metrics.badgeRadius,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <Text style={[styles.statValue, { color: theme.warning }]}>{active}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Đang làm</Text>
        </View>

        <View
          style={[
            styles.statCard,
            {
              backgroundColor: theme.surfaceSubtle,
              borderRadius: metrics.badgeRadius,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <Text style={[styles.statValue, { color: theme.success }]}>{completed}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Đã xong</Text>
        </View>

        <View
          style={[
            styles.statCard,
            {
              backgroundColor: theme.surfaceSubtle,
              borderRadius: metrics.badgeRadius,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <Text style={[styles.statValue, { color: theme.danger }]}>{highPriority}</Text>
          <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Ưu tiên cao</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: '700',
  },
  percentBadge: {
    fontSize: 13,
    fontWeight: '700',
  },
  progressBarTrack: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
});
