import React from 'react';
import { AddSets } from './AddSets';

export const CreateTableForm = () => {
  return (
    <div className="p-4">
      <form action="/createTable" method="post" className="mt-4">
        <AddSets />
      </form>
    </div>
  );
};
