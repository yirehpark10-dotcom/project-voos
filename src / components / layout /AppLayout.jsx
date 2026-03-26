import { Outlet, Link, useLocation } from 'react-router-dom';
import { Shield, Home, Users, BookOpen, Settings, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
{ path: '/Home', label: 'Home', icon: Home },
{ path: '/Dashboard', label: 'Dashboard', icon: Shield },
{ path: '/Authors', label: 'Authors', icon: Users },
{ path: '/HighlightGuide', label: 'Guide', icon: BookOpen },
{ path: '/Settings', label: 'Settings', icon: Settings }];


export default function AppLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop nav */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between px-8 bg-background/80 backdrop-blur-xl border-b border-border">
        <Link to="/Home" className="flex items-center gap-2.5">
          <div className="bg-fuchsia-200 rounded-xl w-9 h-9 flex items-center justify-center">
            
          </div>
          <span className="text-fuchsia-300 text-lg font-bold tracking-tight">SHED</span>
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map(({ path, label, icon: Icon }) => {
            const active = location.pathname === path;
            return (
              <Link key={path} to={path}>
                <Button
                  variant={active ? 'default' : 'ghost'}
                  size="sm" className="bg-violet-300 text-primary-foreground px-3 text-xs font-medium rounded-md inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-8 gap-2">
                  
                  
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              </Link>);

          })}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 bg-background/80 backdrop-blur-xl border-b border-border">
        <Link to="/Home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-base font-bold tracking-tight">SHED</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </nav>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border p-4 space-y-1">
          
            {navItems.map(({ path, label, icon: Icon }) => {
            const active = location.pathname === path;
            return (
              <Link key={path} to={path} onClick={() => setMobileOpen(false)}>
                  <Button
                  variant={active ? 'default' : 'ghost'}
                  className={`w-full justify-start gap-3 ${active ? '' : 'text-muted-foreground'}`}>
                  
                    <Icon className="w-4 h-4" />
                    {label}
                  </Button>
                </Link>);

          })}
          </motion.div>
        }
      </AnimatePresence>

      {/* Page content */}
      <main className="pt-14 md:pt-16">
        <Outlet />
      </main>
    </div>);

}
