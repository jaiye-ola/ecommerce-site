function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600  p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create an Account</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-left text-gray-600 font-medium">Full Name</label>
            <input 
              type="text" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Temi "
            />
          </div>
          <div>
            <label className="block text-left text-gray-600 font-medium">Email</label>
            <input 
              type="email" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="@example"
            />
          </div>
          <div>
            <label className="block text-left text-gray-600 font-medium">Password</label>
            <input 
              type="password" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm">
          Already have an account? <a href="/login" className="text-blue-600 font-medium hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
