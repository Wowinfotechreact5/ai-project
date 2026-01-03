export default function MainPanel({ title, children }) {
      return (
            <div className="p-2 text-gray-200">
                  {/* Page Title */}
                  <h1 className="text-lg font-semibold mb-4">
                        {title}
                  </h1>

                  {/* CENTER ONLY PAGE CONTENT */}
                  <div className="flex justify-center">
                        <div >
                              {children}
                        </div>
                  </div>
            </div>
      );
}
