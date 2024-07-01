import './style.css'
import { FAQData } from '../../utils/data'
import { useState } from 'react'
import FAQAccordion from '../FAQAccordion'

const FAQ = ({ id }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    }

    return (
        <div id={id} className='faq'>
            <div className='faq-container'>
                <div className='faq-title'>
                    <h1>Frequently Asked Question</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className='faq-accordion'>
                    {FAQData.map((item) => (
                        <FAQAccordion key={item.id} title={item.question} description={item.answer} onClick={() => toggleAccordion(item.id)} isOpened={openIndex === item.id}>
                            <p>{item.answer}</p>
                        </FAQAccordion>
                    ))}
                </div>
            </div>

        </div>
)}

export default FAQ