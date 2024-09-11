import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'
import { useUserContext } from '@/context/AuthContext'
import { Button } from '../ui/button';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useEffect } from 'react';
import { IoIosLogOut } from "react-icons/io";

const Topbar = () => {
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount()
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) 
      navigate(0);
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex md:flex py-3 px-4">
        <Link to="/" className="flex gap-1">
          <img 
          src="/assets/images/Craftwork.svg" 
          alt="logo"
          width={30}
          height={20}
           />
        </Link>

        <div className="flex gap-4 ml-auto xl:ml-auto items-center">
          <div className="max-h-[40px]"> {/* Ensure Search doesn't exceed this height */}
            <Search />
          </div>
        </div>

        <div className="flex gap-4 ml-auto">   
          <Link to={`/profile/${user.id}`}
          className="flex gap-4 md:flex lg:hidden">
            <img src={user.imageUrl || '/assets/icons/placeholder.svg'} alt="profile"
            className="h-8 w-8 rounded-full" />
          </Link>
          <Button variant="ghost" className="shad-button_ghost"
          onClick={() => signOut()}>
            <IoIosLogOut />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Topbar