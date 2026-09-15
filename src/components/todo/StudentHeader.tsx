import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  STUDENT_ID,
  STUDENT_NAME,
  DUE_DATE,
  getStudentTheme,
  getStudentMetrics,
} from '@/constants/student';

export const StudentHeader: React.FC = () => {
  const theme = getStudentTheme();
  const metrics = getStudentMetrics();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderRadius: metrics.cardRadius + 4,
          borderColor: theme.cardBorder,
          padding: metrics.containerPadding,
        },
      ]}
    >
      <View style={styles.leftSection}>
        <View
          style={[
            styles.avatar,
            {
              backgroundColor: theme.primary,
              borderRadius: metrics.badgeRadius * 2,
            },
          ]}
        >
          <Text style={styles.avatarText}>TT</Text>
        </View>
        <View style={styles.infoCol}>
          <View style={styles.nameRow}>
            <Text style={[styles.studentName, { color: theme.textPrimary }]}>
              {STUDENT_NAME}
            </Text>
            <View
              style={[
                styles.badge,
                {
                  backgroundColor: theme.primaryGlow,
                  borderColor: theme.primary,
                },
              ]}
            >
              <Text style={[styles.badgeText, { color: theme.primaryLight }]}>
                MSSV: {STUDENT_ID}
              </Text>
            </View>
          </View>
          <Text style={[styles.dueDateText, { color: theme.textSecondary }]}>
            📅 Hạn nộp: <Text style={{ color: theme.accent, fontWeight: '600' }}>{DUE_DATE}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  infoCol: {
    flexDirection: 'column',
    gap: 4,
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  studentName: {
    fontSize: 18,
    fontWeight: '700',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  dueDateText: {
    fontSize: 12,
  },
});
