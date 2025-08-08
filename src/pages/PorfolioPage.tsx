import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Newspaper Header */}
      <Header />
      {/* Main Content */}
      <MainContent />
    </div>
  );
}
