import './Footer.css'

export default function Footer({ name }) {
  return (
    <footer className="footer">
      <p>Feito com <span aria-label="carinho" role="img">♥</span> por {name}</p>
    </footer>
  )
}

