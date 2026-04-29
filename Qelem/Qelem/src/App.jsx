import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

/**
 * Main App Component
 * Handles routing between Login and Register pages
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Login page route */}
        <Route path="/login" element={<Login />} />
        
        {/* Register page route */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
