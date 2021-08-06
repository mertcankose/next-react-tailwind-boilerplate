import styles from './button.module.css'
import cn from 'classnames'

function Button({ children, appearance, ...props }) {
  return (
    <button className={cn(styles.base, styles?.[appearance])} {...props}>
      {children}
    </button>
  )
}

export default Button
