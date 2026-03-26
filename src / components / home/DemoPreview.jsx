import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, AlertTriangle, ShieldAlert, EyeOff } from 'lucide-react';
import { useState } from 'react';

const highlights = [
{
  id: 1,
  text: 'Women are naturally less capable in leadership roles',
  detectionType: 'Misinformation',
  severity: 'High',
  severityColor: 'text-red-700',
  color: 'bg-red-500/20 border-red-400',
  badgeBg: 'bg-red-100 text-red-800 border-red-300',
  icon: ShieldAlert,
  reasoning: 'Research consistently shows no inherent gender-based differences in leadership capability. A meta-analysis of 95 studies (Eagly et al.) found women scored equally or higher on transformational leadership measures.'
},
{
  id: 2,
  text: 'studies have shown that women are too emotional for high-pressure jobs',
  detectionType: 'Disinformation',
  severity: 'Moderate',
  severityColor: 'text-orange-700',
  color: 'bg-orange-400/25 border-orange-400',
  badgeBg: 'bg-orange-100 text-orange-800 border-orange-300',
  icon: AlertTriangle,
  reasoning: 'No credible scientific studies support this claim. Emotional expression varies by individual, not gender. Research from Harvard Business Review shows diverse teams under pressure actually perform better.'
},
{
  id: 3,
  text: 'historically, men have always been the breadwinners',
  detectionType: 'Passive Undertone',
  severity: 'Mild',
  severityColor: 'text-yellow-700',
  color: 'bg-yellow-300/30 border-yellow-400',
  badgeBg: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  icon: EyeOff,
  reasoning: 'This perpetuates a subtle stereotype. Throughout history, women have been significant economic contributors. The "breadwinner" model is a relatively modern, Western concept from the 1950s.'
}];


const severityDot = { High: 'bg-red-500', Moderate: 'bg-orange-400', Mild: 'bg-yellow-400' };

export default function DemoPreview() {
  const [activeHighlight, setActiveHighlight] = useState(null);

  return (
    <section className="px-4 py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #E0BBE4 0%, #FEC8D8 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          
          <h2 className="text-zinc-100 mb-4 text-xl font-bold tracking-tight md:text-4xl">See it in ACTION

          </h2>
          <p className="text-zinc-100 mx-auto text-lg max-w-xl">Click on any highlighted text to see the AI's analysis.

          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 rounded-sm w-3 h-3 inline-block" />
              <span className="text-red-600">High severity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-orange-400 inline-block" />
              <span className="text-orange-400">Moderate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-yellow-400 inline-block" />
              <span className="text-amber-200">Mild</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
          <Card className="p-6 md:p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-secondary">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-secondary/50 rounded-lg px-4 py-1.5 text-sm text-muted-foreground text-center">
                  example-news-article.com/opinion/gender-roles
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm md:text-base leading-relaxed text-foreground/80">
              <p>
                In today's workforce, the debate around gender roles continues to evolve. While
                progress has been made, some argue that{' '}
                <span
                  className={`${highlights[0].color} border rounded px-1 py-0.5 cursor-pointer transition-all hover:opacity-75 inline`}
                  onClick={() => setActiveHighlight(activeHighlight === 0 ? null : 0)}>
                  
                  {highlights[0].text}
                </span>
                , a claim that deserves scrutiny.
              </p>
              <p>
                Furthermore, the piece references unverified claims that{' '}
                <span
                  className={`${highlights[1].color} border rounded px-1 py-0.5 cursor-pointer transition-all hover:opacity-75 inline`}
                  onClick={() => setActiveHighlight(activeHighlight === 1 ? null : 1)}>
                  
                  {highlights[1].text}
                </span>
                .
              </p>
              <p>
                The article goes on to state that{' '}
                <span
                  className={`${highlights[2].color} border rounded px-1 py-0.5 cursor-pointer transition-all hover:opacity-75 inline`}
                  onClick={() => setActiveHighlight(activeHighlight === 2 ? null : 2)}>
                  
                  {highlights[2].text}
                </span>
                , which overlooks significant historical contributions by women.
              </p>
            </div>

            {activeHighlight !== null &&
            <motion.div
              key={activeHighlight}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-5 rounded-xl relative border"
              style={{ background: 'rgba(224,187,228,0.25)' }}>
              
                <button
                onClick={() => setActiveHighlight(null)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
                
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <Badge className={`${highlights[activeHighlight].badgeBg} border font-semibold text-sm px-3 py-0.5`}>
                    {highlights[activeHighlight].detectionType}
                  </Badge>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${severityDot[highlights[activeHighlight].severity]}`} />
                    <span className={`text-sm font-medium ${highlights[activeHighlight].severityColor}`}>
                      {highlights[activeHighlight].severity} Severity
                    </span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">SHED AI Analysis</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlights[activeHighlight].reasoning}
                </p>
              </motion.div>
            }
          </Card>
        </motion.div>
      </div>
    </section>);

}
