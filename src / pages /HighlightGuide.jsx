import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, AlertTriangle, ShieldAlert, EyeOff, Brain } from 'lucide-react';

const highlights = [
{
  icon: ShieldAlert,
  type: 'Misinformation',
  severity: 'High',
  severityLabel: 'Red — Most Severe',
  color: 'bg-red-500/20 border-red-400',
  badgeColor: 'bg-red-100 text-red-800 border-red-200',
  iconBg: 'bg-red-100 text-red-600',
  stripColor: 'bg-red-400',
  description: 'Factually incorrect information about women, presented as truth. Includes debunked statistics, fabricated studies, or provably false claims.',
  examples: [
  '"Women are biologically less capable of logical thinking"',
  '"Studies prove women earn less because they work less" (without citation)',
  '"Historically, women have never held positions of power"']

},
{
  icon: AlertTriangle,
  type: 'Disinformation',
  severity: 'Moderate–High',
  severityLabel: 'Orange — Moderate Severity',
  color: 'bg-orange-400/25 border-orange-400',
  badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
  iconBg: 'bg-orange-100 text-orange-600',
  stripColor: 'bg-orange-400',
  description: 'Deliberately misleading content designed to manipulate perceptions. Uses cherry-picked data, retracted studies, or out-of-context quotes intentionally.',
  examples: [
  'Citing retracted or discredited studies to support gender stereotypes',
  'Selectively presenting wage data to "disprove" the gender pay gap',
  'Using manipulated statistics or fake testimonials']

},
{
  icon: Brain,
  type: 'Bias',
  severity: 'Moderate',
  severityLabel: 'Orange — Moderate Severity',
  color: 'bg-orange-300/25 border-orange-300',
  badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
  iconBg: 'bg-orange-50 text-orange-500',
  stripColor: 'bg-orange-300',
  description: 'Content that reflects and reinforces systemic biases against women, often embedded in otherwise neutral-sounding language.',
  examples: [
  'Only listing male experts in an article about science',
  '"Female CEO" vs simply "CEO" — unnecessary gender labelling',
  'Framing women\'s achievements as surprising or anomalous']

},
{
  icon: EyeOff,
  type: 'Passive Undertone',
  severity: 'Mild',
  severityLabel: 'Yellow — Mildest',
  color: 'bg-yellow-300/30 border-yellow-400',
  badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  iconBg: 'bg-yellow-100 text-yellow-600',
  stripColor: 'bg-yellow-400',
  description: 'Subtly dismissive or demeaning language that undermines women\'s contributions. Not overtly false, but perpetuates harmful narratives through framing and tone.',
  examples: [
  '"She succeeded despite being a woman"',
  '"Women in leadership is a modern experiment"',
  'Framing women\'s professional roles as disrupting "natural" social order']

},
{
  icon: Info,
  type: 'Stereotype',
  severity: 'Mild',
  severityLabel: 'Yellow — Mildest',
  color: 'bg-yellow-200/40 border-yellow-300',
  badgeColor: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  iconBg: 'bg-yellow-50 text-yellow-600',
  stripColor: 'bg-yellow-300',
  description: 'Content reinforcing harmful gender stereotypes, even unintentionally. Includes assumptions about women\'s roles, interests, or abilities based solely on gender.',
  examples: [
  '"Women are naturally better at nurturing, leaving leadership to men"',
  '"Girls are more suited for arts and humanities"',
  'Assuming all mothers are the primary caregivers']

}];


export default function HighlightGuide() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #E0BBE4 0%, #FFDFD3 60%, #FEC8D8 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-slate-100 text-2xl font-bold tracking-tight md:text-3xl">Highlight Guide</h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            Understanding what each highlight colour means and how SHED categorises harmful content about women.
          </p>
        </motion.div>

        {/* Severity scale */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <Card className="mb-6 border-0 bg-white/60 backdrop-blur-sm shadow-sm">
            <CardContent className="p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Severity Colour Scale</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-3 flex-1 p-3 rounded-xl bg-red-50 border border-red-200">
                  <span className="w-5 h-5 rounded-md bg-red-400 shrink-0" />
                  <div><p className="font-semibold text-red-800 text-sm">Red — Worst</p><p className="text-xs text-red-600">Clear factual harm</p></div>
                </div>
                <div className="flex items-center gap-3 flex-1 p-3 rounded-xl bg-orange-50 border border-orange-200">
                  <span className="w-5 h-5 rounded-md bg-orange-400 shrink-0" />
                  <div><p className="font-semibold text-orange-800 text-sm">Orange — Moderate</p><p className="text-xs text-orange-600">Misleading or biased</p></div>
                </div>
                <div className="flex items-center gap-3 flex-1 p-3 rounded-xl bg-yellow-50 border border-yellow-200">
                  <span className="w-5 h-5 rounded-md bg-yellow-400 shrink-0" />
                  <div><p className="font-semibold text-yellow-800 text-sm">Yellow — Mild</p><p className="text-xs text-yellow-600">Subtle undertones</p></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* How it works */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="mb-8 border-0 bg-white/60 backdrop-blur-sm shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-zinc-500 mb-3 text-lg font-semibold">How it works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {['AI Scans — SHED reads page content and runs it through specialised AI analysis.', 'Highlights Appear — Problematic text is highlighted red, orange, or yellow based on severity.', 'Click to Learn — Click any highlight to see the detection type and AI\'s reasoning.'].map((step, i) =>
                <div key={i} className="flex gap-3">
                    <div className="bg-primary/20 text-zinc-50 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">{i + 1}</div>
                    <div>
                      <p className="text-slate-400 font-medium">{step.split(' — ')[0]}</p>
                      <p className="text-muted-foreground">{step.split(' — ')[1]}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="space-y-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div key={h.type} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }}>
                <Card className="overflow-hidden border-0 bg-white/60 backdrop-blur-sm shadow-sm">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className={`w-full md:w-2.5 h-2 md:h-auto ${h.stripColor}`} />
                      <div className="p-5 md:p-6 flex-1">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${h.iconBg} shrink-0`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <Badge className={`${h.badgeColor} border text-sm px-3 py-0.5 font-semibold`}>{h.type}</Badge>
                          <span className="text-xs text-muted-foreground">{h.severityLabel}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 mt-3">{h.description}</p>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Examples</p>
                        <ul className="space-y-1.5">
                          {h.examples.map((ex, j) =>
                          <li key={j} className="text-sm flex items-start gap-2">
                              <span className={`inline-block w-2 h-2 rounded-full ${h.stripColor} mt-1.5 shrink-0`} />
                              <span className="text-muted-foreground italic">{ex}</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>);

          })}
        </div>
      </div>
    </div>);

}
