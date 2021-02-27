"use strict";

// Register `bookList` component, along with its associated controller and template
angular.module("bookList").component("bookList", {
  templateUrl: "book-list/book-list.template.html",
  controller: [
    "Book",
    function BookListController($scope) {
      this.books = [
        {
          title: "Ready Player One",
          author: "Ernest Cline",
          publishDate: "2011",
        },
        {
          title: "The Martian",
          author: "Andy Weir",
          publishDate: "2011",
        },
        {
          title: "The Lightning Thief",
          author: "Rick Riordan",
          publishDate: "2005",
        },
        {
          title: "The Sword of Summer",
          author: "Rick Riordan",
          publishDate: "2015",
        },
        {
          title: "The Hidden Oracle",
          author: "Rick Riordan",
          publishDate: "2016",
        },
      ];
      this.error = "";
      this.newBook = { title: "", author: "", publishDate: "" };
      this.addBook = () => {
        if (
          !this.newBook ||
          !this.newBook.title ||
          !this.newBook.author ||
          !this.newBook.publishDate
        ) {
          this.error = "Error: All fields are required";
        } else if (
          this.books.filter(
            (b) =>
              b.title.toLowerCase() === this.newBook.title.toLowerCase() &&
              b.author.toLowerCase() === this.newBook.author.toLowerCase() &&
              b.publishDate.toLowerCase() ===
                this.newBook.publishDate.toLowerCase()
          ).length > 0
        ) {
          this.error = "Error: Book already exists";
        } else {
          this.error = "";
          this.books.push({
            title: this.newBook.title,
            author: this.newBook.author,
            publishDate: this.newBook.publishDate,
          });
          alert(this.newBook.title + " added!");
          this.filterBooks(this.query);
          this.newBook = { title: "", author: "", publishDate: "" };
        }
      };
      this.filteredBooks = this.books;
      this.query = "";
      this.filterBooks = (text) => {
        this.filteredBooks = this.books.filter(
          (b) =>
            b.title.toLowerCase().includes(text.toLowerCase()) ||
            b.author.toLowerCase().includes(text.toLowerCase()) ||
            b.publishDate.toLowerCase().includes(text.toLowerCase())
        );
      };
      this.searchList = () => {
        let list = [];
        for (let index in this.books) {
          if (!list.includes(this.books[index].title)) {
            list.push(this.books[index].title);
          }
          if (!list.includes(this.books[index].author)) {
            list.push(this.books[index].author);
          }
          if (!list.includes(this.books[index].publishDate)) {
            list.push(this.books[index].publishDate);
          }
        }
        return list;
      };
    },
  ],
});
