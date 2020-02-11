/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:

1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. 
If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, 
template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class TownProperty {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownProperty{
    constructor(name, buildYear, numberOfTrees, parkArea) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }

    // calculateTreeDensity(numberOfTrees, parkArea) {
    //     return numberOfTrees / parkArea;
    // }
    calculateTreeDensity() {
         const density = this.numberOfTrees / this.parkArea;
         console.log(`${this.name} has a tree density of ${density} trees per square km.`);
     }

    calcualteParkAge(buildYear) {
        return new Date().getFullYear - buildYear;
    }
}

class Street extends TownProperty{
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifySize() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        const streetClass = classification.get(this.size);
        console.log(`${this.name}, build in ${this.buildYear}, is a ${streetClass} street.`)
    }
}

const parks = [new Park('Green Park', 1991, 999, 0.9),
               new Park('National Park', 2000, 500, 1.3),
               new Park('Oak Park', 1884, 2000, 2)];

const street = [new Street('Ocean Ave', 1992, 2000, 1),
                new Street('Evergreen', 2002, 500, undefined),
                new Street('4th Street', 1900, 800, 2),
                new Street('Sunset', 2012, 1300, 4)];

function reportParks(parks) {
    console.log('-----PARKS REPORT-----');
    
    // calculate density
    parks.forEach(el => el.calculateTreeDensity());

    // get park more than 1000
    const parkIndex = parks.map(el => el.numberOfTrees).findIndex(el => el > 1000);
    console.log(`${parks[parkIndex].name} has more than 1000 trees`);
}

function reportStreets(streets) {
    console.log('-----STREET REPORT-----');

    streets.forEach(el => el.classifySize());
}

reportParks(parks);

reportStreets(street);