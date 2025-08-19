export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to React Frontend Assignment</h1>
      <p className="text-gray-600 mb-6">
        This is a responsive web application built with React, TypeScript, and Tailwind CSS.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Feature-Based Architecture</h2>
          <p className="text-gray-600">
            Organized using Feature-Based Architecture with Atomic Design Pattern.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Responsive Design</h2>
          <p className="text-gray-600">
            Fully responsive design that works on mobile, tablet, and desktop.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">TypeScript Support</h2>
          <p className="text-gray-600">
            Built with TypeScript for better type safety and developer experience.
          </p>
        </div>
      </div>
    </div>
  )
}
