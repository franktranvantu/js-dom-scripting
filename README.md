When a browser "reads" through an HTML page, any JavaScript it encounters is run as soon as the browser sees it. 

If JavaScript is written at the top of the document, it can fail if the browser hasn't seen the elements it refers to yet.

We can use the DOMContentLoaded event to solve this issue.