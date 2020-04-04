import React from 'react'
import '../App.css'

import drum from '../assets/drum.png'
import draw from '../assets/drawing-png-4.png'
import calis from '../assets/Icon-calistung.png'
import quran from '../assets/quran_PNG10.png'
import swim from '../assets/download.png'

const Program = () => {
  const styles = {
    image1: drum,
    image2: draw,
    image3: calis,
    image4: quran,
    image5: swim
  }
  return (
    <div className="program">
      <p>Program Unggulan</p>
      <div className="program-card">
      <div className="card">
          <img className="card-img-top" src={styles.image1} alt="altern"/>
          <div className="card-body">
            <h5 className="card-title">Drum Band</h5>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={styles.image2} alt="altern"/>
          <div className="card-body">
            <h5 className="card-title">Melukis</h5>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={styles.image3} alt="altern"/>
          <div className="card-body">
            <h5 className="card-title">Calistung</h5>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={styles.image4} alt="altern"/>
          <div className="card-body">
            <h5 className="card-title">Tahfidz</h5>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={styles.image5} alt="altern"/>
          <div className="card-body">
            <h5 className="card-title">Renang</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Program