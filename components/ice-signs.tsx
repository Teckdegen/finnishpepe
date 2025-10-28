export function IceSigns() {
  return (
    <>
      {/* Top-left ice sign - heap of snow */}
      <div className="fixed top-4 left-4 w-16 h-16 bg-white border-4 border-blue-800 rounded-full shadow-lg z-40 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-blue-800">
          <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
        </div>
      </div>
      
      {/* Top-right ice sign - heap of snow */}
      <div className="fixed top-4 right-4 w-16 h-16 bg-white border-4 border-blue-800 rounded-full shadow-lg z-40 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-blue-800">
          <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
        </div>
      </div>
      
      {/* Bottom-left ice sign - heap of snow */}
      <div className="fixed bottom-4 left-4 w-16 h-16 bg-white border-4 border-blue-800 rounded-full shadow-lg z-40 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-blue-800">
          <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
        </div>
      </div>
      
      {/* Bottom-right ice sign - heap of snow */}
      <div className="fixed bottom-4 right-4 w-16 h-16 bg-white border-4 border-blue-800 rounded-full shadow-lg z-40 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-blue-800">
          <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
        </div>
      </div>
    </>
  )
}