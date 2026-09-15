import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo, Priority } from '@/types/todo';
import { getStudentTheme, getStudentMetrics } from '@/constants/student';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const theme = getStudentTheme();
  const metrics = getStudentMetrics();

  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case 'HIGH':
        return { bg: 'rgba(239, 68, 68, 0.2)', text: theme.danger, label: 'Cao' };
      case 'MEDIUM':
        return { bg: 'rgba(245, 158, 11, 0.2)', text: theme.warning, label: 'Vừa' };
      case 'LOW':
      default:
        return { bg: 'rgba(59, 130, 246, 0.2)', text: theme.primaryLight, label: 'Thấp' };
    }
  };

  const priorityStyle = getPriorityColor(todo.priority);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: todo.completed ? theme.surfaceSubtle : theme.surface,
          borderRadius: metrics.cardRadius,
          borderColor: todo.completed ? theme.border : theme.cardBorder,
          padding: metrics.containerPadding - 2,
          opacity: todo.completed ? 0.82 : 1,
        },
      ]}
    >
      {/* Checkbox + Task Details */}
      <TouchableOpacity
        style={styles.mainTouchArea}
        onPress={() => onToggle(todo.id)}
        activeOpacity={0.7}
      >
        {/* Custom Checkbox */}
        <View
          style={[
            styles.checkbox,
            {
              borderColor: todo.completed ? theme.success : theme.primaryLight,
              backgroundColor: todo.completed ? theme.success : 'transparent',
              borderRadius: metrics.badgeRadius / 2,
            },
          ]}
        >
          {todo.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>

        {/* Text & Meta Information */}
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.todoText,
              {
                color: todo.completed ? theme.textMuted : theme.textPrimary,
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              },
            ]}
            numberOfLines={2}
          >
            {todo.text}
          </Text>

          {/* Badges: Priority & Due Date */}
          <View style={styles.badgeRow}>
            <View
              style={[
                styles.priorityBadge,
                {
                  backgroundColor: priorityStyle.bg,
                  borderColor: priorityStyle.text,
                },
              ]}
            >
              <Text style={[styles.priorityText, { color: priorityStyle.text }]}>
                ● {priorityStyle.label}
              </Text>
            </View>

            <View
              style={[
                styles.dueDateBadge,
                {
                  backgroundColor: theme.badgeBg,
                  borderColor: theme.cardBorder,
                },
              ]}
            >
              <Text style={[styles.dueDateText, { color: theme.accent }]}>
                📅 {todo.dueDate}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Delete Button */}
      <TouchableOpacity
        style={[
          styles.deleteButton,
          {
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            borderColor: 'rgba(239, 68, 68, 0.3)',
            borderRadius: metrics.badgeRadius / 2,
          },
        ]}
        onPress={() => onDelete(todo.id)}
        activeOpacity={0.7}
      >
        <Text style={[styles.deleteIcon, { color: theme.danger }]}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  mainTouchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 16,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 6,
  },
  todoText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  priorityBadge: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  dueDateBadge: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  dueDateText: {
    fontSize: 10,
    fontWeight: '600',
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  deleteIcon: {
    fontSize: 14,
    fontWeight: '700',
  },
});
