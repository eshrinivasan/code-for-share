if ( !window._AIM ) { window._AIM = {}; }

$.extend(window._AIM, {
    'config': {
        aimContextRoot: '/aim',
        aimHost: 'http://aim.dev2-cookingchanneltv.com',
        contactUsUrl: 'http://www.cookingchanneltv.com/contact-us/package/index.html',
        janrainAppId: 'nbgoaendjfjbopnjfcai',
        janrainAppUrl: 'https://authenticate.cookingchanneltv.com',
        localFrameURL: 'http://my.dev1-cookingchanneltv.com/communitytools/StaticPages/aim/empty.html',
        loginSelector: '#ur-header-links .sign-in',
        registerSelector: '#ur-header-links .register',
        showOnLoad: false,
        siteCode: '',
        siteName: 'CookingChannelTV.com',
        ssoagentURL: 'www.test1-scrippscontroller.com',
        ssotargetURL: 'http://www.test1-scrippscontroller.com/javaloginrealm',
        ssoURL: 'https://mysecure.test1-scrippscontroller.com/siteminderagent/forms/login.fcc',
        targetUrl: undefined,
        timeoutValue: 15000
    }
});
// end server prepend
if ( !window._AIM ) { window._AIM = {}; }

function RelativePath(path) {
    this.path = path;
}

RelativePath.prototype.makeAbsolute = function(host, contextRoot) {

    var path = this.path;
    if(typeof this.path === 'function') {
        path = this.path();
    }
    var slashAt = path.indexOf('/');
    return host + contextRoot + (slashAt === 0 ? path : "/" + path);
};

$.extend( true , window._AIM , {
    'default': {
        aimContextRoot: null,
        aimHost: null,
        contactUsUrl: null,
        forgotPasswordUrl: new RelativePath('/rest/login/forgotpassword'),
        handshakeUrl: new RelativePath('/handshake.do'),
        janrainAppId: 'nbgoaendjfjbopnjfcai',
        janrainAppUrl: null,
        lessCompiler: new RelativePath('/js/less-1.3.3.min.js'),
        localFrameURL: null,
        loginSelector: '#ur-header-links .sign-in',
        loginURL: new RelativePath('/rest/login'),
        mailServiceUrl: new RelativePath('/rest/verification'),
        registerSelector: '#ur-header-links .register',
        registerURL: new RelativePath('/rest/register'),
        resetpwdURL: new RelativePath('/rest/login/resetpassword/reset'),
        showOnLoad: false,
        siteCode: null,
        siteName: null,
        ssoagentURL: null,
        ssotargetURL: null,
        ssoURL: null,
        stylesheet: new RelativePath('/css/default.css'),
        stylesheetTheme: new RelativePath(function() {
            return '/css/sites/' + window['_AIM']['config']['siteName'].toLowerCase() + '.css';
        }),
        stylesheetFA: new RelativePath('/css/font/font-awesome.min.css'),
        stylesheetLESS: new RelativePath('/css/less/master.less'),
        targetUrl: null,
        timeoutValue: 15000,
        twitterCallbackUrl: new RelativePath('/twitter.do?token='),
        twitterUserCheckUrl: new RelativePath('/exists.do')
    },
    errorMessages: {
        doubleCheck: "Oops! Please check to make sure that's the right info.",
        duplicateEmail: "This email is already taken.",
        generic: "Excuse us, we're working to resolve this issue. Please close this window and try again.",
        invalidEmail: "Please enter a valid email address.",
        invalidLogin: "Oops! Wrong email and password combination.",
        pwdTokenExpired: "Password token expired.",
        sendEmailFail: "Oops! The email failed to send. Please retry."
    }
});

window._AIM.config = $.extend(window._AIM['default'], window._AIM['config']);


function resolveRelativePaths(obj) {
    var i;
    for(i in obj) {
        if(obj.hasOwnProperty(i)) {
            var relativePath = obj[i];
            if(relativePath instanceof RelativePath) {
                obj[i] = relativePath.makeAbsolute(obj.aimHost, obj.aimContextRoot);
            }
        }
    }
}

// MediaClass.js
(function(e,t){function n(){if(e.resetTimer)clearTimeout(e.resetTimer);e.resetTimer=setTimeout(r,100)}function r(){a.width=e.innerWidth||t.clientWidth;a.height=e.innerHeight||t.clientHeight;a.aspectRatio=a.width/a.height;a.orientation=a.width>a.height?"landscape":"portrait";a.deviceWidth=screen.width;a.deviceHeight=screen.height;a.deviceAspectRatio=a.deviceWidth/a.deviceHeight;a.deviceOrientation=a.deviceWidth>a.deviceHeight?"landscape":"portrait";m()}function i(e){var t=e.getBoundingClientRect();a.thisWidth=t.width||t.right-t.left;a.thisHeight=t.height||t.bottom-t.top;a.thisAspectRatio=a.thisWidth/a.thisHeight,a.thisOrientation=a.thisWidth>a.thisHeight?"landscape":"portrait"}function s(e){return Function("d","return("+e.replace(/\(|\)/g,"").replace(/\s*,\s*/g,") || (").replace(/\s+and\s+/gi," && ").replace(/min-(.*?):/gi,"$1>=").replace(/max-(.*?):/gi,"$1<=").replace(/above-(.*?):/gi,"$1>").replace(/below-(.*?):/gi,"$1<").replace(/min-|max-/gi,"").replace(/(all|screen|print)/,"d.$1").replace(/:/g,"==").replace(/([\w-]+)\s*([<>=]+)\s*(\w+)/g,function(e,t,n,r){return"d."+o(t)+n+u(r)}).replace(/([<>=]+)([A-z][\w-]*)/g,'$1"$2"')+")")(a)}function o(e){return e.toLowerCase().replace(/-[a-z]/g,function(e){return e[1].toUpperCase()})}function u(e){return e.replace(/([\d\.]+)(%|em|in|pt|px)/,function(e,n,r){return r=="em"?n*16:r=="in"?n*96:r=="pt"?n*96/72:r=="%"?n/(scope.innerWidth||t.clientWidth):n})}function m(){for(var e=0,n,r,o;n=v[e];++e){r=n.media.match(/(.+?):media\((.+?)\)/);if(r){if(t.querySelectorAll){all=t.querySelectorAll(r[1]);for(var u=0;o=all[u];++u){/this/.test(r[2])&&i(o);s(r[2])?p(o,n.className):d(o,n.className)}}}else{s(n.media)?p(t,n.className):d(t,n.className)}}}function g(e,t){var n=this,r=1;n.className=e;n.media=t;n.index=v.push(n)-1;n.enable=function(){if(!r){n.index=v.push(n)-1;r=true}};n.disable=function(){if(r){v.splice(n.index,1);r=false}}}var a={all:true,screen:true,print:false},f=("addEventListener"in e?"addEventListener ":"attachEvent on").split(" "),l="blur orientationchange resize".split(" "),c=0;for(;l[c];++c){e[f[0]](f[1]+l[c],n)}var h=Array.prototype.lastIndexOf||function(e){for(var t=this.length;--t>-1;)if(this[t]==e)break;return t},p=function(e,t){var n=e.className?e.className.split(/\s+/):[],r=h.call(n,t);if(r<0)e.className=n.concat(t).join(" ")},d=function(e,t){var n=e.className?e.className.split(/\s+/):[],r=h.call(n,t);if(r>-1&&n.splice(r,1))e.className=n.join(" ")},v=[];e.MediaClass=function(e,t){var n=new g(e,t);m();return n};r()})(this,document.documentElement)

/*
TODO:
    Upload docs to wiki

    In loginhandler include call to scrippscontroller

    callbacks for starting and stopping network activity
        create a timeout for the frame to redirect back home
        ask joe about a way of showing network activity
    
    show password button on -200


/*****************
   Version: 0.155
    DateTime: 10/05/2012 - 4:54 PM
*/

//$.sub is not supported in jquery 1.4.2, so adding it to jquery as soon as this aim client js is loaded
;;
(function ($, window, document, undefined) {
	if(!$.sub){
		$.extend({
			sub: function () {
				function jQuerySub(selector, context) {
					return new jQuerySub.fn.init(selector, context);
				}
				$.extend(true, jQuerySub, this);
				jQuerySub.superclass = this;
				jQuerySub.fn = jQuerySub.prototype = this();
				jQuerySub.fn.constructor = jQuerySub;
				jQuerySub.sub = this.sub;
				jQuerySub.fn.init = function init(selector, context) {
					if (context && context instanceof $ && !(context instanceof jQuerySub)) {
						context = jQuerySub(context);
					}
					return $.fn.init.call(this, selector, context, rootjQuerySub);
				};
				jQuerySub.fn.init.prototype = jQuerySub.fn;
				var rootjQuerySub = jQuerySub(document);
				return jQuerySub;
			}
		});
	}
}(jQuery, window, document));
		
