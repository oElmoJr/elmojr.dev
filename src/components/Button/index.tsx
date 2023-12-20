import { useNavigate } from 'react-router-dom';

import './styles.css';

type ButtonProps = {
  children: String;
  buttonClass?: String;
  click?: any;
};

export default function Button({ children, buttonClass, click }: ButtonProps) {
  return (
    <p className={`contacts_btn ${buttonClass}`} onClick={click}>
      {children}
    </p>
  );
}
