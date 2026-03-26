import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import AuthorCard from '../components/authors/AuthorCard';
import AuthorDetail from '../components/authors/AuthorDetail';

const mockAuthors = [
{
  name: 'James Crawford',
  severity: 'critical',
  flagCount: 12,
  flagType: 'misinformation',
  lastArticle: 'The Natural Order of Gender Roles',
  aiSummary: 'This author has a consistent pattern of publishing articles containing unverified claims about gender-based cognitive and leadership differences. Multiple articles reference debunked studies and present opinion as fact.',
  articles: [
  { title: 'The Natural Order of Gender Roles', excerpt: 'Claims women are biologically less suited for decision-making positions in corporate environments.', date: 'Mar 15, 2026', source: 'news-daily.com' },
  { title: 'Why Tradition Matters', excerpt: 'Suggests women returning to domestic roles would solve modern economic issues.', date: 'Feb 28, 2026', source: 'news-daily.com' }]

},
{
  name: 'Michael Peters',
  severity: 'high',
  flagCount: 8,
  flagType: 'disinformation',
  lastArticle: 'Why Women Struggle in STEM Fields',
  aiSummary: 'Repeatedly publishes content that misrepresents research data to support claims about gender-based aptitude differences in STEM fields.',
  articles: [
  { title: 'Why Women Struggle in STEM', excerpt: 'Misrepresents data from a 2019 study to claim innate gender differences in mathematical ability.', date: 'Mar 12, 2026', source: 'tech-review.com' }]

},
{
  name: 'Robert Hayes',
  severity: 'high',
  flagCount: 7,
  flagType: 'negative_undertone',
  lastArticle: 'Traditional Values in Modern Society',
  aiSummary: 'Uses subtle negative undertones to diminish women\'s contributions to society.',
  articles: [
  { title: 'Traditional Values in Modern Society', excerpt: 'Frames women in professional roles as a "disruption" to social stability.', date: 'Mar 10, 2026', source: 'society-journal.com' }]

},
{
  name: 'David Chen',
  severity: 'medium',
  flagCount: 4,
  flagType: 'disinformation',
  lastArticle: 'The Wage Gap Myth Debunked',
  aiSummary: 'Selectively uses data to argue the gender wage gap doesn\'t exist, omitting key variables.',
  articles: [
  { title: 'The Wage Gap Myth Debunked', excerpt: 'Claims the wage gap is entirely explained by personal choice, ignoring systemic factors.', date: 'Mar 5, 2026', source: 'economy-insider.com' }]

},
{
  name: 'Thomas Bell',
  severity: 'low',
  flagCount: 2,
  flagType: 'stereotype',
  lastArticle: 'Parenting Styles Across Cultures',
  aiSummary: 'Contains language reinforcing gender stereotypes around parenting roles.',
  articles: [
  { title: 'Parenting Styles Across Cultures', excerpt: 'Repeatedly implies mothers are the "natural" primary caregivers without acknowledging diverse family structures.', date: 'Mar 1, 2026', source: 'family-digest.com' }]

}];


export default function Authors() {
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const filtered = mockAuthors.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || a.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #E0BBE4 0%, #FEC8D8 60%, #FFDFD3 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-stone-200 text-2xl font-bold tracking-tight md:text-3xl">Author Watchlist</h1>
          <p className="text-muted-foreground mt-1">Authors flagged by SHED for misinformation and bias about women.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search authors..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 bg-white/70 border-0" />
          </div>
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-full sm:w-40 bg-white/70 border-0">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severity</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-3">
            {filtered.map((author, i) =>
            <AuthorCard key={author.name} author={author} index={i} onClick={setSelectedAuthor} />
            )}
            {filtered.length === 0 &&
            <div className="text-center py-16 text-muted-foreground">No authors found matching your filters.</div>
            }
          </div>
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selectedAuthor ?
              <AuthorDetail key={selectedAuthor.name} author={selectedAuthor} onClose={() => setSelectedAuthor(null)} /> :

              <div className="hidden lg:flex items-center justify-center h-64 rounded-xl border-2 border-dashed border-primary/30 text-muted-foreground text-sm bg-white/30">
                  Select an author to see details
                </div>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>);

}
