exports = module.exports = function(text){
    text=text.toString().toLowerCase();
    text = text.replace(/[^_a-zA-Z0-9,&\s]+/ig, '');
    text = text.replace(/-/gi, "_");
    text = text.replace(/\s/gi, "_");
    return text;
}