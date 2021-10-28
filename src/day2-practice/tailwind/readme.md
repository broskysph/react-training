## Instructions

1. Beginning, we should install the Tailwind library like this:
```bash
$ npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat 
@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
2. And then we can also install the `craco`, Because CRA doesn’t let you override the PostCSS configuration natively.
```bash
$ npm install @craco/craco
```
3. Don't forget to edit your `package.json` file like this:
```json
{
 // ...
  "scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "start-tail": "craco start",
  "build-tail": "craco build",
  "test-tail": "craco test",
  "eject": "react-scripts eject"
 },
}
```
4. Create a craco configuration to add TailwindCSS as a postcss plugin.
```js
///craco.config.js
module.exports = {
 style: {
  postcss: {
   plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
   ],
  },
 },
}
```
5. Create a CSS file that you can include in your root component and add the following code:
```css
/* ./your-css-folder/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
6. Finnaly, you can use it to your React Component
```js
  return (
    <div className="bg-gray-100 rounded-xl p-8">
      <h2 className="text-lg font-semibold">ToDo</h2>
      <div>
        <Input onChange={this.handleChange} />
        <p className="font-medium color-red-100">{this.state.error}</p>
        <ToDoList value={this.state.display} />
      </div>s
    </div>
  );
```
