import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { Priority } from '@/types/todo';
import { getStudentTheme, getStudentMetrics, DUE_DATE } from '@/constants/student';

interface TodoInputProps {
  onAddTodo: (text: string, priority: Priority, dueDate: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const theme = getStudentTheme();
  const metrics = getStudentMetrics();

  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('MEDIUM');
  const [dueDate, setDueDate] = useState<string>(DUE_DATE);

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      Alert.alert('Thông báo', 'Vui lòng nhập nội dung công việc!');
      return;
    }
    onAddTodo(trimmed, priority, dueDate);
    setText(''); // Clear input after adding (Requirement 1)
  };

  const priorityOptions: { label: string; value: Priority; color: string }[] = [
    { label: 'Cao', value: 'HIGH', color: theme.danger },
    { label: 'Vừa', value: 'MEDIUM', color: theme.warning },
    { label: 'Thấp', value: 'LOW', color: theme.primaryLight },
  ];

  const dueDateOptions: string[] = ['Hôm nay', 'Ngày mai', DUE_DATE];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderRadius: metrics.cardRadius,
          borderColor: theme.cardBorder,
          padding: metrics.containerPadding,
        },
      ]}
    >
      <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
        ➕ Thêm công việc mới
      </Text>

      {/* Text Input Row */}
      <View style={styles.inputRow}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.surfaceSubtle,
              borderColor: theme.cardBorder,
              color: theme.textPrimary,
              borderRadius: metrics.badgeRadius,
            },
          ]}
          placeholder="Nhập tên công việc cần làm..."
          placeholderTextColor={theme.textMuted}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleAdd}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={[
            styles.addButton,
            {
              backgroundColor: theme.primary,
              borderRadius: metrics.badgeRadius,
            },
          ]}
          onPress={handleAdd}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Thêm</Text>
        </TouchableOpacity>
      </View>

      {/* Priority & Due Date Options */}
      <View style={styles.optionsRow}>
        {/* Priority Selector */}
        <View style={styles.optionGroup}>
          <Text style={[styles.optionLabel, { color: theme.textSecondary }]}>
            Ưu tiên:
          </Text>
          <View style={styles.pillContainer}>
            {priorityOptions.map((opt) => {
              const isSelected = priority === opt.value;
              return (
                <TouchableOpacity
                  key={opt.value}
                  style={[
                    styles.pill,
                    {
                      borderColor: opt.color,
                      backgroundColor: isSelected ? opt.color : 'transparent',
                    },
                  ]}
                  onPress={() => setPriority(opt.value)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.pillText,
                      {
                        color: isSelected ? '#FFFFFF' : opt.color,
                        fontWeight: isSelected ? '700' : '500',
                      },
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Due Date Selector */}
        <View style={styles.optionGroup}>
          <Text style={[styles.optionLabel, { color: theme.textSecondary }]}>
            Hạn:
          </Text>
          <View style={styles.pillContainer}>
            {dueDateOptions.map((dateStr) => {
              const isSelected = dueDate === dateStr;
              return (
                <TouchableOpacity
                  key={dateStr}
                  style={[
                    styles.pill,
                    {
                      borderColor: theme.primaryLight,
                      backgroundColor: isSelected ? theme.primaryLight : 'transparent',
                    },
                  ]}
                  onPress={() => setDueDate(dateStr)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.pillText,
                      {
                        color: isSelected ? '#FFFFFF' : theme.textSecondary,
                        fontWeight: isSelected ? '700' : '500',
                      },
                    ]}
                  >
                    {dateStr}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  addButton: {
    height: 44,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  optionsRow: {
    flexDirection: 'column',
    gap: 8,
  },
  optionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  optionLabel: {
    fontSize: 12,
    fontWeight: '600',
    minWidth: 50,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    flex: 1,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  pillText: {
    fontSize: 11,
  },
});
