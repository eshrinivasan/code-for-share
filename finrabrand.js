/*
 *  FINRABRANDJS plugin - Loads header and footer 
 *  
 */

 //Get version from the script src url
 var scriptSource = (function() {
    var scripts = document.getElementsByTagName('script'),
        script = scripts[scripts.length - 1];
    var scriptSrc = script.getAttribute('src', 1);
    var scriptArray = new RegExp("finrabrand\/(.*?)\/finrabrand.js", "i").exec(scriptSrc);
    scriptArray = (scriptArray === null) ? "" : scriptArray[1];
    if (script.getAttribute.length !== undefined) {        
        return scriptArray;
    } 
    return scriptArray;
}());

var j191 = {};
j191.jq = jQuery.noConflict();

;(function ($) {
   function TouchEffect(item, options) {
       this.settings = $.extend({
           touchEl: this,
           touchElContainer: "li.expanded",
           touchButton: "<span class='touch-button'></span>",
           touchButtonClass: ".touch-button",
           posElContainer: "setPosition",
           menuOpen: false,
           touched: false
       }, options);
       this.self = $(item);
       this.addTouch();
   }

   TouchEffect.prototype = {
       addTouch: function () {
           var self = this.self;
           var that = this;

           $(self).find(that.settings.touchElContainer).each(function () {
               $(this).removeClass(that.settings.posElContainer).addClass(that.settings.posElContainer);
               $(this).find(that.settings.touchButtonClass).remove();
               $(this).append(that.settings.touchButton);
           });
       },
       removeTouch: function (value) {
           var self = this.self;
           var that = this;

           $(self).find(that.settings.touchElContainer).each(function () {
               $(this).removeClass(that.settings.posElContainer);
               $(this).find(that.settings.touchButtonClass).remove();
           });
       }
   };

   $.fn.touchEffect = function (opt) {
       var args = Array.prototype.slice.call(arguments, 1);
       return this.each(function () {
           var item = $(this),
           instance = item.data('TouchEffect');
           if (!instance) {
               item.data('TouchEffect', new TouchEffect(this, opt));
           } else {
               if (typeof opt === 'string') {
                   instance[opt].apply(instance, args);
               }
           }
       });
   }
}(j191.jq));

;(function ($) {
   "use strict";

   $.fn.once = function (id, fn) {
       if (typeof id != 'string') {
         // Generate a numeric ID if the id passed can't be used as a CSS class.
         if (!(id in cache)) {
           cache[id] = ++uuid;
         }
         // When the fn parameter is not passed, we interpret it from the id.
         if (!fn) {
           fn = id;
         }
         id = 'jquery-once-' + cache[id];
       }
       // Remove elements from the set that have already been processed.
       var name = id + '-processed';
       var elements = this.not('.' + name).addClass(name);

       return $.isFunction(fn) ? elements.each(fn) : elements;
     } ;

})(j191.jq);

