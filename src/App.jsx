import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'
import LinkButton from './components/LinkButton'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import { links } from './data/links'
import { profile } from './data/profile'

import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('devlinks-theme') === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('devlinks-theme', theme)
    } catch {
      // A troca continua funcionando se o navegador bloquear o armazenamento.
    }
  }, [theme])

  const isLight = theme === 'light'

  return (
    <main className="devlinks" aria-label="Links do perfil">
      <Profile
        avatarSrc={profile.avatar}
        avatarAlt={`Avatar de ${profile.name} no GitHub`}
        username={profile.username}
        avatarSize={112}
      />
      <ThemeToggle
        isLight={isLight}
        onToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
      />
      <nav aria-label={`Links de ${profile.name}`}>
        <ul className="link-list">
          {links.map(link => (
            <li key={link.id}>
              <LinkButton label={link.label} href={link.href} />
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinks isLight={isLight} name={profile.name} />
      <Footer name={profile.name} />
    </main>
  )
}

export default App

