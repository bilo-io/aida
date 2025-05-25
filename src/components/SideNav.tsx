'use client';
import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { usePathname } from 'next/navigation';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import { FaBrain, FaGlobe, FaPencil, FaShield } from 'react-icons/fa6';
import { MdAccountCircle, MdDashboard } from 'react-icons/md';
import { AppGradientIcon, AppLogo } from './ui/AppIcon';

const navItems = [
  { icon: <MdDashboard />, label: 'Dashboard', href: '/dashboard' },
  { icon: <FaSearch />, label: 'Explore', href: '/explore' },
  // { icon: <FaBrain />, label: 'Models', href: '/models' },
  { icon: <FaGlobe />, label: 'News', href: '/news' },
  { icon: <FaPencil />, label: 'Prompts', href: '/prompts' },
  // { icon: <FaWandMagicSparkles />, label: 'Generate', href: '/generate' },
  // { icon: <GiGraduateCap />, label: 'Courses', href: '/courses' },
  { icon: <FaShield />, label: 'Security', href: '/security' },
  { icon: <MdAccountCircle />, label: 'Account', href: '/account' },
];

export const SideNav = ({ mobile, toggleMobile }: { mobile?: boolean; toggleMobile?: () => void }) => {
  const [expanded, setExpanded] = useState(true);
  const { theme } = useTheme();
  const pathname = usePathname();

  const SideNavTitle = (
    <div className="flex flex-row items-center">
      {/* <FaBrain color={theme.PRIMARY} size={24} /> */}
      <AppGradientIcon size={24} />
      {expanded ? <AppLogo size={18} /> : null}
    </div>
  );

  return (
    <aside
      className={clsx(
        'top-0 left-0 h-full z-40 transition-all duration-300',
        mobile ? 'w-48' : expanded ? 'w-48' : 'w-12',
        'overflow-hidden'
      )}
      style={{ backgroundColor: theme.SIDENAV_BG, color: theme.SIDENAV_TEXT }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {SideNavTitle}
        {mobile && toggleMobile && <button onClick={toggleMobile}>✖</button>}
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-2 rounded transition-colors duration-200 hover:bg-[#0067FF]',
                  isActive && 'font-semibold  hover:text-[#FFF] hover:[&>svg]:text-white hover:bg-[#FFF]',
                isActive
                  ? 'text-[--primary] [&>svg]:text-[--primary]  hover:text-[#FFF] hover:[&>svg]:text-white hover:bg-[#0067FF]'
                  : `text-inherit hover:text-[#FFF] hover:[&>svg]:text-white hover:bg-[#0067FF]`
              )}
              style={
                isActive
                  ? { color: theme.PRIMARY }
                  : {
                      '--primary': theme.PRIMARY,
                      '--hover-bg': theme.PRIMARY,
                    } as React.CSSProperties
              }
            >
              {React.cloneElement(item.icon, {
                className: clsx('text-lg transition-colors'),
                ...(isActive ? { color: theme.PRIMARY } : {}),
              })}
              {(!mobile && expanded) || mobile ? <span>{item.label}</span> : null}
            </a>
          );
        })}

        <hr className="my-2 opacity-10" />

        <button onClick={() => setExpanded(!expanded)} className="hidden md:flex items-center ml-4 mb-2">
          <span className="mr-3">{expanded ? <FiChevronLeft /> : <FiChevronRight />}</span>
          {expanded ? <span>Collapse</span> : null}
        </button>
      </nav>
    </aside>
  );
};
