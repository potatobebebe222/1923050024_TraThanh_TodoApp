/**
 * Assignment 01: Layout & Student ID Integration
 * Required constant defined at the top of your code:
 */
export const STUDENT_ID = "1923050024";
export const STUDENT_NAME = "Trà Thanh";
export const DUE_DATE = "15/9/2026";

/**
 * Derive White / Light theme colors dynamically from STUDENT_ID digits
 * For example:
 * - STUDENT_ID[0] ('1') & STUDENT_ID[1] ('9') establish primary rich sapphire blue shades
 * - STUDENT_ID[2] ('2') & STUDENT_ID[3] ('3') establish glowing electric accents and borders
 */
export const getStudentTheme = () => {
  const d0 = parseInt(STUDENT_ID[0], 10); // 1
  const d1 = parseInt(STUDENT_ID[1], 10); // 9
  const d2 = parseInt(STUDENT_ID[2], 10); // 2
  const d3 = parseInt(STUDENT_ID[3], 10); // 3

  return {
    // White / Light theme palette derived from student digits
    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceSubtle: '#F1F5F9',
    surfaceElevated: '#FFFFFF',
    cardBorder: `rgba(${d0 * 15 + 190}, ${d1 * 4 + 190}, ${d2 * 10 + 215}, 0.8)`,
    primary: '#2563EB',
    primaryGlow: 'rgba(37, 99, 235, 0.12)',
    primaryLight: '#3B82F6',
    accent: '#0284C7',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#94A3B8',
    success: '#16A34A',
    successLight: '#22C55E',
    danger: '#DC2626',
    dangerLight: '#EF4444',
    warning: '#D97706',
    border: '#E2E8F0',
    badgeBg: `rgba(${d3 * 10 + 225}, 242, 254, 0.85)`,
  };
};

/**
 * Derive styling metrics (padding, radius, spacing) from STUDENT_ID
 */
export const getStudentMetrics = () => {
  const idLen = STUDENT_ID.length; // 10
  const d1 = parseInt(STUDENT_ID[1], 10); // 9
  const d2 = parseInt(STUDENT_ID[2], 10); // 2
  const d3 = parseInt(STUDENT_ID[3], 10); // 3

  return {
    cardRadius: idLen + 2, // 12
    badgeRadius: idLen, // 10
    containerPadding: d1 + 7, // 16
    gap: d3 * 3 + 3, // 12
    smallGap: d2 * 3 + 2, // 8
    headerHeight: idLen * 6 + 10, // 70
    buttonHeight: idLen * 4 + 4, // 44
  };
};

/**
 * Generates unique ID for todos prefixed with STUDENT_ID
 */
export const generateTodoId = (): string => {
  return `${STUDENT_ID}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};
