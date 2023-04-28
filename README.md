# Cryptlex Design Tokens
** This project is still in alpha and is bound to break it's API ** 

A style-dictionary project for maintaining assets and design tokens within the Cryptlex organization.

## Description
A developer-first approach to design systems. The organization requires consistent usage of styles and assets across software projects.

Ideally, no changes are required to be made to this repository directly. Figma will be the true source of truth and designers shall use [design-tokens](https://github.com/lukasoppermann/design-tokens) to export tokens to this repository.

This repository will then push those changes automatically to code package managers as per requirement. Currently, we will only publish to npm, as our products are limited to the web platform.

# How to use this package
`npm i @cryptlex/design-tokens`
After the package has been installed in your project, design tokens can be accessed from within JavaScript, SASS, or CSS.

There are two type of tokens in the project so far:
- `ctx-color-*`: These are meant to be used directly in your stylesheets/styling configurations
- `ctx-ref-*`: These are reference values and are used only when defining a color system

## Roadmap
- [] Integrate with Figma
- [] Automate updates in dependent repos

## Acknowledgments
* [style-dictionary](https://github.com/amzn/style-dictionary)
* [design-tokens](https://github.com/lukasoppermann/design-tokens)
* [material-tokens](https://github.com/material-foundation/material-tokens)
