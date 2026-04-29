import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from './InputField'

/**
 * Register Page Component
 * Displays registration form with photo upload, personal details, and account creation
 */
function Register() {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })

  // Photo upload state
  const [photoPreview, setPhotoPreview] = useState(null)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    
    console.log('Registration submitted:', formData)
    // Add your registration logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main content container */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Register card with shadow */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative">
            
            {/* Top-right corner ribbon */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-navy-dark">
              <span className="absolute -top-16 right-2 text-white text-sm font-semibold transform rotate-45">
                Register
              </span>
            </div>

            {/* Logo and company name */}
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Qelem Meda Logo" className="w-16 h-16" />
              <div>
                <p className="text-sm text-gray-600">ቀለም ሜዳ ቴክኖሎጂስ</p>
                <h1 className="text-xl font-semibold text-orange-primary">
                  Qelem Meda Technologies
                </h1>
              </div>
            </div>

            {/* Registration form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Photo upload section */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50">
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  )}
                </div>
                
                <label className="flex items-center gap-2 text-sm text-navy-dark cursor-pointer hover:text-navy-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Name fields - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  type="text"
                  name="firstName"
                  label="First Name"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  type="text"
                  name="middleName"
                  label="Middle Name"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={handleChange}
                />
                <InputField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Username and Email - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  type="text"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <InputField
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone and Gender - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  type="tel"
                  name="phone"
                  label="Phone Number"
                  placeholder="+2519XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                
                {/* Gender dropdown */}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue focus:border-transparent transition-all"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Password fields - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <InputField
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Terms and conditions checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer"
                />
                <label className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-navy-dark font-semibold hover:text-navy-blue">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Create Account button */}
              <button
                type="submit"
                className="w-full bg-navy-dark text-white py-3 rounded-lg font-semibold hover:bg-navy-blue transition-colors"
              >
                Create Account
              </button>

              {/* Login link */}
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-navy-dark font-semibold hover:text-navy-blue">
                  Login
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

export default Register
