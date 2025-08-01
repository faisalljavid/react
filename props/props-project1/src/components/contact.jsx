export default function Contact(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt={`Photo of ${props.name}`}
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="src/images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="src/images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}