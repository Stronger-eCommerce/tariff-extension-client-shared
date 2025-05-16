
import React from 'react';
import { DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const StatCard = ({ title, value, change, icon, positive = true }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h4 className="text-2xl font-bold mt-1">{value}</h4>
          <p className={`text-sm mt-1 ${positive ? 'text-tariff-accent' : 'text-rose-500'}`}>
            {change}
          </p>
        </div>
        <div className="bg-tariff-light p-3 rounded-full">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Total Revenue"
        value="$1,245.32"
        change="+12.5% from last month"
        icon={<DollarSign size={24} className="text-tariff" />}
      />
      <StatCard
        title="Orders With Tariff"
        value="142"
        change="+8.1% from last month"
        icon={<ShoppingCart size={24} className="text-tariff" />}
      />
      <StatCard
        title="Conversion Rate"
        value="24.8%"
        change="+2.3% from last month"
        icon={<TrendingUp size={24} className="text-tariff" />}
      />
    </div>
  );
};

export default Stats;
