export default function Section({ children, title, ...restProps }) {
    return(
        <div className="section">
            <h2 className="subtitle">{ title }</h2>
            { children }
        </div>
    )
}