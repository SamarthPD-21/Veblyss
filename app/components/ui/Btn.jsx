const variantClass = {
  primary: 'bg-primary text-white hover:bg-[#6a1f1f] disabled:opacity-60',
  secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white disabled:opacity-60',
  outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white disabled:opacity-60'
}

const sizeClass = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-2 text-base',
  large: 'px-8 py-3 text-base'
}

const Btn = ({ children, variant = 'primary', size = 'medium', onClick, className = '', disabled = false, ...props }) => {
  const cls = [
    'inline-flex items-center justify-center rounded-md font-medium transition-all',
    variantClass[variant] || variantClass.primary,
    sizeClass[size] || sizeClass.medium,
    className,
    disabled ? 'cursor-not-allowed' : 'cursor-pointer'
  ].join(' ')

  return (
    <button className={cls} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Btn
