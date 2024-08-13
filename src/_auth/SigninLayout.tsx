import { Outlet, Navigate } from "react-router-dom";

const SigninLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/"/>
      ):(
        <>
          <section className="flex flex-1 justify-center 
          items-center flex-col py-10">
            <Outlet />
          </section>

          <img 
            src="/assets/images/Signin.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat
            float-left"
          />
        </>
      )}
    </>
  )
}

export default SigninLayout