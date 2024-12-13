# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in a request handler can block the event loop, causing the server to become unresponsive.  The `server.js` file contains the problematic code.  The solution is provided in `serverSolution.js`.

## Problem

The server uses a `while` loop to simulate a long-running task, which ties up the event loop. While this is a contrived example, similar issues can arise from database operations, file I/O, or network requests handled synchronously.