(function($) {

    $.FINRAbrand = function(element, options){
        var defaults = {
            type : 'corp',
            footer: 'megafooter',
            highlight: 0,
            subhighlight:0,
            layout: 'responsive',
            base_url: "//www.finra.org",
            version : scriptSource,
            jsondatatype: "json",
            commaseparatedmenus: '',
            globalsearch:true,
            debugoption: "off",
            onload: function(){
                debug('plugin_loaded');
            }
        }

        var plugin = this;
        var filename = '';
        var normalizecssurl;
        var FINRA_header = '';

        plugin.options = {};
        plugin.options = $.extend({}, defaults, options);
        var el = $(element), base_url, fixed_width;

        var base_url = plugin.options.base_url + "/sites/all/themes/finra_theme";
        var nav_highlight =  plugin.options.highlight;
        var globalsearch = plugin.options.globalsearch == true? "globalSearchOn" : "globalSearchOff";

        var thisYear = new Date().getFullYear();
        //footers_
        var FINRA_footer = '',
        mega_open = '<div class="l-footer" role="contentinfo"><div class="footer-container" ',
        mega_open2 = '><div class="mega-footer clearfix" ',
        mega_width = '><div class="container"><div class="row"><div class="l-region l-region--footer-first"><div id="block-footer-blocks-footer-buttons" class="block block--footer-blocks block--footer-blocks-footer-buttons"><div class="block__content"><div class="mega-footer-buttons"><a href="'+plugin.options.base_url+'/investors/finra-securities-helpline-seniors" class="block-mega-footer-button block-mega-footer-button-skin mega-footer-common"><i class="fa fa-helpline-icon"></i><div class="media helpline"><div class="media-body"><div class="media-heading">Securities Helpline for Seniors<sup>™</sup></div><div class="hidden-xs media-sub-heading">844-574-3577 (Monday to Friday 9-5 ET)</div></div></div></a><br /><a class="block-mega-footer-button block-mega-footer-button-skin mega-footer-common" href="'+plugin.options.base_url+'/investors/investor-complaint-center"><i class="fa fa-comment-icon"></i><div class="media complaint"><div class="media-body">  <div class="media-heading">Investor Complaint Center</div>  <div class="hidden-xs media-sub-heading">File a complaint about fraud or unfair practices.</div></div></div></a><br><a class="block-mega-footer-button block-mega-footer-button-skin mega-footer-common" href="'+plugin.options.base_url+'/industry/office-whistleblower"><i class="fa fa-whistle-icon"></i><div class="media whistle"><div class="media-body">  <div class="media-heading">Whistleblower Tip-Line</div>  <div class="hidden-xs media-sub-heading">866-96-FINRA or whistleblower@finra.org</div></div></div></a><br><a class="block-mega-footer-button block-mega-footer-button-skin mega-footer-common" href="'+plugin.options.base_url+'/about/office-ombudsman"><i class="fa fa-flag-icon"></i><div class="media flag"><div class="media-body"><div class="media-heading">Office of the Ombudsman</div><div class="hidden-xs media-sub-heading">Report a concern about FINRA.</div></div></div></a><br /><a href="/industry/file-tip" class="block-mega-footer-button block-mega-footer-button-skin mega-footer-common"><i class="fa fa-file-tip-icon"></i><div class="media flag"><div class="media-body"><div class="media-heading">File a Regulatory Tip</div><div class="hidden-xs media-sub-heading">To report on abuse or fraud in the industry.</div></div></div></a></br><a class="block-mega-footer-button block-mega-footer-button-skin mega-footer-common" href="'+plugin.options.base_url+'/contact-finra"><i class="fa fa-phone-icon"></i><div class="media contact"><div class="media-body"><div class="media-heading">Contact FINRA</div><div class="hidden-xs media-sub-heading">(301) 590-6500</div></div></div></a></div></div></div></div><div>',
        industry_open = '<div class="mega-footer-section"><div class="mega-footer-section-left-tablet"><div class="mega-footer-section-left"><div class="l-region l-region--footer-second"><div id="block-menu-block-footer-menu-groups-1" class="block block--menu-block block--menu-block-footer-menu-groups-1 block-mega-footer-industry" role="navigation"><h2 class="block-mega-footer-title block-mega-footer-title-skin mega-footer-common"><a title="" href="'+plugin.options.base_url+'/industry">INDUSTRY PROFESSIONALS</a></h2> <div class="menu-block-wrapper menu-block-footer_menu_groups-1 menu-name-menu-footer-menu parent-mlid-767 menu-level-1">  <ul class="list-unstyled hidden-xs">',
        industry_menu = '',
        industry_arb_middle = '</ul></div></div><div id="block-menu-block-footer-menu-groups-2" class="block block--menu-block block--menu-block-footer-menu-groups-2 block-mega-footer-dispute" role="navigation"><h2 class="block-mega-footer-title block-mega-footer-title-skin mega-footer-common"><a title="" href="'+plugin.options.base_url+'/arbitration-and-mediation">Arbitration & Mediation</a></h2> <div class="menu-block-wrapper menu-block-footer_menu_groups-2 menu-name-menu-footer-menu parent-mlid-768 menu-level-1">  <ul class="list-unstyled hidden-xs">',
        arb_menu = '',
        arb_investor_middle = '</ul></div></div></div></div><div class="l-region l-region--footer-third"><div id="block-menu-block-footer-menu-groups-3" class="block block--menu-block block--menu-block-footer-menu-groups-3 block-mega-footer-section block-mega-footer-investors" role="navigation">  <h2 class="block-mega-footer-title block-mega-footer-title-skin mega-footer-common"><a title="" href="'+plugin.options.base_url+'/investors">INVESTORS</a></h2>   <div class="menu-block-wrapper menu-block-footer_menu_groups-3 menu-name-menu-footer-menu parent-mlid-769 menu-level-1"><ul class="list-unstyled hidden-xs">',
        investor_menu = '',
        investor_about_middle = '</ul></div></div></div></div><div class="l-region l-region--footer-fourth mega-footer-section-right"><div id="block-menu-block-footer-menu-groups-4" class="block block--menu-block block--menu-block-footer-menu-groups-4 block-mega-footer-about block-mega-footer-section" role="navigation"><h2 class="block-mega-footer-title block-mega-footer-title-skin mega-footer-common"><a title="" href="'+plugin.options.base_url+'/about">ABOUT FINRA</a></h2><div class="menu-block-wrapper menu-block-footer_menu_groups-4 menu-name-menu-footer-menu parent-mlid-771 menu-level-1">                           <ul class="list-unstyled hidden-xs">',
        about_menu = '',
        about_news_middle = '</ul></div></div><div id="block-menu-block-footer-menu-groups-5" class="block block--menu-block block--menu-block-footer-menu-groups-5 block-mega-footer-newsroom block-mega-footer-section" role="navigation"><h2 class="block-mega-footer-title block-mega-footer-title-skin mega-footer-common"><a title="" href="'+plugin.options.base_url+'/newsroom">NEWSROOM</a></h2><div class="menu-block-wrapper menu-block-footer_menu_groups-5 menu-name-menu-footer-menu parent-mlid-774 menu-level-1">                           <ul class="list-unstyled hidden-xs">',
        news_menu = '',
        mega_close = '</ul></div></div></div></div></div></div></div></div></div></div>',
        util_footer = '<div class="l-region l-region--utility-footer"><div id="block-footer-blocks-footer-utility-footer" class="block block--footer-blocks block--footer-blocks-footer-utility-footer"><div class="block__content"><div class="block-utility-footer"',
        util_width = '><div><div><ul class="block-utility-footer-list block-utility-footer-links"><li><a href="http://www.finra.org/Sitemap">Sitemap</a></li><li><a href="http://www.finra.org/Privacy">Privacy</a></li><li><a href="http://www.finra.org/Legal">Legal</a></li></ul></div><div><ul class="block-utility-footer-list block-utility-footer-social"><li><a href="https://twitter.com/finra_news" target="_blank"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.linkedin.com/company/financial-industry-regulatory-authority" target="_blank"><i class="fa fa-linkedin"></i></a></li></ul></div><div class="block-utility-footer-tagline"><div>&copy;'+ thisYear +' FINRA.  <span class="block-utility-footer-copy">All rights reserved. FINRA is a registered trademark of the Financial Industry Regulatory Authority, Inc.</span></div></div></div></div></div></div></div>';

        var debug = function(message){
            if(plugin.options.debugoption === "on")
                console.log(message);
        }

        //public
        plugin.init = function() {
            debug("plugin init:" + plugin.options.version);  
            $('html').addClass("js");
            msieversion();
            loadcssfile(plugin.options.base_url + '/sites/all/libraries/icons/font-awesome-4.2.0/css/font-awesome.min.css');
            var csspath = plugin.options.version != "" ? '/js/finrabrand/'+plugin.options.version : '/css';
            loadcssfile(base_url + csspath + '/finra-theme.plugin_normalize.css');

            if ( plugin.options.layout === "fixed") {
                fixed_width = 'style="width:960px !important"';
                filename = base_url + csspath + '/finra-theme.plugin.no-query.css';
                $('html')
                    .addClass("fixed no-mq");
                $('#FINRA_header, #FINRA_footer')
                    .css('font-size', '16px')
                    .addClass("finra_normalize_prefix");
                $('#FINRA_header .navbar-offcanvas .main_menu_outer_ul li span a').css('top','50%');
            }

            if ( plugin.options.layout === "fluid") {
                fixed_width = 'style="width:97% !important; min-width:960px"';
                filename = base_url + csspath + '/finra-theme.plugin.no-query.css';
                $('html')
                    .addClass("fluid  no-mq");
                $('#FINRA_header, #FINRA_footer')
                    .css({'min-width':'960px','font-size':'16px'})
                    .addClass("finra_normalize_prefix");

                $('#FINRA_header .navbar-offcanvas .main_menu_outer_ul li span a').css('top','50%');

            }

            if ( plugin.options.layout === "responsive") {
                fixed_width = '';      
        				if(msieversion() !== 0 && msieversion() <= 8){//load no-query when its ltie9
                            filename = base_url + csspath + '/finra-theme.plugin.no-query.css';
                        }                    
        				else{
                    filename = base_url + csspath + '/finra-theme.plugin.css';
                }
                $('html')
                    .addClass("responsive");
                $('#FINRA_header, #FINRA_footer, #FINRA_responsive')
                    .css('font-size', '16px')
                    .addClass("finra_normalize_prefix");
                 $('#FINRA_footer')
                    .addClass("finrabrand_container");
            }
            //determines css file to load
        }

        var menu_node, top_node, footer_node, mainmenuclass, topmenuclass, iwanto_node, search_link;

          switch ( plugin.options.type) {
              case 'investor':
                  plugin.options.commaseparatedmenus = "menu-investor-menu,menu-investor-top-menu,menu-footer-menu";
                  menu_node = 0;
                  top_node = 1;                
                  footer_node = 2;
                  iwanto_node = 3;
                  mainmenuclass = "menu-name-menu-investor-menu";
                  topmenuclass = "menu-name-menu-investor-top-menu";
                  search_link = "/search/investors";
                  break;
              case 'industry':
                  plugin.options.commaseparatedmenus = "menu-industry-menu,menu-industry-top-menu,menu-footer-menu";
                  menu_node = 0;
                  top_node = 1;
                  footer_node = 2;
                  mainmenuclass = "menu-name-menu-industry-menu";
                  topmenuclass = "menu-name-menu-top-menu";
                  search_link = "/search/industry";
                  break;
              case 'arbmed':
                  plugin.options.commaseparatedmenus = "menu-arb-med-menu,menu-arb-med-top-menu,menu-footer-menu";
                  menu_node = 0;
                  top_node = 1;
                  footer_node = 2;
                  mainmenuclass = "menu-name-menu-arb-med-menu";
                  topmenuclass = "menu-name-menu-arb-med-top-menu";
                  search_link = "/search/arbitration-and-mediation";
                  break;
              case 'corp':
                  plugin.options.commaseparatedmenus = "menu-corporate-main-menu,menu-corporate-top-menu,menu-footer-menu";
                  menu_node=0;
                  top_node = 1;
                  footer_node = 2;
                  mainmenuclass = "menu-name-menu-corporate-main-menu";
                  topmenuclass = "menu-name-menu-corporate-top-menu";
                  search_link = "/search/global";
                  break;
              default:
                  plugin.options.commaseparatedmenus = "menu-corporate-main-menu,menu-corporate-top-menu,menu-footer-menu";
                  menu_node=0;
                  top_node = 1;
                  footer_node = 2;
                  mainmenuclass = "menu-name-menu-corporate-main-menu";
                  topmenuclass = "menu-name-menu-corporate-top-menu";
                  search_link = "/search/global";
                  break;
          }

          //stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
          if (browserSupportsCors()) {
              makeAjaxCall(plugin.options.jsondatatype);
          }else{
              makeAjaxCall('jsonp');//fallback incase browser does not support CORS
          }

        function makeAjaxCall(datatype){
           // register AJAX prefilter : options, original options
           $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
               // retry not set or less than 2 : retry not requested
               //if( !originalOptions.retryLimit || !originalOptions.retryLimit >2 ) return;
               // no timeout was setup
               
               if( originalOptions.tryCount ) {
                  // increment retry count each time
                  originalOptions.tryCount++;
                  // copy original error callback on first time
                  originalOptions._error = originalOptions.error;
               }else{
                  // init the retry count if not set
                  // originalOptions.tryCount = 0;
                  // copy original error callback on first time
                  originalOptions._error = originalOptions.error;
               };
               // overwrite error handler for current request
               options.error = function( _jqXHR, _textStatus, _errorThrown ){
                  // retry max was exhausted or it is not a timeout error
                  
                  if( originalOptions.tryCount < originalOptions.retryLimit){
                      originalOptions.dataType = "jsonp";
                      originalOptions.jsonpCallback = "callbackresponse"; 
                      originalOptions.crossDomain = true;
                  }

                  if( originalOptions.tryCount >= originalOptions.retryLimit){// || _textStatus!='timeout' 
                     // call original error handler if any                      
                     if( originalOptions._error ) originalOptions._error( _jqXHR, _textStatus, _errorThrown ); 
                     return;
                  };
                  // Call AJAX again with original options
                  $.ajax( originalOptions);
               };
            });

             $.ajax({
                  url:plugin.options.base_url + '/api/v1/menu?',
                  data:'name='+encodeURIComponent(plugin.options.commaseparatedmenus),
                  dataType:datatype,
                  cache:false,
                  timeout:2000,
                  tryCount:1,
                  retryLimit:3,
                  success:function(response) {                      
                      debug("ajax success");
                      plugin.init();//loads font awesome, normalize css files, adds classes to html
                      loadplugincss(filename, response);//loads plugin css, calls plugin.start on success 
                  },
                  error:function(xhr, textStatus, errorThrown) {                             
                      debug("ajax menu service call error!"); 
                      //alert("If you are seeing this message, the navigation has not loaded. Try reloading the page, or return to FINRA.org.");
                      //window.location.replace("//www.finra.org/404");                               
                  }
            });
        }
        
        function browserSupportsCors() {
            if ("withCredentials" in new XMLHttpRequest())
              return true;  
            else if (window.XDomainRequest)
              return true;
            else
              return false;
        }        

        //private
        var loadjsfile = function(jsurl, callback){
            debug(jsurl);
            var head = document.getElementsByTagName('head')[0];
            theScript= document.createElement('script');
            theScript.type = "text/javascript";

             if (theScript.readyState){  //IE
                theScript.onreadystatechange = function(){
                    if (theScript.readyState == "loaded" ||
                            theScript.readyState == "complete"){
                        theScript.onreadystatechange = null;
                        callback();
                    }
                };
            } else {  //Others
                theScript.onload = function(){
                    callback();
                };
            }

            theScript.src = jsurl;            
            head.appendChild( theScript )
            debug("js loaded");
        }

        //private
        var loadcssfile = function(filename) {
            debug(filename);
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref);
            debug("css loaded");
        }

        //private
        var loadplugincss = function(filename, response){
            debug(filename);
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);

            //private
            var readyfunc = function () {
               plugin.start(response);
            }

            //private
            var timerfunc = function () {
                var i,
                    doclinks = $('link');
                for (i = 0; i < doclinks.length; i++) {
                    var sheet = doclinks[i].href;
                    // console.log(sheet.substr(sheet.length - filename.length));
                    if (sheet !== null && sheet.slice(sheet.length - filename.length).toLowerCase() == filename.toLowerCase()) {
                        return readyfunc();
                    }

                }
                setTimeout(timerfunc, 50);
            }

            var onreadystatechange =  function () {
                if (fileref.readyState == 'complete' || fileref.readyState == 'loaded') {
                    this.onreadystatechange = null;
                    readyfunc();
                }
            }

            if (!this.addEventListener && this.attachEvent) { //Uses onreadystatechange for Internet Explorer
                debug("ltie9");
                fileref.attachEvent('onreadystatechange', onreadystatechange);
            } else { //Checks if the stylesheet has been loaded every 50 ms for others
                setTimeout(timerfunc, 50);
            }

            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref);

            debug('plugin css loaded');
        }

        //public methods
        plugin.start = function(response){//calls header, footer callback, loads plugin_scripts 
            var data_main = "", data_top = "", data_footer = "", data_iwantto ="";
            data_main = menu_node != undefined ? response[menu_node] : "";
            data_top = top_node != undefined ? response[top_node] : "";
            data_iwantto = iwanto_node != undefined ? response[iwanto_node]: "";
            data_footer = response[footer_node];            
            var jspath = plugin.options.version != "" ? '/js/finrabrand/'+plugin.options.version : '/js/finrabrand';            

            loadjsfile(base_url +'/js/pluginLib.js', function(){//control the loading order of scripts
                loadjsfile(base_url + jspath +'/plugin_scripts.js', function(){ debug("loaded plugin_scripts");});
            });
            
            plugin.callback_header(data_main, data_iwantto, data_top);
            plugin.callback_footerfn(data_footer,  plugin.options.footer);            
            plugin.options.onload();//call plugin loaded event
        }        

        //private
        var msieversion = function() {//detects ltie9 and adds class
            var ua = window.navigator.userAgent
            var msie = ua.indexOf("MSIE ")

            if (msie > 0) { // If Internet Explorer, return version number
                var version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
                if (version <= 8) {//if ltie9 add no-mq class
                    $('html')
                        .addClass("no-mq");
                    $('#FINRA_header, #FINRA_footer, #FINRA_responsive')
                        .css('font-size', '16px')
                        .addClass("finra_normalize_prefix");
                }
                return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));//return ie version
            } else {
                return 0;
            }
        }

        //private
        var drupalStrip = function(d) {
            var menuArray = new Array();

            $.each(d, function(key, val) {
                //debug(val.children.length);
                if (val.children != 0) {
                    var childArray = new Array;
                    $.each(val.children, function(key1, val1) {
                        child_obj = {};
                        newkey_child1 = key1.split(' |')[0];
                        child_obj.name = newkey_child1;                       
                        child_obj.link =  ( val1.link.external == "1" ? '' : plugin.options.base_url + "/" ) + (val1.link.path_alias != false ? val1.link.path_alias : val1.link.path );                                               
                        child_obj.link = (child_obj.link != '<front>' ? child_obj.link : '/')
                        //debug(child_obj.link);                   
                        childArray.push(child_obj);
                    });
                }
                menu_obj = {};
                newkey = key.split(' |')[0];
                menu_obj.name = newkey;                       
                menu_obj.link = ( val.link.external == "1" ? '' : plugin.options.base_url + "/" ) + (val.link.path_alias!= false ? val.link.path_alias : val.link.path );
                menu_obj.link = (menu_obj.link != '<front>' ? menu_obj.link : '/')
                //debug(menu_obj.link);                
                menu_obj.menu = childArray;
                menuArray.push(menu_obj);
            });
            return menuArray;
        };

        //public
        plugin.callback_header = function(mainmenu, iwanttomenu, topmenu) {
		     var compiled_mainmenu = '',
            compiled_topmenu = '',
            compiled_iwantto = '';
            //clean out the drupal stuff
            var mainmenu_clean = "",
                iwanttomenu_clean = "",
                topmenu_clean = "";

            if (mainmenu.tree) {
                mainmenu_clean = drupalStrip(mainmenu.tree)
            };
            if (iwanttomenu) {
                iwanttomenu_clean = drupalStrip(iwanttomenu.tree)
            };
            if (topmenu) {
                topmenu_clean = drupalStrip(topmenu.tree)
            };

            //putting together the main nav
            if ( plugin.options.highlight > 0) {
                //add class to menu
            }
            if ( plugin.options.layout === "responsive") {
                //add the hamburger menu
                $('#FINRA_responsive').html('');
                $('#FINRA_responsive')
                    .append('<div class="l-header" role="banner"> <div class="navbar-header inner-header"> <div class="gbl-hamburger main-nav-mobile"> <button class="navbar-toggle" data-canvas="body" data-target=".navbar-offcanvas" data-toggle="offcanvas" type="button"> <i class="fa fa-bars"></i> </button> </div> <div class="gbl-logo main-nav-mobile"> <a class="navbar-brand" href=""> <img class="logo-tablet" src="' + base_url + '/images/mobile/logo-tablet.png" width="293" height="79"> <img class="logo-main" src="' + base_url + '/images/mobile/logo.png" width="109" height="42"> <img class="logo-mobile" src="' + base_url + '/images/mobile/logo.png" width="109" height="42"> </a> </div> <div class="gbl-search main-nav-mobile '+globalsearch+'"><div class="sb-search" id="sb-search"><form class="search-block-global-search-form" action="' + document.location.protocol + plugin.options.base_url + search_link +'"><input class="sb-search-input hasPlaceholder" type="text" id="search" name="search" placeholder="Search"><input class="sb-search-submit globalReset" type="submit" value=""><span class="sb-icon-search"></span></form></div></div> </div> </div>');
            }

            for (i = 0; i < mainmenu_clean.length; i++) {
                //first children menu
                var child_menu_li = '';
                if (mainmenu_clean[i].menu) {
                    for (j = 0; j < mainmenu_clean[i].menu.length; j++) {
                        var li_child_highlight = '';
                        if (j === ( plugin.options.subhighlight - 1) && i === ( plugin.options.highlight - 1)) {
                            li_child_highlight = '<li class="leaf active-trail active"><a class="active-trail  active" href="' + mainmenu_clean[i].menu[j].link + '">' + mainmenu_clean[i].menu[j].name + '</a></li>';
                        } else {
                            li_child_highlight = '<li class="leaf"><a href="' + mainmenu_clean[i].menu[j].link + '">' + mainmenu_clean[i].menu[j].name + '</a></li>';
                        }

                        child_menu_li += li_child_highlight;
                    }
                }
                //look for highlighted item
                var li_highlight = '';
                if (i === ( plugin.options.highlight - 1)) {
                    li_highlight = '<li class="expanded active-trail  active"><span class="menu-link-item"><a class="active-trail  active" href="' + mainmenu_clean[i].link + '">';
                } else {
                    li_highlight = '<li class="expanded"><span><a href="' + mainmenu_clean[i].link + '">';
                }

                //then put together the menu
                var li = li_highlight + mainmenu_clean[i].name + '</a></span><ul  class="main_menu_inner_ul">' + child_menu_li + '</ul></li>';
                compiled_mainmenu += li;
            }

            //putting together the top nav
            for (i = 0; i < topmenu_clean.length; i++) {
                if (topmenu_clean[i].link == '/') {
                  topmenu_clean[i].link = plugin.options.base_url;
                }
                var li = '<li><a href="' + topmenu_clean[i].link + '">' + topmenu_clean[i].name + '</a></li>';
                compiled_topmenu += li;
            }

            //putting together I want to menu
           //console.log(iwanttomenu_clean)
            
            if (iwanttomenu_clean) {
                for (i = 0; i < iwanttomenu_clean.length; i++) {
                    var li = '<li><a href="' + iwanttomenu_clean[i].link + '">' + iwanttomenu_clean[i].name + '</a></li>';
                    compiled_iwantto += li;
                };
                
            } else {
                
            };
              
            //Header HTML
            var FINRA_header = '<div class="navbar navbar-default"> <div class="navbar-offcanvas"> <div class="logo navmenu-brand" '+fixed_width  +'> <a href="'+plugin.options.base_url+'" title="Home" rel="home" class="site-logo"> <img src="'+base_url+'/logo.png" alt="Home" width="352" height="107"> </a> </div> <div class="nav navbar-nav"> <div class="main-menu-navigation" '+fixed_width  +'> <div class="l-region l-region--navigation"> <div id="block-menu-block-finra-custom-menu-blocks-6" role="navigation" class="block block--menu-block block--menu-block-finra-custom-menu-blocks-6"> <div class="menu-block-wrapper menu-block-finra_custom_menu_blocks-6 '+ mainmenuclass +' parent-mlid-0 menu-level-1"> <ul class="main_menu_outer_ul"> '+ compiled_mainmenu +'</ul> </div> </div> </div> </div> <div class="top-navigation"> <div class="header-wrap"> <div class="branding-dropdown"><div class="l-region l-region--header-second"> <div id="block-search-block-search-box" class="block block--search-block block--search-block-search-box '+globalsearch+'"> <div class="block__content"><form class="search-block-global-search-form" action="' + document.location.protocol + plugin.options.base_url + search_link +'" method="post" id="search-block-global-search-form" accept-charset="UTF-8"><div><div class="search  form-wrapper" id="edit-basic"><div class="input-group form-wrapper" id="edit-group"><input class="form-control typeahead form-text ui-autocomplete-input hasPlaceholder sb-search-input" placeholder="Search" type="text" id="edit-keys" name="keys" value="" size="20" maxlength="128" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"><span class="input-group-btn"><input class="search-submit form-submit" type="submit" id="edit-submit" name="op" value=""><i class="fa fa-search"></i></span></div></div></div></form></div> </div> </div> </div> <div class="top-menu-container"> <div class="l-region l-region--user-first"> <div id="block-menu-block-finra-custom-menu-blocks-8" role="navigation" class="block block--menu-block block--menu-block-finra-custom-menu-blocks-8"> <div class="menu-block-wrapper menu-block-finra_custom_menu_blocks-8 '+ topmenuclass +' parent-mlid-0 menu-level-1"> <ul class="menu-top-menu"> '+ compiled_topmenu +'</ul> </div> </div> </div> </div> </div> </div> </div> </div> </div>';

    		el.find('#FINRA_header').html('');
            el.find('#FINRA_header').append(FINRA_header);
            debug("header loaded");
        }//end of callback_header

        //public
        plugin.callback_footerfn = function(footermenu, options) {
            var footermenu_clean = drupalStrip(footermenu.tree)
            //putting together the footer
            industry = footermenu_clean[0].menu,
                arb = footermenu_clean[1].menu,
                investor = footermenu_clean[2].menu,
                about = footermenu_clean[3].menu,
                news = footermenu_clean[4].menu;

            for (i = 0; i < industry.length; i++) {
                li = '<li><a href="' + industry[i].link + '">' + industry[i].name + '</a></li>';
                industry_menu += li;
            };
            for (i = 0; i < arb.length; i++) {
                li = '<li><a href="' + arb[i].link + '">' + arb[i].name + '</a></li>';
                arb_menu += li;
            };
            for (i = 0; i < investor.length; i++) {
                li = '<li><a href="' + investor[i].link + '">' + investor[i].name + '</a></li>';
                investor_menu += li;
            };
            for (i = 0; i < about.length; i++) {
                li = '<li><a href="' + about[i].link + '">' + about[i].name + '</a></li>';
                about_menu += li;
            };
            for (i = 0; i < news.length; i++) {
                li = '<li><a href="' + news[i].link + '">' + news[i].name + '</a></li>';
                news_menu += li;
            };


            if (options == "megafooter") {
                FINRA_footer = mega_open + fixed_width + mega_open2 + fixed_width + mega_width + industry_open + industry_menu + industry_arb_middle + arb_menu + arb_investor_middle + investor_menu + investor_about_middle + about_menu + about_news_middle + news_menu + mega_close + util_footer + fixed_width + util_width;
            }
            if (options == "utility") {
                FINRA_footer = util_footer + fixed_width + util_width;
            }

			      el.find('#FINRA_footer').html('');
            el.find('#FINRA_footer').append(FINRA_footer);
            debug("footer loaded");
        }//end of callback_footerfn

    }

    $.fn.FINRAbrand = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('FINRAbrand')) {
                var plugin = new $.FINRAbrand(this, options);
                $(this).data('FINRAbrand', plugin);
            }
        });
    }; // End Constructor.

}(j191.jq));
//http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/


