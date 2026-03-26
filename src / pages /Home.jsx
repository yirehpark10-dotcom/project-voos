import HeroSection from '../components/home/HeroSection';
import BrowserSelect from '../components/home/BrowserSelect';
import FeaturesSection from '../components/home/FeaturesSection';
import DemoPreview from '../components/home/DemoPreview';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DemoPreview />
      <BrowserSelect />

      {/* Footer */}
      <footer className="border-t border-primary/20 px-4 py-12" style={{ background: '#E0BBE4' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            

            
            
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/Dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
            <Link to="/Authors" className="hover:text-foreground transition-colors">Authors</Link>
            <Link to="/HighlightGuide" className="hover:text-foreground transition-colors">Guide</Link>
            <Link to="/Settings" className="hover:text-foreground transition-colors">Settings</Link>
          </div>
          
        </div>
      </footer>
    </div>);

}
