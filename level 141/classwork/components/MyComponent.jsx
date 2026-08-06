function MyComponent({children}){
    return (
        <div>
            {children[0]}
            <h1>{children[1]}</h1>
        </div>
    )
}

export default MyComponent
