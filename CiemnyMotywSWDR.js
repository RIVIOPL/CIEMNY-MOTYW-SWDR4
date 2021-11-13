// ==UserScript==
// @name         Ciemny Motyw dla td2 (WWW)
// @namespace    https://greasyfork.org/pl/scripts/416034-ciemny-motyw-dla-td2-www
// @version      6.3 (OFFICIAL)
// @description  ciemny motyw dla td2.info.pl Autor RIVIO @2021
// @author       RIVIO @2021
// @match        https://rj.td2.info.pl/*
// @run-at       document-end
// ==/UserScript==
/*------------------------------------------------------------------------------*/
/*NIE MODYFIKUJEMY bez zgody autora(w celu naprawy zgłoś się do autora skryptu)*/

/*---------------------------  Skrypt  ----------------------------*/
                       (function() {var css = [

/*---------------------------  Główne  ----------------------------*/


	"body, .login-page, .register-page, .content, .content-wrapper, .bg-white, content-wrapper swdrMainWindow {",
    "    background: #fffff; ",
    "    background-color: #fffff !important; ",
    "}",
    " .col, .panel-default>.panel-heading+.panel-collapse>.panel-body, .panel-default>.panel-heading, .login-box-body, .register-box-body, .table-striped>tbody>tr:nth-of-type(odd), .box, .box-footer, .modal-body, .modal-footer, .modal-content, td.editorTD, tbody#editorMainObject, swdrCenterTable table-hover, .swdrCenterTable th {",
    "    background-color: #212121 !important; ",
    "}",
    ".form-control, .ui-menu, .dropup .dropdown-menu, select, .dropdown-menu, .dropdown-menu>li {",
    "    background-color: #313131 !important; ",
    "}",
    ".darkBorder {",
    "    background-color: #1b1b1b !important; ",
    "}",

/*-----------------------  Rozkłady Jazdy  ------------------------*/

    "a[class|='navbar-brand'] {",
    "    color: #fff !important;",
    "}",
    "a .navbar-brand{",
    "    color: fff !important;",
    "}",
    "tr[style|='background-color:#3c3c3c;color:white'] {",
    "    background-color: #42000080 !important;",
    "}",
    "tr[style|='background-color:lightgray;'] {",
    "    background-color: #00420180 !important;",
    "}",
    "tr[style|='background-color:white;'] {",
    "    background-color: #1a1a1a !important;",
    "}",
    "tr[style|='background-color: 3c3c3c color:white'] {",
    "    background-color: #42000080 !important;",
    "}",
    "tr[style|='background-color: lightgray'] {",
    "    background-color: #00420180 !important;",
    "}",
    "tr[style|='background-color: white'] {",
    "    background-color: #1a1a1a !important;",
    "}",
    "/* .swdrCenterTable>tbody>tr {",
    "    background-color: #292929 !important;",
    "}*/",
    ".context-menu-item.context-menu-hover {",
    "    background-color: #353535 !important;",
    "}",
    ".context-menu-item {",
    "    color: #fff !important;",
    "}",
    ".context-menu-list {",
    "    background-color: #292929 !important;",
    "}",
    ".table-hover > tbody > tr:hover {",
    "    background-color: #262626 !important;",
    "}",
    ".manualTTLines>li {",
    "    color: #fff;",
    "}",
    ".manualTTLines>li {",
    "    background-color: #262626 !important;",
    "}",
    "#timetableErrorsMan>ul>li {",
    "    background-color: #dd4b39 !important;",
    "}",
    ".context-menu-item.context-menu-submenu, .context-menu-item {",
    "    background: #212121",
    "}",

/*-------------------  do zmiany  --------------------*/

    "body, .login-logo, .register-logo, .login-box-body, .btn-danger, .btn-primary, .form-control, .close, tbody#swdrMainDispatchersTab>tr>td, tbody#swdrMainDriversTab>tr>td, table#ttTimeConfirmTable>tbody>tr>td, div.table-responsive.col-xs-12>table>tbody>tr>td,.h1, #swdrSettingsModal.modal.fade.in>.modal-dialog.modal-lg>.modal-content>.modal-body>.table.swdrCenterTable>tbody>tr>td, .swdrCenterTable.table-hover.swdrTimeTable>thead>tr, .swdrCenterTable.table-hover.swdrTimeTable>tbody>tr, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {",
    "    color: #fff !important;",
    "}",
    ".login-box-msg, .register-box-msg {",
    "    color: #f00 !important;",
    "}",
    "a {",
    "    color: #3c8dbc !important;",
    "}",
    " tr.cPointer.timetableMenuTrigger, .table-responsive>tbody>tr>td, .table.swdrCenterTable>tbody>tr>td {",
    "    color: #fff !important;",
    "}",
    " .jumbotron.text-center, .jumbotron .h1, .jumbotron h1 {",
    "    color: #444 !important;",
    "}",
    ".box-footer, .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {",
    "    border-top: 1px solid #212121 !important;",
    "}",
    ".box-header.with-border {",
    "    border-bottom: 1px solid #212121 !important;",
    "}",
    "div.direct-chat-text {",
    "    border: 1px solid #ffffff00;",
    "    background: #313131;",
    "    color: #fff;",
    "}",
    ".direct-chat-text:after, .direct-chat-text:before {",
    "    border-right-color: #313131;",
    "}",
    ".direct-chat-text.bg-green:after, direct-chat-text.bg-green:before {",
    "    border-right-color: #00a65a;",
    "}",
    ".direct-chat-text.bg-darkgreen:after, direct-chat-text.bg-darkgreen:before {",
    "    border-right-color: #006400;",
    "}",
    ".direct-chat-text.bg-red:after, direct-chat-text.bg-red:before {",
    "    border-right-color: #dd4b39;",
    "}",

/*----------------------  przewijak  ---------------------*/

	" ::-webkit-scrollbar {",
	"    width: 10px!important;",
	"    height: 10px!important;",
	"}",
	"::-webkit-scrollbar-button {",
	"    width: 0px!important;",
	"    height: 0px!important;",
	"}",
	"::-webkit-scrollbar-thumb {",
	"    background: #6c6c6c!important;",
	"    border: none!important;",
	"    border-radius: 0px!important;",
	"}",
	"::-webkit-scrollbar-thumb:hover {",
	"    background: #6c6c6c!important;",
	"}",
	"::-webkit-scrollbar-thumb:active {",
	"    background: #7d7d7d!important;",
	"}",
	"::-webkit-scrollbar-track {",
	"    background: #313131!important;",
	"    border: none!important;",
	"    border-radius: 0px!important;",
	"}",
	"::-webkit-scrollbar-track:hover {",
	"    background: #333333!important;",
	"}",
	"::-webkit-scrollbar-track:active {",
	"    background: #4d4d4d!important;",
	"}",
	"::-webkit-scrollbar-corner {",
	"    background: transparent!important;",
	"}",

/*------------------  Tworzenie elementu skryptu  ---------------------*/

    ].join("\n");
      if (typeof GM_addStyle != "undefined") {
	    GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
	    PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
	    addStyle(css);
    } else {
	    var node = document.createElement("style");
	    node.type = "text/css";
	    node.appendChild(document.createTextNode(css));
	    var heads = document.getElementsByTagName("head");
	       if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		document.documentElement.appendChild(node);
	       }
       }
    })();

