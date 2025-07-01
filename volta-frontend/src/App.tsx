import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Calendar } from './components/Calendar';
import { KnowledgeBase } from './components/KnowledgeBase';
import { Tasks } from './components/Tasks';
import { Chat } from './components/Chat';
import { Settings } from './components/Settings';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'calendar':
        return <Calendar />;
      case 'knowledge':
        return <KnowledgeBase />;
      case 'tasks':
        return <Tasks />;
      case 'chat':
        return <Chat />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderCurrentPage()}
    </Layout>
  );
}

export default App;
