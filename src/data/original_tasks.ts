import type { Task } from '../lib/types';
import { v4 as uuidv4 } from 'uuid';

export const sampleTasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Complete Python Basics',
    description: 'Finish all Python basic problems in the practice section',
    completed: false,
    priority: 'high',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Review Algorithms',
    description: 'Go through algorithm problems and review solutions',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days from now
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Practice FizzBuzz',
    description: 'Solve the FizzBuzz problem and understand the solution thoroughly',
    completed: true,
    priority: 'low',
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Binary Search Tree',
    description: 'Create a binary search tree implementation with insert, search, and delete operations',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Complete Database Schema Design',
    description: 'Design a normalized database schema for the inventory management system',
    completed: false,
    priority: 'high',
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Fix Navigation Bar Bug',
    description: 'The dropdown menu in the navigation bar disappears on mobile devices',
    completed: true,
    priority: 'high',
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Optimize Database Queries',
    description: 'Identify and optimize slow database queries in the reporting module',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Authentication',
    description: 'Add JWT authentication to the REST API endpoints',
    completed: false,
    priority: 'high',
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Write Unit Tests',
    description: 'Create unit tests for the user service module with at least 80% coverage',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Refactor Legacy Code',
    description: 'Refactor the payment processing module to use modern JavaScript patterns',
    completed: false,
    priority: 'low',
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Responsive Design',
    description: 'Make the dashboard fully responsive on all device sizes',
    completed: true,
    priority: 'medium',
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Setup CI/CD Pipeline',
    description: 'Configure GitHub Actions for automated testing and deployment',
    completed: false,
    priority: 'high',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Create API Documentation',
    description: 'Document all API endpoints using Swagger/OpenAPI specification',
    completed: false,
    priority: 'low',
    dueDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Caching',
    description: 'Add Redis caching to improve performance of frequent database queries',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Performance Optimization',
    description: 'Identify and resolve performance bottlenecks in the front-end application',
    completed: false,
    priority: 'high',
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Integrate Payment Gateway',
    description: 'Integrate Stripe payment processing for subscription management',
    completed: false,
    priority: 'high',
    dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Search Functionality',
    description: 'Add full-text search capability to the product catalog',
    completed: true,
    priority: 'medium',
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Accessibility Improvements',
    description: 'Ensure the application is WCAG 2.1 AA compliant',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Data Migration Script',
    description: 'Create a script to migrate legacy data to the new database schema',
    completed: false,
    priority: 'high',
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement File Upload',
    description: 'Add drag-and-drop file upload functionality with progress indicators',
    completed: false,
    priority: 'low',
    dueDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Configure Logging',
    description: 'Implement structured logging and error tracking with Sentry',
    completed: true,
    priority: 'medium',
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Optimize Docker Build',
    description: 'Reduce Docker image size and improve build time for the backend service',
    completed: false,
    priority: 'low',
    dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Rate Limiting',
    description: 'Add API rate limiting to prevent abuse and improve stability',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Merge Sort',
    description: 'Implement the merge sort algorithm in Python',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days from now
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Quick Sort',
    description: 'Implement the quick sort algorithm in Python',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 6 days from now
    createdAt: new Date().toISOString(),
    userId: '1',
  },
  {
    id: uuidv4(),
    title: 'Implement Insertion Sort',
    description: 'Implement the insertion sort algorithm in Python',
    completed: false,
    priority: 'low',
    dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 4 days from now
    createdAt: new Date().toISOString(),
    userId: '1',
  },
];

// Function to get tasks for a specific user
export function getUserTasks(userId: string): Task[] {
  // In a real application, this would fetch from an API or database
  return sampleTasks.filter(task => task.userId === userId);
}

// Function to add a new task
export function addTask(task: Omit<Task, 'id' | 'createdAt'>): Task {
  const newTask: Task = {
    ...task,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
  };

  sampleTasks.push(newTask);
  return newTask;
}

// Function to update a task
export function updateTask(id: string, updates: Partial<Omit<Task, 'id' | 'createdAt' | 'userId'>>): Task | null {
  const taskIndex = sampleTasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  sampleTasks[taskIndex] = {
    ...sampleTasks[taskIndex],
    ...updates,
  };

  return sampleTasks[taskIndex];
}

// Function to delete a task
export function deleteTask(id: string): boolean {
  const taskIndex = sampleTasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return false;
  }

  sampleTasks.splice(taskIndex, 1);
  return true;
}

// Function to get task by ID
export function getTaskById(id: string): Task | undefined {
  return sampleTasks.find(task => task.id === id);
}
