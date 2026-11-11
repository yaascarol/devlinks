import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import './ThemeToggle.css'

export default function ThemeToggle({ isLight, onToggle }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      role="switch"
      aria-label="Modo claro"
      aria-checked={isLight}
      onClick={onToggle}
    >
      <span className="theme-toggle__track" aria-hidden="true" />
      <span className="theme-toggle__handle" aria-hidden="true">
        <img src={isLight ? sun : moon} alt="" />
      </span>
    </button>
  )
}
