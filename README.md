Slugify
=======

NodeJS module to sluggify strings. It creates a Human Readable Url from string.
Slug is a part of an URL which identifies a page using human-readable keywords, but the special characters are removed.

Usage
=======

    var slugify=require('slugify').slugify;
    console.log(slugify("I'm filling lucky"));
      //=>'im_filling_lucky'
    console.log(slugify("I'm filling lucky!"));
      //=>'im_filling_lucky'
    console.log(slugify("I'm filling lucky?"));
      //=>'im_filling_lucky'
    console.log(slugify("I'm filling lucky!!!"));
      //=>'im_filling_lucky'
    console.log(slugify("I'm filling lucky"));
      //=>'im_filling_lucky'
    console.log(slugify("I'm filling lucky"));
      //=>'im_filling_lucky'
    console.log(slugify("I am filling lucky!!!"));
      //=>'i_am_filling_lucky'
    console.log(slugify("I am filling lucky???"));
      //=>'i_am_filling_lucky'
    console.log(slugify("I am filling lucky111"));
      //=>'i_am_filling_lucky111'


Tests
=======
Install vows first

    $ npm install vows
    $ npm test

Build status - [![Build Status](https://travis-ci.org/vodolaz095/slugify.png?branch=master)](https://travis-ci.org/vodolaz095/slugify)

## Credits

  - [Ostroumov Anatolij](https://github.com/vodolaz095)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Ostroumov Anatolij <[http://teksi.ru/resume/](http://teksi.ru/resume/)>


