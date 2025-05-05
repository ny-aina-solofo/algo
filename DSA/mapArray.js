/*
	The map method transforms an array by applying a function to all of its
	elements and building a new array from the returned values. The new array
	will have the same length as the input array, but its content will have been
	mapped to a new form by the function.
*/

const map = (array,transform) => {
	let mapped = []; 
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

const tasks = [
    {id_task :18,title :"Testing",description :"",id_column :18,subtasks : []},
    {id_task :34,title :"Containerization : Docker",description :"",id_column :19,subtasks :[]}
]

const id_task = 18; 
const newDescription = "azertyuiop"

// const filteringTasks = tasks.filter(t => t.id_task === id_task);
console.log(map(tasks, t => t.id_task !== id_task ? t : {...t,description : newDescription}));
