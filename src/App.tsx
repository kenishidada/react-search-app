import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { User } from './types/User';
import UserCard from './components/UserCard';
import Header from './components/Header';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUserList, setFilteredUserList] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUserList(data);
      })
      .then(() => {});
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value.toLowerCase();
    setFilteredUserList(users.filter((user: User) => user.name.toLowerCase().includes(searchWord)));
  };

  return (
    <div className=" text-center">
      <Header />
      <input
        type="text"
        onChange={handleSearch}
        className={'p-2 ml-10 mr-10 mt-3 w-3/4 border border-blue-200'}
        placeholder={'名前検索'}
      />
      <div className={'flex justify-center flex-wrap gap-4 pt-10'}>
        {filteredUserList.map((user: User) => {
          return (
            <UserCard
              id={user.id}
              name={user.name}
              email={user.email}
              website={user.website}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
