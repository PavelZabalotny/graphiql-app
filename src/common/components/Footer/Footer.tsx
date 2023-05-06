import { Container, MenuList, MenuItem, ListItemIcon, Typography, Link } from '@mui/material'

import { type FC } from 'react'

import styles from './Footer.module.scss'

import githubLogo from '../../../assets/github-logo.svg'
import rsLogo from '../../../assets/rs_school_logo.png'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_container}>
          <div>
            <Link href='https://rs.school/react/' target='_blank' rel='noopener noreferrer'>
              <img src={rsLogo} alt='rs school logo' />
            </Link>
            <p className={styles.footer_copyright}>© 2023 Copyright</p>
          </div>
          <MenuList>
            <Link
              target='_blank'
              href='https://github.com/emoxowa'
              underline='none'
              color='black'
              rel='noopener noreferrer'
            >
              <MenuItem>
                <ListItemIcon>
                  <img src={githubLogo} alt='github link' />
                </ListItemIcon>
                <Typography variant='inherit'>Evgeniia Mokhova</Typography>
              </MenuItem>
            </Link>
            <Link
              target='_blank'
              href='https://github.com/PavelZabalotny'
              underline='none'
              color='black'
              rel='noopener noreferrer'
            >
              <MenuItem>
                <ListItemIcon>
                  <img src={githubLogo} alt='github link' />
                </ListItemIcon>
                <Typography variant='inherit'>Pavel Zabalotny</Typography>
              </MenuItem>
            </Link>
            <Link
              target='_blank'
              href='https://github.com/viyaletah'
              underline='none'
              color='black'
              rel='noopener noreferrer'
            >
              <MenuItem>
                <ListItemIcon>
                  <img src={githubLogo} alt='github link' />
                </ListItemIcon>
                <Typography variant='inherit'>Viyaleta Haponava</Typography>
              </MenuItem>
            </Link>
          </MenuList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