/*----------------------------  Dzwięki  -----------------------------*/

    $("audio#chatPMAudioPlayer").replaceWith(`<audio id="chatPMAudioPlayer"><source src="https://www.dropbox.com/s/oauu6ysm0pghzoz/Czat%20publiczny.mp3?raw=1" type="audio/mp3"><source src="https://www.dropbox.com/s/nj9cfdmbrcbngbp/Czat%20publiczny.flac?raw=1" type="audio/flac"></audio>`); $("audio#chatDMAudioPlayer").replaceWith(`<audio id="chatDMAudioPlayer"><source src="https://www.dropbox.com/s/p27vqrv24s52phs/Czatprywatny.mp3?raw=1" type="audio/mp3"><source src="https://www.dropbox.com/s/cqgpyv36theohpw/Czatprywatny.flac?raw=1" type="audio/flac"></audio>`);

/*---------------------  DODATKI WYDARZENIOWE  ------------------------*/
                        (function() {var css = [

    /* Wydarzenia (1/2) */

/*---------------------------  Halloween  -----------------------------*/

/*
    "body.hold-transition.login-page, div.content-wrapper.swdrMainWindow, div.content-wrapper.swdrLoaderWindow, section.content {",
    "    background-image: url('https://img.td2.info.pl:8448/images/2021/10/20/ghost1.png') !important;",
    "    animation: halloween 0s linear infinite;",
    "    height: 500px;",
    "}",
    "@keyframes halloween {",
    "   0% {background-position: 0px 1000px, 0px 0px, 0px 0px;}",
    "   100% {background-position: 0px 0px, 0px 0px, 0px 0px;}",
    "}",
    "@-webkit-keyframes halloween {",
    "   0% {background-position: 0px 1000px, 0px 0px, 0px 0px;}",
    "   100% {background-position: 0px 0px, 0px 0px, 0px 0px;}",
    "}",
*/

/*----------------------------  Swieta  ------------------------------*/

/*
    "body.hold-transition.login-page, div.content-wrapper.swdrMainWindow, div.content-wrapper.swdrLoaderWindow, section.content {",
    "    background-image: url('https://img.td2.info.pl/images/2020/12/11/snow1.png'), url('https://img.td2.info.pl/images/2020/12/11/snow2.png'), url('https://img.td2.info.pl/images/2020/12/11/snow3.png') !important;",
    "    animation: snow 30s linear infinite;",
    "}",
    "@keyframes snow {",
    "     0% {transform: translate3d(var(--left-ini), 0, 0);}",
    "   100% {transform: translate3d(var(--left-end), 0, 110vh);}",
    "}",
*/
/*---------------------------------------------------------------------*/
    /* Tworzenie elementu skryptu */

   ].join("\n");
      if (typeof GM_addStyle != "undefined") {
	    GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
	    PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
	    addStyle(css);
    } else {
	    var node = document.createElement("style");
	    node.type = "text/css";
	    node.appendChild(document.createTextNode(css));
	    var heads = document.getElementsByTagName("head");
	       if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		document.documentElement.appendChild(node);
	       }
       }
    })();

