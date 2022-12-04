import { MdArrowRightAlt } from 'react-icons/md';
import styles from '../css/index.module.css'


export function activeHome(){
  let home = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} style={{textAlign: 'right'}} aria-current="page" href="/" >Home</a></li>;

  if (window.location.href === 'http://localhost:3000/'){
    home = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} style={{textAlign: 'center'}} aria-current="page" href="/" >Home</a></li>
    return home;
  }
    return home;
}

export function activeArtikel(){
  let artikel = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} href="/artikel">Artikel</a></li>;

  if (window.location.href === 'http://localhost:3000/artikel'){
    artikel = artikel = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} href="/artikel">Artikel</a></li>;
    return artikel;
  }
    return artikel;
}

export function activeJadwalSertifikasi (){
  let jadwalSertifikasi = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} style={{width: '10vw', minWidth: '147px'}} href="/jadwal">Jadwal Sertifikasi</a></li>;

  if (window.location.href === 'http://localhost:3000/jadwal'){
    jadwalSertifikasi = <li className="nav-item">
<<<<<<< HEAD
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} style={{width: '10vw', lineheight: '50px'}} href="/jadwal">Jadwal Sertifikasi</a></li>;
=======
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} style={{width: '10vw', minWidth: '147px'}} href="/jadwal">Jadwal Sertifikasi</a></li>;
>>>>>>> 61eab889811f07f5ad8f9ad0b65bea3ec0a6c307
    return jadwalSertifikasi;
  }
    return jadwalSertifikasi;
}

export function activePortofolio (){
  let portofolio = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} href="/portofolio">Portofolio</a></li>;

  if (window.location.href === 'http://localhost:3000/portofolio'){
    portofolio = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} href="/portofolio">Portofolio</a></li>;
    return portofolio;
  }
    return portofolio;
}