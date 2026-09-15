/**
 * Assignment 01 - Todo App
 * Student Name: Trà Thanh
 * Student ID: 1923050024
 * Due Date: 15/9/2026
 *
 * Layout & Student ID Integration (Required):
 * - Define STUDENT_ID constant at top of code
 * - Reference STUDENT_ID in >= 5 places
 * - Flexbox layout (flex, flexDirection, justifyContent, alignItems)
 * - State management with useState hook
 * - Custom components: StudentHeader, StudentFooter, TodoStats, TodoInput, TodoItem, TodoFilter
 * - Custom features: White/Blue theme, Cards UI, Priority levels, Due dates, Counter
 */

// 1. STUDENT_ID defined at the top of code (Required)
export const STUDENT_ID = "1923050024";

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Todo, Priority, FilterStatus } from '@/types/todo';
import { getStudentTheme, getStudentMetrics, STUDENT_NAME, DUE_DATE } from '@/constants/student';
import { StudentHeader } from '@/components/todo/StudentHeader';
import { TodoStats } from '@/components/todo/TodoStats';
import { TodoInput } from '@/components/todo/TodoInput';
import { TodoItem } from '@/components/todo/TodoItem';
import { TodoFilter } from '@/components/todo/TodoFilter';

export default function TodoAppScreen() {
  const theme = getStudentTheme();
  const metrics = getStudentMetrics();

  // 2. Initial sample todos referencing STUDENT_ID in their unique IDs
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: `${STUDENT_ID}-task-1`,
      text: 'Nộp bài tập Assignment 01 môn Lập trình Mobile',
      completed: false,
      priority: 'HIGH',
      dueDate: DUE_DATE,
      createdAt: Date.now() - 3600000,
    },
    {
      id: `${STUDENT_ID}-task-2`,
      text: 'Ôn tập kiến thức Flexbox và React Native Hooks (useState)',
      completed: true,
      priority: 'MEDIUM',
      dueDate: 'Hôm nay',
      createdAt: Date.now() - 7200000,
    },
    {
      id: `${STUDENT_ID}-task-3`,
      text: 'Chuẩn bị bài thuyết trình ứng dụng Todo App với Expo',
      completed: false,
      priority: 'LOW',
      dueDate: 'Ngày mai',
      createdAt: Date.now() - 10800000,
    },
  ]);

  const [filter, setFilter] = useState<FilterStatus>('ALL');

  // 3. Add Todo function generating new task ID prefixed with STUDENT_ID
  const handleAddTodo = (text: string, priority: Priority, dueDate: string) => {
    const newTodo: Todo = {
      id: `${STUDENT_ID}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      text,
      completed: false,
      priority,
      dueDate,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  // 4. Toggle completion status with useState
  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // 5. Delete todo from list with useState
  const handleDeleteTodo = (id: string) => {
    if (Platform.OS === 'web') {
      const confirmed = window.confirm('Bạn có chắc chắn muốn xoá công việc này?');
      if (confirmed) {
        setTodos((prev) => prev.filter((t) => t.id !== id));
      }
    } else {
      Alert.alert('Xác nhận xoá', 'Bạn có chắc chắn muốn xoá công việc này?', [
        { text: 'Huỷ', style: 'cancel' },
        {
          text: 'Xoá',
          style: 'destructive',
          onPress: () => {
            setTodos((prev) => prev.filter((t) => t.id !== id));
          },
        },
      ]);
    }
  };

  // Filtered todos
  const filteredTodos = todos.filter((item) => {
    if (filter === 'ACTIVE') return !item.completed;
    if (filter === 'COMPLETED') return item.completed;
    return true;
  });

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.background} />

      {/* 4. Main container organized with flexbox and metrics derived from STUDENT_ID */}
      <View
        style={[
          styles.mainContainer,
          {
            paddingHorizontal: metrics.containerPadding, // Derived from parseInt(STUDENT_ID[1]) + 7
            maxWidth: STUDENT_ID.length * 65, // Derived from STUDENT_ID.length (650px on web)
          },
        ]}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingTop: 12,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Component */}
          <StudentHeader />

          {/* 5. Project Information Banner referencing STUDENT_ID and student name */}
          <View
            style={[
              styles.infoBanner,
              {
                backgroundColor: theme.surfaceSubtle,
                borderColor: theme.cardBorder,
                borderRadius: metrics.cardRadius - 2,
              },
            ]}
          >
            <Text style={[styles.infoBannerTitle, { color: theme.textPrimary }]}>
              🚀 Todo App - Sinh viên: {STUDENT_NAME} ({STUDENT_ID})
            </Text>
            <Text style={[styles.infoBannerSubtitle, { color: theme.textSecondary }]}>
              Chủ đề: White/Blue • Giao diện: Cards • Tính năng: Priority + Due Date + Counter
            </Text>
          </View>

          {/* Counter / Stats Component */}
          <TodoStats todos={todos} />

          {/* Input Component */}
          <TodoInput onAddTodo={handleAddTodo} />

          {/* Filter Tabs */}
          <TodoFilter
            currentFilter={filter}
            onChangeFilter={setFilter}
            todos={todos}
          />

          {/* Todo List Cards */}
          <View style={styles.todoListSection}>
            {filteredTodos.length === 0 ? (
              <View
                style={[
                  styles.emptyContainer,
                  {
                    backgroundColor: theme.surface,
                    borderRadius: metrics.cardRadius,
                    borderColor: theme.cardBorder,
                  },
                ]}
              >
                <Text style={[styles.emptyIcon, { color: theme.textMuted }]}>📋</Text>
                <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
                  Không có công việc nào
                </Text>
                <Text style={[styles.emptySubtitle, { color: theme.textSecondary }]}>
                  {filter === 'ALL'
                    ? 'Hãy thêm công việc đầu tiên ở phía trên!'
                    : filter === 'ACTIVE'
                    ? 'Bạn đã hoàn thành tất cả công việc!'
                    : 'Chưa có công việc nào được đánh dấu hoàn thành.'}
                </Text>
              </View>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                />
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
    flexDirection: 'column',
  },
  infoBanner: {
    padding: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  infoBannerTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  infoBannerSubtitle: {
    fontSize: 11,
    marginTop: 2,
  },
  todoListSection: {
    flexDirection: 'column',
    marginTop: 4,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginTop: 8,
    gap: 8,
  },
  emptyIcon: {
    fontSize: 32,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  emptySubtitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
