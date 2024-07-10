export const upvote = (id) => {
    const votes = localStorage.getItem('votes') 
      ? JSON.parse(localStorage.getItem('votes'))
      : { upvotes: [], downvotes: [] };
  
    if (votes.upvotes.indexOf(id) !== -1) {
      return false;
    }
  
    votes.upvotes.push(id);
    const downVotes = votes.downvotes?.filter(item => item !== id);
  votes.downvotes=downVotes
    localStorage.setItem('votes', JSON.stringify(votes));
    return true;
  };
  
//   export const downvote = (id) => {
//     const votes = localStorage.getItem('votes') 
//       ? JSON.parse(localStorage.getItem('votes'))
//       : { upvotes: [], 
//         downvotes: [], };
  
//     if (votes.downvotes.indexOf(id)!==-1) {
//       return false;
//     }
  
//     votes.downvotes.push(id);
//     const upVotes = votes.upvotes?.filter(item => item !== id);
//     votes.upvotes=upVotes;
//     localStorage.setItem('votes', JSON.stringify(votes));
//     return true;
//   };
export const downvote = (id) => {
    const votes = localStorage.getItem('votes')
      ? JSON.parse(localStorage.getItem('votes'))
      : { upvotes: [], downvotes: [] };
  
    // Ensure upvotes and downvotes are arrays
    votes.upvotes = Array.isArray(votes.upvotes) ? votes.upvotes : [];
    votes.downvotes = Array.isArray(votes.downvotes) ? votes.downvotes : [];
  
    if (votes.downvotes.indexOf(id) !== -1) {
      return false;
    }
  
    votes.downvotes.push(id);
    votes.upvotes = votes.upvotes.filter(item => item !== id);
  
    localStorage.setItem('votes', JSON.stringify(votes));
    return true;
  };
  
  //export const checkIsAlredayupVoted=(id)=>{
    //const votes=JSON.parse(localStorage.getItem('votes'))
    //votes.upvotes.find(items=>items==id)
  //}
  export const checkIsAlredayupVoted = (id) => {
    const votes = localStorage.getItem('votes') 
      ? JSON.parse(localStorage.getItem('votes'))
      : { upvotes: [], downvotes: [] };
  
    // Ensure upvotes is an array
    votes.upvotes = Array.isArray(votes.upvotes) ? votes.upvotes : [];
  
    return votes.upvotes.indexOf(id) !== -1;
  };
   