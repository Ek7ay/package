// 延时函数
function timeout(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}

class SuperTask {
    constructor(parallelCount = 2) {
        this.parallelCount = parallelCount;  //并发数量
        this.runningCount = 0;  //正在运行的任务数量
        this.tasks = []  //任务列表 
    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            });
            this._run();
        })
    }

    _run() {
        while (this.runningCount < this.parallelCount && this.tasks.length) {
            const { task, resolve, reject } = this.tasks.shift();
            this.runningCount++;
            task()
                .then(resolve, reject)
                .finally(() => {
                    this.runningCount--;
                    this._run();
                })
        }
    }
}

const superTask = new SuperTask()

//辅助函数
export const addTask = (time, name) => {
    superTask
        .add(() => timeout(time))
        .then(() => {
            console.log(`任务${name}完成`)
        })
}