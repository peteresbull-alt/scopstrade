"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import { PulseLoader } from "react-spinners";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyAuth() {
      try {
        const res = await apiFetch("/check/");
        if (!res.ok) {
          router.push("/login");
          return;
        }
      } catch {
        router.push("/login");
        return;
      }
      setLoading(false);
    }
    verifyAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gradient-to-br dark:from-[#0a1628] dark:via-[#0d1b2a] dark:to-[#1b263b]">
        <div className="flex flex-col items-center space-y-4">
          <PulseLoader color="#3b82f6" size={20} />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Verifying access...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
