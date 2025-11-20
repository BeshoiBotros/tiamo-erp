

import { type ColumnDef } from '@tanstack/react-table'

export interface Product{
    name: string;
    sku: string;
    category?: {
        name: string;
        isRawMaterial: boolean;
    };
    unit?: 'piece' | 'carton' | 'stand' | 'plate' | 'barrel';
    currentQuantity: number;
    costPrice?: number;
    sellingPrice?: number;
    lowStockThreshold?: number;
}

export const columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'sku',
      header: 'SKU'  
    },
    {
        accessorKey: 'name',
        header: 'الاسم'
    },
    {
        accessorKey: 'currentQuantity',
        header: 'الكمية'
    },
    {
        accessorKey: 'sellingPrice',
        header: 'السعر'
    }
]