/*---------------------------------------------------------------------*/

    /* Wydarzenia (2/2) */

/*---------------------------  Halloween  -----------------------------*/

/*
    setTimeout(function(){
    $("div.login-logo").append ( `
       <p style="margin: 10 auto">
           <div id="HalloweenGrafika">
               <img src="https://img.td2.info.pl:8448/images/2021/10/20/HappyHalloween2.png" width="300">
           </div>
       </p>
    ` );
    $("div.login-logo").show("fast"); }, 0);
*/

/*----------------------------  Swieta  ------------------------------*/

/*
    setTimeout(function(){
    $("div.login-logo").prepend ( `
       <p style="margin: 10 auto">
           <div id="SwietaGrafika">
               <img src="https://img.td2.info.pl:8448/images/2021/11/05/WesolychSwiat2.png" width="300">
           </div>
       </p>
    ` );
    $("div.login-logo").show("fast"); }, 0);
    $("audio#signalBlockEAPAudioPlayer").replaceWith(`<audio id="signalBlockEAPAudioPlayer"><source src="https://www.dropbox.com/s/hd1besebctxv66f/Blokada.mp3?raw=1" type="audio/mp3"><source src="https://www.dropbox.com/s/9f06ilhm427xuoi/Blokada.flac?raw=1" type="audio/flac"></audio>`);
*/
