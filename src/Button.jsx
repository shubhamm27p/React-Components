function handleClik(){
    console.log("Hello!");
}

function printHello () {
    console.log("Hello");
}

function handledblClik(){
    console.log("Double Click!");
}

export default function button() {
    return (<div>
         <button onClink={printHello}> Click me!</button>
         <p onMouseOver={handleClik()}>
            Blue foxes dance under neon skies,
            while algorithms hum lullabies to the stars.  
            Coffee spills on forgotten code,  
            yet the compiler still dreams in binary.  

         </p>
         <button onDoubleClick={handledblClik()}>Double click me!</button>
    
    </div>)


}