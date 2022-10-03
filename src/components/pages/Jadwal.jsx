import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import flyer from '../static/images/jadwal.png';
import styles from '../static/css/jadwal.css'

export default function Jadwal () {
    return (
        <div className='container'>
            <div className='jadwal-header'>
                Jadwal Sertifikasi
            </div>
            <div className='row'>
                <div className='col-3'>
                <button className='event-button'><b style={{fontSize: '15px', padding: '7px'}}> Upcoming Event </b></button>
                </div>
            </div>
            <div className='row'>
                <div className='col-7'>
                    <img className='flyer' src={flyer} alt={flyer} />
                </div>
                <div className='col-5'>
                    <div className='row' style={{marginBottom: '20px'}}><b className='font-jadwal' >Sertifikasi Profesi Public Relations</b></div>
                    <div className='row' style={{borderBottom: '1px solid', fontSize: '15px'}}><b>Workshop</b></div>
                    <div className='row' style={{marginBottom: '20px'}}><b className='font-jadwal' >Sertifikasi Profesi Public Relations</b></div>
                    <div className='row' style={{marginBottom: '20px'}}><b className='font-jadwal' >Sertifikasi Profesi Public Relations</b></div>
                    <div className='row' style={{marginBottom: '20px'}}><b className='font-jadwal' >Sertifikasi Profesi Public Relations</b></div>
                </div>
            </div>
        </div>
    )
}