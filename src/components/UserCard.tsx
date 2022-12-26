import React from 'react';
import { User } from '../types/User';

const UserCard = (user: User) => {
  return (
    <div className={'rounded-xl border border-blue-200 hover:bg-blue-200 shadow-lg w-1/3'}>
      <div className={'p-4 space-y-2'}>
        <p className={'text-xl font-medium'}>{user.name}</p>
        <p className={'text-slate-500'}> email: {user.email} </p>
        <p className={'text-slate-700'}>site: {user.website}</p>
      </div>
    </div>
  );
};

export default UserCard;
