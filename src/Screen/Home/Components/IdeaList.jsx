// src/components/IdeaList.jsx
import React from 'react';
import IdeaItem from './IdeaItem';

const IdeaList = ({ ideaList,refreshData }) => {

  return (
    <div className="idea-list">
    
       { 
       ideaList.map((idea, index) => (

          <IdeaItem idea={idea} key={index} 
          refreshData={refreshData}
          index={index} /> 
     
      ))}
    </div>
  );
};

export default IdeaList;
