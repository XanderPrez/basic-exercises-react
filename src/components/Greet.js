const Greet = (props) => {
    return(
        <div>
            <h1>
                Ciao {props.name} a.k.a. {props.superHeroName}
            </h1>
            {props.children}
        </div>
    )
};

export default Greet;