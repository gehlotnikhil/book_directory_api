To Get Book-id: 
run query:  https://bookdirectoryapi-production.up.railway.app/api/book/
then copy book-id

1] Get All Book:
GET:  https://bookdirectoryapi-production.up.railway.app/api/book/

2] Get Specific Book:
GET: https://bookdirectoryapi-production.up.railway.app/api/book/:id
Ex: https://bookdirectoryapi-production.up.railway.app/api/book/663af78d4f22686f1706942a

3] Create a new Book: 
POST: https://bookdirectoryapi-production.up.railway.app/api/book/
json body:
{
  "book_name": "Karl ",
  "description": "This book is about how to enhance study habit",
  "author": "Keval",
  "pages": 150,
  "category": "Science",
  "language": "en",
  "url": "https://greatideasgreatlife.com/book/deep-work/",
  "edition": "Second Edition"
}

4] Make Changes in Book Entry:
PUT: https://bookdirectoryapi-production.up.railway.app/api/book/:id
Ex: https://bookdirectoryapi-production.up.railway.app/api/book/663af78d4f22686f1706942a
json body:
{
    "book_name": "Deep Work 10"
}
Note: able to change any entry such as book_name, description, author, pages, category, language, url, edition.

5] Delete specific book:
DELETE: https://bookdirectoryapi-production.up.railway.app/api/book/:id
Ex: https://bookdirectoryapi-production.up.railway.app/api/book/663b24ae4314eb8ff4a051a6
