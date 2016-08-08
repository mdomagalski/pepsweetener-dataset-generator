# pepsweetener-dataset-generator

> Element generating custom glycopeptide dataset from list of peptides and list of glycans,
> used as a first step of an advanced search feature.

## Usage

1. Import polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ```

2. Import custom element:

    ```html
    <link rel="import" href="bower_components/pepsweetener-dataset-generator/pepsweetener-dataset-generator.html">
    ```

3. Start using it!

    ```html
    <pepsweetener-dataset-generator></pepsweetener-dataset-generator>
    ```

## Options

Attribute      | Options     | Default      | Description
---            | ---         | ---          | ---
`peptideInput` | *string*    | ""           | type of peptide input: "digest" or "upload"
`glycanInput`  | *string*    | ""           | type of glycan input: "unicarbKBNGlycan" or "unicarbKBAll" or "upload"
`proteinSequence`| *string*  |              | data binding on protein-digester proteinSequence property
`peptides`     | *list*      | []           | submitted list of peptides
`glycans`      | *list*      | []           | submitted list of glycans
`sites`        | *array*     | {}           | list of sites used to filter peptides in peptide digester
`nSitesFilter` | *boolean*   | {}           | if true only N-site motif containing peptides are retained
`oSitesFilter` | *boolean*   | {}           | if true only peptides with S or T residues are retained
`fixedModifications`| *array*| {}           | array with definition of selected modifications
`glycopeptides`| *array*     | {}           | output glycopeptide dataset
`combinationLimit`| *integer*|   10000000   | maximum number of combinations

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

3. Start development server and open `http://localhost:8080/components/pepsweetener-dataset-generator/`.

    ```sh
    $ polyserve
    ```

## License

[MIT License](http://opensource.org/licenses/MIT)
