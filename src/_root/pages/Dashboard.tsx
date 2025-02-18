import Courses from "@/components/shared/Courses";
import Finance from "@/components/shared/Finance";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const today = new Date();

  const date = today.toLocaleDateString('en-US', {
    year: 'numeric', month:'long', day: 'numeric',
  });

  return (
    <div className="flex-col">
    <><section className="px-4 py-6 lg:px-8 w:full h-[110px] lg:max-w-full">
      <div className="bg-primary-100 py-4 rounded-[13px]">
        <div className="flex justify-between items-center px-8">
          <div className="text-left">
            <h1 className="text-white text-[12px]">
              {date}
            </h1>
            <div className="py-5 text-white">
              <h2 className="text-xl">
                Welcome Back
              </h2>
              <p className="text-[12px]">
                Always stay up to date with your student portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="mt-1 px-4 py-12 lg:px-8">
      <h1 className="py-2 text-lg font-bold">
        Finance
      </h1>
      <Finance />
    </div>
    <div className="px-4 lg:px-8">
      <div className="flex justify-between items-center">
      <h1 className="text-lg font-bold">
        Enrolled Courses
      </h1>
        <Link to="/courses">
          <button>
            <h1 className="text-primary-100 font-bold">
              See All
            </h1>
          </button>
         </Link>
         </div>
      <Courses />
    </div>
    <div>
    </div>
      </>
    </div>
  )
}

export default Dashboard