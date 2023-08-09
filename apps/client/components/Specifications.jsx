const Specifications = ({ specifications }) => {
    
    return (
        <div className="layout-padding-x">
            <h2>Specifications</h2>
            <div style={{ display: "flex" }}>
                <ul className="spec-list">
                    <li><span>Brand</span></li>
                    <li><span>Item Weight (g)</span></li>
                    <li><span>Dimensions (cm)</span></li>
                    <li><span>Item Model Number</span></li>
                    <li><span>Colour</span></li>
                </ul>
                <ul className="spec-list">
                    <li><span>{specifications.brand}</span></li>
                    <li><span>{specifications.weight}</span></li>
                    <li><span>{specifications.dimensions}</span></li>
                    <li><span>{specifications.model_code}</span></li>
                    <li><span>{specifications.colour}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Specifications;