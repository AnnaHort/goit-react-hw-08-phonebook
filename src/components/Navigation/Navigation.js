import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <ul>
        <Link to="/">Navigation</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/contacts">Contacts</Link>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
