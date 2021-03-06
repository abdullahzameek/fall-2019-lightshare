import React from 'react';
import ReactDOM from 'react-dom';
import Article from '../components/Article';
import { markdown2html } from '../components/Article';

it('converts markdown to html', () => {

    const dummyMarkdown = `# Hello
This is some markdown test

## This markdown test should render properly
These are some bullet points
- Hello!
- Welcome!
`
expect(markdown2html(dummyMarkdown)).toMatchSnapshot()

});