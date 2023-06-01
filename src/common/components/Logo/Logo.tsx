import { useNavigate } from 'react-router-dom'

import styles from './Logo.module.scss'

import { RoutePaths } from '@/routes/routerPaths.ts'

const Logo = () => {
  const navigate = useNavigate()
  const logoPath = './graphql-96.svg'

  function handleClick() {
    navigate(RoutePaths.Home)
  }

  return (
    <div className={styles.logo} onClick={handleClick}>
      <div className={styles.logo_img}>
        <img src={logoPath} alt='logo' />
      </div>
      <div className={styles.title}>GraphiQL</div>
    </div>
  )
}

export default Logo
