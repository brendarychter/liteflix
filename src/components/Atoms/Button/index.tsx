const Button = ({ children: any, icon, ghost, action }) => {
  const buttonClassName = `custom-button ${ghost ? 'ghost' : ''} ${icon ? 'with-icon' : ''}`;

  return <button className={buttonClassName} onClick={()=>action}>{icon}{children}</button>;
};

export default Button;