export default function Switch({changeState, className}){
    console.log(className)
    return(
        <>
            <button className={className} onClick={() =>changeState()}></button>
        </>
    )
}