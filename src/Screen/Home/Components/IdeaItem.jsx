// import React, { useState } from 'react';
import { db } from '../../../../Utils/index';
import { Ideas } from '../../../../Utils/schema';
import { eq } from 'drizzle-orm';
import { checkIsAlredayupVoted, downvote, upvote } from '../../../Service';
import { useState } from 'react';

const IdeaItem = ({ idea, index, refreshData }) => {
  const [isUpvoted, setIsUpvoted] = useState(checkIsAlredayupVoted(idea.id));

  const upvoteHandler = async () => {
    if (upvote(idea.id)) {
      const result = await db.update(Ideas)
        .set({ vote: idea.vote + 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
        setIsUpvoted(true); // Update the state to re-render the component
      }
    }
  };

  const downVote = async () => {
    if (downvote(idea.id)) {
      const result = await db.update(Ideas)
        .set({ vote: idea.vote - 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
        setIsUpvoted(false); // Update the state to re-render the component
      }
    }
  };

  return (
    <div className="my-5 border shadow-lg rounded-lg p-5">
      <div className="flex gap-7">
        <h2 className='flex gap-2'><span>{index + 1}. </span>{idea?.content}</h2>
        <div className="flex flex-col items-center">
          <h2
            className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2 ${isUpvoted && 'bg-slate-200'}`}
            onClick={upvoteHandler}
          >🔥</h2>
          <h2 className='text-lg rounded-md p-1 font-bold'>{idea.vote}</h2>
          <h2
            className='text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2'
            onClick={downVote}
          >👎</h2>
        </div>
      </div>
      <h2 className='mt-4 text-gray-400 text-sm flex gap-5'>
        <span></span>
        By @{idea.username} on {idea.createdAt}</h2>
    </div>
  );
};

export default IdeaItem;
