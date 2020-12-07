let url = require("url")
let data = require('./pages.json');
let isporncallback = require('is-porn');
let { promisify } = require('util');
let isPorn = promisify(isporncallback);
let dataIP = require('./pagesip.json')
module.exports.check = async(link) =>{
    let parsedUrl = url.parse(link);
    let host = parsedUrl.host || parsedUrl.pathname.trim().split("/")[0];
    if(host in data) return true;
    let thing = host.split(".");
    let check1 = thing.slice(thing.length - 2).join(".");
    let check2 = "www." + check1;
    if(check2 in data) return true;
    if(!host.startsWith('www.')) host = `www.${host}`;
    if(host in data) return true;
    if(!host in data) return false
    if(host in dataIP) return 'yes'
    if(!host in dataIP) return 'no'
 }