import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from './InputField'

/**
 * Login Page Component
 * Displays login form with username, password, remember me, and lost password link
 */
function Login() {
  // Form state management
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login submitted:', formData)
    // Add your login logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main content container */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Login card with shadow */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative">
            
            {/* Top-right corner ribbon */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-navy-dark">
              <span className="absolute -top-16 right-2 text-white text-sm font-semibold transform rotate-45">
                Login
              </span>
            </div>

            {/* Logo and company name */}
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="Qelem Meda Logo" className="w-16 h-16" />
              <div>
                <p className="text-sm text-gray-600">ቀለም ሜዳ ቴክኖሎጂስ</p>
                <h1 className="text-xl font-semibold text-orange-primary">
                  Qelem Meda Technologies
                </h1>
              </div>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username input */}
              <InputField
                type="text"
                name="username"
                placeholder="User Name"
                value={formData.username}
                onChange={handleChange}
                required
              />

              {/* Password input */}
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {/* Remember me checkbox and Lost Password link */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                
                <a href="#" className="text-sm text-navy-dark hover:text-navy-blue font-medium">
                  Forgot Password?
                </a>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full bg-navy-dark text-white py-3 rounded-lg font-semibold hover:bg-navy-blue transition-colors"
              >
                Login
              </button>

              {/* Create account link */}
              <p className="text-center text-sm text-gray-600">
                Not registered?{' '}
                <Link to="/register" className="text-navy-dark font-semibold hover:text-navy-blue">
                  Create account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-3">
            {/* Footer logo and company name */}
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Qelem Meda Logo" className="w-12 h-12" />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-navy-dark">
                  Qelem Meda Technologies
                </h2>
                <p className="text-sm text-orange-primary">ቀለም ሜዳ ቴክኖሎጂስ</p>
              </div>
            </div>
            

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Login
