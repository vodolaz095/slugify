var assert = require('assert'),
    vows = require('vows'),
    slugify = require('./../index.js').slugify;

vows.describe('The model test')
    .addBatch({
        'Testing sluggify':{
            topic:[
                {text:"I'm filling lucky", result:'im_filling_lucky'},
                {text:"I'm filling lucky!", result:'im_filling_lucky'},
                {text:"I'm filling lucky?", result:'im_filling_lucky'},
                {text:"I'm filling lucky!!!", result:'im_filling_lucky'},
                {text:"I'm filling lucky???", result:'im_filling_lucky'},
                {text:"I am filling lucky???", result:'i_am_filling_lucky'},
                {text:"I am filling lucky???", result:'i_am_filling_lucky'},
                {text:"I am filling lucky111", result:'i_am_filling_lucky111'}
            ],
            'running for every case':function (topic) {
                for (var i = 0; i < topic.length; i++) {
                    assert.equal(slugify(topic[i].text), topic[i].result,
                        'ERROR! ' + slugify(topic[i].text) + ' != ' + topic[i].result);
                }
            }
        }
    })
    .run();
