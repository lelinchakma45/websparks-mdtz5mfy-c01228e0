import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to WebSparks AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Your expert AI-powered Full Stack Software Engineer is ready to build exceptional, 
            production-worthy applications with modern technologies and best practices.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Development Environment Ready</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-700">React 18</div>
                <div className="text-blue-600">TypeScript</div>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-lg">
                <div className="font-semibold text-emerald-700">Tailwind CSS</div>
                <div className="text-emerald-600">Styling</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-700">Vite</div>
                <div className="text-purple-600">Build Tool</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="font-semibold text-orange-700">ESLint</div>
                <div className="text-orange-600">Code Quality</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">
            Start building your next amazing project by describing what you'd like to create!
          </p>
          <div className="inline-flex items-center space-x-2 text-xs text-gray-400">
            <span>Powered by</span>
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              WebSparks AI
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
