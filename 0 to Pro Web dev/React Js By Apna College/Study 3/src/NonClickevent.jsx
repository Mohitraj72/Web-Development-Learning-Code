function handleHover(){
    console.log("hover");
}


export default function Button (){
    return(
        <div>
            <button onMouseOver={handleHover}>Hover me ! </button>
        </div>
    )
}