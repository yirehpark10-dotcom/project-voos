import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, ExternalLink, Flag, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const severityStyles = {
  low: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
  medium: 'bg-amber-100 text-amber-700 border-amber-200',
  high: 'bg-accent/10 text-accent border-accent/20',
  critical: 'bg-destructive/10 text-destructive border-destructive/20',
};

const flagTypeLabels = {
  misinformation: 'Misinformation',
  disinformation: 'Disinformation',
  negative_undertone: 'Negative Undertone',
  stereotype: 'Stereotype',
};

export default function AuthorCard({ author, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card
        className="p-4 md:p-5 hover:shadow-md transition-all cursor-pointer group border-0 bg-white/60 backdrop-blur-sm"
        onClick={() => onClick(author)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-base truncate">{author.name}</h3>
              {author.severity === 'critical' && (
                <AlertTriangle className="w-4 h-4 text-destructive shrink-0" />
              )}
            </div>
            <p className="text-sm text-muted-foreground truncate mb-3">{author.lastArticle}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className={`text-xs border ${severityStyles[author.severity]}`}>
                {author.severity}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Flag className="w-3 h-3 mr-1" />
                {author.flagCount} flags
              </Badge>
              <Badge variant="outline" className="text-xs">
                {flagTypeLabels[author.flagType]}
              </Badge>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1" />
        </div>
      </Card>
    </motion.div>
  );
}
