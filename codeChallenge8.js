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

//All parks and streets have a name and a build year.
class TownProperty {
    constructor (name, yearOfBuild) {
        this.name = name;
        this.yearOfBuild = yearOfBuild;
    }
}

class Park extends TownProperty {
    constructor (name, yearOfBuild, numberOfTree, area) {
        super(name, yearOfBuild);
        this.numberOfTree = numberOfTree;
        this.area = area;        
    }

    treeDensityCalc() {
        const density = this.numberOfTree / this.area;
        console.log('${this.name} has a tree density of ${density} trees per square km.');
    }
}

class Street extends TownProperty {
    constructor (name, yearOfBuild, length, size = 3) {
        super(name, yearOfBuild);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log('${this.name} build in ${this.yearOfBuild}, is a ${classification.get(this.size)} street.');
    }

}

const parks = new Array();
const park1 = new Park('Green Park', 1896, 2000, 500);
const park2 = new Park('National Park', 1950, 3000, 800);
const park3 = new Park('Oak Park', 2001, 500, 1000);
parks.push(park1, park2, park3);

const streets = new Array();
const street1 = new Street('Ocean Avenue', 1999, 500,1);
const street2 = new Street('Evergreen Street', 2008, 800,2);
const street3 = new Street('4th Street', 2015, 2000,3);
const street4 = new Street('Sunset Boulevard', 1982, 300,4);
streets.push(street1, street2, street3, street4);

//const rawData = [...parks, ...streets];

function reportParks(parks) {
    // data.forEach(cur => console.log(cur.constructor === Street));
}

function reportStreet(...data) {
    // data.forEach(cur => console.log(cur.constructor === Street));
}



/**
 * a map of park
 * const parks = new Map();
 * parks.set('Overview', 'Our ${} have an average of ${} years.');
 * 
 * 
 */