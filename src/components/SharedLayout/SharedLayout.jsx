import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './SharedLayout.css';

const SharedLayout = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="navigation">
          <ul className="navigationList">
            <li className="navigationItem">
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="link">
                Moves
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
