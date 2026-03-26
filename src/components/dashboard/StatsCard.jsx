import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function StatsCard({ title, value, subtitle, icon: Icon, iconBg, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}>
      
      <Card className="p-5 hover:shadow-md transition-shadow border-0 bg-white/60 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-red-300 text-sm font-medium">{title}</p>
            <p className="text-red-200 mt-1 text-3xl font-bold">{value}</p>
            {subtitle &&
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
            }
          </div>
          <div className="bg-amber-50 text-primary rounded-xl w-10 h-10 flex items-center justify-center">
            <Icon className="text-red-400 lucide lucide-users w-5 h-5" />
          </div>
        </div>
      </Card>
    </motion.div>);

}
