import React from 'react';
import { Navigation2 } from './Navigation2';

interface HeaderProps {
  onOpenBooking: () => void;
  onNavigateTo: (sectionId: string) => void;
  onOpenResume?: () => void;
  onOpenCertifications?: () => void;
  onOpenDISC?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onNavigateTo,
  onOpenResume,
  onOpenCertifications,
  onOpenDISC
}) => {
  return (
    <Navigation2
      onOpenBooking={onOpenBooking}
      onNavigateTo={onNavigateTo}
      onOpenResume={onOpenResume}
      onOpenCertifications={onOpenCertifications}
      onOpenDISC={onOpenDISC}
    />
  );
};

