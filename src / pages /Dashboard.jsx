import StatsCard from '../components/dashboard/StatsCard';
import RecentDetections from '../components/dashboard/RecentDetections';
import DetectionChart from '../components/dashboard/DetectionChart';
import { Shield, AlertTriangle, Users, Eye } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FFDFD3 0%, #E0BBE4 60%, #FEC8D8 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-amber-50 text-2xl font-bold tracking-tight md:text-3xl">Dashboard</h1>
          <p className="text-orange-50 mt-1">Overview of SHED detections and activity.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard title="Total Detections" value="142" subtitle="This month" icon={Shield} iconBg="bg-white/70 text-primary" delay={0} />
          <StatsCard title="Pages Scanned" value="87" subtitle="+12 this week" icon={Eye} iconBg="bg-white/70 text-accent" delay={0.1} />
          <StatsCard title="Flagged Authors" value="23" subtitle="6 critical" icon={Users} iconBg="bg-white/70 text-primary" delay={0.2} />
          <StatsCard title="Active Warnings" value="8" subtitle="Authors tracked" icon={AlertTriangle} iconBg="bg-white/70 text-accent" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <RecentDetections />
          </div>
          <div className="lg:col-span-2">
            <DetectionChart />
          </div>
        </div>
      </div>
    </div>);

}
