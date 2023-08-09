const Heading = ({ title, power, quantity }) => {
    return (
        <div className="layout-padding-x">
            <h1>{title}</h1>
            <p className="text-colour-muted">{power} {'//'} Packet of {quantity}</p>
        </div>
    )
}

export default Heading;