import React from 'react'

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-left text-gray-600 font-medium">Email</label>
            <input 
              type="email" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-left text-gray-600 font-medium">Password</label>
            <input 
              type="password" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-xl hover:bg-gray-900 "
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm">
          Don't have an account? <a href="/register" className="text-gray-800 font-medium hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
