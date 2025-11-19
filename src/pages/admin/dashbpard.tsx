import { MonthlySalesCard } from "@/components/Admin/MonthlySales";
import Stat from "@/components/global/stat";
import { Package, TrendingUp, TriangleAlert, Users } from "lucide-react";
import type React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <>
      <div className="stats flex flex-col justify-center items-center lg:flex-row px-3 ">
        <Stat
          icon={TrendingUp}
          title="مبيعات هذا الشهر"
          percent={10.5}
          value={500000}
          iconStyle="bg-blue-600 p-2 rounded text-white"
          badgeStyle="h-8 bg-green-200 rounded-xs"
          badgeVarient="outline"
          badgeTextStyle="font-[50] text-green-700"
          isBudget
        />
        <Stat
          icon={Package}
          title="قيمة المخزون"
          percent={10.5}
          value={500000}
          iconStyle="bg-green-500 p-2 rounded text-white"
          badgeStyle="h-8 bg-green-200 rounded-xs"
          badgeVarient="outline"
          badgeTextStyle="font-[50] text-green-700"
          isBudget
        />
        <Stat
          icon={Users}
          title="عدد المستخدمين"
          percent={10.5}
          value={25}
          iconStyle="bg-orange-400 p-2 rounded text-white"
          badgeStyle="h-8 bg-green-200 rounded-xs"
          badgeVarient="outline"
          badgeTextStyle="font-[50] text-green-700"
          isBudget={false}
        />
        <Stat
          icon={TriangleAlert}
          title="منتجات منخفضة المخزون"
          percent={10.5}
          value={5}
          iconStyle="bg-red-600 p-2 rounded text-white"
          badgeStyle="h-8 rounded-xs"
          badgeVarient="destructive"
          badgeTextStyle="font-[50] text-white-700"
          isBudget={false}
        />
      </div>

      <div className="flex flex-col md:flex-row p-6 gap-3">
        <MonthlySalesCard />
        <MonthlySalesCard />
      </div>
    </>
  );
};

export default AdminDashboard;
