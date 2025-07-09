export default function Eliminations(props) {
    const styles = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }
    return (
        <span className={props.className} style={styles}>
            {props.name}
        </span>
    )
}