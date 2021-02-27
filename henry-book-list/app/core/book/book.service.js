"use strict";

angular.module("core.book").factory("Book", [
  "$resource",
  function ($resource) {
    return $resource(
      "books/books.json",
      {},
      {
        query: {
          method: "GET",
          isArray: true,
        },
        add: {
          method: "POST",
        },
      }
    );
  },
]);
