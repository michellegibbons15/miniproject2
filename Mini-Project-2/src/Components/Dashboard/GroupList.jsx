import React from 'react';
import Group from './Groups'

const groups = [
  {
    imageUrl: 'src/assets/dashboard/dg.jpeg',
    text: '804 Disc Golf',
  },
  {
    imageUrl: 'src/assets/dashboard/soccerball.jpg',
    text: '804 Pick-Up',
  },
  {
    imageUrl: 'src/assets/dashboard/SCOR.jpg',
    text: 'SCOR',
  },
];

const GroupList = () => {
  return (
    <div className="groups">
        <h3>My Groups:</h3>
    <div id="card-list">
      {groups.map((group, index) => (
        <Group key={index} imageUrl={group.imageUrl} text={group.text} />
      ))}
    </div>
    </div>
  );
};

export default GroupList;