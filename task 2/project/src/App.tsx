import React from 'react';
import { Header } from './components/Header';
import { Feed } from './components/Feed';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Feed />
    </div>
  );
}

export default App;