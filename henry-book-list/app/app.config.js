"use strict";

angular.module("henryBookApp").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/books", {
        template: "<book-list></book-list>",
      })
      .otherwise("/books");
  },
]);
