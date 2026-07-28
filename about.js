(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"about_atlas_1", frames: [[173,48,156,45],[0,196,270,50],[173,0,161,46],[0,0,171,194]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.about1 = function() {
	this.initialize(img.about1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.about2 = function() {
	this.initialize(img.about2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.about3 = function() {
	this.initialize(img.about3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,216);


(lib.about4 = function() {
	this.initialize(img.about4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.about5 = function() {
	this.initialize(img.about5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.about6 = function() {
	this.initialize(ss["about_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.about8 = function() {
	this.initialize(ss["about_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.about9 = function() {
	this.initialize(ss["about_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.位图10 = function() {
	this.initialize(ss["about_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.元件7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.about9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.5,23);


(lib.元件6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.about8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,25);


(lib.元件5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.about6();
	this.instance.setTransform(0,0,0.5,0.5011);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,22.6);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.位图10();
	this.instance.setTransform(0,-2,0.3102,0.4286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3528,scaleY:0.4876,x:-4,y:-8},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-8,60.4,94.6);


// stage content:
(lib.about = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3];
	// timeline functions:
	this.frame_0 = function() {
		this.home.addEventListener("click", function () {
		    window.location.href = "index.html";
		});
		
		this.conclusion.addEventListener("click", function () {
		    window.location.href = "conclusion.html";
		});
		
		this.about.addEventListener("click", function () {
		    window.location.href = "about.html";
		});
		this.stop();
		
		var root = this;
		// 下一页
		this.next1.addEventListener("click", function () {
		    root.gotoAndStop(1); // 第2帧
		});
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		this.back1.addEventListener("click", function () {
		    root.gotoAndStop(0); // 第1帧
		});
		
		this.next2.addEventListener("click", function () {
		    root.gotoAndStop(2); // 第3帧
		});
	}
	this.frame_2 = function() {
		this.stop();
		
		var root = this;
		
		this.back2.addEventListener("click", function () {
		    root.gotoAndStop(1); // 第2帧
		});
		
		this.next3.addEventListener("click", function () {
		    root.gotoAndStop(3); // 第4帧
		});
	}
	this.frame_3 = function() {
		this.stop();
		
		var root = this;
		
		this.back3.addEventListener("click", function () {
		    root.gotoAndStop(2); // 第3帧
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 图层_4
	this.next1 = new lib.元件1();
	this.next1.name = "next1";
	this.next1.setTransform(1374.6,526.6,1,1,0,0,0,26.1,40.6);
	new cjs.ButtonHelper(this.next1, 0, 1, 2, false, new lib.元件1(), 3);

	this.back1 = new lib.元件1();
	this.back1.name = "back1";
	this.back1.setTransform(57.75,526.6,1,1,0,0,180,26.1,40.6);
	new cjs.ButtonHelper(this.back1, 0, 1, 2, false, new lib.元件1(), 3);

	this.next2 = new lib.元件1();
	this.next2.name = "next2";
	this.next2.setTransform(1374.6,526.6,1,1,0,0,0,26.1,40.6);
	new cjs.ButtonHelper(this.next2, 0, 1, 2, false, new lib.元件1(), 3);

	this.back2 = new lib.元件1();
	this.back2.name = "back2";
	this.back2.setTransform(57.75,526.6,1,1,0,0,180,26.1,40.6);
	new cjs.ButtonHelper(this.back2, 0, 1, 2, false, new lib.元件1(), 3);

	this.next3 = new lib.元件1();
	this.next3.name = "next3";
	this.next3.setTransform(1374.6,526.6,1,1,0,0,0,26.1,40.6);
	new cjs.ButtonHelper(this.next3, 0, 1, 2, false, new lib.元件1(), 3);

	this.back3 = new lib.元件1();
	this.back3.name = "back3";
	this.back3.setTransform(57.75,526.6,1,1,0,0,180,26.1,40.6);
	new cjs.ButtonHelper(this.back3, 0, 1, 2, false, new lib.元件1(), 3);

	this.instance = new lib.元件1();
	this.instance.setTransform(57.75,526.6,1,1,0,0,180,26.1,40.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next1}]}).to({state:[{t:this.next2},{t:this.back1}]},1).to({state:[{t:this.next3},{t:this.back2}]},1).to({state:[{t:this.instance},{t:this.back3}]},1).wait(1));

	// 图层_2
	this.about = new lib.元件7();
	this.about.name = "about";
	this.about.setTransform(1308.2,58.5,1,1,0,0,0,40.2,11.5);
	new cjs.ButtonHelper(this.about, 0, 1, 1);

	this.conclusion = new lib.元件6();
	this.conclusion.name = "conclusion";
	this.conclusion.setTransform(1143.5,59.5,1,1,0,0,0,67.5,12.5);
	new cjs.ButtonHelper(this.conclusion, 0, 1, 1);

	this.home = new lib.元件5();
	this.home.name = "home";
	this.home.setTransform(982,60.2,1,1,0,0,0,39,11.2);
	new cjs.ButtonHelper(this.home, 0, 1, 1);

	this.instance_1 = new lib.about3();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.home},{t:this.conclusion},{t:this.about}]}).wait(4));

	// 图层_1
	this.instance_2 = new lib.about1();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.about4();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.about2();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.about5();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(720,450,720,450);
// library properties:
lib.properties = {
	id: '75E38913CCA0214D821C3290341FDFA6',
	width: 1440,
	height: 900,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/about1.png?1784619574547", id:"about1"},
		{src:"images/about2.png?1784619574547", id:"about2"},
		{src:"images/about3.png?1784619574547", id:"about3"},
		{src:"images/about4.png?1784619574547", id:"about4"},
		{src:"images/about5.png?1784619574547", id:"about5"},
		{src:"images/about_atlas_1.png?1784619574529", id:"about_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['75E38913CCA0214D821C3290341FDFA6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;