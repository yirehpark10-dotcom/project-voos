import { motion } from 'framer-motion';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24 md:pt-32 md:pb-36"
    style={{ background: 'linear-gradient(135deg, #957DAD 0%, #D291BC 50%, #E0BBE4 100%)' }}>
      
      {/* Soft blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-40" style={{ background: '#FEC8D8' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-30" style={{ background: '#FFDFD3' }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          
          


          
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white drop-shadow-sm">
          
          See the truth{' '}
          <span className="text-white/80">
            behind the words
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          
          SHED is a browser extension that uses specialised AI to detect
          misinformation, disinformation, bias, and passive undertones about women —
          highlighted right as you read, colour-coded by severity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link to="/Dashboard">
            <Button size="lg" className="bg-white text-red-100 px-8 text-base font-semibold rounded-xl inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2 h-12 hover:bg-white/90 shadow-lg">
              <Shield className="w-5 h-5" />
              Get Started
            </Button>
          </Link>
          <Link to="/HighlightGuide">
            <Button size="lg" variant="outline" className="bg-white/10 text-slate-50 px-8 text-base font-medium rounded-xl inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:text-accent-foreground gap-2 h-12 border-white/50 hover:bg-white/20 backdrop-blur-sm">
              Learn How It Works
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>);

}
