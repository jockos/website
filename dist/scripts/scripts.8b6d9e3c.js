"use strict";angular.module("apiPlatformWebsite",["ngSanitize","ui.router","duScroll","ui.bootstrap"]).value("duScrollOffset",80).config(["$locationProvider","$stateProvider","$urlRouterProvider",function(a,b,c){a.html5Mode(!0),c.otherwise("/"),b.state("homepage",{url:"/",templateUrl:"views/main.html",title:"API Platform: API-first PHP framework for modern web projects"}).state("download",{url:"/download",controller:"DownloadCtrl",templateUrl:"views/download.html",title:"Download - API Platform"}).state("support",{url:"/support",templateUrl:"views/support.html",title:"Support - API Platform"}).state("demo",{url:"/demo",templateUrl:"views/demo.html",title:"Demonstration - API Platform"}).state("news",{url:"/news",controller:"NewsCtrl",templateUrl:"views/news.html",title:"News - API Platform"}).state("doc",{url:"/doc/{path:.*}",controller:"DocCtrl",templateUrl:"views/doc.html"})}]),angular.module("apiPlatformWebsite").directive("calavera",["$document","$http","$anchorScroll",function(a,b,c){return{template:'<div class="calavera"></div>',restrict:"E",scope:{jsonld:"=jsonld"},link:function(d,e){b.get(d.jsonld).then(function(b){var f=a[0].createElement("div");f.innerHTML=b.data.text,a[0].title=b.data.name+" - API Platform";var g=angular.element(f),h=d.jsonld.substring(0,d.jsonld.lastIndexOf("/")+1);angular.forEach(g.find("a"),function(a){var b=angular.element(a),c=b.attr("href");/^(?:[a-z]+:)?\/\//i.test(c)?b.attr("target","_blank"):b.attr("href",h+c.replace(/\.jsonld/,"").replace(/index/,""))}),angular.forEach(g.find("img"),function(a){var b=angular.element(a),c=b.attr("src");/^(?:[a-z]+:)?\/\//i.test(c)||b.attr("src",h+c)}),e.append(g),d.$emit("calaveraDocReady"),Prism.highlightAll(),anchors.add(),c(),d.$emit("calaveraDocLoaded")},function(a){404===a.status})}}}]),angular.module("apiPlatformWebsite").controller("LayoutCtrl",["$scope","$window","$document","$location","$timeout","$state","$anchorScroll",function(a,b,c,d,e,f,g){var h=function(){e(function(){a.reducedClass=c.scrollTop()<=0?"":"reduced"})},i=function(){var a=angular.element(c[0].getElementById("footer"));!c[0].getElementById("news")&&c[0].body.offsetHeight<b.innerHeight?a.addClass("fixed-footer"):a.removeClass("fixed-footer")};a.$on("calaveraDocReady",i),a.$on("$stateChangeSuccess",function(){e(i),c.off("scroll",h),"homepage"===f.current.name?(e(function(){a.reducedClass="",g()}),c.on("scroll",h)):e(function(){a.reducedClass="reduced"})})}]),angular.module("apiPlatformWebsite").controller("DocCtrl",["$scope","$location","$anchorScroll",function(a,b,c){var d=b.path();"/doc/"===d?a.file="/doc/1.0/index.jsonld":a.file=d+("/"===d.substring(d.length-1,d.length)?"index":"")+".jsonld",Prism.languages.json=Prism.languages.javascript,c.yOffset=100}]),angular.module("apiPlatformWebsite").controller("DownloadCtrl",["$scope","$window","$document",function(a,b,c){a.copy=function(){var a=c[0].getElementById("command");a.select();try{c[0].execCommand("copy")||b.alert("Unable to copy. Do it manually.")}catch(d){b.alert("Unable to copy. Do it manually.")}}}]),angular.module("apiPlatformWebsite").controller("NewsCtrl",["$scope","$document","$timeout",function(a,b,c){c(function(){twttr.widgets.load()})}]);