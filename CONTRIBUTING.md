# How to publish

- Make your changes
- Run `yarn build-website`
- Run `yarn gen:helpers`
- Commit your changes
- Run `npm version patch` or `npm version minor` or `npm version major` depending on the change
- Push your changes
- Open a PR
- Once merged create a new release on Github
- Update the package.json file wherever the icon will be used if warranted

# How to run
- Run `yarn storybook` 
- Open http://localhost:6006/?path=/story/wtw-icons-wtwicon--wtw-icon-component
- Search your component name in searchbar


## How to add a new icon

- Convert the svg to jsx by an online tool like https://svg2jsx.com/
- Copy the inner code to the icon component at `/src/react/_icons/YourIcon.tsx` and copy the style of an already published icon
- Remove the style tag if present and add the properties for the class to the elements that have that class
- Add the icon as an import and inside the iconsArray in `/src/react/helpers.ts` and in iconsObject in lowercase
- Add the icon as a default import at `/src/react/icons.ts` 
- run `yarn storybook` to test if the icon renders correctly by going to the WTW Icon Component to the right menu and selecting the name of the 'icon' in the select input in the button menu (also check if changes color when putting a color in the 'color' string input)
