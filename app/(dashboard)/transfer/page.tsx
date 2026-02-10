import Link from "next/link";
import React from "react";

const TransferPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl">Not Available</div>

      <Link href="/portfolio" className="text-primary underline">Go Back to Portfolio</Link>
    </div>
  );
};

export default TransferPage;
