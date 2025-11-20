"use client";

import { useEffect } from "react";
import { columns, type Product } from "./columns";
import { DataTable } from "./data-table";

export default function LatestProducts({products}: {products: Product[]}) {

  useEffect(() => {

    console.log(products);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={products} />
    </div>
  );
}
