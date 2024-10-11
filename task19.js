const toDo = {
    list: {
    "Create a new practice task": "In progress", 
	"Make a bed": "Done", 
	"Write a post": "To Do",  
    "Create the apartment": "To Do",
    },
    changeStatus(task, action)
    {
        this.list[task] = action;
    },
    addTask(task, action)
    {
        this.list[task] = action;
    },
    deleteTask(task)
    {
        delete this.list[task];
    },
    showList()
    {
    console.log("To Do:");
    for(const task in this.list)
    {
        if (this.list[task] === "To Do")
        {
           console.log('\t' + task); 
        }
    }
    console.log("In progress:");
    for(const task in this.list)
    {
        if (this.list[task] === "In progress")
        {
           console.log('\t' + task); 
        }
    }
    console.log("Done:");
    for(const task in this.list)
    { 
        if (this.list[task] === "Done")
        {
            console.log('\t' + task);
        }
    }
    }
};

toDo.addTask('Ride a bike', 'Done');
toDo.addTask('Wash the car', 'To Do');

toDo.changeStatus('Create the apartment', 'Done');

toDo.deleteTask('Write a post');

toDo.showList();