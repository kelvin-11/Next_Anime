import React from 'react';
import prisma from '../../../../libs/prisma'
import { authUserSession } from '../../../../libs/auth-libs'
import Link from 'next/link'
import Header from '../../../../components/Dashboard/Header';

const page = async () => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } })
    return (
        <section className='mt-4 px-4 w-full'>
            <Header title="My Comments" />

            <div className='grid grid-cols-1 py-2 gap-4'>
                {comments.map(data => {
                    return (
                        <Link href={`/detail/${data.anime_mal_id}`}
                            key={data.id}
                            className='bg-color-primary text-color-dark p-4'>
                            <p className='text-sm'>{data.anime_title}</p>
                            <p className='italic'>{data.comment}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    );
};

export default page;