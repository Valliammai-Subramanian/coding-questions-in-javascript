# coding-questions-in-javascript
Programming trivia with answers in Javascript

## Info
In this post, we will answer several programming challenge questions in Javascript. For easy testing of our single-file solutions, simply copy the entire source code and paste it into an online coding tool such as Coderpad at [https://coderpad.io/sandbox].

## Code
The repository [https://github.com/Valliammai-Subramanian/coding-questions-in-javascript] contains the Javascript solution codes.

## Questions
More programming challenge questions in Javascript will be added as time permits. Let me know if there is any particular problem you would like to have solved here.

Implement a client side caching layer using Javascript. The caching layer should be created as a "Cache" class with methods that call the API only when specific requirements are met, and return the cached response data.

## Requirements
1. The <b>Cache</b> class should contain two public methods:
    <b>get(identifier, force)</b> returns data from the API, <b>identifier</b> (string): identifier of the fetched content; <b>force</b> (Boolean): optional value that, if set to <b>true</b>, states that the data must be fetched.
    <b>setCacheRefresh(ttl)</b> sets the cache refresh time, <b>ttl</b> (number): indicates the time when data stored in the cache is considered state (in <b>as</b>). The default <b>ttl</b> value should be <b>1000ms</b>.

2. The constructor of the <b>Cache</b> class accepts one parameter which is an instance of the API service.

3. To fetch data from an API call, the asynchronous method <b>fetch(identifier)</b> from the <b>ApiService</b> class is injected in the <b>Cache</b> constructor. It returns an object with one property: <b>data</b>.

4. The data should be fetched according to the following rules:

    If no data has been fetched for the given <b>identifier</b>, the data should be fetched from <b>ApiService</b>, the response returned and the new property <b>status</b> added, set to <b>Fresh</b>;
    If data has previously been fetched for the given <b>identifier</b>: If the cached content has been in the cache for a longer period than <b>ttl</b>, or <b>force</b> is set to <b>true</b>, call the API and return the response with the <b>status</b> property set to <b>Fresh</b>; otherwise return the cached response with the <b>status</b> property set to <b>Cached</b>.

## Assumptions
The <b>fetch</b> method from <b>ApiService</b> returns unique data for different <b>identifiers</b>.

## Hints
Do not change the wat the class is exported.
For the method names, follow the naming conventions described above.
You can assume that the API never fails.

Link to solution [https://github.com/Valliammai-Subramanian/coding-questions-in-javascript/tree/main/Caching].