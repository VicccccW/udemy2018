const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([123,234,345]);
    },4000);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {title: `Chinese`, localtion: `Burwood`};
            resolve(`${ID}: ${recipe.localtion}`);
        }, 4000, recID);
    });
};

async function getRecipeAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
}

function counter() {
    var i = 0;
    var funcNameHere = function(){
        if (i == 20) clearInterval(this);
        else console.log( 'Currently at ' + (i++) );
    };
    // This block will be executed 100 times.
    setInterval(funcNameHere, 1000);
    funcNameHere();
} // End


getRecipeAW();
counter();
//console.log('call this second but display first');

// async function always return a promise
// then takes 2 functions, each takes one argument
// promise has one excuter function, take resolve and reject
// await wait for the promise resolve and put the value to the variable
// An async function simply implies that a promise will be returned 
// and if a promise is not returned, 
// JavaScript will automatically wrap it in a resolved promise with the return value in that function.

// AJAX - Async JS And Xml
// Cross Origin Resource Sharing
// fetch() returns a promise
