import React from 'react';
import { Shield, Lock, Key, RefreshCw } from 'lucide-react';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Shield className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Secure Password Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Generate strong, secure passwords instantly with our advanced password generator.
          Keep your accounts safe with unique, randomized passwords.
        </p>
      </header>

      {/* Password Generator Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <PasswordGenerator />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Lock className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Generation</h3>
            <p className="text-gray-600">
              Uses cryptographically secure random number generation for maximum security.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Key className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customizable Options</h3>
            <p className="text-gray-600">
              Customize length and character types to meet specific password requirements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <RefreshCw className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
            <p className="text-gray-600">
              Generate new passwords instantly with a single click.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Secure Password Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;