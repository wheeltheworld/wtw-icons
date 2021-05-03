# How to publish

-   make your changes
-   run `yarn gen:helpers`
-   run `yarn build-website`
-   commit your changes
-   run `npm version patch` or `npm version minor` or `npm version major` depending on the change
-   push your changes
-   open a PR
-   once merged create a new realease on github

## How to add a new icon

- add the svg to /src/svgs/your-icon.svg
- remove the style tag if present and add the properties fo the class to the elements that have that class
- run yarn gen