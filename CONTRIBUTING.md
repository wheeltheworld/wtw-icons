# How to publish

- make your changes
- run `yarn build-website`
- run `yarn gen:helpers`
- commit your changes
- run `npm version patch` or `npm version minor` or `npm version major` depending on the change
- push your changes
- open a PR
- once merged create a new release on Github

## How to add a new icon

- add a new icon component at `/src/react/_icons/YourIcon.tsx` or add the `svg` to `/src/svgs/your-icon.svg`
- remove the style tag if present and add the properties for the class to the elements that have that class
- run `yarn gen`
