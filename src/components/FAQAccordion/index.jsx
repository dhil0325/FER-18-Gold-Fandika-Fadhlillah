import './style.css'
import React from 'react'
import { Collapse } from 'react-collapse'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const FAQAccordion = ({title, description, onClick, isOpened}) => {
    return (
        <div className='faq-accordion'>
            <div className='faq-accordion-content' onClick={onClick}>
                <div className='faq-accordion-title'>
                    <h4>{title}</h4>
                    <p>{isOpened ? (
                        <MdKeyboardArrowUp className='arrow-icon' />
                    ) : (
                        <MdKeyboardArrowDown className='arrow-icon' />
                    )}
                    </p>
                </div>
            </div>
            <Collapse isOpened={isOpened}>
                    <div className='faq-accordion-description'>
                        {description}
                    </div>
            </Collapse>
        </div>
    )
}

export default FAQAccordion