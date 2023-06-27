import './QrCard.scss'
import qr from "../../assets/image-qr-code.png";

function QrCard() {
  return (
    <section className='qr-card'>
        <div className='qr-card__img-container'>
          <img className='qr-card__img' src={qr} alt="QR" aria-label='QR' />
        </div>
        <div className='qr-card__desc'>
          <h2 className='qr-card__title'>
            Improve your front-end skills by building projects
          </h2>
          <p className='qr-card__p'>
            Scan the Qr code to visit Frontend Mentor an take your coding skills to the next level
          </p>
        </div>   
    </section>
  )
      
}

export default QrCard
