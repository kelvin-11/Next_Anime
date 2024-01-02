import React from "react";
import prisma from "../../libs/prisma";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((data) => {
        return (
          <div key={data.id} className="text-color-dark bg-color-primary p-4">
            <p>{data.username}</p>
            <p>{data.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
