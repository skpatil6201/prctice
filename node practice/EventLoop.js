// event loop can handle callbacks, promises, and async/await in a single-threaded environment by using a queue to manage the execution of asynchronous tasks. 
// When an asynchronous operation is initiated, it is added to the event loop's queue. The event loop continuously checks the queue for tasks to execute and 
// processes them one at a time. This allows the main thread to remain responsive while waiting for asynchronous operations to complete, preventing blocking behavior and
//  enabling efficient handling of multiple tasks concurrently.

// event loop help to handle every reqquest come from client and process it one by one. 
// It is a single thread that runs in the background and handles all the asynchronous operations in Node.js.

// js is a single threade so all async operation can see eventloop