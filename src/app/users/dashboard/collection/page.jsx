import Link from "next/link";
import Image from "next/image";
import React from "react";
import Header from "../../../../components/Dashboard/Header";
import { authUserSession } from "../../../../libs/auth-libs";
import prisma from "../../../../libs/prisma";

const Collection = async () => {
  const user = await authUserSession();
  const collection = await prisma.Collection.findMany({
    where: { user_email: user.email },
  });
  return (
    <section className="w-full mt-4 px-4">
      <Header title="My Collection" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4">
        {collection.map((data, index) => {
          return (
            <Link
              key={index}
              href={`/detail/${data.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={data.anime_image}
                alt="..."
                width={350}
                height={350}
                className="w-full rounded-md"
              />
              <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                <h5 className="text-xl text-center ">{data.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;
