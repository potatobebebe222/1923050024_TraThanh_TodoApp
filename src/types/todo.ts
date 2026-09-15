export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

export type FilterStatus = 'ALL' | 'ACTIVE' | 'COMPLETED';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  dueDate: string;
  createdAt: number;
}
