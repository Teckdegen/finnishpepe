export function IceSigns() {
  return (
    <>
      {/* Top-left ice sign */}
      <div className="fixed top-4 left-4 w-12 h-12 bg-white border-4 border-blue-800 rounded-lg shadow-lg z-40 flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Top-right ice sign */}
      <div className="fixed top-4 right-4 w-12 h-12 bg-white border-4 border-blue-800 rounded-lg shadow-lg z-40 flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Bottom-left ice sign */}
      <div className="fixed bottom-4 left-4 w-12 h-12 bg-white border-4 border-blue-800 rounded-lg shadow-lg z-40 flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Bottom-right ice sign */}
      <div className="fixed bottom-4 right-4 w-12 h-12 bg-white border-4 border-blue-800 rounded-lg shadow-lg z-40 flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
    </>
  )
}