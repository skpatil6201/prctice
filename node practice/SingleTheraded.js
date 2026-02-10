// single threaded means that the code is executed in a single sequence, one line at a time. In a single-threaded environment, 
// only one operation can be performed at a time, and the next operation will not start until the current one is completed.
//  This can lead to blocking behavior if a long-running operation is being executed, as it will prevent other operations from being processed until it finishes.
//  However, single-threaded environments can still handle asynchronous operations using callbacks, promises, or async/await to avoid blocking the main thread.