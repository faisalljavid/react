export default function Eliminations(props) {
    const styles = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }
    return (
        <span className="chip" style={styles}>
            {props.name}
        </span>
    )
}