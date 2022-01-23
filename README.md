# Introduction
- This project is completed with [TheOdinProject's instructions](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/tic-tac-toe). 
- [Live Preview](https://talipakcelik.github.io/tic-tac-toe/)
- Read this and detailed walkthrough summary in [Turkish](https://github.com/talipakcelik/tic-tac-toe/blob/main/README.tr.md).
- **Note**: The following articles may contain spoilers about the content of the project.

## Key Point Summary
### Brain dumps and walktrough
- The most challenging part during the *brain dump* and *pseudo code* was the idea of the board. I thought it would be an array and there would be "X" or "O" or players' marker in this array. 
  - each player at their turn, the marker they choose from this array will be printed on the screen.
  - then also a board array which stores the player selections respectively.
- The thing I missed at this point was the **factory function**.
  - whereas a fixed marker was set for each player before the game started. for example;
    ```js
      let players = [
    playerCreator("Gandalf", "X", true),
    playerCreator("Sauron", "O", false),
    ];
    ```
  - thus two different players were created, with their own markers. 
- one empty `gameBoard` array for restart the game and clear screen board and one `storeBoard` array for stores the player selections in itself indexes. 
  - the coordinate (*not 2d but 1d array, with dynamically board cell id number*) of the board on the screen and the player selection in this coordinate.
  - then to store the marker in the coordinate of the place where the player clicked in the array according to the index number.
  - finally, switch player, check win, check draw and so on...

### What I learned, in theory
- factory functions, module pattern and IIFE
  -  "*instead of creating a factory that we can use over and over again to create multiple objects, the module pattern wraps the factory in IIFE*"[^1]
  -  *the primary reason to use an IIFE is to obtain data privacy.*
  -  *write a function, wrap it in parentheses, and then immediately call the function by adding () to the end of it.*[^1]
  -  __the problem of factory function itself is__, for example, when we create many objects with factory function, we write the same function in each object.
      - so performance problem?
- closure and close over
  - *"the inner function will have access to the outer function's variables as long as it needs them, even if the outer function has finished executing"* and *"a function inside another function is not a closure unless it refers to a variable declared in the enclosing scope."*[^2]
  - for example, this tic-tac-toe project created with factory function and module pattern, and also of course IIFE. 
     ```js
    const Tttgame = (function () {
      let activePlayer = players[0];
         
      const displayController = function () {
        board.addEventListener("click", function (e) {
          e.target.textContent = activePlayer.mark;
        });
      };
      return { displayController };
    })();
     ```
     - although this function is in a module pattern and IIFE, when I call this function, the reason it works the way I want is because of the **closure**. the event listener's call back function continues to run even after the main function has finished executing.
- [.every()](https://devdocs.io/javascript/global_objects/array/every) method worked very well for checking win condition

### Thoughts on refactoring 
- create an Al
  - using the minimax algorithm

[^1]: https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern
[^2]: https://www.reddit.com/r/webdev/comments/2u7dsd/articulating_what_a_javascript_closure_is/
