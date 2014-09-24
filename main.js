// var originalList=[1,2,3];
// var numericalAdd=function(num1, num2){
// 	return num1 + num2;
// };

// var reducedNumbers = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// console.log('Reduce (numbers):', reducedNumbers);


// var originalString=("I'm so meta even this acronym");
// var reducedWords=function(memo, currentWord){
// 	return memo + currentWord[0].toUpperCase() + '.';
// };
// var acronymStart= '';
// var acronym=_.reduce(originalString.split(' '), reducedWords, acronymStart);

// // var reducedWords=_.reduce(originalList);
// console.log('Reduce (acronym);', acronym);



// find: given an array, find an item that matches the search function
//    find will stop searching after the first result returns true,
//    while filter will finish searching and return all results that retyrn true
// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log('Find (even):', even);

// challenge: given an array, find the first person whos id matches 3:
// 			[
// 				{id: 1, name: 'Chris'},
// 				{id: 2, name: 'Joe'},
// 				{id: 3, name: 'Raine'},
// 				{id: 4, name: 'Sean'},
// 			]



// find: 
var names=[
				{id: 1, name: 'Chris'},
				{id: 2, name: 'Joe'},
				{id: 3, name: 'Raine'},
				{id: 4, name: 'Sean'},
			];
var returnThree=function(person){
	return person.id===3;
};
var findMe=_.find(names, returnThree);
console.log(findMe);






// pluck: given an array of objects, return an array of a specific property 'plucked' from each object



var stooges = [
	{name: 'moe', age: 40}, 
	{name: 'larry', age: 50}, 
	{name: 'curly', age: 60}
];
var names=_.pluck(stooges, 'name');
console.log('Pluck (names):', names);




// max

var stooges = [
{name: 'moe', age: 40}, 
{name: 'larry', age: 50}, 
{name: 'curly', age: 60}
];
var oldest=_.max(stooges, function(stooge){ return stooge.age; });
console.log('Max (oldest):', oldest);


//  given an array of photos, get back a unique list of all tags:
var photos=[
	{
		id: 12345,
		tags: ['cat', 'happy', 'evil', 'scratch'],
		title: 'A cat with a plan'
	},
	{
		id: 23456,
		tags: ['cat', 'angry', 'nofood', 'alone'],
		title: "I don't know whos cat this is"
	},
	{
		id: 34567,
		tags: ['cat', 'happy', 'love', 'snuggle'],
		title: 'A cat with a plan'
	}

];
var tags=_.chain(photos).pluck('tags').flatten().uniq().value();
console.log('Photo Tags:', tags);

// also 'shuffle', 'flatten', 'uniq', 'object', 'range', 'debounce', 'keys', 'values', 'extend', 