/*\
 *  --------------------------------
 *  SNI Community Frame Portal
 *  --------------------------------
 *  + Plugin model derived from work by @ajpiano and @addyosmani
 *
 *  Apply to a form element to replace default functionality with
 *  an asynchronous, cross-domain iframe.
\*/
;;
(function ($, window, document, undefined) {

    var pluginName = 'SNIPortal',
        defaults = {
            serviceURL: undefined,
            startCallback: undefined,
            finishCallback: undefined,
            isSSO: false,
            isJSONP: false,
            Port: {
                status: false,
                startURL: null,
                isWaiting: false,
                timeoutValue: 15000,
                formSubmitted: false,
                init: function (initCallback) {
                    if (!Port.status) {
                        this.frame = $('<iframe>')
                            .attr({
                            'id': 'SNIPortalIFrame',
                            'name': 'SNIPortalIFrame',
                            'frameBorder': '1',
                            'scrolling': 'auto',
                            'width': '40',
                            'height': '40'
                        }).css({ //hide our iframe
                            'position': 'absolute',
                            'left': '-150px',
                            'top': '0px'
                        }).appendTo('body')[0];
                        $(this.frame).attr('src', this.startURL);
                        $(this.frame).unbind('load').load(function () {
                            if (initCallback instanceof Function) {
                                initCallback();
                            }
                        });
                    } else {
                        initCallback();
                    }
                    this.status = 'built';
                    return Port;
                },
                getLocalURL: function (fOpts) {
                    var url, loc, iframe = document.getElementById("SNIPortalIFrame");
                    try {
                        loc = iframe.contentDocument.location.href;
                    } catch (e) {
						
                        fOpts.finishCallback('Error');
                    }
                    try {
                        if (window.frames[this.frame.id].document !== undefined) {
                            url = window.frames[this.frame.id].document.location;
                        }
                    } catch (e) {
                        console.log(e);
                    }
                    if (url !== undefined && url.href !== undefined) return url;
                    return false;
                },
                buildForm: function (fList, fOpts) {
                    if (!(this.getLocalURL(fOpts))) return false;
                    var iDoc = (this.frame.contentWindow) ? this.frame.contentWindow.document : (this.frame.contentDocument.document) ? this.frame.contentDocument.document : this.frame.contentDocument;
                    var newForm = iDoc.createElement('form');
                    var method = 'POST';
                    var isTwitter = false;
                    newForm.setAttribute('action', fOpts.serviceURL);
                    newForm.setAttribute('method', method);
                    if (!(fList instanceof Array) && (fList instanceof Object)) {
                        var fListBuff = [];
                        for (var fName in fList) {
                            if (fList[fName] === 'twitter') {
                                isTwitter = true;
                            }
                            fListBuff.push({
                                'name': fName,
                                'value': fList[fName]
                            });
                        }
                        fList = fListBuff;
                    }
                    fList.push({
                        name: 'callbackUrl',
                        value: this.startURL
                    });
                    var i = fList.length;
                    while (i-- > 0) {
                        var tInput = iDoc.createElement('input');
                        tInput.setAttribute('name', fList[i].name);
                        tInput.setAttribute('value', fList[i].value);
                        newForm.appendChild(tInput);
                    }
                    if (fOpts.serviceURL !== "" && fOpts.serviceURL !== undefined) {
                        newForm = iDoc.body.appendChild(newForm);
                        this.isWaiting = true;
                        window.timer1 = window.setTimeout(function () {
                            fOpts.finishCallback('Error');
                            return false;
                        }, this.timeoutValue);
                        $(this.frame).unbind('load').load(function () {
                            window.clearTimeout(window.timer1);
                            if (fOpts.isSSO === false || fOpts.isSSO === undefined) {
                                Port.formControl.call(Port, this, fOpts);
                            } else {
                                if (fOpts && fOpts.finishCallback instanceof Function) {
                                    fOpts.finishCallback();
                                }
                            }
                        });
                    }
                    if (fOpts.serviceURL !== "" && fOpts.serviceURL !== undefined) {
						window.timer = window.setTimeout(function () {	//Added this code to show timeout during CPServices failure.
                            fOpts.finishCallback('Error');
                            return false;
                        }, this.timeoutValue);
                        newForm.submit();
                    }
                },
                formControl: function (formEl, fOpts) {
                    var url;
                    if (!(url = this.getLocalURL(fOpts))) return false;
                    if (this.isWaiting === true) {
                        var resJSON = {};
                        var message = window.decodeURIComponent(url).split('?'); 
                        message = window.decodeURIComponent(message[1]).split('&');
                        var i = message.length;
						try{
							while (i-- > 0) {
								var v = message[i].split('=');
								if (v[1].charAt(0) == "{") v[1] = $.parseJSON(v[1]);
								resJSON[v[0]] = v[1];
							}
						}catch(evt){
							//printMessages(evt + ' AIM Debug: Invalid json response appended to the url');
							if ('console' in self && 'log' in console) console.log(evt + ' AIM Debug: Invalid json response appended to the url');
						}
                        if (fOpts && fOpts.finishCallback instanceof Function) {
                            fOpts.finishCallback(resJSON); //resJSON
                        }

                    }
                }
            }
        }, Port = defaults.Port;

    function Plugin(element, options) {
        this.element = element;
        this._name = pluginName;
        //Make options into instance properties
        this.options = $.extend({}, defaults, options);
        //Define other instance properties here
        this._defaults = defaults;
        this._name = pluginName;
        this.init(element);
    }

    // Adds the Plugin initialization method
    Plugin.prototype = {
        init: function (formEl) {
            var fPort = this;
            Port.init();

            function submitHandler(e) {
                var formJSON = $(this).serializeArray();
                var startCallback = fPort.options.startCallback;
                if (startCallback instanceof Function) {
                    var valid = startCallback.call(this, formJSON, e);
                    if (!valid) return false;
                }
                Port.buildForm.call(Port, formJSON, fPort.options);
                e.preventDefault();
                return false;
            }
            if (formEl !== undefined) $(formEl).submit(submitHandler);
        }
    };
	
    var $Extend = $.sub(); //We can add custom jquery methods to $Extend. $.sub is not supported in jquery 1.4.2
    //Extend Global jQuery (where we actually add the plugin!)
    $.fn[pluginName] = function (options) {
        return $Extend(this).each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    };

    $.fn[pluginName].post = function (argObj) {
					
		Port.init(function () {
			Port.buildForm(argObj.JSON, {
                serviceURL: argObj.service,
                finishCallback: argObj.callback,
                isSSO: argObj.isSSO
            });
        });
    };
    $.fn[pluginName].setDefaults = function (newD) {
        $.extend(true, defaults, newD);
    };

}(jQuery, window, document));




/*\
 *  --------------------------------
 *  SNI Community Full Modal
 *  --------------------------------
 *  + Plugin model derived from work by @ajpiano and @addyosmani
 *
 *  Apply to an element to add it to a full screen modal window.
\*/

;
(function ($, window, document, undefined) {

    var pluginName = 'SNIModal',
        Modal,
        defaults = {
            $mWrap: $('<div class="SNIModal_Wrap"><div class="SNIModal_Cover"></div><div id="SNIModal" class="SNIModal_Window"><button class="SNIModal_Close"></button><div id="SNIModal_Content"></div></div></div>').delegate('.SNIModal_Close', 'click', function (e) {
                if (window.isLoggedIn) {
                    window.location.reload();
                    return false;
                }
                Modal.close(e);
                return false;
            })
        };

        function Plugin(element, options) {
            Modal = this;
            this.element = element;
            this._name = pluginName;
            this._options = $.extend({}, defaults, options);
            this._defaults = defaults;
            this.init(this.element, this._options);
        }

    Plugin.prototype = {
        init: function (element, options) {
            options.$mWrap.addClass('aim-mobile-responsive');
            options.$mWrap = options.$mWrap.appendTo('body').show();

            if(typeof MediaClass === 'function') {
                MediaClass("aim-mobile-portrait", "(max-width: 614px and orientation: portrait)");
                MediaClass("aim-mobile", "(max-width: 614px)");
            }
        },
        close: function (e) {
            this._options.$mWrap.hide().removeClass('showModal');
            e.preventDefault();
            return false;
        },
        open: function (element) {
            var $newEl = $(element).clone(true);
            var $contain = this._options.$mWrap.find('#SNIModal_Content').empty();
            $newEl = $newEl.appendTo($contain);
            this._options.$mWrap.addClass('showModal').show();
            return $newEl[0];
        }
    };
	
    var $Extend = $.sub(); //We can add custom jquery methods to $Extend.$.sub is not supported in jquery 1.4.2

    $Extend.fn.open = function () {
        return $Extend(Modal.open(this));
    };

    $Extend.fn.close = function () {
        Modal.close();
        return $Extend(this);
    };
    //Extend Global jQuery (where we actually add the plugin!)
    $.fn[pluginName] = function (options) {
        plugin = $.data(window, 'plugin_' + pluginName);
        if (!(plugin instanceof Plugin)) {
            $.data(window, 'plugin_' + pluginName, plugin = new Plugin(this, options));
        }
        return $Extend(this).each(function () {
            $.data(this, 'plugin_' + pluginName, plugin);
        });
    };

}(jQuery, window, document));



/*\
 *  --------------------------------
 *  SNI Community Login Controller
 *  --------------------------------
 *  + Plugin model derived from work by @ajpiano and @addyosmani
 *
 *  Apply on a page to add asynchronous login functionality.
\*/

