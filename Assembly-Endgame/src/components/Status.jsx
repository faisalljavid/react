export default function Status(props) {
    return (
        <section
            aria-live="polite"
            role="status"
            className={props.gameStatusClass}
        >
            {props.renderGameStatus()}
        </section>
    )
}

