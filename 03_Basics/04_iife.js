// Immediately Involed Function Expression (IIFE)

// 1st () is function defintion 2nd () is it's execution
// It is done to prevent pollutio from global scope variable
(function tea (){
    // named IIFE
    console.log(`DB Connected`);
})();
// IIFE get invoked but don't know when to stop context so ; is required

( (name) => {
    // unnamed IIFE
    console.log(`DB Connected Two ${name}`);
} )("Siddharth")