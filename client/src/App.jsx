
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import ResetPassword from './pages/ResetPassword'
import DoctorProfile from './pages/DoctorProfile'
import ForgotPassword from './pages/ForgotPassword'
import HomePage from './pages/Home'
import AdminDashboard from './pages/Dashboards/AdminDashboard'
import PatientDashboard from './pages/Dashboards/PatientDashboard'
import DoctorDashboard from './pages/Dashboards/DoctorDashboard'

function App() {


  return (
    <>
    <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    <Footer />
      
    </>
  )
}

export default App
