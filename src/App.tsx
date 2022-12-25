import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { User } from './types/User';

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
      <nav className={'p-6'}>
        <a href={'/'} className={'text-lg font-bold'}>
          名前検索アプリ
        </a>
        <hr />
      </nav>
      <input
        type="text"
        onChange={handleSearch}
        className={'p-2 ml-10 mr-10 mt-3 w-3/4'}
        placeholder={'名前検索'}
      />
      <div className={"flex justify-center flex-wrap gap-4 pt-10"}>
        {filteredUserList.map((user: User) => {
          return (
            <div key={user.id} className={"rounded-xl border border-blue-200 hover:bg-blue-200 shadow-lg w-1/3"}>
              <a href={'/'} >
                <div className={'p-4 space-y-2'}>
                  <p className={'text-xl font-medium'}>{user.name}</p>
                  <p className={'text-slate-500'}> email: {user.email} </p>
                  <p className={'text-slate-700'}>site: {user.website}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
