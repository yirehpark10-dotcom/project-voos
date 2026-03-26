import { motion } from 'framer-motion';
import { Chrome, Globe, Compass, Download, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const browsers = [
{ id: 'chrome', name: 'Google Chrome', icon: Chrome, users: '3.2B users', color: 'bg-secondary text-primary border-primary/20' },
{ id: 'firefox', name: 'Mozilla Firefox', icon: Globe, users: '178M users', color: 'bg-accent/15 text-accent border-accent/20' },
{ id: 'safari', name: 'Safari', icon: Compass, users: '1B users', color: 'bg-chart-3/20 text-primary border-chart-3/30' },
{ id: 'edge', name: 'Microsoft Edge', icon: Globe, users: '340M users', color: 'bg-chart-4/40 text-primary border-chart-4/40' }];


export default function BrowserSelect() {
  const [selected, setSelected] = useState(null);
  const [installed, setInstalled] = useState(null);

  const handleInstall = (id) => {
    setInstalled(id);
    setTimeout(() => setInstalled(null), 2000);
  };

  return (
    <section className="px-4 py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #FFDFD3 0%, #E0BBE4 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          
          <h2 className="text-amber-100 mb-4 text-3xl font-bold tracking-tight md:text-4xl">Install in seconds

          </h2>
          <p className="text-amber-100 mx-auto text-lg max-w-xl">Choose your browser and add SHED with one click.

          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {browsers.map((browser, i) => {
            const Icon = browser.icon;
            const isSelected = selected === browser.id;
            const isInstalled = installed === browser.id;
            return (
              <motion.div
                key={browser.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                
                <Card
                  className={`p-5 cursor-pointer transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 hover:shadow-lg ${
                  isSelected ? 'ring-2 ring-primary shadow-lg' : ''}`
                  }
                  onClick={() => setSelected(browser.id)}>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-violet-100 text-primary rounded-xl w-12 h-12 flex items-center justify-center border-chart-4/40 border">
                        <Icon className="text-violet-300 lucide lucide-chrome w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-violet-400 text-base font-semibold">{browser.name}</h3>
                        <p className="text-indigo-300 text-sm">{browser.users}</p>
                      </div>
                    </div>
                    {isSelected &&
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Button
                        size="sm"
                        className="gap-2 rounded-lg"
                        onClick={(e) => {e.stopPropagation();handleInstall(browser.id);}}>
                        
                          {isInstalled ? <><Check className="w-4 h-4" />Installed</> : <><Download className="w-4 h-4" />Install</>}
                        </Button>
                      </motion.div>
                    }
                  </div>
                  
                </Card>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}
