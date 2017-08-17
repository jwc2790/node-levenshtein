# Levenshtein distance

## Description

This is a quick proof of concept for some data cleaning.  there is a dataset in the
file `pending_entries.csv` which contains some 70,000 entries that contain both valid
user submissions and bot generated user submissions.  It seems as though the overwhelming
bot strategy is to add a single character to one email and change the position of that character.

For example:

`joe@gmail.com` would also have entries as the following:

`.joe@gmail.com`
`j.oe@gmail.com`
`jo.e@gmail.com`
`joe.@gmail.com`

which while are all valid, is not likely that they are valid entries but rather entries created by bots.

The gaol of this program is to weed out those emails by determining if two strings (in this case emails) are lexographically close.  (i.e maybe one char off from each other?)  This program utilizes the Levenshtein distance algorithm to do that.

## Background

In information theory, Linguistics and computer science, the Levenshtein distance is a string metric for measuring the difference between two sequences. Informally, the Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one word into the other. It is named after Vladimir Levenshtein, who considered this distance in 1965.

Levenshtein distance may also be referred to as edit distance, although that term may also denote a larger family of distance metrics. It is closely related to pairwise string alignments.

## Getting Started

1. `npm i`
2. `node index.js`

## Results / Findings

This is a slow process..

Things we can do to possibly speed up the program:

1. Better Hardware
2. Remove elements from the array as we find them invalid
3. strip down the dataset to just 2 arrays of emails