;
(function ($, window, document, undefined) {
    var C,
    pluginName = 'community',
        Validator,
        defaults = {
            
            postProcessingAction: function (actionURL) {
				window.isLoggedIn = true;
                if (actionURL === 'ssoRedirect') {
                    C.options.ssoRedirect();
                } else if (actionURL === 'redirectURL') {
                    C.options.redirectURL();
                }
            },
            mailService: function (email) {
                if (C.options.simple_validate_email(email)) {
                    return C.options.mailServiceUrl + '/email?emailId=' + encodeURIComponent(email) + '&siteCode=' + C.options.siteCode;
                } else {
                    return C.options.mailServiceUrl + '/userId?userId=' + encodeURIComponent(email) + '&siteCode=' + C.options.siteCode;
                }
            },
            forgotPasswordMailService: function (email) {
                return C.options.forgotPasswordUrl + '/' + email + '/' + C.options.siteCode;
            },
            forgotPasswordMailServiceByUserId: function (userid) {
                return C.options.forgotPasswordUrl + '/byuserid/' + userid + '/' + C.options.siteCode;
            },
            loginCallback: function (result) {
                if (C.options.isSocial != true) {//Standard login
                    C.options.ssoCallback(result); // SSO check occurs only for standard login
                } else {//social login or sign up
					_AIM.publish('/aim/complete',[result]);//generic login+signup event
                    if (result.AIM_SOCIAL_SIGNUP) { //only for social sign up display welcome screen
							C.getUserNames(C.options.pages.ssoWelcome, result);
							C.options.currentPage = C.options.pages.ssoWelcome;
							C.setPage('ssoWelcome');
							_AIM.publish('/aim/signup', [result]);//social sign up event
                    } else if(C.options.isSocial){//C.options.isSocial -- social login flow
							C.options.isNotHeader = true;	//Reloads the current page after user logs in
							C.options.postProcessingAction('redirectURL');
							_AIM.publish('/aim/login', [result]);//social login event
                    }
                }
                return true;
            },
            ssoCallback: function () {
                var username, password, sasavecreds;
                $(C.options.loginDetails).each(function (index, Element) {
                    if (Element.name === "username") {
                        username = Element.value;
                    } else if (Element.name === "password") {
                        password = Element.value;
                    } else if (Element.name === 'email') {
                        username = Element.value;
                    } else if (Element.name === 'username2') {
                        username = Element.value;
                    } else if (Element.name === 'SMSAVECREDS') {
                        sasavecreds = Element.value;
                    }
                });

                var fList = {
                    'USER': username,
                    'PASSWORD': password,
                    'TARGET': C.options.ssotargetURL,
                    'SMAGENTNAME': C.options.ssoagentURL,
                    'SMSAVECREDS': sasavecreds
                };
			
                $().SNIPortal.post({
                    service: C.options.ssoURL,
                    JSON: fList,
                    startURL: C.options.localFrameURL,
                    callback: C.options.iframeFormControl,
                    isSSO: true
                });
            },
            iframeFormControl: function (response) {
				_AIM.publish('/aim/complete',[response]);//generic login+signup event
                if (C.options.isSignup !== true) {//Standard login callback after SSO is complete
					C.options.isNotHeader = true;
					C.options.postProcessingAction('redirectURL');
					_AIM.publish('/aim/login', [response]);//standard login event
                }
				_AIM.publish('/aim/signup', [response]);//standard sign up event
                return false;
            },
            redirectURL: function () { //called after SSO that occurs after login
                var url = parseURL();
                if (url.params.DEST_URL !== undefined) {
                    window.location.href = C.options.returnDecodedURL(url.params.DEST_URL);
                } else if (C.options.targetUrl !== undefined) {
                    window.location.href = C.options.targetUrl;
                } else if (C.options.isNotHeader === true && C.destination === false) {//Login from modal from anywhere flow
					if (url.params.aimpagealert === "updatePasswordLogin" || url.params.aimpagealert === "resetpwd") {
						window.location.href = 'http://' + SNI.Community.ur3Domain.replace(/^http:\/\//, '') + '/community/usersettings.esi';//added code to support fn jitter bug
					} else{
						window.location.reload();
					}
                } else if ($("#SITE_HOME_URL").val() !== undefined && $("#SITE_HOME_URL").val() != '') {
                    window.location.href = C.options.returnDecodedURL($("#SITE_HOME_URL").val());
                } else if (C.destination) {
                    window.location.href = C.options.returnDecodedURL(url.hosturl);
                } else {
                    window.location.reload();
                }
            },
            ssoRedirect: function () { //called after SSO that occurs after signup
                var url = parseURL();
                var destination = true;
                if (url.params.DEST_URL === undefined) {
                    destination = false;
                } else {
                    window.location.href = C.options.returnDecodedURL(url.params.DEST_URL);
                    return false;
                }
                if (C.options.targetUrl !== undefined) {
                    window.location.href = C.options.targetUrl;
                } else if (C.options.isNotHeader === true) {
                    window.location.reload();
                } else if ($("#MYSETTINGS_URL").val() !== undefined && $("#MYSETTINGS_URL").val() !== "") {
                    window.location.href = $("#MYSETTINGS_URL").val();
                } else if (C.options.isNotHeader === false && destination === false) {
                    window.location.href = 'http://' + SNI.Community.ur3Domain.replace(/^http:\/\//, '') + '/community/usersettings.esi'; //added code to support fn jitter bug
                } else if (C.options.targetUrl != undefined) {
                    window.location.href = C.options.targetUrl;
                } else {
                    window.location.reload();
                }
            },
            returnDecodedURL: function (url) {
                var rege = /^(https?:\/\/)/;
                var decodedUrl = decodeURIComponent(decodeURIComponent(url));
                if (rege.test(decodedUrl)) {
                    return decodedUrl;
                } else {
                    return 'http://' + decodedUrl;
                }
            },
            signupCallback: function (result, aimObj) {
                aimObj.getUserNames(C.options.pages.registered, result);
                aimObj.setPage('registered');
                C.options.isSignup = true;
                C.options.ssoCallback();
                return true;
            },
            displayPlaceholder: function ($formEl) {
				
				function addOrRemoveClass(field, len){
					if(len > 0){
						$(field).addClass('plain');
					}else{
						$(field).removeClass('plain');
					}
				}
				
                if (C.options.pageName === 'handshakeTemplate') {
                    $formEl.find('input.email').each(function () {
                        $(this).addClass('plain');
                    });

                    $formEl.delegate('input', 'keyup keydown keypress', function () {
						addOrRemoveClass($(this),$(this).val().length);
                    });

                    $formEl.find('input').bind('paste', function () {
                        $(this).addClass('plain');
                    });
                } else {
                    $formEl.delegate('input', 'keyup keydown keypress', function () {
                        addOrRemoveClass($(this),$(this).val().length);
                    });
                    $formEl.find('input').bind('paste', function () {
                        $(this).addClass('plain');
                    });
                }
            },
            showPassword: function (f, v) {
                return $(v).each(function () {
                    var c = function (a) {
                        var a = $(a);
                        var b = $("<input id='pwdtext' type='text' name='pwdtext' name='passwordClear'/>");
                        b.insertAfter(a).attr({
                            'class': a.attr('class')
                        });

                        return b
                    };
                    var d = function ($this, $that) {
                        $that.val($this.val());
                        $that.attr('class', $this.attr('class'));
                    };
                    var e = function () {
                        if ($checkbox.is(':checked')) {
                            d($this, $clone);
                            $clone.addClass('plain').show();
                            $this.hide()
                        } else {
                            d($clone, $this);
                            $clone.hide();
                            $this.show()
                        }
                    };
                    var $clone = c(this),
                        $this = $(this),
                        $checkbox = $(f);
                    $checkbox.click(function () {
                        e()
                    });
                    $this.keyup(function () {
                        d($this, $clone)
                    });
                    $clone.keyup(function () {
                        d($clone, $this)
                    });
                    e()
                })
            },
            simple_validate_email: function (element) {
                var text = $(element).val();
                if (text === undefined) {
                    text = element;
                }
                var pattern = new RegExp(/^\w+([\.-]?\w+)*(\+[a-zA-Z0-9-]+)?@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                return pattern.test(text);
            },
            validate_email: function (el) {
                var text = $(el).val();
                var result = $.validator.methods.email.call({
                    optional: function () {
                        return false
                    }
                },
                text,
                this);
                if (result) {
                    C.options.checkHandshake(text);
                }
            },
            throwMessages: function (el) {
			
				function tipMessage(message) {
                    $(C.options.currentPage).find('.emailTip').show().html(message);
                }
				
                if ($(el).attr('name') === "email" || $(el).attr('name') === "username") { //Validating email field
                    var selectedField = $(el);
                    var selectedFieldId = $(el).attr('id');

                  if (C.options.pageName === 'login' || C.options.pageName === 'updatePasswordLogin' || C.options.pageName === 'register' || C.options.pageName === 'handshakeTemplate' || C.options.pageName === 'twitterDetails') {
                        $(C.options.currentPage).delegate("#" + selectedFieldId, 'keydown focusout', function (event) {
                            if (event.type == 'keydown') {
                                selectedField.removeClass('errorIndicator');
                            } else {
                                if (!C.options.simple_validate_email($(this)) && $(this).val().length) {
                                    selectedField.addClass('errorIndicator');
                                    tipMessage( _AIM.errorMessages.invalidEmail );
                                }
                            }
                        });
                    }
                    if (C.options.pageName === "login" || C.options.pageName === 'handshakeTemplate' || C.options.pageName === 'updatePasswordLogin' || C.options.pageName === 'twitterDetails') {
                        $(C.options.currentPage).find(':submit').click(function () {
                            if (!selectedField.val().length) {
                                tipMessage( _AIM.errorMessages.invalidEmail );
                            }
                        });
                    }
                    if (C.options.pageName === "register") {
                        $(C.options.currentPage).delegate("#" + selectedFieldId, 'blur', function () {
                            if ($(this).val().length === 0) {
                                $(this).parent().parent().removeClass('aimValid');
                            }
                        });

                        $(C.options.currentPage).find(':submit').click(function () {
                            //fix tip text color CPC - 652
                            if (!C.options.simple_validate_email(selectedField) && selectedField.val().length) {
                                selectedField.addClass('errorIndicator');
                            } else {
                                selectedField.removeClass('errorIndicator');
                            }
                        });

                        //New behaviour to show both errors on empty form submit on the Registration screen
                        $(C.options.currentPage).find(':submit').click(function () {
                            if (!selectedField.val().length) {
                                tipMessage( _AIM.errorMessages.invalidEmail );
                            }
                            //Added logic to display password hint when something is entered in the email field and the form is submitted without entering password
                            if (!$(C.options.currentPage).find(':password').val().length) {
                                $(".passwordHint").show();
                            }
                        });

                        $(C.options.currentPage).delegate("#" + selectedFieldId, 'keydown focusout', function (event) {
                            if (event.type == 'keydown') {
                                if (!C.options.simple_validate_email($(this))) {
                                    $(this).parent().parent().removeClass('aimValid');
                                    tipMessage( _AIM.errorMessages.invalidEmail );
                                } else {
                                    $(this).removeClass('errorIndicator');
                                }
                            } else if (event.type == 'focusout') {
                                if (C.options.simple_validate_email($(this))) {
                                    C.options.validate_email($(this));
                                    $(this).removeClass('errorIndicator');
                                }

                            }

                        });
                    }
                } else if ($(el).attr('name') === "password" || $(el).attr('name') === "pwdtext") { //Validating password field
                    var selectedPasswordField = $(el);
                    var selectedPasswordFieldId = $(el).attr('id');
                    var editedPassword = false;

                    //password field
                    $(C.options.currentPage).delegate("#" + selectedPasswordFieldId, 'keydown focusout', function () {
                        $(this).removeClass('errorIndicator');
                        if (!$(this).val().length) {
                            $(this).parent().parent().removeClass('aimValid');
                            $(this).removeClass('aimError');
                        }
                    });

                    if (C.options.pageName === "register" || C.options.pageName === "resetpwd") {
                        $(C.options.currentPage).delegate("#" + selectedPasswordFieldId, 'focusout', function () {
                            var result = (/^(?=.*[0-9]+.*)(?=.*[A-Z]+.*)\S{6,}$/).test($(this).val());
                            if (!result) {
                                $(this).addClass('errorIndicator');
                            }
                        });
                    }

                  if (C.options.pageName === "login" || C.options.pageName === 'handshakeTemplate' || C.options.pageName === 'updatePasswordLogin' || C.options.pageName === "resetpwd" || C.options.pageName === 'twitterDetails') {
                        $(C.options.currentPage).find(':submit').click(function () {
                            if (!selectedPasswordField.val().length && !editedPassword) {
                                $(C.options.currentPage).find('.passwordTip').show().html('Please enter your password.');
                                $('.passwordHint').hide();
                            } else {
                                $(C.options.currentPage).find('.passwordTip').hide().html('');
                            }
                        });

                        $(C.options.currentPage).delegate("#" + selectedPasswordFieldId, 'keydown focusout', function (event) {
                            if ($(this).val().length) {
                                editedPassword = true;
                            }
                        });
                    }

                } else if ($(el).attr('name') === "username2") { //Validating email field on ForgotPassword screen
                    var selectedField = $(el);
                    var selectedFieldId = $(el).attr('id');
                    var edited = false;
                    if (C.options.pageName === 'forgotPassword') {
                        $(C.options.currentPage).find(':submit').click(function () {
                            if (!selectedField.val().length && !edited) {
                                tipMessage( _AIM.errorMessages.invalidEmail );
                            }
                        });
                        $(C.options.currentPage).delegate("#" + selectedFieldId, 'keydown focusout', function (event) {
                            if (event.type === "keydown") {
                                tipMessage( _AIM.errorMessages.invalidEmail );
                                selectedField.removeClass('errorIndicator');
                                $('input[type="submit"]').removeAttr('disabled');
                                if ($(this).val().length) {
                                    edited = true;
                                }
                            } else {
                                $('input[type="submit"]').removeAttr('disabled');
                                edited = false;
                                if (!C.options.simple_validate_email($(this)) && selectedField.val().length) {
                                    selectedField.addClass('errorIndicator');
                                } else {
                                    selectedField.removeClass('errorIndicator');
                                }
                            }
                        });
                    }
                }

            },
            checkHandshake: function (element) {
                C.options.email = element;
                $.ajax({
                    url: C.options.handshakeUrl + '?email=' + encodeURIComponent(element),
                    dataType: 'jsonp',
                    type: "GET",
                    success: function (data, textStatus) {
                        formReceiveCallback(data);
                    },
                    error: function (status) {
                        formReceiveCallback('Error');
                    }
                });
            },
            clientValidation: function (sURL, $formEl) {
                return {
                    errorClass: 'aimError',
                    errorElement: 'div',
                    ignore: 'ignore',
                    onsubmit: true,
                    focusCleanup: true,
                    validClass: '',
                    onclick: false,
                    submitHandler: function (form) {
                        if ($(form).attr('id') === "aim_Login") {
                            $(form).find(":submit").after("<div id='processing'>Logging In...</div>");
                        } else if ($(form).attr('id') === "aim_Register") {
                            $(form).find(":submit").after("<div id='processing'>Signing Up...</div>");
                        } else {
                            $(form).find(":submit").after("<div id='processing'>Processing...</div>");
                        }
                        $(form).find(":submit").hide();
                        var formJSON = $(form).serializeArray();
                        C.options.loginDetails = formJSON;
						
                        $().SNIPortal.post({
                            service: sURL,
                            JSON: formJSON,
                            callback: formReceiveCallback
                        });
                    },
                    errorPlacement: function (error, element) {
                        if ($(element).attr('name') === "username2" || $(element).attr('name') === "username" && !$(element).val()) {
                            //Please check the format of your email address and re-enter (i.e. joe@site.com).
                            $('.emailTip').show().html( _AIM.errorMessages.invalidEmail );
                        } else if (countChar(element)) {
                            error.appendTo(element.parent().parent()); //do not remove; affects checkmark placement
                        }
                    },
                    rules: {
                        email: {
                            required: {
                                depends: function () {
                                    $(this).val($.trim($(this).val()));
                                    return true;
                                }
                            },
                            email: true
                        },
                        username: {
                            required: {
                                depends: function () {
                                    $(this).val($.trim($(this).val()));
                                    return true;
                                }
                            },
                            email: true
                        },
                        username2: {
                            required: {
                                depends: function () {
                                    $(this).val($.trim($(this).val()));
                                    return true;
                                }
                            },
                            email: true
                        },
                        password: {
                            required: true
                        }

                    },
                    messages: {
                        username: {
                            required: "Please enter a valid email address.",
                            email: "Please enter a valid email address."
                        },
                        username2: {
                            required: "Please check the format of your email address and re-enter (i.e. joe@site.com).",
                            email: "Please check the format of your email address and re-enter (i.e. joe@site.com). "
                        }
                    },

                    onkeyup: function (element) {
                        //check for password field on Sign up page
                        if (countChar(element) && $(element).hasClass('newpassword')) {
                            $('.passwordHint').show();
                        }
                        
                        C.options.throwMessages(element);
                    },
                    success: function (label) {
                        label.parent().addClass('aimValid');
                    }
                };
            },
            serverValidation: function (response, page) {
                function vMessage(message) {
                    page.find('.validate').show().text(message);
                }
                switch (response) {
                    case -100:
                        vMessage( _AIM.errorMessages.invalidLogin );
                        page.find(":submit").show();
                        page.find("#processing").remove();
                        break;
                    case -201:
                        vMessage( _AIM.errorMessages.doubleCheck );
                        page.find(":submit").show();
                        page.find("#processing").remove();
                        break;
                    case -200:
                        vMessage( _AIM.errorMessages.invalidLogin );
                        page.find(":submit").show();
                        page.find("#processing").remove();
                        break;
                    case -101:
                        vMessage( _AIM.errorMessages.doubleCheck );
                        page.find(":submit").show();
                        page.find("#processing").remove();
                        break;
                    case -401:
                        vMessage( _AIM.errorMessages.duplicateEmail );
                        page.find(":submit").show();
                        page.find("#processing").remove();
                        break;
                    case -501:
                        vMessage( _AIM.errorMessages.pwdTokenExpired );
                        page.find(":submit").show();
                        page.find("#processing").remove();
                        break;
                }
            },
            start: 'login',
            pages: {
                //New markup added around email and password tips for #CPC-709
                register: '<form id="aim_Register" class="aim_Controls aim_Validate aim-register" novalidate><div class="aimSocial"><p>Sign up with an existing account</p><div id="janrainEngageEmbed" class="janrain-container"></div></div><div class="aimLocal"><p><em class="alt">Or </em>Sign up with your email and password</p><div class="validate"></div><ul class="aimInput"><li class="email"><label for="aim_Email"></label><div class="encloseEmail"><input type="email" name="email" class="email required" id="aim_Email" placeholder="Email address"></div></li><li class="emailTipLI"><div class="emailTip"></div></li><li class="password"><label for="aim_Password"></label><div class="enclosePassword"><input type="password" name="password" id="aim_Password" class="newpassword password required" placeholder="Password"></div></li><li class="passwordTipLI"><div class="passwordHint">Your password must contain at least 6 characters, a capital letter and a number.<div class="show"><div class="showPasswordCheck"><input id="checkbox" type="checkbox"  name="showpasswordcheck" class="ignore"/></div><div class="showPasswordtxt">Show Password</div></div></div></li></ul><input type="submit" value="Sign Up" name="register" class="submit"></div><div class="aimFooter"><p>By "Signing Up", you agree to <span class="siteNameVar"></span>\'s <a href="http://www.scrippsnetworks.com/privacy.aspx" target="_blank">Privacy Policy</a> and <a href="http://www.scrippsnetworks.com/terms.aspx" target="_blank">Terms of Use.</a></p><div class="aimOptions"><span>Already a member? <a id="SNIAim_Login" href="">Log In</a></span></div></div></form>',

                //New markup added around email and password tips for #CPC-709
                login: '<form id="aim_Login" class="aim_Controls aim_Validate aim-login" novalidate><div class="aimSocial"><p>Log in with:</p><div id="janrainEngageEmbed" class="janrain-container"></div></div><div class="aimLocal"><p><em class="alt">Or </em>Log in with your <span class="siteNameVar"></span>&nbsp;account</p><div class="validate"></div><ul class="aimInput"><li class="email"><label for="aim_Email"></label><div class="encloseEmail"><input type="email" name="username" class="email" id="aim_Email" placeholder="Email address"></div></li><li class="emailTopLI"><div class="emailTip"></div></li><li class="password"><label for="aim_Password"></label><div class="enclosePassword"><input type="password" name="password" id="aim_Password" class="password" placeholder="Password"></div></li><li class="passwordTopLI"><div class="passwordTip"></div></li></ul><input type="submit" value="LOG IN" name="login" class="submit"><a href="#" class="aim_Forgot">Forgot Password?</a></div><div class="aimFooter"><div class="aimOptions"><input type="checkbox" name="SMSAVECREDS" value="YES" id="aimStayIn" class="stay" checked><label class="stay" for="aimStayIn">Keep me logged in</label><div class="clear-mobile"></div><span>Don\'t have an account? <a id="SNIAim_SignUp" href="">Sign Up</a></span></div></div></form>',

                updatePasswordLogin: '<form id="aim_Login" class="full aim_Controls updated aim_Validate aim-updatePasswordLogin" novalidate><h4>Update Password</h4><p>Thank you. Your password has been successfully updated.<br />Log in with your new password.</p><div class="validate"></div><ul class="aimInput"><li class="email"><label for="aim_Email"></label><div class="encloseEmail"><input type="email" name="username" class="email" id="aim_Email" placeholder="Email address"></div></li><li class="emailTopLI"><div class="emailTip"></div></li><li class="password"><label for="aim_Password"></label><div class="enclosePassword"><input type="password" name="password" id="aim_Password" class="password required" placeholder="Password"></div></li><li class="passwordTopLI"><div class="passwordTip"></div></li></ul><input type="submit" value="LOG IN" name="login" class="submit"><a href="#" class="aim_Forgot">Forgot Password?</a><div class="aimFooter"><div class="aimOptions"><input type="checkbox" name="SMSAVECREDS" value="YES" id="aimStayIn" class="stay" checked><label class="stay" for="aimStayIn">Keep me logged in</label><div class="clear-mobile"></div><span>Don\'t have an account? <a id="SNIAim_SignUp" href="">Sign Up</a></span></div></div></form>',


                resetpwd: '<form id="aim_ResetPassword" class="aim_Controls aim_Validate aim-resetpwd" novalidate><div class="full aim_Controls"><h4>Update Password</h4><p>Hi <b><span class="aim_Username"></span></b>. Please enter a new password for your account.</p><div class="validate"></div><ul class="aimInput"><li class="email"><label for="aim_Email"></label><div class="enclosePassword"><input type="password" name="password" class="newpassword password required" id="aim_Password" placeholder="Password"><input type="hidden" name="token" value=""></div></li><li class="passwordTipLI"><div class="passwordTip"></div><div class="passwordHint">Your password must contain at least 6 characters, a capital letter and a number.<div class="show"><div class="showPasswordCheck"><input id="checkbox" type="checkbox"  name="showpasswordcheck" class="ignore"/></div><div class="showPasswordtxt">Show Password</div></div></div></li></ul><input type="submit" value="Update Password" name="resetPassword" class="submit"></div></form>',
				
                accountactivated: '<form id="aim_conf" class="full aim_Controls aim-accountactivated"><h4>EMAIL ADDRESS CONFIRMED</h4><div class="validate"></div><p>Hi <b><span class="aim_Username"></span></b>, your email address has been confirmed.</p><input type="button" value="Continue" name="accountactivated" class="submit reloadPage"></form>',
				
                handshakeTemplate: '<form id="aim_Login" class=" full aim_Controls aim_Validate aim-handshakeTemplate" novalidate><div class="handshakecont"><div class="handshake"><span class="handshakePlaceHolder"></span><div class="validate"></div><ul class="aimInput"><li class="email"><label for="aim_Email"></label><div class="encloseEmail"><input type="email" name="username" class="email" id="aim_Email" placeholder="Email address"></div></li><li class="emailTipLI"><div class="emailTip"></div></li><li class="password"><label for="aim_Password"></label><div class="enclosePassword"><input type="password" name="password" id="aim_Password" class="password" placeholder="Password"></div></li><li class="passwordTipLI"><div class="passwordTip"></div></li></ul><input type="submit" value="LOG IN" name="login" class="submit"><a href="#" class="aim_Forgot">Forgot Password?</a></div><div class="aimFooter"><div class="aimOptions"><input type="checkbox" name="SMSAVECREDS" value="YES" id="aimStayIn" class="stay" checked><label class="stay" for="aimStayIn">Keep me logged in</label><!--<span>Don\'t have an account? <a id="SNIAim_SignUp" href="">Sign Up</a></span>//--></div></div></div></form>',
				
                handshakeForgotPwdTemplate: '<form id="aim_ResetPassword" class="aim_Controls aim_Validate aim-handshakeForgotPwdTemplate" novalidate><div class="full aim_Controls"><p>You are member of one of our sister sites listed below </p><div class="handshakeImages"></div><p>So to Reset Password, apply from any of above mention sites.</p></div></form>',
				
                loginTemplate: '<div class="aim-loginTemplate"><h4>WELCOME!</h4><p>You are a member of our sister site! Your login works here as well. Please enter your password to log in.</p><div class="handshakeImages"></div></div>',
				
                unconfirmedTemplate: '<div class="aim-unconfirmedTemplate"><h4>WELCOME!</h4><p>Hi <b><span class="aim_Username"></span></b>,You are already a member of one of our sister sites.</p><span class = "handshakeImages"></span><p>But we still need to confirm your email account. When you signed up, we sent an email to <b><em class="aim_Email">your email address</em></b>.</p><p>Please follow the directions in the email to verify your account and you\'ll be humming along in no time.</p></div>',
				
                disabled: '<div id="aim_Registered" class="full aim_Controls aim-disabled"><h4>ACCOUNT DISABLED</h4><div id="aim_Disabled" class="aim_Controls"><p>Hi <b><span class="aim_Username"></span></b>, your account has been disabled.</p><p>Please <a class="siteContactUsVar">contact us</a> with any questions.</p></div></div>',
				
                curtainTemplate: '<div id="aim_Login" class="full aim_Controls aim-curtainTemplate"><h4>PARDON OUR APPEARANCE</h4><p>We\'re working through the night connecting people to the power and joy of human journeys that inspire, surprise and entertain.</p><p>While you wait, take a peek at some of our other great content on <a class="siteNameUrl"><span class="siteNameVar"></span></a>.</p></div>',
				
				linkacct: '<div id="aim_Register" class="full aim_Controls aim-linkacct"><p><br/>By linking your <span class="siteNameVar"></span> account to your Facebook account, you will be able to find your real-life friends and share your <span class="siteNameVar"></span>&nbsp;activities with your Facebook friends! </p><div id="janrainEngageEmbedLinkAcc"><div id="janrainEngageEmbed" class="janrainEngageEmbedLinkAcc"></div></div></div>',
				
				linkacctShowMsg: '<div id="aim_Register" class="full aim_Controls aim-linkacctShowMsg"><p><br/><span class="displayResponse"></span></p></div>',
				
				resendEmailTemplate: (function(){
					var $p = $('<form id="aim_ResendEmailTemplate" class="full aim_Controls aim-resendEmailTemplate" novalidate><p>We sent the email again. It may take a few minutes for it to arrive.</p><p><button class="aim_Refresh aim_Button continue_Button">CONTINUE</button></p></form>');
					$p.submit(function (e) {
                        C.options.ssoRedirect();
                        preventDefault(e);
                        return false;
                    });
					return $p;
                }()),
				
                accountExpiredEmail: (function () {
                    var $p = $('<form id="aim_conf" class="full aim_Controls aim-accountExpiredEmail"><p>We\'ve sent an email to <b><span class="aim_Email"></span></b> to verify your account.</p><p>Please follow the directions in the email so you can login next time</p><input type="submit" value="Continue" name="ssoWelcome" class="submit reloadPage"></form>');
                    $p.submit(function (e) {
                        window.location.href = C.options.params.fullURL;
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }()),
				
                forgotPassword: (function () {
                    var $p = $('<form id="aim_ForgotPassword" class="aim_Controls aim_Validate forgotPassword aim-forgotPassword" novalidate><div class="full aim_Controls"><h4>FORGOT PASSWORD</h4><p>Enter your email address and we\'ll send you directions to change your password.</p><div class="validate"></div><ul class="aimInput"><li class="email"><label for="aim_Email"></label><div class="encloseEmail"><input type="email" name="username2" class="email" id="aim_Email" placeholder="Email address"></div></li><li class="emailTipLI"><div class="emailTip"></div></li></ul><input type="submit" value="Request Password" name="forgotPassword" class="submit"><div class="forgot_Cancel"><span class="forgot_Cancel">or</span><a href="#" class="aim_Forgot_Cancel">Go Back to Login</a></div></div></form>');
                    $p.find('.aim_Forgot_Cancel').click(attachHook('login'));
                    var formsubmit = false;

                    $p.submit(function (e) {
                        formsubmit = true;
                        var b = this;
                        var emailValue = $(this).find('#aim_Email').val();
                        var userMail = emailValue;

                        if (!C.options.simple_validate_email(emailValue)) {
                            $('input[type="submit"]').attr('disabled', 'disabled');
                            return false;
                        }

                        if (!C.options.formSubmitted) {
                            userMail = C.options.forgotPasswordMailService(userMail);

                            window.timer = window.setTimeout(function () {
                                formReceiveCallback('Error');
                                return false;
                            }, C.options.timeoutValue);

                            C.options.formSubmitted = true;
                            $.ajax({
                                url: userMail,
                                dataType: 'jsonp',
                                type: "GET",
                                timeout: C.options.timeoutValue,
                                success: function (data, textStatus) {
                                    window.clearTimeout(window.timer);
                                    C.options.formSubmitted = true;
                                    if (data.RESULT === 'SUCCESS') {
                                        C.getUserNames(C.options.pages.forgotPasswordEmail, data);
                                        C.options.currentPage = C.options.pages.forgotPasswordEmail;
                                        C.setPage('forgotPasswordEmail');
                                    } else if (data.RESULT === 'FAILURE') {
                                        $('input[type="submit"]').removeAttr('disabled');
                                        C.options.formSubmitted = false;
                                        C.options.currentPage.find("#processing").remove();
                                        C.options.currentPage.find(":submit").show();
                                        if (C.options.currentPage.find("#aim_ForgotPassword")) {
                                            C.options.currentPage.find(".validate").show().html("Whoops. The email address you entered is not in our system."); //rJSON.Message
                                        } else {
                                            C.options.currentPage.find(".validate").show().html(rJSON.Message);
                                        }
                                    } else if (data.RESULT === 'OTHER_SITE_MEMBER') {
                                        C.forgotHandshakeTemplate(C.options.pages.handshakeForgotPwdTemplate, data);
                                        C.setPage('handshakeForgotPwdTemplate');
                                    }
                                },
                                error: function (status) {
                                    C.options.formSubmitted = true;
                                    $('input[type="submit"]').removeAttr('disabled');
                                    window.clearTimeout(window.timer);
                                    formReceiveCallback('Error');
                                  
                                }
                            });
                        }
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }()),
                twitterDetails: (function () {
                    // When a user clicks the "back" button on the verify email password dialog, scrap the experience and 
                    // relaunch the Twitter email address confirm dialog.
                    $( "body" ).delegate( ".button-back" , "click" , function() {
                        C.options.currentPage = C.options.pages.twitterDetails;
                        C.setPage('twitterDetails');
                    });
                    var $p = $('<form id="aim_Login" class="aim_Controls aim_Validate twitter-confirm twitterDetails aim-twitterDetails" novalidate><div class="aimFullWidth aimLocal addinfo"><h4>ADDITIONAL INFO</h4><p>To finish signing up all we need is your email address and you\'ll be humming along in no time.</p><div class="additionalInfo"></div><div class="validate"></div><ul class="aimInput"><li class="email"><label for="aim_Email"></label><div class="encloseEmail"><input type="email" name="username" class="email required" id="aim_Email" placeholder="Email address"></div></li><li class="emailTopLI"><div class="emailTip"></div><input type="hidden" name="provider" value="twitter"><input type="hidden" name="token" class="twitterToken" value=""></li><li class="password"></li></ul><div class="spacer"></div><input type="button" value="SIGN UP" name="login" class="submit"></div><div class="aimFooter addinfofoot"><p>By "Signing Up", I agree to <span class="siteNameVar"></span>\'s <a href="http://www.scrippsnetworks.com/privacy.aspx" target="_blank">Privacy Policy</a> and <a href="http://www.scrippsnetworks.com/terms.aspx" target="_blank">Terms of Use.</a></p><div class="aimOptions"><input type="checkbox" name="SMSAVECREDS" value="YES" id="aimStayIn" class="stay" checked><label class="stay" for="aimStayIn">Keep me logged in</label><div class="clear-mobile"></div><span>Already a member? <a id="SNIAim_Login" href="">Log In</a></span></div></div></form>');
                    $p.find('.submit').click(function (e) {
                        var element = $(this).parent();
                        var email = $(this).parent().find('#aim_Email').val();
                        if (!C.options.simple_validate_email(email) || !email.length) {
                            $('input[type="submit"]').attr('disabled', 'disabled');
                            $(C.options.currentPage).find('.emailTip').show().html( _AIM.errorMessages.invalidEmail );
                            return false;
                        }
                        window.timer = window.setTimeout(function () {
                            formReceiveCallback('Error');
                            return false;
                        }, C.options.timeoutValue);
                        $.ajax({
                            url: C.options.twitterUserCheckUrl + '?email=' + encodeURIComponent(email),
                            dataType: 'jsonp',
                            type: "GET",
                            timeout: C.options.timeoutValue,
                            success: function (data, textStatus) {
                                window.clearTimeout(window.timer);
                                if (data.EXISTS_STATUS) { //email address exists in AIM, ask for the email address, but also ask for the password if the account exists.
                                    element.find('.password').html('<label for="aim_Password"></label><div class="enclosePassword"><input type="password" name="password" id="aim_Password" class="password required" placeholder="Password"></div><div class="passwordTip"></div>');
                                    element.find('.submit').remove();
                                    element.append('<input type="button" value="BACK" class="submit button-back"><input type="submit" value="LOG IN" name="login" class="submit">');
                                    element.append('<input type="hidden" value="' + C.options.aimToken + '" name="aimToken">');
                                } else { //email address does not exists in AIM, create a bogus scripps / twitter email address and use that for authentication.
                                    $().SNIPortal.post({
                                        'service': C.options.loginURL,
                                        'JSON': {
                                            'token': C.options.token,
                                            'provider': "twitter",
                                            'username': email,
                                            'aimToken': C.options.aimToken
                                        },
                                        'callback': function (json) {
                                            formReceiveCallback(json);
                                        }
                                    });
                                }
                            },
                            error: function (status) {
                                $('input[type="submit"]').removeAttr('disabled');
                                window.clearTimeout(window.timer);
                                formReceiveCallback('Error');
                            }
                        });
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }()),
                ssoWelcome: (function () {
                    var $p = $('<form class="full aim_Controls aim-ssoWelcome"><p>Welcome <span class="aim_Username"></span>!</p><input type="submit" value="Continue" name="ssoWelcome" class="welcomeBtn"></form>');
                     $p.submit(function (e) {
					    
						C.options.postProcessingAction('redirectURL');
                        e.preventDefault();
						return false;
                    });
                    return $p;
                }()),
                handshake: (function () {
                    var $p = $('<form id="aim_Login" class="full aim_Controls aim-handshake" novalidate><p>Hi <b><span class="aim_Username"></span></b>, you\'re already a member of one of our sister sites!  Your login works here as well.</p><ul class="aim_SisterSites"><li>Food Network</li><li>Travel Channel</li></ul><input type="submit" value="Continue" name="submit" class="submit"></form>');
                    $p.submit(function (e) {
                        C.options.loginCallback(e);
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }()),
                unconfirmed: (function () {
                    var $p = $('<form id="aim_Unconfirmed" class="full aim_Controls aim-unconfirmed" novalidate><span class="handshakePlaceHolder"><h4>CONFIRM ACCOUNT</h4><div class="validate"></div><p>Hi <b><span class="aim_Username"></span></b>, we still need to confirm your email account.</p><p>When you signed up, we sent an email to <b><em class="aim_Email">your email address</em></b>.</p><p class="last">Please follow the directions in the email to verify your account and you\'ll be humming along in no time.</p></span><fieldset><h3>Didn\'t get the email?</h3><p>Sometimes it takes a few minutes for the email to arrive. Check your spam folder if you can\'t find it or try resending the email.</p><input type="submit" value="RESEND THE EMAIL" name="submit" class="resend .aim_Email submit aim_Button"></fieldset></form>');
                    $p.submit(function (e) {
                        var b = this;
                        var userMail = $(this).find('.aim_Email').text();
                        userMail = C.options.mailService(userMail);
                        window.timer = window.setTimeout(function () {
                            formReceiveCallback('Error');
                            return false;
                        }, C.options.timeoutValue);
                        $.ajax({
                            url: userMail,
                            dataType: 'jsonp',
                            type: "GET",
                            timeout: C.options.timeoutValue,
                            success: function (data, textStatus) {
                                window.clearTimeout(window.timer);
                                if (data.RESULT === 'SUCCESS') {
                                    b.setAttribute('value', 'Email Sent');
									$(C.options.pages.resendEmailTemplate).find(".continue_Button").hide();
									C.options.currentPage = C.options.pages.resendEmailTemplate;
									C.setPage('resendEmailTemplate');;
                                } else {
                                    alert( _AIM.errorMessages.sendEmailFail );
                                }
                            },
                            error: function (status) {
                                window.clearTimeout(window.timer);
                                formReceiveCallback('Error');
                            }
                        });
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }()),
                registered: (function () {
                    var $p = $('<div id="aim_Registered" class="full aim_Controls aim-registered"><h4>WELCOME!</h4><div class="validate"></div><p>Hi <b><span class="aim_Username"></span></b>! We\'ve sent an email to <b><em class="aim_Email">your email address</em></b> to verify your account.</p><p>Please follow the instructions in the email so you can log in next time.</p><button class="aim_Refresh aim_Button">CONTINUE</button><form class="full aim_Controls" novalidate><fieldset><h3>Didn\'t get the email?</h3><p>Sometimes it takes a few minutes for the email to arrive. Check your spam folder if you can\'t find it or try resending the email.</p><input type="submit" value="RESEND THE EMAIL" name="submit" class="resend submit aim_Button"></fieldset></form></div>');
                    $p.submit(function (e) {
                        var b = this;
                        var userMail = $(this).parent().find('.aim_Email').text();
                        userMail = C.options.mailService(userMail);
                        window.timer = window.setTimeout(function () {
                            formReceiveCallback('Error');
                            return false;
                        }, C.options.timeoutValue);
                        $.ajax({
                            url: userMail,
                            dataType: 'jsonp',
                            type: "GET",
                            timeout: C.options.timeoutValue,
                            success: function (data, textStatus) {
                                window.clearTimeout(window.timer);
                                if (data.RESULT === 'SUCCESS') {
									C.options.currentPage = C.options.pages.resendEmailTemplate;
									C.setPage('resendEmailTemplate');
                                } else {
                                    alert( _AIM.errorMessages.sendEmailFail );
                                }
                            },
                            error: function (status) {
                                window.clearTimeout(window.timer);
                                formReceiveCallback('Error');
                            }
                        });
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }()),
                activationexpired: (function () {
                    var $p = $('<form id="aim_accountExpired" class="full aim_Controls aim-activationexpired" novalidate><h4>ACTIVATION EMAIL EXPIRED</h4><div class="validate"></div><p>We are sorry the activation email has expired. Activation emails are only valid for 24 hours after they\'re sent.</p><fieldset><h3>Didn\'t get the email?</h3><p>Sometimes it takes a few minutes for the email to arrive. Check your spam folder if you can\'t find it or try resending the email.</p><input type="submit" value="RESEND THE EMAIL" name="submit" class="resend submit aim_Button"></fieldset></form>');
                    $p.submit(function (e) {
                        var b = this;
                        var userMail = $(this).find('.aim_Email').text();
                        var email = userMail;
                        userMail = C.options.mailService(C.options.params.userid);
                        window.timer = window.setTimeout(function () {
                            formReceiveCallback('Error');
                            return false;
                        }, C.options.timeoutValue);
                        $.ajax({
                            url: userMail,
                            dataType: 'jsonp',
                            type: "GET",
                            timeout: C.options.timeoutValue,
                            success: function (data, textStatus) {
                                window.clearTimeout(window.timer);
                                if (data.RESULT === 'SUCCESS') {
                                    b.setAttribute('value', 'Email Sent');
									$(C.options.pages.resendEmailTemplate).find(".continue_Button").hide();
								    C.options.currentPage = C.options.pages.resendEmailTemplate;
									C.setPage('resendEmailTemplate');
                                } else {
                                    alert( _AIM.errorMessages.sendEmailFail );
                                }
                            },
                            error: function (status) {
                                window.clearTimeout(window.timer);
                                formReceiveCallback('Error');
                            }
                        });
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }()),
                resetpwdexpired: (function () {
                    var $p = $('<form id="aim_accountPasswordExpired" class="full aim_Controls aim-resetpwdexpired" novalidate><h4>PASSWORD RESET EMAIL EXPIRED</h4><div class="validate"></div><p>We\'re sorry, but this password reset email has expired. Password reset emails are only valid for 24 hours after they\'re sent.</p><fieldset><h3>Didn\'t get the email?</h3><p>Sometimes it takes a few minutes for the email to arrive. Check your spam folder if you can\'t find it or try resending the email.</p><input type="submit" value="RESEND THE EMAIL" name="submit" class="resend submit aim_Button"></fieldset></form>');
                    $p.submit(function (e) {
                        var b = this;
                        var userMail = C.options.forgotPasswordMailServiceByUserId(C.options.params.userid);
                        window.timer = window.setTimeout(function () {
                            formReceiveCallback('Error');
                            return false;
                        }, C.options.timeoutValue);
                        $.ajax({
                            url: userMail,
                            dataType: 'jsonp',
                            type: "GET",
                            timeout: C.options.timeoutValue,
                            success: function (data, textStatus) {
                                window.clearTimeout(window.timer);
                                if (data.RESULT === 'SUCCESS') {
                                    b.setAttribute('value', 'Email Sent');
									$(C.options.pages.resendEmailTemplate).find(".continue_Button").hide();
									C.options.currentPage = C.options.pages.resendEmailTemplate;
									C.setPage('resendEmailTemplate');
                                } else {
                                    alert( _AIM.errorMessages.sendEmailFail );
                                }
                            },
                            error: function (status) {
                                window.clearTimeout(window.timer);
                                formReceiveCallback('Error');
                            }
                        });
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }()),
                forgotPasswordEmail: (function () {
                    var $p = $('<form id="aim_ForgotPassword" class="full aim_Controls mailsent aim-forgotPasswordEmail" novalidate><h4>FORGOT PASSWORD</h4><p><div class="validate"></div><p>An e-mail has been sent to <em class="aim_Email">your email address.</em> with directions to change your password.</p><fieldset><h3>Didn\'t get the email?</h3><p>Sometimes it takes a few minutes for the email to arrive. Check your spam folder if you can\'t find it or try resending the email.</p><input type="submit" value="RESEND THE EMAIL" name="submit" class="resend submit aim_Button"></fieldset></p></form>');
                    $p.submit(function (e) {
                        var b = this;
                        var userMail = $(this).find('.aim_Email').text();
                        userMail = C.options.forgotPasswordMailService(userMail);
                        window.timer = window.setTimeout(function () {
                            formReceiveCallback('Error');
                            return false;
                        }, C.options.timeoutValue);
                        $.ajax({
                            url: userMail,
                            dataType: 'jsonp',
                            type: "GET",
                            timeout: C.options.timeoutValue,
                            success: function (data, textStatus) {
                                window.clearTimeout(window.timer);

                                if (data.RESULT === 'SUCCESS') {
                                    b.setAttribute('value', 'Email Sent');
									$(C.options.pages.resendEmailTemplate).find(".continue_Button").hide();
									C.options.currentPage = C.options.pages.resendEmailTemplate;
									C.setPage('resendEmailTemplate');
                                } else {
                                    alert( _AIM.errorMessages.sendEmailFail );
                                }
                            },
                            error: function (status) {
                                window.clearTimeout(window.timer);
                            }
                        });
                        preventDefault(e);
                        return false;
                    });
                    return $p;
                }())
            }
        };

    function countChar(el) {
        var val = false;
        if ($(el).val().length > 0) {
            val = true;
            return val;
        }
    }

		//code that appends janrainwidget library and removes it from the head when modal is closed or it is switched
	var includeJanrain = (function(){
		   // the reference to the script
		   var theScript;

		   return function (status){
			 if(status == 'on'){
			   // adding a script tag
			   var head = document.getElementsByTagName('head')[0];

			   theScript= document.createElement('script');
			   theScript.src = (document.location.protocol === 'https:') ?
							'https://rpxnow.com/js/lib/aim-core/engage.js' :
							'http://widget-cdn.rpxnow.com/js/lib/aim-core/engage.js';
			   theScript.type = "text/javascript";
			   theScript.id = 'janrainAuthWidget';
			   head.appendChild( theScript )
			 }else{
			   // removing it again
			   theScript.parentNode.removeChild( theScript );
			 }
		   }
		})();
		
    function Plugin(elements, options) {
        C = this;
        //So we can access the element from the instance
        C.destination = elements.length ? $(elements[0]) : false;
		
        //Make options into instance properties
        C.options = $.extend(true, {}, defaults, window._AIM.config, options);

        resolveRelativePaths(C.options);
        //Define other instance properties here
        C._defaults = defaults;
        C._name = pluginName;
		defineSetPage();
        
		if (C.options.start && C.destination) {
			C.setPage(C.options.start);
        }
		
		if (!SNI.Community.UR.logged_in) {
			$("body").delegate(C.options.loginSelector, 'click', attachHook('login'));
			$("body").delegate(C.options.registerSelector, 'click', attachHook('register'));
		}
		
		/*var fontAwesomeLink = document.createElement( "link" );
		$( fontAwesomeLink ).attr( "rel" , "stylesheet" ).attr( "type" , "text/css" ).attr( "href" , C.options.stylesheetFA ).appendTo( "head" );*/

        var filename = ( document.URL.indexOf( "localhost" ) == -1 ) ? C.options.stylesheet : C.options.stylesheetLESS;
		
        var fileref = document.createElement("link");
        if ( filename == C.options.stylesheetLESS ) {
            fileref.setAttribute("rel", "stylesheet/less");
        } else {
            fileref.setAttribute("rel", "stylesheet");
        }
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);

        var readyfunc = function () {
            C.init();
        }

        var timerfunc = function () {
            var i;
            for (i = 0; i < document.styleSheets.length; i++) {
                var sheet = document.styleSheets[i].href;
                if (sheet !== null && sheet.substr(sheet.length - filename.length) == filename) {
                    return readyfunc();
                }

            }
            setTimeout(timerfunc, 50);
        }

        if (document.all) { //Uses onreadystatechange for Internet Explorer
            fileref.attachEvent('onreadystatechange', function () {
                if (fileref.readyState == 'complete' || fileref.readyState == 'loaded') {
                    readyfunc();
                }

            });
        } else { //Checks if the stylesheet has been loaded every 50 ms for others
            setTimeout(timerfunc, 50);
        }

        document.getElementsByTagName("head")[0].appendChild(fileref);

      if ( filename == C.options.stylesheetLESS ) {
            // let's write the LESS JS compiler to the DOM. But first, let's write a <script> element
            // that sets the LESS environment to 'development'. That way, things wont get cached 
            // and changes can be seen immediately.
            var setEnv = document.createElement("script");
            setEnv.type = "text/javascript";
            setEnv.innerHTML = "var less=less||{};less.env='development';";
            document.getElementsByTagName("head")[0].appendChild(setEnv);

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = C.options.lessCompiler;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    }

    Plugin.prototype.init = function () {
        var i = 0;

		
        //press 'Esc' key - hide Modal
        $('body').bind('keydown', function (e) {
            if (e.keyCode == 27) { // "Esc" Key
                if ($('.showModal').is(':visible')) {
                    $('.SNIModal_Close').click();
                }
                return false;
            }
        });

		
        //click outside Modal - hide Modal
        $(document).mouseup(function (e) {
            var container = $(".SNIModal_Window");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.SNIModal_Close').click();
            }
        });


        //Bind events and build stuff here.  Initialization work.
        $().SNIPortal.setDefaults({
            Port: {
                startURL: C.options.localFrameURL
            }
        });
        C.options.isNotHeader = false;
        defineSetPage();

        $.validator.messages.required = "";
        $.validator.addMethod("newpassword", function (value, element) {
            var result = (/^(?=.*[0-9]+.*)(?=.*[A-Z]+.*)\S{6,}$/).test(value);
            if (!result) {
                $(element).parent().parent().removeClass('aimValid');
            }
            return result;
        }, ".");

        $.validator.methods.email = function (value, element) {
            return this.optional(element) || /^\w+([\.-]?\w+)*(\+[a-zA-Z0-9-]+)?@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        }

        C.getUserNames = function (page, R) {
            var displayName = (R.DISPLAY_NAME) ? R.DISPLAY_NAME : 'User';
            var email = R.EMAIL ? R.EMAIL : 'your email address.';
            page.find('.aim_Username:not(input)').text(displayName).end()
                .find('.aim_Email:not(input)').text(email).end()
                .find('input.aim_Email').val(email);
        };
        C.routeHandshake = function (rJSON) {
            var finalTemplate = "";
			var pageHandshake = $(C.options.pages.handshakeTemplate);
            if (rJSON.HANDSHAKE_STATUS) {
                if (rJSON.ACCT_STATUS === "CONFIRMED") {
                    C.updatedTemplate(C.options.pages.loginTemplate, rJSON);
                    pageHandshake.find("#aim_Email").val(C.options.email).end()
								 .find("#aim_Password").focus();
                    finalTemplate = pageHandshake.find(".handshakePlaceHolder").html(C.options.pages.loginTemplate);
                    C.options.currentPage = finalTemplate;
                    C.setPage('handshakeTemplate');
                } else if (rJSON.ACCT_STATUS === "UNCONFIRMED") {
                    C.updatedTemplate(C.options.pages.unconfirmedTemplate, rJSON);
                    finalTemplate = $(C.options.pages.unconfirmed).find(".handshakePlaceHolder").html(C.options.pages.unconfirmedTemplate);
                    C.options.currentPage = finalTemplate;
                    C.setPage('unconfirmed');
                }
            } else {
                if (rJSON.ACCT_STATUS === "UNCONFIRMED") {
                    C.options.currentPage = C.options.pages.unconfirmed;
                    C.options.currentPage.find('.aim_Email').text(C.options.email).end()
										 .find('.aim_Username').text(rJSON.DISPLAY_NAME);
                    C.setPage('unconfirmed');
                } else if (rJSON.ACCT_STATUS === "CONFIRMED") {
                    C.options.currentPage = C.options.pages.handshakeTemplate;
                    var tempLoginPage = C.options.pages.loginTemplate;
                    tempLoginPage.filter('H4').html("EXISTING ACCOUNT").end()
								 .filter('p').html("There is already a " + siteVarObj(C.options.siteCode).siteName + " account associated with this email address.<p>Please enter your password to login.</p>").end()
								 .filter('.handshakeImages').html("");
                    pageHandshake.find('input#aim_Email').val(C.options.email).end()
								 .find("input#aim_Password").focus();
                    finalTemplate = pageHandshake.find(".handshakePlaceHolder").html(tempLoginPage);
                    C.options.currentPage = finalTemplate;
                    C.setPage('handshakeTemplate');
                }
            }
            return true;

        };

        C.forgotHandshakeTemplate = function (page, rJSON) {
            var tempPage = page;
            var imgList2 = "";
            $.each(rJSON.IMG_URLS, function (index, value) {
                imgList2 += "<a href='" + rJSON.SITE_URLS[index] + "'><img class='handshakeImage' src='" + rJSON.IMG_URLS[index] + "' /></a>";
            });
            page.find('.handshakeImages').html("<div class='imgListCont'>" + imgList2 + "</div>");
        };

        C.updatedTemplate = function (page, rJSON) {
            var tempPage = page;
            var imgList = "";
            $.each(rJSON.IMG_URLS, function (index, value) {
                imgList += "<img class='handshakeImage' src='" + value + "' />";
            });
            page.filter('H4').html("WELCOME!");
            if (rJSON.ACCT_STATUS === "UNCONFIRMED") {
                page.filter('p:first').html("Hi " + rJSON.DISPLAY_NAME + ", you are already a member of one of our sister sites.");
            }
			else if(rJSON.ACCT_STATUS === "CONFIRMED" && rJSON.HANDSHAKE_TYPE === "UR2-HANDSHAKE"){
				page.find('H4').html('').end()
					.filter('p:first').html("Hi " + rJSON.DISPLAY_NAME + ", you are already a member of one of our sister sites.Your login works here as well.<br/><br/><br/>Please enter your password to login");
			}
            page.find('input.aim_Email').val(C.options.email).end()
				.filter('.handshakeImages').html("<div class='imgListCont'>" + imgList + "</div>").end()
				.find('.aim_Email').html(C.options.email).end()
				.find('.aim_Username').html(rJSON.DISPLAY_NAME);
        };
		
        for (var page in C.options.pages) {
            C.options.pages[page] = $(C.options.pages[page]);
        }

        var locURL = parseURL();
        if (!$.isEmptyObject(locURL.params) && locURL.params.aimpagealert !== undefined) {
            var resetpwdts = locURL.params.resetpwdts;
            C.options.params = locURL.params;
            C.options.params.fullURL = location.protocol + "//" + location.host + location.pathname + location.hash.split('?')[0];
            C.options.showOnLoad = true;
            C.options.displayName = locURL.segments[1];
        }
		
        if (!C.destination && C.options.showOnLoad === true) {
            C.setPage(C.options.params.aimpagealert);
            C.options.currentPage.find('.aim_Username').html(urldecode(C.options.params.DISPLAY_NAME));//only query string '+' needs to be decoded to a space
            if (C.options.params.aimpagealert === 'resetpwd') {
                $(C.options.currentPage).find('input[name="token"]').val(C.options.params.token);
            } else if (C.options.params.aimpagealert === 'accountactivated') {
                C.options.currentPage.find('.aim_Username').html(decodeURIComponent(SNI.Community.UR.ViewingUserDisplayName));
            } else {
                var username = C.options.params.DISPLAY_NAME;
                $(C.options.currentPage).find('.aim_Username').html(username);
                $(C.options.currentPage).find('.aim_Displayname').html(C.options.displayName);
            }
        }
		
		C.options.pages.login.find('#SNIAim_Login').click(attachHook('login'));
		C.options.pages.register.find('#SNIAim_SignUp').click(attachHook('register'));
		
        C.options.pages.twitterDetails.find('#SNIAim_Login').click(attachHook('login'));
        C.options.pages.login.find('.aim_Forgot').click(attachHook('forgotPassword'));

        C.options.pages.handshakeTemplate.find('.aim_Forgot').click(attachHook('forgotPassword'));
        C.options.pages.handshakeTemplate.find('#SNIAim_SignUp').click(attachHook('register'));
        C.options.pages.updatePasswordLogin.find('.aim_Forgot').click(attachHook('forgotPassword'));
        C.options.pages.updatePasswordLogin.find('#SNIAim_SignUp').click(attachHook('register'));
        C.options.pages.handshake.find('.aim_Forgot').click(attachHook('forgotPassword'));
        
		
        if (C.destination && C.options.showOnLoad === false) {
            var startLoc = C.options.pages[C.options.start] ? C.options.start : 'login';
            C.setPage(startLoc);
        } else if (C.destination && C.options.showOnLoad === true) {
            C.setPage(locURL.params.aimpagealert);
            if (locURL.params.aimpagealert === 'resetpwd') {
                $(C.options.currentPage).find('input[name="token"]').val(locURL.params.token);
            } else {
                var username = locURL.params.userid;
                $(C.options.currentPage).find('.aim_Username').html(username);
            }
        } else {//Added this logic here to allow trojan horse mechanism(forward to login.esi/register.esi from the header)
			if(SNI.Config.AIM){
				$(C.options.loginSelector).click(attachHook('login'));
				$(C.options.registerSelector).click(attachHook('register'));
			}else{ //had to add this else condition otherwise it executes the hack code below and attaches the event handlers again to header links.
				$(C.options.loginSelector).click(function(e){
					e.preventDefault();
					window.location.href = "http://" +SNI.Community.ur3Domain + "/registration/login.esi";
					return false;
				});
				$(C.options.registerSelector).click(function(e){
					e.preventDefault();
					window.location.href = "http://" +SNI.Community.ur3Domain + "/registration/register.esi";
					return false;
				});
			}	
			$('.aim_Forgot').click(attachHook('forgotPassword'));
		}
        $(C.options.currentPage).find('.reloadPage').click(function (e) {
            e.preventDefault();
            window.location.href = C.options.params.fullURL;
            return false;
        });
        $(C.options.currentPage).find('.disabledreloadPage').click(function (e) {
            e.preventDefault();
            if ($("#SITE_HOME_URL").val() != "" || $("#SITE_HOME_URL").val() != undefined) {
                window.location.href = $("#SITE_HOME_URL").val();
            } else {
                window.location.href = C.options.params.fullURL;
            }
            return false;
        });
    };

    function urldecode(str) {	//converts '+' into a space('') character
        return decodeURIComponent((str + '').replace(/\+/g, '%20'));
    }

    function parseURL() {
        var url = window.location.href;
        var a = document.createElement('a');
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            hosturl: a.protocol + '//' + a.host,
            params: (function () {
                var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                    len = seg.length,
                    i = 0,
                    s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/')
        };
    }

    function printMessages(s) {
        if ('console' in self && 'log' in console) console.log(s);
    }

    function formReceiveCallback(rJSON) {
        printMessages(rJSON);
        C.options.isError = false;
        if (rJSON === 'Error') {
            C.options.isError = true;
            C.options.currentPage.find(".validate").show().html( _AIM.errorMessages.generic );
            C.options.currentPage.find("#processing").remove();
            C.options.currentPage.find(":submit").show();
            return false;
        }
        if (rJSON.RESULT) {
			if(window.timer){window.clearTimeout(window.timer)};
            if (rJSON.RESULT === 202) {
                C.routeHandshake(rJSON);
            } else if (rJSON.RESULT === -202) {
                C.options.currentPage.find("#processing").remove();
                C.options.currentPage.find(":submit").show();
            } else if (rJSON.RESULT === -300) {
                C.getUserNames(C.options.pages.disabled, rJSON);
                C.options.currentPage = C.options.pages.disabled;
                C.setPage('disabled');
            } else if (rJSON.RESULT === -400) {
                C.options.currentPage = C.options.pages.unconfirmed;
                C.options.currentPage.find('.aim_Email').text(C.options.email);
                C.options.currentPage.find('.aim_Username').text(rJSON.DISPLAY_NAME);
                C.setPage('unconfirmed');

            } else if (rJSON.RESULT === -500) {
                C.updatedTemplate(C.options.pages.unconfirmedTemplate, rJSON);
                finalTemplate = $(C.options.pages.unconfirmed).find(".handshakePlaceHolder").html(C.options.pages.unconfirmedTemplate);
                C.options.currentPage = finalTemplate;
                C.setPage('unconfirmed');
            } else {
                C.options.currentPage.find("#processing").remove();
                C.options.currentPage.find(":submit").show();
                C.options.currentPage.find(".validate").show().html( _AIM.errorMessages.generic );
            }
            return false;
        }
        var R = rJSON.json;
        if (typeof R !== undefined && R.curtain) {
            C.options.currentPage = C.options.pages.curtainTemplate;
            C.setPage('curtainTemplate');
            window.clearTimeout(window.timer);
            return false;
        }
        if (R.RESULT !== undefined && typeof R.RESULT != 'number') {
            return false;
        }
        C.options.serverValidation(R.RESULT, C.options.currentPage);
        if (!C.options.isError) {
			if(window.timer){window.clearTimeout(window.timer)};
            switch (R.RESULT) {
                case 100:
                    //LOGIN SUCCESS
                    return C.options.loginCallback(R);
                case 200:
                    //LOGIN HANDSHAKE XSITE
                    break;
                case 300:
                    //LOGIN HANDSHAKE UR2
                    break;
                case -301:
                    break;
                case -100:
                    break;
                case -200:
                    break;
                case -300:
                    //LOGIN DISABLED
                    C.getUserNames(C.options.pages.disabled, R);
                    C.options.currentPage = C.options.pages.disabled;
                    C.setPage('disabled');
                    break;
                case -400:
                    //LOGIN UNCONFIRMED
                    C.getUserNames(C.options.pages.unconfirmed, R);
                    C.options.currentPage = C.options.pages.unconfirmed;
                    C.setPage('unconfirmed');
                    break;
                case 101:
                    //REGISTER SUCCESS
                    C.options.signupCallback(R, C);
                    C.options.currentPage.find('.aim_Refresh').click(function () {
                        C.options.postProcessingAction('ssoRedirect');
                    });
                    break;
                case 201:
                    //REGISTER HANDSHAKE XSITE
                    C.getUserNames(C.options.pages.handshake, R);
                    C.setPage('handshake');
                    break;
                case 301:
                    //REGISTER HANDSHAKE UR2
                    C.getUserNames(C.options.pages.handshake, R);
                    C.setPage('handshake');
                    break;
                case 501:
                    //UPDATE PASSWORD SUCCESS
                    C.options.currentPage = C.options.pages.updatePasswordLogin;
                    C.setPage('updatePasswordLogin');
                    break;
                case -401:
                    break;
                case -501:
                    break;
                case -201:
                    break;
                case -101:
                    break;
                default:
                    formReceiveCallback("Error");
                    break;
            }
        }
    }

    function preventDefault(event) {
        if (event && event.preventDefault instanceof Function) event.preventDefault();
        return false;
    }

    function attachHook(action) {
        return function (e) {
            preventDefault(e);
			try{
				C.setPage(action);
			}catch(evt){
				printMessages(evt + ' AIM Debug: Unable to attach event handlers to the links');
			}
            return false;
        };
    }

    function siteVarObj(siteCode) {
        var rc = {};
       
        if (siteCode === '' || siteCode === 'COOK' || siteCode === 'CCTV') {
            rc.siteName = 'CookingChannelTV.com';
			rc.siteNameUrl = 'www.cookingchanneltv.com';
            rc.contactUsUrl = C.options.contactUsUrl;
        } else if (siteCode === 'TRAVEL') {
            rc.siteName = 'TravelChannel.com';
			rc.siteNameUrl = 'www.travelchannel.com';
            rc.contactUsUrl = C.options.contactUsUrl;
        }else if (siteCode === 'FN') {
            rc.siteName = 'FoodNetwork.com';
			rc.siteNameUrl = 'www.foodnetwork.com';
            rc.contactUsUrl = C.options.contactUsUrl;
        }else if (siteCode === 'FOODCOM') {
            rc.siteName = 'Food.com';
			rc.siteNameUrl = 'www.food.com';
            rc.contactUsUrl = C.options.contactUsUrl;
        }
        else {
            rc.siteName = 'CookingChannelTV.com';
			rc.siteNameUrl = 'www.cookingchanneltv.com';
            rc.contactUsUrl = C.options.contactUsUrl;
        }
        return rc;
    }

    function defineSetPage() {
        if (C.destination) { // This 'if' section applies to the embedded dialog.
            C.setPage = function (newPage) {
                window.clearTimeout(window.timer);
                C.options.formSubmitted = false;
                var serviceURL;
                C.options.pageName = newPage;
                if (newPage === 'login' || newPage === 'updatePasswordLogin' || newPage === 'handshakeTemplate' || newPage === 'twitterDetails') serviceURL = C.options.loginURL;
                else if (newPage === 'register') serviceURL = C.options.registerURL;
                else if (newPage === 'resetpwd') serviceURL = C.options.resetpwdURL;
                var $newEl = $(C.options.pages[newPage]).clone(true);
                var $contain = C.destination.empty();
                $newEl = $newEl.appendTo($contain);
                C.options.currentPage = $newEl;
				
			
				if (newPage === 'login' || newPage === 'register'){
			
					try{
						buildJanrain();janrain.engage.signin.widget.init();
					}catch(e){
						printMessages(e + ' AIM Debug: Error in janrain');
					}
				}
				if (newPage === 'linkacct' ){
					try{
						buildJanrainLinkacct();janrain.engage.signin.widget.init();
					}catch(e){
						printMessages(e + ' AIM Debug: Error in janrain');
					}
				}
				
                if ($newEl.hasClass('aim_Validate')) {
                    Validator = $newEl.validate(C.options.clientValidation(serviceURL, $newEl));
                    C.options.displayPlaceholder($newEl);
                    C.options.showPassword('#checkbox', '#aim_Password');
                    $newEl.delegate('input', 'blur', function () {
                        $(this).valid();
                    });

                    if (!(C.options.pageName === 'register')) {
                        $(C.options.currentPage).find(':submit').click(function () {
                            if (!$('input[type="password"]').val()) {
                                $(C.options.currentPage).find('.passwordTip').show().html('Please enter your password.');
                            } else {
                                $(C.options.currentPage).find('.passwordTip').hide().html('');
                            }
                        });
                    }

                    C.options.throwMessages($(C.options.currentPage).find('input.email'));
                }
				
				
				if($(C.options.currentPage).find('.siteNameVar').length){$(C.options.currentPage).find('.siteNameVar').html(siteVarObj(C.options.siteCode).siteName);}
				if($(C.options.currentPage).find('.siteContactUsVar').length){$(C.options.currentPage).find('.siteContactUsVar').attr("href", siteVarObj(C.options.siteCode).contactUsUrl);}
				if($(C.options.currentPage).find('.siteNameUrl').length){
					$(C.options.currentPage).find('.siteNameUrl').attr("href", siteVarObj(C.options.siteCode).siteNameUrl);
				}
                return $newEl;
            };
        } else { // This 'else' section applies to the Modal dialog.
            C.setPage = function (newPage) {
                window.clearTimeout(window.timer);
                C.options.formSubmitted = false;
                var serviceURL;
                C.options.pageName = newPage;
                if (newPage === 'login' || newPage === 'updatePasswordLogin' || newPage === 'handshakeTemplate' || newPage === 'twitterDetails') serviceURL = C.options.loginURL;
                else if (newPage === 'register') serviceURL = C.options.registerURL;
                else if (newPage === 'resetpwd') serviceURL = C.options.resetpwdURL;
				
				C.options.currentPage = $(C.options.pages[newPage]).SNIModal().open();
				
				
				if (newPage === 'login' || newPage === 'register'){
					
					try{
						buildJanrain();janrain.engage.signin.widget.init();
					}catch(e){
						printMessages(e + ' AIM Debug: Error in janrain');
					}
				}
				if (newPage === 'linkacct' ){
					try{
						buildJanrainLinkacct();janrain.engage.signin.widget.init();
					}catch(e){
						printMessages(e + ' AIM Debug: Error in janrain');
					}
				}
                if (C.options.currentPage.hasClass('aim_Validate')) {
                    Validator = C.options.currentPage.validate(C.options.clientValidation(serviceURL, C.options.currentPage));
                    C.options.showPassword('#checkbox', '#aim_Password');
                    C.options.displayPlaceholder(C.options.currentPage);
                    C.options.currentPage.delegate('input', 'blur', function () {
                        $(this).valid();
                    });

                    if (!(C.options.pageName === 'register')) {
                        $(C.options.currentPage).find(':submit').click(function () {
                            if (!$('input[type="password"]').val()) {
                                $(C.options.currentPage).find('.passwordTip').show().html('Please enter your password.');
                            } else {
                                $(C.options.currentPage).find('.passwordTip').hide().html('');
                            }
                        });
                    }
                    C.options.throwMessages($(C.options.currentPage).find('input.email'));

                    //fix for pickle - 4711 occurs only on modals
                    $('input').keydown(function (e) {
                        if (e.keyCode == 13) {
                            $(this).parents('form').submit();
                            return false;
                        }
                    });
                }
				
				if($(C.options.currentPage).find('.siteNameVar').length){$(C.options.currentPage).find('.siteNameVar').html(siteVarObj(C.options.siteCode).siteName);}
				if($(C.options.currentPage).find('.siteContactUsVar').length){
				$(C.options.currentPage).find('.siteContactUsVar').attr("href", siteVarObj(C.options.siteCode).contactUsUrl);}
				if($(C.options.currentPage).find('.siteNameUrl').length){
					$(C.options.currentPage).find('.siteNameUrl').attr("href", siteVarObj(C.options.siteCode).siteNameUrl);
				}
                return C.options.currentPage;
            };
        }
    }


    var JR = {};

    function buildJanrain() {

        if (!JR.built) {
            JR.built = true;
            var janrain = window.janrain;
            if (typeof janrain !== 'object') {
                janrain = {};
            }

            if (typeof janrain.settings !== 'object') {
                janrain.settings = {
                    type: 'embed',
                    appId: C.options.janrainAppId,
                    appUrl: C.options.janrainAppUrl,
                    providers: ["facebook", "twitter", "google", "yahoo"],
                    providersPerPage: '4',
                    format: 'one column',
                    actionText: '',
                    showAttribution: false,
                    fontColor: '#666666',
                    fontFamily: 'lucida grande, Helvetica, Verdana, sans-serif',
                    backgroundColor: '#ece8d9',
                    width: '225',
                    borderColor: 'transparent',
                    borderRadius: '0',
                    buttonBorderColor: '#CCCCCC',
                    buttonBorderRadius: '5',
                    buttonBackgroundStyle: 'gradient',
                    language: 'en',
                    linkClass: 'janrainEngage',
                    tokenAction: 'event',
                    noReturnExperience: true
                };
            }
            janrain.ready = true;
            janrain.loginError = false;
            window.janrain = janrain;

            window.janrainWidgetOnload = function () {
                $('#janrainEngageEmbed').fadeIn();
                $(".SNIModal_Wrap").children().show().addClass('showModal');
                if (JR.tokenHandler) return false;
                janrain.events.onProviderLoginToken.addHandler(

                function (response) {
                    postToAim(response);
                });

                janrain.events.onProviderLoginError.addHandler(function (response) {
                    if (C.destination && JR.built) {
                        response.err.msg = "";
                        window.location.reload();
                    } else {
                        $('.SNIModal_Close').click();
                        return false;
                    }
                });
            };
        }
        JR.postToAim = false;

        function postToAim(response) {
            C.options.isSocial = true;

            if (JR.postToAim) return false;
            JR.postToAim = true;
			
            if (response.janrainWidgetParameters.provider === "twitter") {
                C.options.token = response.token;
                $.ajax({
                    url: C.options.twitterCallbackUrl + C.options.token,
                    dataType: 'jsonp',
                    type: "GET",
                    success: function (data, textStatus) {
                        C.options.aimToken = data.aimToken;
                        if (!data.isRegistered) { //data.isRegistered - User has not already logged in once
                            C.options.pages.twitterDetails.find(".twitterToken").val(C.options.token);
                            C.options.currentPage = C.options.pages.twitterDetails;
                            C.setPage('twitterDetails');
                        } else {
							 if(data.acctStatus === 1){ //I'm confirmed
								$().SNIPortal.post({
									'service': C.options.loginURL,
									'JSON': {
										'token': response.token,
										'aimToken': C.options.aimToken,
										'provider': response.janrainWidgetParameters.provider
									},
									'callback': function (json) {
										janrain.engage.signin.widget.refresh();
										formReceiveCallback(json);
									}
								});
							}else{ //not confirmed
								C.options.currentPage = C.options.pages.unconfirmed;
								C.options.currentPage.find('.aim_Email').text(data.email);
								C.options.currentPage.find('.aim_Username').text(data.DISPLAY_NAME);
								C.setPage('unconfirmed');
							}
                        }
                    },
                    error: function (status) {
                        formReceiveCallback('Error');
                    }
                });
            } else {
                $().SNIPortal.post({
                    'service': C.options.loginURL,
                    'JSON': {
                        'token': response.token,
                        'provider': response.janrainWidgetParameters.provider
                    },
                    'callback': function (json) {
                        janrain.engage.signin.widget.refresh();
                        formReceiveCallback(json);
                    }
                });
            }

        }

		includeJanrain('on');
    }


    function buildJanrainLinkacct() {
        if (!JR.built) {
            JR.built = true;
            var janrain = window.janrain;
            if (typeof janrain !== 'object') janrain = {};

            if (typeof janrain.settings !== 'object') janrain.settings = {
                type: 'embed',
                appId: C.options.janrainAppId,
                appUrl: C.options.janrainAppUrl,
                providers: ["facebook"],
                providersPerPage: '1',
                format: 'one column',
                actionText: '',
                showAttribution: false,
                fontColor: '#666666',
                fontFamily: 'lucida grande, Helvetica, Verdana, sans-serif',
                backgroundColor: '#ece8d9',
                width: '225',
                borderColor: 'transparent',
                borderRadius: '0',
                buttonBorderColor: '#CCCCCC',
                buttonBorderRadius: '5',
                buttonBackgroundStyle: 'gradient',
                language: 'en',
                linkClass: 'janrainEngage',
                tokenAction: 'event',
                noReturnExperience: true
            };
            janrain.ready = true;
            janrain.loginError = false;
            window.janrain = janrain;

            window.janrainWidgetOnload = function () {
                $('#janrainEngageEmbed').fadeIn();
                $(".SNIModal_Wrap").children().show().addClass('showModal');
                if (JR.tokenHandler) return false;
				
                janrain.events.onProviderLoginToken.addHandler(
						function (response) {
							postToAim(response);
						});

						janrain.events.onProviderLoginError.addHandler(function (response) {
							if (C.destination && JR.built) {
								response.err.msg = "";
								window.location.reload();
							} else {
								$('.SNIModal_Close').click();
								return false;
							}
						});
            };
        }
        JR.postToAim = false;

        function postToAim(response) {
            C.options.isSocial = true;

            if (JR.postToAim) return false;
            JR.postToAim = true;
            
            $.ajax({
	            url: socialProfileLinkUrl + "?token="+response.token+"&providerId="+providerid,
	            dataType: 'jsonp',
	            type: "GET",
	            success: function (data, textStatus) {
					if( data.RESULT === 901 ) {
						// handle the link 
						$('#socialLink').css('display', 'none');
						$('#socialUnlink').css('display', 'block');
						// if link successful then show display the publishEvent setting
						$('#publishCheckBoxContainer').css('display', 'block');
						$('#publishEvent').checked = "checked";
						$('#publishEventId').val(1);
						$('.SNIModal_Close').click();
						fbUserId = data.aimToken;
					}else if(data.RESULT === 909){
						C.options.currentPage = C.options.pages.linkacctShowMsg;
						C.options.currentPage.find('.displayResponse').text('Oops! That Facebook account is already in use by another user.');
						C.setPage('linkacctShowMsg');
					}else{
						C.options.currentPage = C.options.pages.linkacctShowMsg;
						C.options.currentPage.find('.displayResponse').text('Error in linking facebook account');
						C.setPage('linkacctShowMsg');
					}
	            },
	            error: function (status) {
	                formReceiveCallback('Error');
	                $('.SNIModal_Close').click();
	            }
        	});

        }

		includeJanrain('on');
    }
    

	
    var Extend = {
        show: function (page, options) {
            if (typeof page == 'object' && typeof options != 'object') {
                options = page;
            }
            if (typeof page != 'string') page = 'login';
            C.options = $.extend({}, C.options, options);
            C.options.isNotHeader = true;
            attachHook(page)();
        }
    };

    //Extend Global jQuery (where we actually add the plugin!)
    $.fn[pluginName] = function (options) {
        plugin = $.data(window, 'plugin_' + pluginName);
        //If the instance doesn't exist yet, add it to element.data
        if (!(plugin instanceof Plugin)) {
            var target = (this[0] === document) ? [] : this;
            $.data(window, 'plugin_' + pluginName,
            plugin = new Plugin(target, options));

        }

        else if (plugin instanceof Plugin) {
            plugin.options = $.extend({}, plugin.options, options);
        }
        //Return the extended jquery to preserve chaining but add new methods.
        //Use .each to preserve chain plurality.
        return Extend;
    };
}(jQuery, window, document));


(function($) {

    var pubsub = {
		cache:{},
        publish: function(topic, args){
			this.cache[topic] && $.each(this.cache[topic], function(){
				this.apply($, args || []);
			});
		},
		subscribe: function(topic, callback){
			if(!this.cache[topic]){
				this.cache[topic] = [];
			}
			this.cache[topic].push(callback);
			return [topic, callback];
		},
		unsubscribe: function(handle){
			var t = handle[0];
			this.cache[t] && $.each(this.cache[t], function(idx){
				if(this == handle[1]){
					this.cache[t].splice(idx, 1);
				}
			});
		}
    };
    $.extend(true, window._AIM, pubsub);

})(jQuery);
