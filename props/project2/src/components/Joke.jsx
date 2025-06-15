export default function Joke(props) {
    return (
        <>
            {props.setups && <p className="setup">{`Setup: ${props.setups}`}</p>}
            <p className="punchline">{`Punchline: ${props.punchlines}`}</p>
            <hr />
        </>
    )
}