import { motion } from 'framer-motion';
import { Highlighter, AlertTriangle, UserCheck, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
{
  icon: Highlighter,
  title: 'Smart Highlighting',
  description: 'SHED detects and highlights misinformation, disinformation, bias, and passive undertones in real-time — colour-coded red, orange, or yellow by severity.',
  iconBg: 'bg-secondary text-primary'
},
{
  icon: BookOpen,
  title: 'Educated Reasoning',
  description: 'Click any highlight to see a clear, sourced explanation of why the content was flagged and what the factual information is.',
  iconBg: 'bg-accent/15 text-accent'
},
{
  icon: AlertTriangle,
  title: 'Author Warnings',
  description: 'SHED tracks authors with repeated flags. Get automatic pop-up warnings when visiting content by a known repeat offender.',
  iconBg: 'bg-chart-3/30 text-primary'
},
{
  icon: UserCheck,
  title: 'Author Watchlist',
  description: 'Keep a history of flagged authors with severity levels, flag counts, and detailed records of their problematic content.',
  iconBg: 'bg-chart-4/50 text-accent'
}];


export default function FeaturesSection() {
  return (
    <section className="px-4 py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #FFDFD3 0%, #FEC8D8 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          
          <h2 className="text-yellow-50 mb-4 text-3xl font-semibold normal-case tracking-tight md:text-4xl">How SHED protects you

          </h2>
          <p className="text-yellow-50 mx-auto text-lg max-w-xl">Powered by specialised AI trained to identify harmful narratives and misinformation targeting women. Highlights are colour-coded from red (worst) to yellow (mild).

          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 text-primary mb-4 rounded-xl w-11 h-11 flex items-center justify-center">
                      <Icon className="bg-orange-100 text-slate-50 lucide lucide-highlighter w-5 h-5" />
                    </div>
                    <h3 className="text-red-200 mb-2 text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}
