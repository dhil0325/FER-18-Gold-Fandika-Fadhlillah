import "./style.css"

function WhyUsCard({icon, title, description}) {
    return (  
        <div className="why-us-card-item">
            <img src={icon} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default WhyUsCard