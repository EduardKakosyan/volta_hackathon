import type { Task, CalendarEvent, KnowledgeBaseFile, ChatMessage, DashboardStats, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Chen',
  email: 'alex.chen@university.edu',
  avatar: 'https://ui-avatars.com/api/?name=Alex+Chen&background=3b82f6&color=fff'
};

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete CS 341 Assignment 3',
    description: 'Implement graph algorithms for shortest path problem',
    completed: false,
    priority: 'high',
    dueDate: new Date('2025-07-05'),
    createdAt: new Date('2025-06-28')
  },
  {
    id: '2',
    title: 'Study for Calculus Midterm',
    description: 'Review chapters 5-8, practice integration problems',
    completed: false,
    priority: 'high',
    dueDate: new Date('2025-07-03'),
    createdAt: new Date('2025-06-25')
  },
  {
    id: '3',
    title: 'Read Physics Lab Manual',
    description: 'Prepare for next week\'s lab on electromagnetic fields',
    completed: true,
    priority: 'medium',
    dueDate: new Date('2025-07-02'),
    createdAt: new Date('2025-06-30')
  },
  {
    id: '4',
    title: 'Group project meeting',
    description: 'Discuss project timeline and divide tasks',
    completed: false,
    priority: 'medium',
    dueDate: new Date('2025-07-04'),
    createdAt: new Date('2025-06-29')
  },
  {
    id: '5',
    title: 'Submit scholarship application',
    description: 'Complete essays and gather recommendation letters',
    completed: false,
    priority: 'low',
    dueDate: new Date('2025-07-15'),
    createdAt: new Date('2025-06-20')
  }
];

export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Calculus Midterm',
    description: 'Midterm exam covering chapters 5-8',
    start: new Date('2025-07-03T10:00:00'),
    end: new Date('2025-07-03T12:00:00'),
    type: 'exam',
    color: '#ef4444'
  },
  {
    id: '2',
    title: 'CS 341 Assignment Due',
    description: 'Graph algorithms assignment submission',
    start: new Date('2025-07-05T23:59:00'),
    end: new Date('2025-07-05T23:59:00'),
    type: 'assignment',
    color: '#f59e0b'
  },
  {
    id: '3',
    title: 'Physics Lab',
    description: 'Electromagnetic fields lab session',
    start: new Date('2025-07-02T14:00:00'),
    end: new Date('2025-07-02T17:00:00'),
    type: 'study',
    color: '#3b82f6'
  },
  {
    id: '4',
    title: 'Study Group - Linear Algebra',
    description: 'Weekly study session with classmates',
    start: new Date('2025-07-04T19:00:00'),
    end: new Date('2025-07-04T21:00:00'),
    type: 'study',
    color: '#10b981'
  },
  {
    id: '5',
    title: 'Office Hours - Prof. Smith',
    description: 'Get help with calculus problems',
    start: new Date('2025-07-01T15:00:00'),
    end: new Date('2025-07-01T16:00:00'),
    type: 'meeting',
    color: '#8b5cf6'
  }
];

export const mockKnowledgeBaseFiles: KnowledgeBaseFile[] = [
  {
    id: '1',
    name: 'CS341_Syllabus_Fall2024.pdf',
    type: 'application/pdf',
    size: 2456789,
    uploadedAt: new Date('2025-06-28'),
    tags: ['syllabus', 'computer science', 'algorithms'],
    content: 'Computer Science 341 - Algorithms and Data Structures syllabus...'
  },
  {
    id: '2',
    name: 'Calculus_Notes_Chapter5.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: 1234567,
    uploadedAt: new Date('2025-06-25'),
    tags: ['notes', 'calculus', 'mathematics'],
    content: 'Chapter 5: Integration techniques and applications...'
  },
  {
    id: '3',
    name: 'Physics_Lab_Manual.pdf',
    type: 'application/pdf',
    size: 5678901,
    uploadedAt: new Date('2025-06-30'),
    tags: ['lab manual', 'physics', 'electromagnetic fields'],
    content: 'Physics Laboratory Manual - Electromagnetic Fields...'
  },
  {
    id: '4',
    name: 'LinearAlgebra_ProblemSet3.pdf',
    type: 'application/pdf',
    size: 987654,
    uploadedAt: new Date('2025-06-27'),
    tags: ['problem set', 'linear algebra', 'mathematics'],
    content: 'Problem Set 3 - Vector spaces and linear transformations...'
  },
  {
    id: '5',
    name: 'Project_Requirements.txt',
    type: 'text/plain',
    size: 12345,
    uploadedAt: new Date('2025-06-29'),
    tags: ['project', 'requirements', 'group work'],
    content: 'Final project requirements for CS 341...'
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'Hi! I need help organizing my study schedule for the upcoming midterms.',
    sender: 'user',
    timestamp: new Date('2025-07-01T09:00:00')
  },
  {
    id: '2',
    content: 'I\'d be happy to help you organize your study schedule! I can see you have a Calculus midterm on July 3rd and a CS assignment due on July 5th. Let me analyze your uploaded files to create a personalized study plan.',
    sender: 'assistant',
    timestamp: new Date('2025-07-01T09:01:00')
  },
  {
    id: '3',
    content: 'Based on your syllabus and notes, I recommend focusing on integration techniques today and tomorrow, then switching to algorithms on July 4th. Would you like me to create specific calendar events for your study sessions?',
    sender: 'assistant',
    timestamp: new Date('2025-07-01T09:02:00')
  },
  {
    id: '4',
    content: 'Yes, that sounds perfect! Can you also remind me about the physics lab preparation?',
    sender: 'user',
    timestamp: new Date('2025-07-01T09:03:00')
  },
  {
    id: '5',
    content: 'Absolutely! I\'ve scheduled 2 hours today for calculus review, and I\'ll set a reminder for tomorrow morning to review the physics lab manual. I\'ve also added the study sessions to your calendar.',
    sender: 'assistant',
    timestamp: new Date('2025-07-01T09:04:00')
  }
];

export const mockDashboardStats: DashboardStats = {
  tasksCompleted: 8,
  tasksTotal: 12,
  upcomingEvents: 3,
  filesUploaded: 15,
  studyHoursWeek: 24
};