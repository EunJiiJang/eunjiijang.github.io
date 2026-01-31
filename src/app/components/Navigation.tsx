import { Link, useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work', hasDot: true },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200 px-1 sm:px-2 py-1 sm:py-2">
        <div className="flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative px-4 sm:px-6 py-2 rounded-full transition-all duration-200 text-sm sm:text-base
                ${
                  isActive(item.path)
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              {item.hasDot && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}