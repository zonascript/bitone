"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function($,e,t){var o=function n(o){var n=t.createElement("script"),i=t.getElementsByTagName("head")[0];"file://"==e.location.origin?n.src="http://www.youtube.com/iframe_api":n.src="//www.youtube.com/iframe_api",i.appendChild(n),i=null,n=null,a(o)},a=function i(t){"undefined"==typeof YT&&"undefined"==typeof e.loadingPlayer?(e.loadingPlayer=!0,e.dfd=$.Deferred(),e.onYouTubeIframeAPIReady=function(){e.onYouTubeIframeAPIReady=null,e.dfd.resolve("done"),t()}):"object"==typeof YT?t():e.dfd.done(function(e){t()})};YTPlayer={player:null,defaults:{ratio:16/9,videoId:"LSmgKRx5pBo",mute:!0,repeat:!0,width:$(e).width(),playButtonClass:"YTPlayer-play",pauseButtonClass:"YTPlayer-pause",muteButtonClass:"YTPlayer-mute",volumeUpClass:"YTPlayer-volume-up",volumeDownClass:"YTPlayer-volume-down",start:0,pauseOnScroll:!1,fitToBackground:!0,playerVars:{iv_load_policy:3,modestbranding:1,autoplay:1,controls:0,showinfo:0,wmode:"opaque",branding:0,autohide:0},events:null},init:function l(t,a){var n=this;return n.userOptions=a,n.$body=$("body"),n.$node=$(t),n.$window=$(e),n.defaults.events={onReady:function(e){n.onPlayerReady(e),n.options.pauseOnScroll&&n.pauseOnScroll(),"function"==typeof n.options.callback&&n.options.callback.call(this)},onStateChange:function(e){1===e.data?(n.$node.find("img").fadeOut(400),n.$node.addClass("loaded")):0===e.data&&n.options.repeat&&n.player.seekTo(n.options.start)}},n.options=$.extend(!0,{},n.defaults,n.userOptions),n.options.height=Math.ceil(n.options.width/n.options.ratio),n.ID=(new Date).getTime(),n.holderID="YTPlayer-ID-"+n.ID,n.options.fitToBackground?n.createBackgroundVideo():n.createContainerVideo(),n.$window.on("resize.YTplayer"+n.ID,function(){n.resize(n)}),o(n.onYouTubeIframeAPIReady.bind(n)),n.resize(n),n},pauseOnScroll:function r(){var e=this;e.$window.on("scroll.YTplayer"+e.ID,function(){var t=e.player.getPlayerState();1===t&&e.player.pauseVideo()}),e.$window.scrollStopped(function(){var t=e.player.getPlayerState();2===t&&e.player.playVideo()})},createContainerVideo:function d(){var e=this,t=$('<div id="ytplayer-container'+e.ID+'" >                                    <div id="'+e.holderID+'" class="ytplayer-player-inline"></div>                                     </div>                                     <div id="ytplayer-shield" class="ytplayer-shield"></div>');e.$node.append(t),e.$YTPlayerString=t,t=null},createBackgroundVideo:function s(){var e=this,t=$('<div id="ytplayer-container'+e.ID+'" class="ytplayer-container background">                                    <div id="'+e.holderID+'" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>');e.$node.append(t),e.$YTPlayerString=t,t=null},resize:function u(t){var o=$(e);t.options.fitToBackground||(o=t.$node);var a=o.width(),n,i=o.height(),l,r=$("#"+t.holderID);a/t.options.ratio<i?(n=Math.ceil(i*t.options.ratio),r.width(n).height(i).css({left:(a-n)/2,top:0})):(l=Math.ceil(a/t.options.ratio),r.width(a).height(l).css({left:0,top:(i-l)/2})),r=null,o=null},onYouTubeIframeAPIReady:function y(){var t=this;t.player=new e.YT.Player(t.holderID,t.options)},onPlayerReady:function c(e){this.options.mute&&e.target.mute(),e.target.playVideo()},getPlayer:function p(){return this.player},destroy:function f(){var t=this;t.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"),t.$YTPlayerString.remove(),$(e).off("resize.YTplayer"+t.ID),$(e).off("scroll.YTplayer"+t.ID),t.$body=null,t.$node=null,t.$YTPlayerString=null,t.player.destroy(),t.player=null}},$.fn.scrollStopped=function(e){var t=$(this),o=this;t.scroll(function(){t.data("scrollTimeout")&&clearTimeout(t.data("scrollTimeout")),t.data("scrollTimeout",setTimeout(e,250,o))})},$.fn.YTPlayer=function(e){return this.each(function(){var t=this;$(t).data("yt-init",!0);var o=Object.create(YTPlayer);o.init(t,e),$.data(t,"ytPlayer",o)})}}(jQuery,window,document);