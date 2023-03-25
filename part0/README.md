Exercise 0.4 - New note diagram:

```mermaid
 sequenceDiagram
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server-->-browser: HTML document

    Note left of server: The server responds with HTTP status code 302
    Note right of browser: The browser reloads the Notes page.
```

Exercise 0.5 - Single page app diagram:

```mermaid
 sequenceDiagram
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->-browser: HTML document

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->-browser: CSS file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->-browser: JavaScript file

    Note right of browser: The JavaScript code makes the next HTTP GET request:

    browser-->+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server->>-browser: [{content: "note1", date: "2023-03-25"}, ...]

    Note right of browser: The browser executes the callback function that renders the notes
```

Exercise 0.6 - New note in Single page app diagram:

```mermaid
 sequenceDiagram
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->-browser: [{content: "New note", date: "2023-03-25"}]

    Note left of server: The server responds with HTTP status code 201
    Note right of browser: The browser stays on the same page
```
