# nan-lyrics

A simple npm package for fetching lyrics using the Popcat API.

## Installation

```bash
npm install github:Nansess/nan-lyrics
```

## Example

```
const LyricsAPI = require('nan-lyrics');

lyricsApi.getLyrics('sad')
    .then(lyrics => {
        console.log('Lyrics:', lyrics);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
```
