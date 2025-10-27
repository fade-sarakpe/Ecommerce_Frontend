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

export interface ISpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}