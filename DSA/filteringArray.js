/*
	To find the scripts in the data set that are still in use, the following function might be helpful. 
	It filters out the elements in an array that don’t pass a test.
*/

const filter = (array,test) => {
	let passed = []; 
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

const tasks = [
    {id_task :18,title :"Testing",description :"",id_column :18,subtasks : []},
    {id_task :34,title :"Containerization : Docker",description :"",id_column :19,subtasks :[]}
]

let id_task = 34;
console.log(filter(tasks, t => t.id_task !== id_task));
