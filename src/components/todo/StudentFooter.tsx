import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  STUDENT_ID,
  STUDENT_NAME,
  DUE_DATE,
  getStudentTheme,
  getStudentMetrics,
} from '@/constants/student';

export const StudentFooter: React.FC = () => {
  const theme = getStudentTheme();
  const metrics = getStudentMetrics();

  return (
    <View
      style={[
        styles.container,
        {
          borderTopColor: theme.cardBorder,
          paddingVertical: metrics.smallGap + 4,
        },
      ]}
    >
      <Text style={[styles.title, { color: theme.textSecondary }]}>
        Assignment 01 • Lập Trình Thiết Bị Di Động
      </Text>
      <Text style={[styles.subText, { color: theme.textMuted }]}>
        Sinh viên: <Text style={{ color: theme.primaryLight, fontWeight: '600' }}>{STUDENT_NAME}</Text>
        {' '}| MSSV: <Text style={{ color: theme.accent, fontWeight: '700' }}>{STUDENT_ID}</Text>
        {' '}| Hạn nộp: {DUE_DATE}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    gap: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  subText: {
    fontSize: 11,
  },
});
