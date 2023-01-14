function Viewer({ id, children }) {
    return (
        <section id={id} className="bg-dark click-z">
            {children}
        </section>
    )
}

export default Viewer