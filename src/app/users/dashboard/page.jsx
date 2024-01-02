import { authUserSession } from "../../../libs/auth-libs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

const Dashboard = async () => {
  const user = await authUserSession();
  // if (!user) redirect("/");
  return (
    <div className="mt-6 text-color-primary flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
      <Image src={user.image} alt="..." width={250} height={250} />
      
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
        >
          My Collection
        </Link>
        
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
