// Callback Hell Problem statement how it causes

function asyncFunction1(callback) {
    setTimeout(() => {
      console.log("Receives request from the user.");
      callback();
    }, 100);
  }

  function asyncFunction2(callback) {
    setTimeout(() => {
      console.log("Authenticate the user.");
      callback();
    }, 100);
  }

  function asyncFunction3(callback) {
    setTimeout(() => {
      console.log("Check authorization level of user to perform an action.");
      callback();
    }, 100);
  }

  function asyncFunction4(callback) {
    setTimeout(() => {
      console.log("Perform the action.");
      callback();
    }, 100);
  }

  function asyncFunction5(callback) {
    setTimeout(() => {
      console.log("Send Notification E-mail.");
      callback();
    }, 100);
  }

  function asyncFunction6(callback) {
    setTimeout(() => {
      console.log("Send response back to the user browser.");
      callback();
    }, 100);
  }

// Triangle which has appeared in the code is not readable and doesn't execute properly
  asyncFunction1(() => {
    asyncFunction2(() => {
      asyncFunction3(() => {
        asyncFunction4(() => {
          asyncFunction5(() => {
            asyncFunction6(() => {
              console.log("All Async Functions Completed");
            });
          });          
        });
      });
    });
  });