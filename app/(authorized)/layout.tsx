import Sidebar from "@/components/Sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthenticatedLayout({children}: {children: React.ReactNode}) {
    const session = await getServerSession(authOptions);
      if (!session) {
        redirect("/login");
      }

      return (
        <div className="min-h-screen">
          <Sidebar />
          <main className="pl-64">
            <div className="p-8">
                {children}
            </div>
          </main>
        </div>
      )
}