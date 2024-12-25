import React, { useState } from 'react';
import { Copy, RefreshCw, Check, Shield } from 'lucide-react';

interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (options.includeUppercase) chars += uppercase;
    if (options.includeLowercase) chars += lowercase;
    if (options.includeNumbers) chars += numbers;
    if (options.includeSymbols) chars += symbols;

    if (chars === '') return;

    let generatedPassword = '';
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
      <div className="relative">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full px-4 py-3 text-lg bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Generated password"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
          {password && (
            <button
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-gray-500" />}
            </button>
          )}
          <button
            onClick={generatePassword}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Generate new password"
          >
            <RefreshCw className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700">
            Password Length: {options.length}
            <input
              type="range"
              min="8"
              max="32"
              value={options.length}
              onChange={(e) => setOptions({ ...options, length: parseInt(e.target.value) })}
              className="w-1/2"
            />
          </label>
        </div>

        {[
          { key: 'includeUppercase', label: 'Uppercase Letters (A-Z)' },
          { key: 'includeLowercase', label: 'Lowercase Letters (a-z)' },
          { key: 'includeNumbers', label: 'Numbers (0-9)' },
          { key: 'includeSymbols', label: 'Special Characters (!@#$...)' },
        ].map(({ key, label }) => (
          <label key={key} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={options[key as keyof PasswordOptions]}
              onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{label}</span>
          </label>
        ))}
      </div>

      <button
        onClick={generatePassword}
        className="w-full mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Generate Password
      </button>
    </div>
  );
}