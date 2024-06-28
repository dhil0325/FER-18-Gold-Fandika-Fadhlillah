import './style.css'

const TestimonialCard = ({image, rating, review, name, age, city}) => { 
    return (
        <div>
            <div className='testimonal-card'>
                <div className='testimonal-card-image'>
                    <img src={image} alt="" />
                </div>
                <div className='testimonal-card-content'>
                    <p>{'⭐'.repeat(rating)}</p>
                    <p>“{review}”</p>
                    <h3>{name} {age}, {city}</h3>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard