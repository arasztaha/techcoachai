import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../lib/authContext';
import { BrainCircuitIcon } from 'lucide-react';

export function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const navigate = useNavigate();

  const { register, isAuthenticated, isLoading, error, clearError } = useAuth();

  // Clear error when component unmounts
  useEffect(() => {
    return () => {
      if (error) clearError();
    };
  }, [error, clearError]);

  // If already authenticated, redirect to practice page
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/practice');
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    // Validate form
    if (password !== confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return;
    }

    // Call register from auth context
    const result = await register({ name, email, password });

    if (!result.success && result.message) {
      setLocalError(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-zinc-800 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center">
              <BrainCircuitIcon className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white">Join TechCoach AI</h1>
          <p className="mt-2 text-zinc-400">
            Create an account to track your progress
          </p>
        </div>

        {(error || localError) && (
          <div className="p-3 bg-red-500/10 border border-red-500 rounded-md text-red-500 text-sm">
            {error || localError}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-400">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white px-3 py-2"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white px-3 py-2"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-400">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white px-3 py-2"
              placeholder="********"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-400">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-zinc-700 bg-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white px-3 py-2"
              placeholder="********"
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </Button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-zinc-400">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-500 hover:text-indigo-400">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
