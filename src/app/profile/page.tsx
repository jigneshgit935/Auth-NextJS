'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded font-bold mt-3"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
