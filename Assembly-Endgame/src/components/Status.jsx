export default function Status(props) {
    return (
        <section className={props.gameStatusClass}>
            {props.renderGameStatus()}
        </section>
    )
}

