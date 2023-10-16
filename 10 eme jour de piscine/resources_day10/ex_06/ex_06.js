function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task + " done");
        }, timeRequired);
    });
}
async function factory(tasks) {
    const workers = [];
    const taskQueue = tasks.tasks;

    for (const task of taskQueue) {
        const { task: taskName, timeRequired } = task;
        const workerPromise = worker(taskName, timeRequired);
        workers.push(workerPromise);
    }

    for await (const workerPromise of workers) {
        console.log(await workerPromise);
    }
}
let tasks = {
    tasks: [
        {
            task: "Teaching Astronomy",
            timeRequired: 500,
        },
        {
            task: "Refill fuel",
            timeRequired: 1500,
        },
        {
            task: "Repair module",
            timeRequired: 1000,
        },
    ],
};

worker("Going to work", 1000).then((value) => {
    console.log(value);
});

factory(tasks);
