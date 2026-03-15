// This is how GoGuardian filters youtube videos and youtube shorts. It retrieves the video player state, and then: forcefully mutes and pauses it, then displays its block overlay onto the video player. 
// The block overlay is at lines 268 - 300
// Lines 2666 to 2962 in main source code
function(A, e, t) {
    "use strict";
    var n = this && this.__importDefault || function(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    };
    e.__esModule = !0;
    var r = n(t(5)),
        i = t(87),
        s = t(3),
        o = t(0),
        a = function() {
            function A(A, e, t) {
                this.messenger = A, this.logger = e, this.metrics = t, this.enabled = !1, this.topLevel = window.top === window.self, this.ggPlayers = {}, this.throttledOnMutation = r.default(this.onMutation.bind(this), 1e3, {
                    trailing: !0,
                    leading: !0
                }), this.observer = new MutationObserver(this.throttledOnMutation), this.isYouTubeHostname() && (this.messenger.shared.onPolicyReceived.addListener(this.configure.bind(this)), this.messenger.shared.onPolicyRequest.emit({
                    top: !0,
                    iframes: !1
                }))
            }
            return A.prototype.isYouTubeHostname = function() {
                return o.YOUTUBE_HOSTNAME_REGEXES.some((function(A) {
                    return new RegExp(A, "gi").test(window.location.host)
                }))
            }, A.prototype.isYouTubeMobileHostname = function() {
                return window.location.host === o.YOUTUBE_MOBILE_HOSTNAME
            }, A.prototype.configure = function(A) {
                var e, t = this;
                e = !A.schedulingSettings.inSchoolConditionsEnabled || (!A.schedulingSettings.filterInSchoolOnly || A.schedulingSettings.inSchoolHours && A.schedulingSettings.inSchoolIPRanges), this.settings = {
                    filteringEnabled: e && A.videoSettings.filteringEnabled,
                    blockComments: e && A.videoSettings.blockComments,
                    blockSidebar: e && A.videoSettings.blockSidebar,
                    blockLiveChat: e && A.videoSettings.blockLiveChat
                }, this.enable(), Object.keys(this.ggPlayers).forEach((function(A) {
                    t.ggPlayers[A].setFilterEnabled(t.settings.filteringEnabled)
                })), this.topLevel && (this.settings.filteringEnabled && this.settings.blockComments || this.queryAndRestore(o.YOUTUBE_SELECTORS.comments), this.settings.filteringEnabled && this.settings.blockSidebar || this.queryAndRestore(o.YOUTUBE_SELECTORS.sidebar), this.settings.filteringEnabled && this.settings.blockLiveChat || this.queryAndRestore(o.YOUTUBE_SELECTORS.liveChat)), this.throttledOnMutation()
            }, A.prototype.enable = function() {
                this.enabled || (this.observer || (this.observer = new MutationObserver(this.throttledOnMutation)), document.body && this.observer.observe(document.body, {
                    childList: !0,
                    characterData: !1,
                    characterDataOldValue: !1,
                    attributes: !1,
                    attributeOldValue: !1,
                    subtree: !0
                }), this.enabled = !0)
            }, A.prototype.onMutation = function() {
                var A = this;
                (this.isYouTubeMobileHostname() ? o.YOUTUBE_SELECTORS.player.concat(o.YOUTUBE_SELECTORS.mobilePlayer) : o.YOUTUBE_SELECTORS.player).forEach((function(e) {
                    var t = document.querySelectorAll(e);
                    (t = [].slice.call(t)).forEach((function(e) {
                        var t = !1;
                        if (Object.keys(A.ggPlayers).forEach((function(n) {
                                e === A.ggPlayers[n].player && (t = !0)
                            })), !t) {
                            var n = s.randomInt32();
                            A.ggPlayers[n] = new i.GGVideoPlayer(n, e, A.messenger, A.logger, A.metrics, A.settings.filteringEnabled)
                        }
                    }))
                })), Object.keys(this.ggPlayers).forEach((function(e) {
                    document.body && !document.body.contains(A.ggPlayers[e].player) && delete A.ggPlayers[e]
                })), this.settings.filteringEnabled && this.topLevel && (this.settings.blockComments && this.queryAndHide(o.YOUTUBE_SELECTORS.comments), this.settings.blockSidebar && this.queryAndHide(o.YOUTUBE_SELECTORS.sidebar), this.settings.blockLiveChat && this.queryAndHide(o.YOUTUBE_SELECTORS.liveChat))
            }, A.prototype.queryAndHide = function(A) {
                A.some((function(A) {
                    var e = document.querySelector(A);
                    return !(!e || "none" === e.style.display) && (e.style.display = "none", !0)
                }))
            }, A.prototype.queryAndRestore = function(A) {
                A.some((function(A) {
                    var e = document.querySelector(A);
                    return !(!e || "none" !== e.style.display) && (e.style.display = "", !0)
                }))
            }, A
        }();
    e.YouTubeManager = a
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(88),
        r = t(0),
        i = function() {
            function A(A, e, t, n, r, i) {
                this.id = A, this.player = e, this.messenger = t, this.logger = n, this.metrics = r, this.currentVideo = {
                    id: "",
                    metadata: {
                        title: "",
                        reason: void 0,
                        adminPolicyId: void 0,
                        adminFilterId: void 0
                    },
                    blocked: !1,
                    reason: "",
                    ranCheck: !1,
                    adminPolicyOverrideVideoId: 0
                }, this.filteringEnabled = i, this.verifyPlayerMethods(), this.player.addEventListener("onStateChange", this.checkVideo.bind(this)), this.checkVideo(), this.messenger.admin.onPolicyUpdated.addListener(this.recheckVideo.bind(this))
            }
            return A.prototype.setFilterEnabled = function(A) {
                this.filteringEnabled = A
            }, A.prototype.verifyPlayerMethods = function() {
                var A = this,
                    e = r.YOUTUBE_PLAYER_CRITICAL_METHODS.filter((function(e) {
                        return !A.player[e]
                    }));
                e.length > 0 && (this.metrics.increment("gg_video_player.missing_player_methods"), this.logger.withFields({
                    missing_methods: e.join(", ")
                }).error("GGVideoPlayer.verifyPlayerMethods player api missing critical methods"))
            }, A.prototype.checkVideo = function() {
                var A = this,
                    e = this.getVideoId();
                if (e && (e !== this.currentVideo.id || (this.currentVideo.id && this.currentVideo.blocked && this.blockVideo(), !this.currentVideo.ranCheck))) {
                    if (this.currentVideo.id && this.currentVideo.blocked && this.restoreVideo(), this.currentVideo.id = e, this.currentVideo.metadata = {
                            title: "",
                            reason: void 0,
                            adminPolicyId: void 0,
                            adminFilterId: void 0
                        }, this.currentVideo.blocked = !1, this.currentVideo.reason = "", this.currentVideo.ranCheck = !1, this.currentVideo.adminPolicyOverrideVideoId = 0, !this.filteringEnabled) return this.currentVideo.ranCheck = !0, void this.trackVideo();
                    this.sendViolatesPolicyRequest(e).then((function(e) {
                        var t, r, i, s = e.status,
                            o = e.res;
                        A.currentVideo.ranCheck = !0, 200 === s ? (A.currentVideo.metadata = {
                            title: o.metadata.title,
                            reason: (t = o.metadata.reason, null != t ? t : void 0),
                            adminPolicyId: (r = o.metadata.admin_policy_id, null != r ? r : void 0),
                            adminFilterId: (i = o.metadata.admin_filter_id, null != i ? i : void 0)
                        }, A.currentVideo.blocked = o.violates, A.currentVideo.reason = o.reason, A.currentVideo.adminPolicyOverrideVideoId = o.adminPolicyOverrideVideoId, A.filteringEnabled && A.currentVideo.blocked ? (A.overlay = new n.BlockOverlay(A.currentVideo.id, A.currentVideo.metadata.title, A.currentVideo.reason), A.blockVideo()) : A.trackVideo()) : A.trackVideo()
                    })).catch((function() {
                        A.trackVideo()
                    }))
                }
            }, A.prototype.sendViolatesPolicyRequest = function(A) {
                var e = this;
                return new Promise((function(t, n) {
                    var i = Date.now(),
                        s = new XMLHttpRequest;
                    s.addEventListener("error", (function() {
                        n()
                    })), s.addEventListener("load", (function() {
                        e.metrics.histogram("gg_video_player.video_violates_request.latency_ms", Date.now() - i);
                        var A = JSON.parse(s.responseText);
                        200 !== s.status && (e.metrics.increment("gg_video_player.video_violates_request.error"), e.logger.withFields({
                            status_code: s.status,
                            response: A
                        }).error("GGVideoPlayer.checkVideo failed to determine if video violates policy")), t({
                            status: s.status,
                            res: A
                        })
                    })), s.open("GET", r.POLICY_ENDPOINT + "/violates/video?v=" + A, !0), s.send()
                }))
            }, A.prototype.recheckVideo = function() {
                var A = this,
                    e = this.getVideoId();
                if (e && e === this.currentVideo.id) {
                    var t = this.currentVideo.blocked;
                    this.sendViolatesPolicyRequest(this.currentVideo.id).then((function(e) {
                        var r, i, s, o = e.status,
                            a = e.res;
                        200 === o && t !== a.violates && (A.currentVideo.metadata = {
                            title: a.metadata.title,
                            reason: (r = a.metadata.reason, null != r ? r : void 0),
                            adminPolicyId: (i = a.metadata.admin_policy_id, null != i ? i : void 0),
                            adminFilterId: (s = a.metadata.admin_filter_id, null != s ? s : void 0)
                        }, A.currentVideo.blocked = a.violates, A.currentVideo.reason = a.reason, A.currentVideo.adminPolicyOverrideVideoId = a.adminPolicyOverrideVideoId, t ? (A.restoreVideo(!1), A.trackVideo()) : A.filteringEnabled && !t && (A.overlay = new n.BlockOverlay(A.currentVideo.id, A.currentVideo.metadata.title, A.currentVideo.reason), A.blockVideo()))
                    })).catch((function() {}))
                }
            }, A.prototype.getVideoId = function() {
                if (this.player.getVideoData) {
                    var A = this.player.getVideoData();
                    if (A) return A.video_id
                }
                if (this.player.getPlayerResponse) {
                    var e = this.player.getPlayerResponse();
                    if (e && e.videoDetails) return e.videoDetails.videoId
                }
                if (this.player.getDebugText) {
                    var t = this.player.getDebugText();
                    if (t) try {
                        var n = JSON.parse(t);
                        if (n) return n.debug_videoId
                    } catch (A) {
                        this.metrics.increment("gg_video_player.get_video_id.parse_debug_text.error"), this.logger.withError(A).withFields({
                            debug_text: t
                        }).error("GGVideoPlayer.getVideoId failed to parse debug text")
                    }
                }
                if (this.player.getVideoUrl) {
                    var r = this.player.getVideoUrl();
                    if (r) try {
                        var i = new URL(r);
                        if ((o = new URLSearchParams(i.searchParams)).get("v")) return o.get("v")
                    } catch (A) {
                        this.metrics.increment("gg_video_player.get_video_id.parse_video_url.error"), this.logger.withError(A).withFields({
                            video_url: r
                        }).error("GGVideoPlayer.getVideoId failed to parse video url")
                    }
                }
                if (this.player.getVideoStats) {
                    var s = this.player.getVideoStats();
                    if (s) return s.debug_videoId
                }
                var o;
                if ("/watch" === document.location.pathname && (o = new URLSearchParams(document.location.search)).get("v")) return o.get("v");
                return this.metrics.increment("gg_video_player.get_video_id.error"), this.logger.error("GGVideoPlayer.getVideoId failed to get video id"), ""
            }, A.prototype.blockVideo = function() {
                var A = this;
                if (!document.body || document.body.contains(this.player)) {
                    if (this.currentVideo.metadata.reason) {
                        var e = {
                            video_id: this.currentVideo.id,
                            block_metadata: {
                                reason: this.currentVideo.metadata.reason,
                                admin_policy_id: this.currentVideo.metadata.adminPolicyId,
                                admin_filter_id: this.currentVideo.metadata.adminFilterId
                            }
                        };
                        this.messenger.admin.onVideoBlocked.emit({
                            top: !0,
                            iframes: !1
                        }, e)
                    }
                    this.player.pauseVideo && this.player.pauseVideo(), this.player.mute && this.player.mute();
                    var t = this.player.offsetHeight;
                    "none" !== this.player.style.display && (this.player.style.display = "none");
                    var n = this.overlay && this.overlay.html(),
                        r = this.player.parentElement;
                    r && n && !r.contains(n) && (r.style.minHeight = t + "px", r.appendChild(n)), setTimeout((function() {
                        A.player.getAdState && A.player.cancelPlayback && 1 === A.player.getAdState() && A.player.cancelPlayback()
                    }), 1e3)
                }
            }, A.prototype.restoreVideo = function(A) {
                void 0 === A && (A = !0), this.overlay && this.overlay.remove(), this.player.style.display = "", A && this.player.playVideo(), this.player.unMute()
            }, A.prototype.trackVideo = function() {
                document.body && !document.body.contains(this.player) || (this.player.getPlayerState() === r.YOUTUBE_PLAYER_STATES.PLAYING ? this.messenger.admin.onVideoWatched.emit({
                    top: !0,
                    iframes: !1
                }, {
                    video_id: this.currentVideo.id,
                    admin_policy_override_video_id: this.currentVideo.adminPolicyOverrideVideoId
                }) : this.listenForVideoPlay(this.currentVideo.id))
            }, A.prototype.listenForVideoPlay = function(A) {
                var e = this,
                    t = function(n) {
                        n === r.YOUTUBE_PLAYER_STATES.PLAYING && (e.player.removeEventListener("onStateChange", t), A === e.currentVideo.id && e.messenger.admin.onVideoWatched.emit({
                            top: !0,
                            iframes: !1
                        }, {
                            video_id: e.currentVideo.id,
                            admin_policy_override_video_id: e.currentVideo.adminPolicyOverrideVideoId
                        }))
                    };
                this.player.addEventListener("onStateChange", t)
            }, A
        }();
    e.GGVideoPlayer = i
},
function(A, e, t) {
    "use strict";
    var n = this && this.__importDefault || function(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    };
    e.__esModule = !0;
    var r = n(t(89)),
        i = t(0),
        s = function() {
            function A(A, e, t) {
                void 0 === e && (e = ""), this.videoId = A, this.videoTitle = e, this.reason = t, this.isMobile = window.location.host === i.YOUTUBE_MOBILE_HOSTNAME, this.overlay = this.createOverlay()
            }
            return A.prototype.createOverlay = function() {
                var A = document.getElementById(i.YOUTUBE_FILTER_ELEMENT_ID);
                A && A.parentNode && A.parentNode.removeChild(A);
                var e = document.createElement("div");
                e.id = i.YOUTUBE_FILTER_ELEMENT_ID, e.style.cssText = this.isMobile ? r.default.mobileHolder : r.default.holder;
                var t = document.createElement("div");
                t.style.cssText = "background: url(https://i.ytimg.com/vi/" + this.videoId + "/hqdefault.jpg) no-repeat; " + r.default.backgroundImage, e.appendChild(t);
                var n = document.createElement("div");
                n.className = "gg-player-title", n.style.cssText = r.default.titleDiv, n.title = this.videoTitle;
                var s = document.createElement("span");
                s.style.cssText = r.default.titleSpan, s.textContent = this.videoTitle, n.appendChild(s), e.appendChild(n);
                var o = document.createElement("div");
                o.style.cssText = r.default.lockDiv;
                var a = document.createElement("img");
                a.style.cssText = r.default.lockImage, a.src = "https://static.goguardian.com/images/logos/shared/gg-dark-shield-notification.png", o.appendChild(a), e.appendChild(o);
                var c = document.createElement("div");
                c.className = "gg-player-blocked", c.style.cssText = r.default.blockedDiv;
                var l = document.createElement("span");
                return l.textContent = "This video is blocked because " + this.reason, c.appendChild(l), e.appendChild(c), e
            }, A.prototype.html = function() {
                return this.overlay
            }, A.prototype.remove = function() {
                this.overlay.parentElement && this.overlay.parentElement.removeChild(this.overlay)
            }, A
        }();
    e.BlockOverlay = s
},
