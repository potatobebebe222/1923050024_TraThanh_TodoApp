import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FilterStatus, Todo } from '@/types/todo';
import { getStudentTheme, getStudentMetrics } from '@/constants/student';

interface TodoFilterProps {
  currentFilter: FilterStatus;
  onChangeFilter: (filter: FilterStatus) => void;
  todos: Todo[];
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onChangeFilter,
  todos,
}) => {
  const theme = getStudentTheme();
  const metrics = getStudentMetrics();

  const total = todos.length;
  const active = todos.filter((t) => !t.completed).length;
  const completed = total - active;

  const filters: { label: string; value: FilterStatus; count: number }[] = [
    { label: 'Tất cả', value: 'ALL', count: total },
    { label: 'Đang làm', value: 'ACTIVE', count: active },
    { label: 'Đã xong', value: 'COMPLETED', count: completed },
  ];

  return (
    <View style={styles.container}>
      {filters.map((f) => {
        const isActive = currentFilter === f.value;
        return (
          <TouchableOpacity
            key={f.value}
            style={[
              styles.tab,
              {
                backgroundColor: isActive ? theme.primary : theme.surface,
                borderColor: isActive ? theme.primaryLight : theme.cardBorder,
                borderRadius: metrics.badgeRadius,
              },
            ]}
            onPress={() => onChangeFilter(f.value)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: isActive ? '#FFFFFF' : theme.textSecondary,
                  fontWeight: isActive ? '700' : '500',
                },
              ]}
            >
              {f.label}
            </Text>
            <View
              style={[
                styles.countBadge,
                {
                  backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : theme.surfaceSubtle,
                },
              ]}
            >
              <Text
                style={[
                  styles.countText,
                  {
                    color: isActive ? '#FFFFFF' : theme.textMuted,
                  },
                ]}
              >
                {f.count}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 1,
    gap: 6,
  },
  tabText: {
    fontSize: 12,
  },
  countBadge: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 10,
  },
  countText: {
    fontSize: 10,
    fontWeight: '700',
  },
});
