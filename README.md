# Express.js Large Response Crash

This repository demonstrates a common issue in Express.js applications where sending a large response can lead to server crashes. The `bug.js` file contains code that reproduces this problem. The `bugSolution.js` file provides a solution to mitigate this issue.

## Problem

The problem arises when attempting to send a very large amount of data as the response to a client request. Express.js, by default, buffers the entire response in memory before sending it. When the response size exceeds the available memory, the server crashes.

## Solution

The solution involves using streams to send the large response in chunks instead of buffering the entire response in memory at once. This significantly reduces the memory footprint and prevents the server from crashing.