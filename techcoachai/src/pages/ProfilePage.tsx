import { useState } from 'react';
import { useAuth } from '../lib/authContext';
import { useTheme } from '../lib/themeContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  UserIcon,
  BookOpenCheck,
  Trophy,
  Clock,
  Settings,
  Bookmark,
  BarChart4,
  Calendar,
  Edit3
} from 'lucide-react';

export function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in a real app, this would come from API
  const mockStats = {
    skillsCompleted: 12,
    totalSkills: 28,
    challengesCompleted: 45,
    totalChallenges: 150,
    streak: 7,
    joinDate: '2023-09-15',
    lastActive: '2024-04-18',
    badges: [
      { id: 1, name: 'First Challenge', description: 'Completed your first challenge', icon: '🏆' },
      { id: 2, name: 'Week Streak', description: 'Practiced for 7 days in a row', icon: '🔥' },
      { id: 3, name: 'React Master', description: 'Completed all React challenges', icon: '⚛️' }
    ],
    recentActivity: [
      { id: 1, type: 'challenge', name: 'Two Sum', date: '2024-04-18', status: 'completed' },
      { id: 2, type: 'skill', name: 'React Fundamentals', date: '2024-04-17', status: 'in-progress' },
      { id: 3, type: 'challenge', name: 'Valid Parentheses', date: '2024-04-15', status: 'completed' }
    ],
    savedChallenges: [
      { id: 101, name: 'Merge Two Sorted Lists', difficulty: 'Easy' },
      { id: 102, name: 'Maximum Subarray', difficulty: 'Medium' },
      { id: 103, name: 'Longest Palindromic Substring', difficulty: 'Medium' }
    ]
  };

  if (!isAuthenticated) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Profile Not Available</h1>
        <p>Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl">
            {user?.name?.charAt(0) || <UserIcon size={32} />}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Member since {new Date(mockStats.joinDate).toLocaleDateString()}
              </span>
              <span className="text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" /> Last active today
              </span>
            </div>
          </div>
        </div>
        <Button className="flex items-center gap-2">
          <Edit3 className="w-4 h-4" /> Edit Profile
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className={`p-4 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
              <BookOpenCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Skills Progress</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {mockStats.skillsCompleted} of {mockStats.totalSkills} completed
              </p>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(mockStats.skillsCompleted / mockStats.totalSkills) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className={`p-4 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
              <BarChart4 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Challenge Progress</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {mockStats.challengesCompleted} of {mockStats.totalChallenges} solved
              </p>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(mockStats.challengesCompleted / mockStats.totalChallenges) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className={`p-4 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-orange-100 dark:bg-orange-900/30 p-3">
              <Trophy className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Current Streak</h3>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold">{mockStats.streak}</span>
                <span className="text-lg">🔥</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Keep it going!</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex overflow-x-auto">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'overview'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'activity'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'bookmarks'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('bookmarks')}
          >
            Bookmarks
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'settings'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Badges & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {mockStats.badges.map(badge => (
                <Card key={badge.id} className={`p-4 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{badge.icon}</div>
                    <div>
                      <h3 className="font-semibold">{badge.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{badge.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <Card className={`p-4 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
              <ul className="divide-y divide-gray-200 dark:divide-zinc-700">
                {mockStats.recentActivity.map(activity => (
                  <li key={activity.id} className="py-3 flex justify-between">
                    <div>
                      <p className="font-medium">{activity.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.type === 'challenge' ? 'Coding Challenge' : 'Skill Path'}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        activity.status === 'completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {activity.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Activity Calendar</h2>
            <Card className={`p-4 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'} mb-6`}>
              <div className="flex items-center justify-center">
                <Calendar className="h-24 w-24 opacity-50 my-12" />
                <div className="ml-4 text-gray-500 dark:text-gray-400">
                  Activity calendar will be available soon.
                </div>
              </div>
            </Card>

            <h2 className="text-xl font-bold mb-4">Full Activity Log</h2>
            <Card className={`p-4 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
              <ul className="divide-y divide-gray-200 dark:divide-zinc-700">
                {[...mockStats.recentActivity, ...mockStats.recentActivity].map((activity, index) => (
                  <li key={`${activity.id}-${index}`} className="py-3 flex justify-between">
                    <div>
                      <p className="font-medium">{activity.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.type === 'challenge' ? 'Coding Challenge' : 'Skill Path'}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        activity.status === 'completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {activity.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {activeTab === 'bookmarks' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Saved Challenges</h2>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Bookmark className="w-4 h-4" />
                All Bookmarks
              </Button>
            </div>
            <Card className={`p-4 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
              {mockStats.savedChallenges.length > 0 ? (
                <ul className="divide-y divide-gray-200 dark:divide-zinc-700">
                  {mockStats.savedChallenges.map(challenge => (
                    <li key={challenge.id} className="py-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{challenge.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Coding Challenge
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          challenge.difficulty === 'Easy'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : challenge.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {challenge.difficulty}
                        </span>
                        <Button variant="outline" size="sm">
                          Solve
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <Bookmark className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>You haven't saved any challenges yet.</p>
                  <p className="text-sm mt-2">Bookmark challenges to easily find them later.</p>
                </div>
              )}
            </Card>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Account Settings</h2>
            <Card className={`p-6 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'} mb-6`}>
              <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-md
                              dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={user?.name || ''}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-md
                              dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={user?.email || ''}
                    readOnly
                  />
                </div>
                <Button className="mt-2">Update Profile</Button>
              </div>
            </Card>

            <Card className={`p-6 ${darkMode ? 'bg-zinc-800/50' : 'bg-gray-50'}`}>
              <h3 className="text-lg font-semibold mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive updates about your progress and new challenges
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full
                                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                                    after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Switch between light and dark theme
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={darkMode} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full
                                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                                    after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <Button variant="outline" className="mt-2 text-red-600 hover:text-red-700 hover:bg-red-50
                                                  dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20">
                  Delete Account
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
