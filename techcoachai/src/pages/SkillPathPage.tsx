import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '../lib/themeContext';
import { useAuth } from '../lib/authContext';
import { Card } from '@/components/ui/card';
import {
  CircleSlash2,
  CheckCircle,
  ChevronRight,
  Lock,
  HelpCircle,
  RotateCcw,
  AlertDialog
} from 'lucide-react';
import { useState } from 'react';

// Define the skillpath topic structure
interface SkillPathTopic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  completed?: boolean;
  locked?: boolean;
  children?: string[];
}

// Define our skill path data with more relevant tasks
const skillPathData: SkillPathTopic[] = [
  {
    id: 'foundations',
    title: 'Coding Foundations',
    emoji: '🏗️',
    description: 'Master basic programming concepts and syntax',
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
    emoji: '🧱',
    description: 'Learn how to organize and store data efficiently',
  },
  {
    id: 'algorithms',
    title: 'Algorithm Basics',
    emoji: '🧮',
    description: 'Understand fundamental problem-solving techniques',
  },
  {
    id: 'arrays-objects',
    title: 'Arrays & Objects',
    emoji: '📊',
    description: 'Work with collections and structured data types',
  },
  {
    id: 'functions-scope',
    title: 'Functions & Scope',
    emoji: '🔍',
    description: 'Create reusable code blocks and understand variable visibility',
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    emoji: '🛡️',
    description: 'Gracefully handle exceptions and edge cases',
  },
  {
    id: 'async-programming',
    title: 'Async Programming',
    emoji: '⏱️',
    description: 'Work with promises, async/await, and API calls',
  },
  {
    id: 'dom-manipulation',
    title: 'DOM Manipulation',
    emoji: '🖌️',
    description: 'Interact with web page elements dynamically',
  },
  {
    id: 'react-basics',
    title: 'React Fundamentals',
    emoji: '⚛️',
    description: 'Build UI components with React',
  },
  {
    id: 'state-management',
    title: 'State Management',
    emoji: '🗃️',
    description: 'Manage application state efficiently',
  },
  {
    id: 'routing',
    title: 'Routing',
    emoji: '🔀',
    description: 'Create multi-page experiences in single-page apps',
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    emoji: '🔌',
    description: 'Connect your frontend to backend services',
  },
  {
    id: 'forms-validation',
    title: 'Forms & Validation',
    emoji: '📝',
    description: 'Create user input forms with validation',
  },
  {
    id: 'testing',
    title: 'Testing',
    emoji: '🧪',
    description: 'Write tests to ensure code quality',
  },
  {
    id: 'optimization',
    title: 'Performance Optimization',
    emoji: '⚡',
    description: 'Make your applications fast and efficient',
  },
  {
    id: 'deployment',
    title: 'Deployment',
    emoji: '🚀',
    description: 'Ship your application to production',
  }
];

// Topic component to display each skillpath node
const Topic = ({ topic }: { topic: SkillPathTopic }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`relative my-1 ${topic.locked ? 'opacity-50' : ''}`}>
      <Link
        to={topic.locked ? "#" : `/problems?topic=${topic.id}`}
        className={`
          block p-3 rounded-md transition-colors relative
          ${darkMode ? 'bg-indigo-900/30 hover:bg-indigo-800/50' : 'bg-indigo-100 hover:bg-indigo-200'}
          ${topic.completed ? (darkMode ? 'border-l-4 border-green-500' : 'border-l-4 border-green-500') : ''}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2 text-xl" aria-hidden="true">{topic.emoji}</span>
            {topic.completed ? (
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            ) : topic.locked ? (
              <Lock className="h-4 w-4 text-gray-500 mr-2" />
            ) : (
              <CircleSlash2 className="h-4 w-4 text-gray-400 mr-2" />
            )}
            <div>
              <span className="font-medium">{topic.title}</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">{topic.description}</p>
            </div>
          </div>
          {!topic.locked && <ChevronRight className="h-4 w-4" />}
        </div>
      </Link>
    </div>
  );
};

export function SkillPathPage() {
  const { darkMode } = useTheme();
  const { isAuthenticated } = useAuth();
  const [showHelp, setShowHelp] = useState(false);

  // For an actual implementation, this progress would come from API/backend
  const progress = { completed: 0, total: skillPathData.length };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main skillpath area */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6 font-helvetica">
            <span className="mr-2" role="img" aria-label="Skill Path">🎯</span>
            Skill Path
          </h1>

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 mb-6">
              {/* Skill path grid */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillPathData.map(topic => (
                  <Topic key={topic.id} topic={topic} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 shrink-0">
          <Card className={`p-6 ${darkMode ? 'bg-zinc-800/50 border-zinc-700' : 'bg-gray-50 border-gray-200'}`}>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Track Your Progress</h2>

              {isAuthenticated ? (
                <>
                  <p className="text-sm mb-2">
                    ({progress.completed} / {progress.total})
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2 mb-6">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(progress.completed / progress.total) * 100}%` }}
                    />
                  </div>
                </>
              ) : (
                <div className={`mt-4 p-4 rounded-md ${darkMode ? 'bg-zinc-800 border border-zinc-700' : 'bg-gray-100 border border-gray-200'}`}>
                  <p className="text-sm mb-3">Sign in to see your saved progress</p>
                  <div className="flex flex-col space-y-2">
                    <Link to="/login">
                      <Button size="sm" className="w-full">Sign In</Button>
                    </Link>
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                      Don't have an account? <Link to="/signup" className="text-indigo-500 hover:underline">Sign Up</Link>
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-2 mt-6">
              <Button variant="outline" size="sm" className="justify-start">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="justify-start"
                onClick={() => setShowHelp(!showHelp)}
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Help
              </Button>

              {showHelp && (
                <div className={`mt-2 p-3 rounded-md text-xs ${darkMode ? 'bg-zinc-800 border border-zinc-700' : 'bg-gray-100 border border-gray-200'}`}>
                  <h3 className="font-bold mb-1">How Skill Path Works</h3>
                  <ul className="space-y-1">
                    <li>• Each card represents a skill you can master</li>
                    <li>• Click a skill to see related challenges</li>
                    <li>• <CheckCircle className="h-3 w-3 text-green-500 inline" /> indicates completed skills</li>
                    <li>• <Lock className="h-3 w-3 text-gray-500 inline" /> shows skills that require prerequisites</li>
                    <li>• Your progress is saved when signed in</li>
                    <li>• Complete all skills to become a coding master!</li>
                  </ul>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
