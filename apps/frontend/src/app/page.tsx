'use client';

import { useState, useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/message`)
      .then(response => response.json())
      .then(data => setMessage(data.message + ' ' + data.goServiceMessage));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Monorepo Demo</h1>
      <p className="text-xl">{message}</p>
    </main>
  );
}
