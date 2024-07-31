import './style.css'
import NavHome from "../../components/NavHome";
import arrowLeft from '../../assets/arrow-left.png'
import doneCheck from '../../assets/done-check.png'
import stripe from '../../assets/Rectangle 36.png'
import success from '../../assets/success.png'
import btn_download from '../../assets/button-unduh.png'
import Footer from '../../components/Footer'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'

import "@react-pdf-viewer/core/lib/styles/index.css";


const Ticket = () => {
    
    return (
        <>
        <NavHome />
        <div className="ticket-container">
            <div className="ticket-banner">
                <div className="ticket-text-title">
                    <button>
                        <img src={arrowLeft} alt="" />
                    </button>
                    <div className="ticket-title">
                        <h1>Tiket</h1>
                        <p>Order ID: xxxxxxxx</p>
                    </div>
                </div>
                <div className='ticket-navigation'>
                    <div className="ticket-navigation-item">
                        <img src={doneCheck} alt="" />
                        <p>Pilih Metode</p>
                    </div>
                    <img src={stripe} alt="" />
                    <div className="ticket-navigation-item">
                        <img src={doneCheck} alt="" />
                        <p>Bayar</p>
                    </div>
                    <img src={stripe} alt="" />
                    <div className="ticket-navigation-item">
                        <img src={doneCheck} alt="" />
                        <p>Ticket</p>
                    </div>
                </div>
            </div>
            <div className='invoice-content'>
                <img src={success} alt="" />
                <h3>Pembayaran Berhasil!</h3>
                <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                <div className='invoice-container'>
                    <div className='invoice'>
                        <div className='invoice-text'>
                            <p>Invoice</p>
                            <p>*no invoice</p>
                        </div>
                        <button>
                            <img src={btn_download} alt="" />
                        </button>
                    </div>
                    <div className='invoide-pdf' style={{width: '557px', height: '162px', paddingBottom: '24px'}}>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" >
                            <Viewer fileUrl="https://pdfobject.com/pdf/sample.pdf"/>
                        </Worker>
                </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Ticket;
        