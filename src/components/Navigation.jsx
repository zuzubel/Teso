import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isServicesOpen, isMobileMenuOpen]);

  const menuItems = [
    //{ path: '/', text: 'Úvod' },
    // {
    //   text: 'Služby',
    //   isDropdown: true,
    //   items: [
    //     { path: '/sluzby/vsechny', text: 'Všechny služby' },
    //     { path: '/sluzby/kontejnerova-doprava', text: 'Kontejnerová doprava' },
    //     { path: '/sluzby/zemni-prace', text: 'Zemní a výkopové práce' },
    //     { path: '/sluzby/stavebni-prace', text: 'Stavební práce' },
    //     { path: '/sluzby/stolarstvi', text: 'Stolařství' },
    //     { path: '/sluzby/udrzba-zelene', text: 'Údržba zeleně' },
    //   ],
    // },
    { path: '/kontejnerova-doprava', text: 'Kontejnery' },
    { path: '/zemni-prace', text: 'Zemní výkopové práce' },
    { path: '/autodoprava', text: 'Autodoprava' },
    //{ path: '/fotogalerie', text: 'Fotogalerie' },
    { path: '/kontakt', text: 'Kontakt' },
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <button
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleMobileMenu();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'show' : ''}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={item.isDropdown ? 'dropdown' : ''}
              onClick={(e) => item.isDropdown && e.stopPropagation()}
            >
              {item.isDropdown ? (
                <>
                  <a
                    href="/sluzby"
                    onClick={toggleServices}
                    className={`dropdown-toggle ${
                      isServicesOpen ? 'active' : ''
                    }`}
                  >
                    {item.text}
                  </a>
                  <ul
                    className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subItem.path}
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {subItem.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