//http://stackoverflow.com/questions/10232017/ie9-jquery-ajax-with-cors-returns-access-is-denied
//https://github.com/jaubourg/ajaxHooks/blob/master/src/xdr.js
//https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest

/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */ (function(a) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], a)
    } else if (typeof exports === 'object') {
        module.exports = a(require('jquery'))
    } else {
        a(jQuery)
    }
}(function($) {
    if ($.support.cors || !$.ajaxTransport || !window.XDomainRequest) {
        return
    }
    var n = /^https?:\/\//i;
    var o = /^get|post$/i;
    var p = new RegExp('^' + location.protocol, 'i');
    $.ajaxTransport('* text html xml json', function(j, k, l) {
        if (!j.crossDomain || !j.async || !o.test(j.type) || !n.test(j.url) || !p.test(j.url)) {
            return
        }
        var m = null;
        return {
            send: function(f, g) {
                var h = '';
                var i = (k.dataType || '').toLowerCase();
                m = new XDomainRequest();
                if (/^\d+$/.test(k.timeout)) {
                    m.timeout = k.timeout
                }
                m.ontimeout = function() {
                    g(500, 'timeout')
                };
                m.onload = function() {
                    var a = 'Content-Length: ' + m.responseText.length + '\r\nContent-Type: ' + m.contentType;
                    var b = {
                        code: 200,
                        message: 'success'
                    };
                    var c = {
                        text: m.responseText
                    };
                    try {
                        if (i === 'html' || /text\/html/i.test(m.contentType)) {
                            c.html = m.responseText
                        } else if (i === 'json' || (i !== 'text' && /\/json/i.test(m.contentType))) {
                            try {
                                c.json = $.parseJSON(m.responseText)
                            } catch (e) {
                                b.code = 500;
                                b.message = 'parseerror'
                            }
                        } else if (i === 'xml' || (i !== 'text' && /\/xml/i.test(m.contentType))) {
                            var d = new ActiveXObject('Microsoft.XMLDOM');
                            d.async = false;
                            try {
                                d.loadXML(m.responseText)
                            } catch (e) {
                                d = undefined
                            }
                            if (!d || !d.documentElement || d.getElementsByTagName('parsererror').length) {
                                b.code = 500;
                                b.message = 'parseerror';
                                throw 'Invalid XML: ' + m.responseText;
                            }
                            c.xml = d
                        }
                    } catch (parseMessage) {
                        throw parseMessage;
                    } finally {
                        g(b.code, b.message, c, a)
                    }
                };
                m.onprogress = function() {};
                m.onerror = function() {
                    g(500, 'error', {
                        text: m.responseText
                    })
                };
                if (k.data) {
                    h = ($.type(k.data) === 'string') ? k.data : $.param(k.data)
                }
                m.open(j.type, j.url);
                m.send(h)
            },
            abort: function() {
                if (m) {
                    m.abort()
                }
            }
        }
    })
}));
