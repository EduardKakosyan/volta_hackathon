export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  type: 'exam' | 'assignment' | 'study' | 'meeting' | 'other';
  color?: string;
}

export interface KnowledgeBaseFile {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: Date;
  tags: string[];
  content?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface DashboardStats {
  tasksCompleted: number;
  tasksTotal: number;
  upcomingEvents: number;
  filesUploaded: number;
  studyHoursWeek: number;
}