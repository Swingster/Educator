import Bottombar from '@/components/shared/Bottombar';
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="w-full md:flex flex-col">
      <Topbar />
      <div className="flex-grow flex h-full">
        <LeftSidebar />
        <section className="flex-grow">
          <Outlet />
        </section>
      </div>
      <Bottombar />
    </div>
  )
}

export default RootLayout