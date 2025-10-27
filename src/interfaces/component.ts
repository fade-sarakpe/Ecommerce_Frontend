export interface IForgotPasswordSection {
  onSwitchView: (newView: string) => void;
}

export interface ISignInSection {
  onSwitchView: (newView: string) => void;
}

export interface ISignUpSection {
  onSwitchView: (newView: string) => void;
}

export interface IOTPSection {
  onSwitchView: (newView: string) => void;
}

export interface IRightSectionProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}
export interface INavigationLink {
  href: string;
  label: string;
}

export interface IMobileMenuProps {
  navigationLinks: INavigationLink[];
  isOpen: boolean;
  onClose: () => void;
}

export interface IMiddleSectionProps {
  navigationLinks: INavigationLink[];
}

export interface IRightSectionProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}
export interface INavigationLink {
  href: string;
  label: string;
}

export interface IMobileMenuProps {
  navigationLinks: INavigationLink[];
  isOpen: boolean;
  onClose: () => void;
}

export interface IMiddleSectionProps {
  navigationLinks: INavigationLink[];
}

export interface ISpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}