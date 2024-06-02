// immidiately invoked functions expressions (IIFE)

// To remove the pollution caused by the global scope we use IIFE 

(function chai(){
    // named IIFE
    console.log(`DB connected`)
}) ();


( () => {
    
    console.log(`DB 2 connected`)
}) ()