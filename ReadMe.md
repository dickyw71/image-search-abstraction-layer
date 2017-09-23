# Image Search abstraction layer

### User stories

- User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

- User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.

- User Story: I can get a list of the most recently submitted search strings.

### Design notes

### To-do
- parse the search params from url
~~- Call google custom search with API key~~ 
- return an object containing properties 'imgUrl', 'altText' and 'pageUrl'