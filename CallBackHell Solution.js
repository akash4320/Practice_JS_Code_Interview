
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Receives request from the user.");
            resolve();
        }, 100);
    })
}

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Authenticate the user.");
            resolve();
        }, 100);
    })
}

function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Check authorization level of user to perform an action.");
            resolve();
        }, 100);
    })
}

function asyncFunction4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Perform the action.");
            resolve();
        }, 100);
    })
}

function asyncFunction5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Send Notification E-mail.");
            resolve();
        }, 100);
    })
}

function asyncFunction6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Send response back to the user browser.");
            resolve();
        }, 100);
    })
}

// Even this approach is wrong to Resolve as solution
asyncFunction1().then(() => {
    asyncFunction2().then(() => {
        asyncFunction3().then(() => {
            asyncFunction4().then(() => {
                asyncFunction5().then(() => {
                    asyncFunction6().then(() => {
                        console.log("All Async Functions Completed");
                    });
                });
            });
        });
    });
});

// This approach of promise handling is better and readability
asyncFunction1()
    .then(() => asyncFunction2())
    .then(() => asyncFunction3())
    .then(() => asyncFunction4())
    .then(() => asyncFunction5())
    .then(() => asyncFunction6())
    .then(() => console.log("All Async Functions Completed"));

// This approach is using Async-Await 
async function executeFunc() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
    await asyncFunction4();
    await asyncFunction5();
    await asyncFunction6();
    console.log("All Async Functions Completed")
}