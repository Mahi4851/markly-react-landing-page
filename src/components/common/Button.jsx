import './Button.css';

export function Button({ children, variant = 'dark', className = '', href, ...props }) {
  const classes = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} {...props} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
