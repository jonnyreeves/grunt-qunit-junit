/*
 * grunt-qunit-junit
 * https://github.com/sbrandwoo/grunt-qunit-junit
 *
 * Copyright (c) 2012 Stephen Brandwood
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('underscore');
var exec = require('child_process').exec;
var path = require('path');

function HtmlReporter(options) {
    this.stylesheetFile = path.join(__dirname, 'xsl', 'junit-noframes.xsl');
}

_.extend(HtmlReporter.prototype, {
    generateReport: function (xmlReportFile, destFile, callback) {
        var args = [];
        args.push(this.stylesheetFile);
        args.push(xmlReportFile);
        args.push('--output', destFile);

        exec('xsltproc ' + args.join(' '), function (err, stdout, stderr) {
            callback(err);
        });
    }
});

module.exports = HtmlReporter;