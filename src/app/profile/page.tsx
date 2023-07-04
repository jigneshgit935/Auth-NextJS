'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
  const [data, setData] = useState('nothing');

  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout Successful');
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
      toast.error('Something went wrong', error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="p-3 rounded bg-green-500 ">
        {data === 'nothing' ? (
          'Nothing'
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded font-bold mt-3"
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded font-bold mt-3"
        onClick={getUserDetails}
      >
        Get User Details
      </button>
    </div>
  );
}
