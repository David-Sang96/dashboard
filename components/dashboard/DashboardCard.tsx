import { LucideIcon } from "lucide-react";
import React from "react";
import { CardContent } from "../ui/card";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <div className="bg-slate-100 p-4 pb-0 dark:bg-slate-800">
      <CardContent>
        <h3 className="mb-4 text-center text-3xl font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-5">
          {icon}
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </div>
  );
};

export default DashboardCard;
