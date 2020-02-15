# Sketch Preview Loader

> A webpack loader for `.sketch` files that loads previews

Table of contents:

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Roadmap](#roadmap)
- [Inspiration](#inspiration)

## Installation

To use the loader install it from NPM by doing:

```
$ npm install sketch-preview-loader --save-dev
```

## Usage

You first have to use add the loader rule to you **`webpack.config.js`**. You have to chain the [`file-loader`](https://github.com/webpack-contrib/file-loader) loader before the `sketch-preview-loader`, see below an example:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(sketch)$/i,
        use: [
          'file-loader',
          {
            loader: 'sketch-preview-loader',
          },
        ],
      },
    ],
  },
};
```

Once you have got the loader setup you can import sketch files. Here is an example of how to load a sketch file and render it as an `img`

```js
import myDesignSrc from './design.sketch';

const MySketchPreview = () => (
  <div>
    <img src={myDesignSrc} />
  </div>
);
```

## Example

To see a working example go into the [`example` directory](/example). You can run the example from the root by running:

```
npm run example
```

## Roadmap

There is a list of features that I would like to add eventually. A non-exhaustive list of future imporvements:

- Expose metadata
- Add working tests
- Make the image file have a non `.sketch` extension
- Make the loader chain with an image file loader for optimitations

## Inspiration

- [`sketch-loader`](https://github.com/xaviervia/sketch-loader) is a great loader for loading the information encoded in a sketch file as a javascript object. However, it does not load the previews.
- This [gist](https://gist.github.com/JoelBesada/fc20060741342e8a5f15208401e4308d) is an excellent explanation of how to get the information out of a sketch file
- The [webpack docs](https://webpack.js.org/contribute/writing-a-loader/) do a really good job of explaning how to write a loader
- [`file-loader`](https://github.com/webpack-contrib/file-loader) was a really good starting point for a first loader
