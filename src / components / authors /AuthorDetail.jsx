import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, AlertTriangle, Flag, Calendar, ExternalLink, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const severityStyles = {
  low: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
  medium: 'bg-amber-100 text-amber-700 border-amber-200',
  high: 'bg-accent/10 text-accent border-accent/20',
  critical: 'bg-destructive/10 text-destructive border-destructive/20',
};

export default function AuthorDetail({ author, onClose }) {
  if (!author) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <Card className="shadow-md sticky top-20 border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{author.name}</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className={`border ${severityStyles[author.severity]}`}>
                  {author.severity} severity
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  <Flag className="w-3 h-3 mr-1" />
                  {author.flagCount} flags
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-5 space-y-5">
          {/* Warning notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-800">Active Warning</p>
                <p className="text-xs text-amber-700 mt-1">
                  SHED will display a pop-up warning when you visit content by this author.
                </p>
              </div>
            </div>
          </div>

          {/* Recent flagged articles */}
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Flagged Articles
            </h4>
            <div className="space-y-3">
              {author.articles.map((article, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/50 border text-sm">
                  <p className="font-medium mb-1">{article.title}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                    <ExternalLink className="w-3 h-3 ml-2" />
                    {article.source}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI reasoning */}
          <div>
            <h4 className="text-sm font-semibold mb-3">AI Summary</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {author.aiSummary}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
