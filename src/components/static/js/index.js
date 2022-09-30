import styles from '../css/index.module.css'


export function activeHome(){
  let home = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} style={{textAlign: 'right', paddingRight: '12%'}} aria-current="page" href="/" >Home</a></li>;

  if (window.location.href == 'http://localhost:3000/'){
    home = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} style={{textAlign: 'right', paddingRight: '12%'}} aria-current="page" href="/" >Home</a></li>
    return home;
  } else {
    return home;
  }
}

export function activeArtikel(){
  let artikel = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} href="/artikel">Artikel</a></li>;

  if (window.location.href == 'http://localhost:3000/artikel'){
    artikel = artikel = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} href="/artikel">Artikel</a></li>;
    return artikel;
  } else {
    return artikel;
  }
}

export function activeJadwalSertifikasi (){
  let jadwalSertifikasi = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} style={{width: '10vw'}} href="#">Jadwal Sertifikasi</a></li>;

  if (window.location.href == 'http://localhost:3000/jadwalsertifikasi'){
    jadwalSertifikasi = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} style={{width: '10vw'}} href="#">Jadwal Sertifikasi</a></li>;
    return jadwalSertifikasi;
  } else {
    return jadwalSertifikasi;
  }
}

export function activePortofolio (){
  let portofolio = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} style={{paddingLeft: '20%'}} href="#">Portofolio</a></li>;

  if (window.location.href == 'http://localhost:3000/portofolio'){
    portofolio = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} style={{paddingLeft: '20%'}} href="#">Portofolio</a></li>;
    return portofolio;
  } else {
    return portofolio;
  }
}