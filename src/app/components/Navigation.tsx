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
    <nav className="fixed top-5 sm:top-10 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-xl rounded-full border border-black/[0.08] p-1 shadow-[0_8px_24px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="flex gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative min-w-[74px] sm:min-w-[104px] px-3 sm:px-5 py-2.5 rounded-full text-center transition-all duration-200 text-sm
                ${
                  isActive(item.path)
                    ? 'bg-[#f2f2f2] text-[#242424]'
                    : 'text-[#9a9a9a] hover:bg-black/[0.025] hover:text-[#555]'
                }
              `}
            >
              {item.hasDot && (
                <span className="absolute top-2.5 right-2.5 sm:right-4 w-1.5 h-1.5 bg-[#ff5664] rounded-full"></span>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
