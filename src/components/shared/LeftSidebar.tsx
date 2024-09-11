import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { Button } from '../ui/button'
import { IoIosLogOut } from "react-icons/io";
import { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { INITIAL_USER, useUserContext } from '@/context/AuthContext';
import { INavLink } from '@/types';
import { sidebarLinks } from '@/constants';
import Loader from './Loader';


const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();

  const { mutate: signOut } = useSignOutAccount();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-2">
      <Link to={`/profile/${user.id}`} className="graduation-cap flex justify-center items-center mx-auto">
          <img
            src={user.imageUrl ||"/assets/icons/GraduationCap.svg"}
            alt="profile"
            width={40}
            height={25}
          />
        </Link>

        {isLoading || !user.email ? (
          <div className="h-8">
           <Loader />
          </div>
        ) : (
            <div className="flex flex-col">
              <p className="body-bold">{user.name}</p>
              <p className="small-regular text-light-3">@{user.username}</p>
            </div>
        )}

        <ul className="flex flex-col gap-2">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-2 items-center p-2">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`w-4 h-4 group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  <span className="text-sm">
                  {link.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={(e) => handleSignOut(e)}>
         <IoIosLogOut />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;