// ==UserScript==
// @name         Dark mode google translate
// @namespace    w-e-w
// @version      1.0
// @description  Daark mode for google translate using custom css
// @author       w-e-w
// @match        https://translate.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // soruce https://github.com/Wiktor102/google-translate-dark-mode/blob/9578f78435715bef4d88329d56aa3f43b1f0ce60/darkmode.css
    const customCSS = `
body {
    color-scheme: dark !important;
}

body > c-wiz {
    background-color: #202020 !important;
}

body > c-wiz button * {
    color: #62a6f3 !important;
}

header {
    background-color: #202020 !important;
    border-color: #363636 !important;
}

header svg {
    color: #9c9c9c !important;
}

header [role=navigation] {
    background-color: #202020 !important;
    color: #edeeee !important;
}

.cWQYBc button {
    border-radius: 999px;
    border-color: #363636 !important;
    overflow: hidden;
}

/* Tab list (inner element with with languages) */
[jsname=TfBVbe] {
    /* margin-right: 1rem; */
}

/* Weird, invisible shadow-like gradients*/
.U0xwnf::after,
.X4DQ0::after,
.GAyS9e {
    display: none;
}

/* Main container */
[jsname=gnoFo] > c-wiz > div:nth-child(2) {
    padding-inline: 1rem;
    background-color: #363636;
    border-radius: 10px;
}

/* Main container footer */
[jsname=gnoFo] > c-wiz [jscontroller=ModSgb] {

}

textarea {
    color: #eee !important;
}

/* Textarea container panel */
.OPPzxe > c-wiz {
    background-color: #202020 !important;
    border-radius: 10px;
}

.ZTPlmc {
    color: #7a7a7a !important;
}

/* Translation result inner container divs */
[jscontroller=CTfTTd] > div,
[jscontroller=CTfTTd] ol > div {
    background-color: #202020 !important;
}

[jscontroller=CTfTTd] > div:nth-of-type(2),
[jscontroller=CTfTTd] > div:nth-of-type(2) > div:not(:first-child),
.Bljmlb {
    border-color: #363636 !important;
}

/* Translation result text container */
.lRu31 {
    color: #edeeee !important;
}

.jq25U {
    color: #9c9c9c !important;
}

.lRu31 > span:first-child > span { /* This is the highlight on the result side */
    padding-inline: 0.2em;
    transition: background-color 200ms;
    border-radius: 5px;
}

.Xcmxjb.FwR7Pc { /* This is the highlight in the textarea */
    padding-inline: 0.2em;
    border-radius: 5px;
    margin-left: -5px;
}

.U8K5nb {
    background-color: #363636 !important;
    color: #edeeee !important;
}


.lRu31 > span:first-child > span:hover,
.Xcmxjb.FwR7Pc {
    background-color: #62a6f3 !important;
}

/* See dictionary buttons */
a[href=\.\/details] {
    color: #7a7a7a !important;
}


.VlPnLc a svg {
    transition: color 200ms;
    color: #7a7a7a;
}

.VlPnLc a:hover svg {
    color: #62a6f3;
}

.VlPnLc a > div:first-child {
    background-color: #363636;
}

.VlPnLc a > div:nth-child(2) {
    color: #fff;
}
    `;
    const style = document.createElement('style');
    style.textContent = customCSS;
    document.head.appendChild(style);
})();
