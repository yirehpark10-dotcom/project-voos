import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const mockDetections = [
{
  id: 1,
  page_title: 'Opinion: The Natural Order of Gender Roles',
  page_url: 'news-daily.com/opinion/gender-roles',
  author: 'James Crawford',
  detections_count: 5,
  scan_date: '2 hours ago',
  types: ['Misinformation', 'Negative Undertone']
},
{
  id: 2,
  page_title: 'Why Women Struggle in STEM Fields',
  page_url: 'tech-review.com/article/women-stem',
  author: 'Michael Peters',
  detections_count: 3,
  scan_date: '5 hours ago',
  types: ['Disinformation', 'Stereotype']
},
{
  id: 3,
  page_title: 'Traditional Values in Modern Society',
  page_url: 'society-journal.com/traditional-values',
  author: 'Robert Hayes',
  detections_count: 7,
  scan_date: '1 day ago',
  types: ['Misinformation', 'Disinformation', 'Negative Undertone']
},
{
  id: 4,
  page_title: 'The Wage Gap Myth Debunked',
  page_url: 'economy-insider.com/wage-gap',
  author: 'David Chen',
  detections_count: 4,
  scan_date: '2 days ago',
  types: ['Disinformation']
}];


const typeColors = {
  'Misinformation': 'bg-rose-100 text-rose-700 border-rose-200',
  'Disinformation': 'bg-amber-100 text-amber-700 border-amber-200',
  'Negative Undertone': 'bg-purple-100 text-purple-700 border-purple-200',
  'Stereotype': 'bg-red-100 text-red-700 border-red-200'
};

export default function RecentDetections() {
  return (
    <Card className="shadow-sm border-0 bg-white/60 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-red-400 text-lg font-semibold tracking-tight">Recent Detections</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {mockDetections.map((d, i) =>
        <motion.div
          key={d.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-4 rounded-xl border bg-muted/30 hover:bg-muted/60 transition-colors cursor-pointer">
          
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h4 className="font-medium text-sm truncate">{d.page_title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                  <span>{d.author}</span>
                  <span>·</span>
                  <Clock className="w-3 h-3" />
                  <span>{d.scan_date}</span>
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {d.types.map((type) =>
                <Badge key={type} variant="secondary" className={`text-[10px] px-2 py-0 h-5 border ${typeColors[type]}`}>
                      {type}
                    </Badge>
                )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="text-center">
                  <p className="text-sky-950 text-lg font-bold">{d.detections_count}</p>
                  <p className="text-[10px] text-muted-foreground">flags</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>);

}
