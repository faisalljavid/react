export default function Joke(props) {
    console.log(props.comments);
    
    return (
        <article>
           {props.setup && <p className="setup">{`Setup: ${props.setup}`}</p>}
            <p className="punchline">{`Punchline: ${props.punchLine}`}</p>
            <hr />
        </article>
    )
}