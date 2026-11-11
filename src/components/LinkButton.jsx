import './LinkButton.css'

export default function LinkButton({ label, href }) {
  if (!href) {
    return <span className="link-button" aria-disabled="true">{label}</span>
  }

  return (
    <a className="link-button" href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}
