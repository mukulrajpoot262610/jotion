'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { Logo } from './logo';
import { useScrollTop } from '@/hooks/useScrollTop';
import { ModeToggle } from '@/components/modeToggle';

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        <Button variant='outline'>Login</Button>
        <ModeToggle />
      </div>
    </div>
  );
};
