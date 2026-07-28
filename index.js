(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,966,944]]}
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



(lib.loading = function() {
	this.initialize(img.loading);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.mainbg = function() {
	this.initialize(img.mainbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.mainyf = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件3 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#708F80").s().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	this.shape.setTransform(508.3,20.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,1016.6,41.6), null);


(lib.元件2 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#024023").s().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	this.shape.setTransform(508.3,20.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,1016.6,41.6), null);


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
	this.instance = new lib.mainyf();
	this.instance.setTransform(0,0,0.4998,0.4998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5146,scaleY:0.5146,x:-7,y:-7},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,497.1,485.8);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
		window.location.href = "main.html";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYWAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EhMKADQQhWAAg9g9Qg9g9AAhWIAAAAQAAhVA9g9QA9g9BWAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EhMLADQQhVAAg9g9Qg9g9AAhWIAAAAQAAhVA9g9QA9g9BVAAMCYWAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EhMKADQQhWAAg9g9Qg9g9AAhWIAAAAQAAhVA9g9QA9g9BWAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EhMKADQQhWAAg9g9Qg9g9AAhWIAAAAQAAhVA9g9QA9g9BWAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYWAAAQBVAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hVAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EhMLADQQhVAAg+g9Qg8g9AAhWIAAAAQAAhVA8g9QA+g9BVAAMCYXAAAQBVAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hVAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EhMLADQQhVAAg+g9Qg8g9AAhWIAAAAQAAhVA8g9QA+g9BVAAMCYXAAAQBVAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hVAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EhMLADQQhVAAg+g9Qg8g9AAhWIAAAAQAAhVA8g9QA+g9BVAAMCYXAAAQBVAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hVAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EhMLADQQhVAAg+g9Qg8g9AAhWIAAAAQAAhVA8g9QA+g9BVAAMCYXAAAQBVAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hVAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EhMLADQQhVAAg+g9Qg8g9AAhWIAAAAQAAhVA8g9QA+g9BVAAMCYXAAAQBVAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hVAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYXAAAQBVAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hVAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYXAAAQBVAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hVAAg");
	var mask_graphics_21 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYXAAAQBWAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYXAAAQBWAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYXAAAQBWAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_24 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYXAAAQBWAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYXAAAQBWAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hWAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EhMLADQQhWAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BWAAMCYWAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EhMLADQQhVAAg9g9Qg9g9AAhWIAAAAQAAhVA9g9QA9g9BVAAMCYWAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EhMKADQQhWAAg9g9Qg9g9AAhWIAAAAQAAhVA9g9QA9g9BWAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EhMKADQQhWAAg9g9Qg9g9AAhWIAAAAQAAhVA9g9QA9g9BWAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_30 = new cjs.Graphics().p("EhMKADQQhWAAg9g9Qg9g9AAhWIAAAAQAAhVA9g9QA9g9BWAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_31 = new cjs.Graphics().p("EhMKADQQhXAAg8g9Qg9g9AAhWIAAAAQAAhVA9g9QA8g9BXAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_32 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBXAAA8A9QA9A9AABVIAAAAQAABWg9A9Qg8A9hXAAg");
	var mask_graphics_33 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EhMKADQQhXAAg9g9Qg8g9AAhWIAAAAQAAhVA8g9QA9g9BXAAMCYVAAAQBWAAA9A9QA9A9AABVIAAAAQAABWg9A9Qg9A9hWAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-508.3,y:20.775}).wait(1).to({graphics:mask_graphics_1,x:-482.2333,y:20.775}).wait(1).to({graphics:mask_graphics_2,x:-456.1667,y:20.775}).wait(1).to({graphics:mask_graphics_3,x:-430.1,y:20.775}).wait(1).to({graphics:mask_graphics_4,x:-404.0333,y:20.775}).wait(1).to({graphics:mask_graphics_5,x:-377.9667,y:20.775}).wait(1).to({graphics:mask_graphics_6,x:-351.9,y:20.775}).wait(1).to({graphics:mask_graphics_7,x:-325.8333,y:20.775}).wait(1).to({graphics:mask_graphics_8,x:-299.7667,y:20.775}).wait(1).to({graphics:mask_graphics_9,x:-273.7,y:20.775}).wait(1).to({graphics:mask_graphics_10,x:-247.6333,y:20.775}).wait(1).to({graphics:mask_graphics_11,x:-221.5667,y:20.775}).wait(1).to({graphics:mask_graphics_12,x:-195.5,y:20.775}).wait(1).to({graphics:mask_graphics_13,x:-169.4333,y:20.775}).wait(1).to({graphics:mask_graphics_14,x:-143.3667,y:20.775}).wait(1).to({graphics:mask_graphics_15,x:-117.3,y:20.775}).wait(1).to({graphics:mask_graphics_16,x:-91.2333,y:20.775}).wait(1).to({graphics:mask_graphics_17,x:-65.1667,y:20.775}).wait(1).to({graphics:mask_graphics_18,x:-39.1,y:20.775}).wait(1).to({graphics:mask_graphics_19,x:-13.0333,y:20.775}).wait(1).to({graphics:mask_graphics_20,x:13.0333,y:20.775}).wait(1).to({graphics:mask_graphics_21,x:39.1,y:20.775}).wait(1).to({graphics:mask_graphics_22,x:65.1667,y:20.775}).wait(1).to({graphics:mask_graphics_23,x:91.2333,y:20.775}).wait(1).to({graphics:mask_graphics_24,x:117.3,y:20.775}).wait(1).to({graphics:mask_graphics_25,x:143.3667,y:20.775}).wait(1).to({graphics:mask_graphics_26,x:169.4333,y:20.775}).wait(1).to({graphics:mask_graphics_27,x:195.5,y:20.775}).wait(1).to({graphics:mask_graphics_28,x:221.5667,y:20.775}).wait(1).to({graphics:mask_graphics_29,x:247.6333,y:20.775}).wait(1).to({graphics:mask_graphics_30,x:273.7,y:20.775}).wait(1).to({graphics:mask_graphics_31,x:299.7667,y:20.775}).wait(1).to({graphics:mask_graphics_32,x:325.8333,y:20.775}).wait(1).to({graphics:mask_graphics_33,x:351.9,y:20.775}).wait(1).to({graphics:mask_graphics_34,x:377.9667,y:20.775}).wait(1).to({graphics:mask_graphics_35,x:404.0333,y:20.775}).wait(1).to({graphics:mask_graphics_36,x:430.1,y:20.775}).wait(1).to({graphics:mask_graphics_37,x:456.1667,y:20.775}).wait(1).to({graphics:mask_graphics_38,x:482.2333,y:20.775}).wait(1).to({graphics:mask_graphics_39,x:508.3,y:20.775}).wait(6));

	// 图层_1
	this.instance = new lib.元件2();
	this.instance.setTransform(508.3,20.8,1,1,0,0,0,508.3,20.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// 图层_2
	this.instance_1 = new lib.元件3();
	this.instance_1.setTransform(508.3,20.8,1,1,0,0,0,508.3,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1016.6,41.6);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		this.start.addEventListener("click", function () {
			
		    localStorage.removeItem("dyeChoice");
		    localStorage.removeItem("endChoice");
		    localStorage.removeItem("journeyResult");
		
		    root.gotoAndStop(1);
		});
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层_4
	this.loading = new lib.元件4();
	this.loading.name = "loading";
	this.loading.setTransform(720,490.6,1,1,0,0,0,508.3,20.8);
	this.loading._off = true;

	this.timeline.addTween(cjs.Tween.get(this.loading).wait(1).to({_off:false},0).wait(1));

	// loading
	this.instance = new lib.loading();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// start_page
	this.start = new lib.元件1();
	this.start.name = "start";
	this.start.setTransform(720.6,449.8,1,1,0,0,0,241.6,235.8);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.元件1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.start).to({_off:true},1).wait(1));

	// 图层_1
	this.instance_1 = new lib.mainbg();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,450,1524.9,450);
// library properties:
lib.properties = {
	id: '358633124B1A20468705672B54157672',
	width: 1440,
	height: 900,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/loading.png?1784619580078", id:"loading"},
		{src:"images/mainbg.png?1784619580078", id:"mainbg"},
		{src:"images/index_atlas_1.png?1784619580060", id:"index_atlas_1"}
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
an.compositions['358633124B1A20468705672B54157672'] = {
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