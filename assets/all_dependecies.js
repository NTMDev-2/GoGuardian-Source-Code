!function(A){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return A[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}
t.m=A,t.c=e,t.d=function(A,e,n){t.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},t.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})}
t.t=function(A,e){if(1&e&&(A=t(A)),8&e)return A;if(4&e&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var r in A)t.d(n,r,function(e){return A[e]}.bind(null,r));return n}
t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=28)}([function(A,e,t){"use strict";
e.__esModule=!0,e.BLOCK_PAGE_HOSTNAME="blocked.com-default.ws";e.CONFIDENCE={NONE:0,MEDIUM:.5,HIGH:.7,VERY_HIGH:.9},e.UNCATEGORIZED_CATEGORY=130,e.HOSTED_DOMAINS=["github.io","scratch.mit.edu","sites.google.com","s3.amazonaws.com","replit.com"],
e.WEBSOCKET_CONFIG_ENDPOINT="https://socket.goguardian/config",e.WEBSOCKET_ENDPOINT="wss://socket.goguardian",e.WEBSOCKET_HTTP_ENDPOINT="https://socket.goguardian",e.WEBSOCKET_INIT_RETRY_DELAY_MAX=1e4,e.WEBSOCKET_INIT_RETRY_DELAY_STEP=250,
e.WEBSOCKET_MAX_CONNECTION_RETRIES=3,e.ENTITIES_FLUSH_INTERVAL_MS=5e3,e.ENTITIES_SESSION_STORAGE_KEY="gg_entities",e.ENTITIES_UPDATE_VIEWING_INTERVAL_MS=1e4,e.ENTITIES_WEBSOCKET_PATH="/",e.ENTITIES_MUTATION_WINDOW_MS=108e5,
e.CONTENT_ANALYSIS_INTERVAL=2e4,e.TEACHER_CONFIG_ENDPOINT="https://teacher.goguardian/config",e.TEACHER_WS_ADDR="socket.goguardian",e.TEACHER_WS_PATH="/teacher",e.OFF_TASK_ALERTS_URL="https://teacher.goguardian/off-task-alerts/content",
e.EXTENSION_IFRAME_ENDPOINT="https://extension.goguardian/extension.html",e.GOOGLE_DOCS_HOSTNAME="docs.google.com",e.GOOGLE_DOCS_SELECTORS=["#docs-title-inner",".docs-title-input-label-inner"],e.GOOGLE_DOCS_URL="https://docs.google.com/document/d/",
e.GDOC_ENABLED_FOR_MOBILE_BASIC=!1,e.CONTENT_FETCHER_ENDPOINT="https://externalcontent.goguardian",e.LOCATION_CHANGE_EVENT="locationchange",e.LOGS_ENDPOINT="https://logs.goguardian",e.POLICY_ENDPOINT="https://policy.goguardian",e.POLICY_FETCH_INTERVAL_MS=9e5,
e.POLICY_SESSION_STORAGE_KEY="gg_policy",e.EXTERNAL_ENDPOINT="https://external.goguardian",e.BEACON_MAX_CONTENT_BUFFER=20,e.BEACON_PREDICT_ENDPOINT="https://beacon.goguardian/v1/predict",e.BEACON_PREDICT_TIMEOUT_MS=15e3,e.BEACON_REPORT_ENDPOINT="https://beacon.goguardian/v1/report",
e.BEACON_REPORT_TIMEOUT_MS=15e3,e.BEACON_UPLOAD_ENDPOINT="https://beacon.goguardian/v1/upload",e.BEACON_SETTINGS_ENDPOINT=e.POLICY_ENDPOINT+"/beacon",e.BEACON_SETTINGS_DEBOUNCE_INTERVAL_MS=5e3,e.SMART_ALERTS_MAX_CONTENT_BUFFER=20,
e.SMART_ALERTS_IS_ALLOWLISTED_ENDPOINT="https://smartalerts.goguardian/is-allowlisted",e.SMART_ALERTS_PREDICT_V3_ENDPOINT="https://smartalerts.goguardian/predict/v3",e.SMART_ALERTS_PREDICT_ENDPOINT="https://smartalerts.goguardian/predict",
e.SMART_ALERTS_PREDICT_PROXY_ENDPOINT="https://smartalerts.goguardian/proxy/predict",e.SMART_ALERTS_PREDICT_TIMEOUT_MS=15e3,e.SMART_ALERTS_PREDICT_PROXY_TIMEOUT_MS=15e3,e.SMART_ALERTS_PREDICTOR_CATEGORY={PROXY:"proxy",X3:"x3"},e.SMART_ALERTS_MAX_CACHE_TIMEOUT=60,
e.SMART_ALERTS_REPORT_ENDPOINT="https://smartalerts.goguardian/report",e.SMART_ALERTS_REPORT_PROBABILITY_THRESHOLD=.5,e.SMART_ALERTS_REPORT_TIMEOUT_MS=1e4,e.SMART_ALERTS_UPLOAD_ENDPOINT="https://smartalerts.goguardian/upload",
e.YOUTUBE_FILTER_ELEMENT_ID="goguardian-youtube-filter",e.YOUTUBE_HOSTNAME_REGEXES=["^(.+\\.)?youtube\\.com\\.?","^(.+\\.)?youtube-nocookie\\.com\\.?","^(.+\\.)?youtubeeducation\\.com\\.?","translate\\.googleusercontent\\.com\\.?"],
e.YOUTUBE_MOBILE_HOSTNAME="m.youtube.com",e.YOUTUBE_PLAYER_CRITICAL_METHODS=["getVideoData","getPlayerResponse","getDebugText","getPlayerState","getVideoUrl","getVideoStats","playVideo","pauseVideo","mute","unMute","addEventListener","removeEventListener"],
e.YOUTUBE_PLAYER_STATES={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,VIDEO_CUED:5},e.YOUTUBE_SELECTORS={player:["#movie_player",".html5-video-player"],mobilePlayer:["#player"],comments:["#comments","#watch-discussion","ytm-comment-section-renderer","ytm-comments-entry-point-header-renderer","ytm-engagement-panel"],
sidebar:["#related","#sidebar","#watch7-sidebar-contents","ytm-item-section-renderer[section-identifier='related-items']"],liveChat:["#chat","#chat-messages","#watch-sidebar-live-chat"]},e.URL_SCHEME_MATCHING_REGEX=new RegExp("^(?:[a-z]+:)?//","i"),
e.LOCALSTORAGE_ENDPOINT="https://localstorage.goguardian",e.PRIVACY_BUBBLE_STATE_STORAGE_KEY="privacy-bubble-state",e.PRIVACY_BUBBLE_POSITIONING_INTERVAL=5e3,e.SCREENSHOT_HOSTNAME_BLOCKLIST=["bing.com","www.youtube.com","pornhub.com","*.pornhub.com","app.schoology.com"],
e.SCREENSHOT_SINGLE_SHOT_HOSTNAME_LIST=["google.com"],e.SCREENSHOT_THROTTLE_MS=5e3})

/* 
"use strict": [AI DEFINITION] A directive introduced in ECMAScript 5 (ES5) that enables strict mode, a restricted variant of JavaScript that helps developers write safer, more error-free code.
__esModule: [AI DEFINITION] To identify a module as an ES Module (ESM). ES allows you to split your code into separate files that can specifically export functions or variables to be used by other files via the import statement. Set to True, or !0.
BLOCK_PAGE_HOSTNAME: This is the host URL where goguardian redirects you (blocked.goguardian.com). 
CONFIDENCE: This is how confident GoGuardian is with the evaluation on how "bad" the website is. {NONE:0,MEDIUM:.5,HIGH:.7,VERY_HIGH:.9} Each of these are a seperate percentage value.
UNCATEGORIZED_CATEGORY: [MOST LIKELY DEFINITION] How many websites do not have a category. An example website with an example category would be crazygames.com, video games / entertainment.
HOSTED_DOMAINS: [MOST LIKELY DEFINITION] Very specific websites that are blocked. I believe most of the websites can host proxies or are games, like scratch. 
WEBSOCKET_CONFIG_ENDPOINT: [UNKNOWN USUAGE] 
WEBSOCKET_ENDPOINT: [UNKNOWN USUAGE] The host for WEBSOCKET_CONFIG_ENDPOINT.
WEBSOCKET_HTTP_ENDPOINT: [UNKNOWN USUAGE] The host for WEBSOCKET_CONFIG_ENDPOINT, but using the HTTP web scheme.
WEBSOCKET_INIT_RETRY_DELAY_MAX: How many seconds at maximum the function caller will try to reach WEBSOCKET_CONFIG_ENDPOINT. This is set to 10,000, or 1e4.
ENTITIES_WEBSOCKET_PATH: [UNKNOWN USUAGE]
ENTITIES_MUTATION_WINDOW_MS: [UNKNOWN USUAGE] Set to 10,800,000, or 108e5.
CONTENT_ANALYSIS_INTERVAL: [UNKNOWN USUAGE]
TEACHER_CONFIG_ENDPOINT: The final destination of all data collected by GoGuardian Teacher, one of GoGuardian's products for student moderation.
TEACHER_WS_ADDR: [MOST LIKELY DEFINITION] The wss:// endpoint of GoGuardian Teacher. Identical to WEBSOCKET_CONFIG_ENDPOINT.
OFF_TASK_ALERTS_URL: This is where all alerts/reports/logs for a student being "off task", or on an undesginated app/website, end up. 
EXTENSION_IFRAME_ENDPOINT: A patch for all <iframe> HTML exploits. This is why most bypasses on r/GoGuardian do not work anymore. 
GOOGLE_DOCS_HOSTAME: May be a patch to a previous exploit using Google Docs. I am unsure what this exploit actually was, since I have came across no documentation.
GOOGLE_DOCS_SELECTORS: [UNKNOWN USUAGE] Most likely headers for the exploit.
GOOGLE_DOCS_URL: The URL for a Google Doc.
GDOC_ENABLED_FOR_MOBILE_BASIC: [UNKNOWN USUAGE] Set to False.
CONTENT_FETCHER_ENDPOINT: [UNKNOWN USUAGE]
LOCATION_CHANGE_EVENT: [MOST LIKELY DEFINITION] This is probably referring to some ID to track the location of a student device. However, I believe this is illegal and is infringement of student privacy.
LOGS_ENDPOINT: Where all GoGuardian logs go to. 
POLICY_ENDPOINT: [UNKNOWN USUAGE]
POLICY_FETCH_INTERVAL: [UNKNOWN USUAGE] Most likely how fast GoGuardian retrieves information from POLICY_ENDPOINT. Set to 900,000, or 9e5.
POLICY_SESSION_STORAGE_KEY: Where GoGuardian stores it session data, using cookies inside the webpage.
EXTERNAL_ENDPOINT: [UNKNOWN USUAGE]
BEACON_MAX_CONTENT_BUFFER: [UNKNOWN USUAGE] Set to 20
BEACON_PREDICT_ENDPOINT: [MOST LIKELY DEFINITION] This is the place where GoGuardian starts all of its predictions for what is harmful to the student or not. 
BEACON_PREDICT_TIMEOUT_MS: [MOST LIKELY DEFINITION] This is probably a cooldown/fallback for GoGuardian Beacon during its predictions. Set to 15,000, or 15e3. Equivalent to 15 seconds.
BEACON_REPORT_ENDPOINT: Where all logs of harmful content are reported/logged.
BEACON_REPORT_TIMEOUT_MS: [MOST LIKELY DEFINITION] This is probably also a cooldown for the reporting function. Set to 15,000, or 15e3. Equivalent to 15 seconds.
BEACON_UPLOAD_ENDPOINT: Where beacon uploads it content. Unknown difference between BEACON_REPORT_ENDPOINT.
BEACON_SETTINGS_ENDPOINT: [UNKNOWN USUAGE] Set to POLICY_ENDPOINT+"/beacon", or "https://policy.goguardian/beacon". 
BEACON_SETTINGS_DEBOUNCE_INTERVAL_MS: [UNKNOWN USUAGE] Set to 5,000, or 5e3.
SMART_ALERTS_MAX_CONTENT_BUFFER: This maybe means how much content or websites Smart Alerts has cached into its history before it starts using garbage collection to free up more space. Set to 20.
SMART_ALERTS_IS_ALLOWLISTED_ENDPOINT: Checks if Smart Alerts is enabled. 

*/


