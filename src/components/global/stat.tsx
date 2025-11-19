import {type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent } from "react";
import type React from "react";
import { Badge } from "../ui/badge";

interface StatProps{
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
    percent?: number;
    title: string;
    value: number;
    iconStyle: string;
    badgeStyle: string;
    badgeVarient: 'default' | 'destructive' | 'outline' | 'secondary';
    badgeTextStyle: string;
    isBudget: boolean
}

const Stat: React.FC<StatProps> = ({icon, percent, title, value, iconStyle, badgeStyle, badgeVarient, badgeTextStyle, isBudget}: StatProps) => {
    const Icon = icon;
    return (
        <div className="flex flex-col w-full bg-card shadow-md p-4 mx-5 my-4 rounded-lg">
            <div className="flex justify-between mb-4 items-center">
                <div className={iconStyle}>
                    <Icon />
                </div>
                {percent && <Badge variant={badgeVarient} className={badgeStyle}> <span className={badgeTextStyle}> % {percent}</span> </Badge>}
            </div>
            <span>{title}</span>
            <h2 className="font-normal text-xl">{value.toLocaleString('en-US')} {isBudget ? 'جـنـيـة' : null} </h2>
        </div>
    );
}

export default Stat;