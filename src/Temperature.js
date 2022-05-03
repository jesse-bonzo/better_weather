function Temperature(props) {
    const temp = Math.floor(props.value);
    const unit = props.unit || "F";

    return (
        <span className="temperature">{temp}<span>&#176;</span> {unit}</span>
    )
}

export default Temperature;