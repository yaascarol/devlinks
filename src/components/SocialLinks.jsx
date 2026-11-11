import { links } from '../data/links'
import githubDark from '../assets/github-dark.svg'
import githubLight from '../assets/github-light.svg'
import './SocialLinks.css'

const socialIcons = [
  { id: 'github', name: 'GitHub', dark: githubDark, light: githubLight },
]

export default function SocialLinks({ isLight, name }) {
  return (
    <nav aria-label="Redes sociais">
      <ul className="social-links">
        {socialIcons.map(social => (
          <li key={social.id}>
            <a
              href={links.find(link => link.id === social.id).href}
              aria-label={`${social.name} de ${name} (abre em nova aba)`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={isLight ? social.light : social.dark} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

