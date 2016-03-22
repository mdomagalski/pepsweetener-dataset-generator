# glycopeptide-dataset-generator

> Element generating custom glycopeptide dataset from list of peptides and list of glycans,
> used as a first step of an advanced search feature.

## Usage

1. Import polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ```

2. Import custom element:

    ```html
    <link rel="import" href="bower_components/glycopeptide-xml-exporter/glycopeptide-dataset-generator.html">
    ```

3. Start using it!

    ```html
    <glycopeptide-dataset-genrator></glycopeptide-dataset-generator>
    ```

## Options

Attribute      | Options     | Default      | Description
---            | ---         | ---          | ---
`datasetID`    | *string*    | ``           | unique dataset identifier
`peptides`     | *list*      | []           | submitted list of peptides
`glycans`      | *list*      | []           | submitted list of glycans
`glycopeptides`| *array*     | {}           | output glycopeptide dataset

## Methods

Method                       | Parameters   | Returns     | Description
---                          | ---          | ---         | ---
`generate()`                 | None.        | Nothing.    | Parses lists of peptides and glycans calls combinePeptidesAndGlycans()
`combinePeptidesAndGlycans()`| None.        | Nothing.    | Combines submitted peptides and glycans and calculates glycopeptide masses

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

    ```sh
    $ npm install -g bower polyserve
    ```

2. Install local dependencies:

    ```sh
    $ bower install
    ```

3. Start development server and open `http://localhost:8080/components/glycopeptide-dataset-generator/`.

    ```sh
    $ polyserve
    ```

## History

For detailed changelog, check [Releases](https://bitbucket.org/sib-pig/glycopeptide-dataset-generator/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
