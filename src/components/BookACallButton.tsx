import React from 'react';

interface BookACallButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BookACallButton: React.FC<BookACallButtonProps> = ({
  onClick,
  label = 'Book A Call',
  className = '',
  fullWidth = false,
  id,
  size = 'md',
}) => {
  // 'sm' is used for navbar (compact)
  // 'md' / default is larger and longer for all other sections
  const sizeClasses =
    size === 'sm'
      ? 'px-4 py-2 text-[11px] font-medium tracking-wider'
      : size === 'lg'
      ? 'px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm font-bold tracking-widest'
      : 'px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-[12px] font-bold tracking-widest';

  return (
    <button
      id={id}
      onClick={onClick}
      className={`${
        fullWidth ? 'w-full justify-center' : ''
      } ${sizeClasses} rounded-full uppercase bg-[#D94E10] text-white hover:bg-[#E85D26] transition-all duration-300 cursor-pointer shadow-lg shadow-[#D94E10]/25 active:scale-95 inline-flex items-center justify-center ${className}`}
    >
      <span>{label}</span>
    </button>
  );
};



