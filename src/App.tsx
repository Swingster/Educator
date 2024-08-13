import { Routes, Route } from 'react-router-dom';
import SignupForm from './_auth/forms/SignupForm';
import SigninLayout from './_auth/SigninLayout';
import SignupLayout from './_auth/SignupLayout';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import './index.css'
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className="flex h-screen">
      {/* Public */}
      <Routes>
        <Route element={<SigninLayout/>} >
          <Route path="/sign-in" element={<SigninForm/>} />
        </Route>

        <Route element={<SignupLayout/>} >
          <Route path="/sign-up" element={<SignupForm/>} />
        </Route>
        
        {/* Private */}
        <Route element={ <RootLayout />} >
          <Route index element={<Home />}/>
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App