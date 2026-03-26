import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Shield, Bell, Eye, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    autoScan: true,
    authorWarnings: true,
    notifications: true,
    highlightMisinformation: true,
    highlightDisinformation: true,
    highlightUndertones: true,
    highlightStereotypes: true,
    sensitivity: 'medium'
  });

  const toggle = (key) => setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const cardClass = "border-0 bg-white/60 backdrop-blur-sm shadow-sm";

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FEC8D8 0%, #E0BBE4 60%, #FFDFD3 100%)' }}>
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-slate-950 text-2xl font-bold tracking-tight md:text-3xl">Settings</h1>
          <p className="text-muted-foreground mt-1">Configure how SHED works for you.</p>
        </motion.div>

        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className={cardClass}>
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2 text-foreground">
                  <Shield className="w-4 h-4" /> General
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Auto-scan pages</Label>
                    <p className="text-xs text-muted-foreground mt-0.5">Automatically analyse pages when you visit them</p>
                  </div>
                  <Switch checked={settings.autoScan} onCheckedChange={() => toggle('autoScan')} />
                </div>
                <Separator className="bg-secondary/50" />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Author warnings</Label>
                    <p className="text-xs text-muted-foreground mt-0.5">Show pop-up warnings for flagged authors</p>
                  </div>
                  <Switch checked={settings.authorWarnings} onCheckedChange={() => toggle('authorWarnings')} />
                </div>
                <Separator className="bg-secondary/50" />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">AI sensitivity</Label>
                    <p className="text-xs text-muted-foreground mt-0.5">How strict the AI should be when flagging content</p>
                  </div>
                  <Select value={settings.sensitivity} onValueChange={(v) => setSettings((prev) => ({ ...prev, sensitivity: v }))}>
                    <SelectTrigger className="w-32 bg-white/70 border-0"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <Card className={cardClass}>
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2 text-foreground">
                  <Bell className="w-4 h-4" /> Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Push notifications</Label>
                    <p className="text-xs text-muted-foreground mt-0.5">Get notified when new patterns are detected</p>
                  </div>
                  <Switch checked={settings.notifications} onCheckedChange={() => toggle('notifications')} />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className={cardClass}>
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2 text-foreground">
                  <Eye className="w-4 h-4" /> Highlight Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                { key: 'highlightMisinformation', label: 'Misinformation', desc: 'Factually incorrect claims', color: 'bg-red-400' },
                { key: 'highlightDisinformation', label: 'Disinformation', desc: 'Deliberately misleading content', color: 'bg-orange-400' },
                { key: 'highlightUndertones', label: 'Passive Undertones', desc: 'Subtly dismissive language', color: 'bg-yellow-400' },
                { key: 'highlightStereotypes', label: 'Stereotypes', desc: 'Harmful gender assumptions', color: 'bg-yellow-300' }].
                map((item, i) =>
                <div key={item.key}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <div>
                          <Label className="text-sm font-medium">{item.label}</Label>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                      <Switch checked={settings[item.key]} onCheckedChange={() => toggle(item.key)} className="text-orange-300 rounded-full peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                    </div>
                    {i < 3 && <Separator className="mt-5 bg-secondary/50" />}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <Card className="border border-red-200 bg-white/60 backdrop-blur-sm shadow-sm">
              <CardHeader className="pb-4">
                

                
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Label className="text-sm font-medium">Clear all data</Label>
                    <p className="text-xs text-muted-foreground mt-0.5">Remove all SHED detection history and author watchlist data</p>
                  </div>
                  <Button variant="destructive" size="sm" className="shrink-0">Clear Data</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>);

}
