import styles from './card.module.css'
import cn from 'classnames'
import Button from '../Button/button'
import { Check, Close } from '../icons'

function Card({ type, title, description, approveText, declineText, ...props }) {
  return (
    <div className={cn(styles.base, styles?.[type])} {...props}>
      <div>
        <Check></Check>
      </div>
      <div className="flex flex-col space-y-2">
        <h4 className={styles.title}>{title}</h4>
        <p>{description}</p>
        <footer className="flex space-x-4">
          <Button appearance={type == 'warning' ? 'pale' : 'link'}>{approveText}</Button>
          <Button appearance={type == 'warning' ? 'pale' : 'link'}>{declineText}</Button>
        </footer>
      </div>
      <button type="button">
        <Close className="w-3"></Close>
      </button>
    </div>
  )
}

export default Card
