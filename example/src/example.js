import React from 'react';
import exampleOne from './ExampleOne.sketch';
import exampleTwo from './ExampleTwo.sketch';
import driveApp from './DriveApp.sketch'; // https://sketchrepo.com/free-sketch/storage-management-app-concept-freebie/

const ExampleUsage = () => {
  console.log({ exampleOne, exampleTwo, driveApp });
  return (
    <div>
      <img width={80} height={80} src={exampleOne} />
      <img width={80} height={80} src={exampleTwo} />
      <img width={80} height={80} src={driveApp} />
    </div>
  );
};

export default ExampleUsage;
