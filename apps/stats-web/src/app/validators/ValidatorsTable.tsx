"use client";
import React from "react";
import { DataTable } from "@akashnetwork/ui/components";

import { columns } from "./columns";

import { useValidators } from "@/queries";

export function ValidatorsTable() {
  const { data: validators, isLoading } = useValidators();

  return (
    <div>
      <DataTable data={validators || []} columns={columns} noResultsText="This address has no deployments." isLoading={isLoading} initialPageSize={1000} />
    </div>
  );
}
