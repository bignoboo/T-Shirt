(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"conclusion_atlas_1", frames: [[1401,764,156,45],[0,780,1399,106],[780,651,1138,111],[784,0,388,390],[0,390,388,388],[390,390,388,388],[1174,0,388,388],[0,0,390,388],[780,392,1237,111],[0,888,1034,111],[1564,0,388,388],[392,0,390,388],[780,505,952,144],[1734,505,270,50],[1734,557,161,46]]},
		{name:"conclusion_atlas_2", frames: [[0,0,1890,1417],[0,1763,1346,113],[0,1419,469,342],[471,1419,469,342],[942,1419,469,342],[1413,1419,469,342]]}
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



(lib.about3 = function() {
	this.initialize(img.about3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,216);


(lib.about6 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.衣服 = function() {
	this.initialize(ss["conclusion_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.con12 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.con15 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.con22 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.con23 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.con24 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.con25 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.con26 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.con29 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.con3 = function() {
	this.initialize(img.con3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.con30 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.con31 = function() {
	this.initialize(ss["conclusion_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.con33 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.con34 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.con35 = function() {
	this.initialize(ss["conclusion_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.con36 = function() {
	this.initialize(ss["conclusion_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.con37 = function() {
	this.initialize(ss["conclusion_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.con38 = function() {
	this.initialize(ss["conclusion_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.con4 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.con5 = function() {
	this.initialize(img.con5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.con7 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.con9 = function() {
	this.initialize(ss["conclusion_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.fhl = function() {
	this.initialize(img.fhl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.ys1 = function() {
	this.initialize(img.ys1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);// helper functions:

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


(lib.元件22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con38();
	this.instance.setTransform(360,335,0.5356,0.5356);

	this.instance_1 = new lib.衣服();
	this.instance_1.setTransform(0,0,0.5146,0.5146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:0.5146,scaleY:0.5146,x:0,y:0}},{t:this.instance,p:{scaleX:0.5356,scaleY:0.5356,x:360,y:335}}]}).to({state:[{t:this.instance_1,p:{scaleX:0.4858,scaleY:0.4858,x:27,y:20}},{t:this.instance,p:{scaleX:0.5057,scaleY:0.5057,x:367,y:336}}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,972.6,729.2);


(lib.元件21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.衣服();
	this.instance.setTransform(0,0,0.5146,0.5146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.486,scaleY:0.486,x:27,y:20},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,972.6,729.2);


(lib.元件20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con37();
	this.instance.setTransform(360,335,0.5356,0.5356);

	this.instance_1 = new lib.衣服();
	this.instance_1.setTransform(0,0,0.5146,0.5146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:0.5146,scaleY:0.5146,x:0,y:0}},{t:this.instance,p:{scaleX:0.5356,scaleY:0.5356,x:360,y:335}}]}).to({state:[{t:this.instance_1,p:{scaleX:0.4872,scaleY:0.4872,x:26,y:19}},{t:this.instance,p:{scaleX:0.507,scaleY:0.507,x:367,y:337}}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,972.6,729.2);


(lib.元件19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.衣服();
	this.instance.setTransform(0,0,0.5146,0.5146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4865,scaleY:0.4865,x:27,y:20},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,972.6,729.2);


(lib.元件18 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con36();
	this.instance.setTransform(360,335,0.5356,0.5356);

	this.instance_1 = new lib.衣服();
	this.instance_1.setTransform(0,0,0.5146,0.5146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:0.5146,scaleY:0.5146,x:0,y:0}},{t:this.instance,p:{scaleX:0.5356,scaleY:0.5356,x:360,y:335}}]}).to({state:[{t:this.instance_1,p:{scaleX:0.4852,scaleY:0.4852,x:28,y:20}},{t:this.instance,p:{scaleX:0.5051,scaleY:0.5051,x:367,y:337}}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,972.6,729.2);


(lib.元件17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.衣服();
	this.instance.setTransform(0,0,0.5146,0.5146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4831,scaleY:0.4831,x:30,y:22},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,972.6,729.2);


(lib.元件16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con35();
	this.instance.setTransform(360,335,0.5356,0.5356);

	this.instance_1 = new lib.衣服();
	this.instance_1.setTransform(0,0,0.5146,0.5146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:0.5146,scaleY:0.5146,x:0,y:0}},{t:this.instance,p:{scaleX:0.5356,scaleY:0.5356,x:360,y:335}}]}).to({state:[{t:this.instance_1,p:{scaleX:0.4831,scaleY:0.4831,x:30,y:22}},{t:this.instance,p:{scaleX:0.5028,scaleY:0.5028,x:367,y:337}}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,972.6,729.2);


(lib.元件15 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.衣服();
	this.instance.setTransform(0,0,0.5146,0.5146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4844,scaleY:0.4844,x:28,y:21},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,972.6,729.2);


(lib.元件10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con26();
	this.instance.setTransform(0,0,0.4615,0.4616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0,0,180,179.1), null);


(lib.元件9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.instance = new lib.con33();
	this.instance.setTransform(0,0,0.4639,0.4639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,0,180,180), null);


(lib.元件8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.con34();
	this.instance.setTransform(0,0,0.4615,0.4616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,180,179.1), null);


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
	this.instance = new lib.con9();
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
	this.instance = new lib.con7();
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

	// 图层_1
	this.instance = new lib.con25();
	this.instance.setTransform(0,0,0.4639,0.4639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,180,180), null);


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
	this.instance = new lib.con24();
	this.instance.setTransform(0,0,0.4639,0.4639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,180,180), null);


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

	// 图层_2
	this.instance = new lib.con23();
	this.instance.setTransform(0,0,0.4639,0.4639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,180,180), null);


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
	this.instance = new lib.con22();
	this.instance.setTransform(0,0,0.4639,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,180,181), null);


(lib.元件14 = function(mode,startPosition,loop,reversed) {
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
	this.frame_59 = function() {
		this.stop();
		
		setTimeout(function () {
		    window.location.href = "about.html";
		}, 2000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// 图层_5
	this.instance = new lib.元件8();
	this.instance.setTransform(90,89.5,1,1,0,0,0,90,89.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({guide:{path:[90.1,90.5,512,650.9,870,91.6]}},45).wait(1));

	// 图层_4
	this.instance_1 = new lib.元件4();
	this.instance_1.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({guide:{path:[90.1,90.5,427,538.1,723.3,271.3]}},45).wait(1));

	// 图层_3
	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14).to({guide:{path:[90.1,90.6,296.3,345.9,487,352.3]}},45).wait(1));

	// 图层_8
	this.instance_3 = new lib.元件2();
	this.instance_3.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14).to({x:246,y:275},45).wait(1));

	// 图层_1
	this.instance_4 = new lib.元件1();
	this.instance_4.setTransform(90,90.5,1,1,0,0,0,90,90.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},14).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,460.9);


(lib.元件12 = function(mode,startPosition,loop,reversed) {
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
	this.frame_59 = function() {
		this.stop();
		
		setTimeout(function () {
		    window.location.href = "about.html";
		}, 2000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// 图层_5
	this.instance = new lib.元件10();
	this.instance.setTransform(90,89.5,1,1,0,0,0,90,89.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({guide:{path:[90.1,90.5,492.2,642.4,870,91.6]}},45).wait(1));

	// 图层_4
	this.instance_1 = new lib.元件4();
	this.instance_1.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[90,90.4,90.2,90.6,90.3,90.7]},alpha:1},14).to({guide:{path:[90.3,90.9,428.1,534.3,722.9,271]}},45).wait(1));

	// 图层_3
	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[90,90.4,90.2,90.6,90.3,90.7]},alpha:1},14).to({guide:{path:[90.3,90.9,295,347.1,487,351.5]}},45).wait(1));

	// 图层_2
	this.instance_3 = new lib.元件2();
	this.instance_3.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14).to({x:246,y:275},45).wait(1));

	// 图层_1
	this.instance_4 = new lib.元件1();
	this.instance_4.setTransform(90,90.5,1,1,0,0,0,90,90.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},14).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,458.9);


(lib.元件11 = function(mode,startPosition,loop,reversed) {
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
	this.frame_59 = function() {
		this.stop();
		
		setTimeout(function () {
		    window.location.href = "about.html";
		}, 2000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// 图层_11
	this.instance = new lib.元件8();
	this.instance.setTransform(90,89.5,1,1,0,0,0,90,89.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({guide:{path:[90.1,90.5,492.2,642.4,870,91.6]}},45).wait(1));

	// 图层_4
	this.instance_1 = new lib.元件4();
	this.instance_1.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({guide:{path:[90.1,90.5,427,538.1,723.3,271.3]}},45).wait(1));

	// 图层_3
	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14).to({guide:{path:[90.1,90.5,292.1,351.4,487,351.7]}},45).wait(1));

	// 图层_8
	this.instance_3 = new lib.元件9();
	this.instance_3.setTransform(90,90,1,1,0,0,0,90,90);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14).to({x:246,y:275},45).wait(1));

	// 图层_1
	this.instance_4 = new lib.元件1();
	this.instance_4.setTransform(90,90.5,1,1,0,0,0,90,90.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},14).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,460.9);


// stage content:
(lib.conclusion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		// 从网址读取本次结果
		var params = new URLSearchParams(window.location.search);
		var journeyResult = params.get("result");
		
		console.log("进入的结果是：", journeyResult);
		
		// 导航栏
		if (this.home) {
		    this.home.removeAllEventListeners("click");
		
		    this.home.addEventListener("click", function () {
		        window.location.href = "index.html";
		    });
		}
		
		if (this.conclusion) {
		    this.conclusion.removeAllEventListeners("click");
		
		    this.conclusion.addEventListener("click", function () {
		        window.location.href = "conclusion.html";
		    });
		}
		
		if (this.about) {
		    this.about.removeAllEventListeners("click");
		
		    this.about.addEventListener("click", function () {
		        window.location.href = "about.html";
		    });
		}
		
		// 按照正常的1、2、3、4顺序跳转
		if (journeyResult === "journey2") {
		
		    root.gotoAndStop(3); // 第4帧
		
		} else if (journeyResult === "journey3") {
		
		    root.gotoAndStop(6); // 第7帧
		
		} else if (journeyResult === "journey4") {
		
		    root.gotoAndStop(9); // 第10帧
		
		} else {
		
		    // journey1或单独预览conclusion：停在第1帧
		    if (this.c1) {
		        this.c1.removeAllEventListeners("click");
		
		        this.c1.addEventListener("click", function () {
		            root.gotoAndStop(1); // 第2帧
		        });
		    }
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		if (this.c1_1 && !this.c1_1._clickAdded) {
		    this.c1_1._clickAdded = true;
		
		    this.c1_1.addEventListener("click", function () {
		        root.gotoAndStop(2); // 第3帧
		    });
		}
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
		
		var root = this;
		
		this.c2.addEventListener("click", function () {
		    root.gotoAndStop(4); // 第5帧
		});
	}
	this.frame_4 = function() {
		this.stop();
		
		var root = this;
		
		if (this.c2_1 && !this.c2_1._clickAdded) {
		    this.c2_1._clickAdded = true;
		
		    this.c2_1.addEventListener("click", function () {
		        root.gotoAndStop(5); // 第6帧
		    });
		}
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
		
		var root = this;
		
		if (this.c3 && !this.c3._clickAdded) {
		    this.c3._clickAdded = true;
		
		    this.c3.addEventListener("click", function () {
		        root.gotoAndStop(7); // 第8帧
		    });
		}
	}
	this.frame_7 = function() {
		this.stop();
		
		var root = this;
		
		if (this.c3_1 && !this.c3_1._clickAdded) {
		    this.c3_1._clickAdded = true;
		
		    this.c3_1.addEventListener("click", function () {
		        root.gotoAndStop(8); // 第9帧
		    });
		}
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		
		var root = this;
		
		if (this.c4 && !this.c4._clickAdded) {
		    this.c4._clickAdded = true;
		
		    this.c4.addEventListener("click", function () {
		        root.gotoAndStop(10); // 第11帧
		    });
		}
	}
	this.frame_10 = function() {
		this.stop();
		
		var root = this;
		
		if (this.c4_1 && !this.c4_1._clickAdded) {
		    this.c4_1._clickAdded = true;
		
		    this.c4_1.addEventListener("click", function () {
		        root.gotoAndStop(11); // 第12帧
		    });
		}
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// 图层_7
	this.home = new lib.元件5();
	this.home.name = "home";
	this.home.setTransform(982,60.2,1,1,0,0,0,39,11.2);
	new cjs.ButtonHelper(this.home, 0, 1, 1);

	this.about = new lib.元件7();
	this.about.name = "about";
	this.about.setTransform(1308.2,58.5,1,1,0,0,0,40.2,11.5);
	new cjs.ButtonHelper(this.about, 0, 1, 1);

	this.conclusion = new lib.元件6();
	this.conclusion.name = "conclusion";
	this.conclusion.setTransform(1143.5,59.5,1,1,0,0,0,67.5,12.5);
	new cjs.ButtonHelper(this.conclusion, 0, 1, 1);

	this.instance = new lib.about3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.conclusion},{t:this.about},{t:this.home}]}).wait(12));

	// 图层_20
	this.mc4 = new lib.元件14();
	this.mc4.name = "mc4";
	this.mc4.setTransform(704,631,1,1,0,0,0,480,221);

	this.instance_1 = new lib.con31();
	this.instance_1.setTransform(384,206,0.5,0.5004);

	this.instance_2 = new lib.衣服();
	this.instance_2.setTransform(380,195,0.3598,0.3598);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.mc4}]},11).wait(1));

	// 图层_8
	this.c4_1 = new lib.元件22();
	this.c4_1.name = "c4_1";
	this.c4_1.setTransform(720.2,449.6,1,1,0,0,0,486.2,364.6);
	new cjs.ButtonHelper(this.c4_1, 0, 1, 2, false, new lib.元件22(), 3);

	this.instance_3 = new lib.con12();
	this.instance_3.setTransform(370,178,0.5004,0.5005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.c4_1}]},10).to({state:[]},1).wait(1));

	// 图层_11
	this.c4 = new lib.元件21();
	this.c4.name = "c4";
	this.c4.setTransform(720.2,449.6,1,1,0,0,0,486.2,364.6);
	new cjs.ButtonHelper(this.c4, 0, 1, 2, false, new lib.元件21(), 3);

	this.instance_4 = new lib.con4();
	this.instance_4.setTransform(482,159,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.c4}]},9).to({state:[]},1).wait(2));

	// 图层_19
	this.mc2 = new lib.元件12();
	this.mc2.name = "mc2";
	this.mc2.setTransform(704,631,1,1,0,0,0,480,221);

	this.instance_5 = new lib.con30();
	this.instance_5.setTransform(462,207,0.5,0.5);

	this.instance_6 = new lib.衣服();
	this.instance_6.setTransform(380,195,0.3598,0.3598);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.mc2}]},8).to({state:[]},1).wait(3));

	// 图层_10
	this.c3_1 = new lib.元件20();
	this.c3_1.name = "c3_1";
	this.c3_1.setTransform(720.2,449.6,1,1,0,0,0,486.2,364.6);
	new cjs.ButtonHelper(this.c3_1, 0, 1, 2, false, new lib.元件20(), 3);

	this.instance_7 = new lib.con12();
	this.instance_7.setTransform(370,178,0.5004,0.5005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.c3_1}]},7).to({state:[]},1).wait(4));

	// 图层_13
	this.c3 = new lib.元件19();
	this.c3.name = "c3";
	this.c3.setTransform(720.2,449.6,1,1,0,0,0,486.2,364.6);
	new cjs.ButtonHelper(this.c3, 0, 1, 2, false, new lib.元件19(), 3);

	this.instance_8 = new lib.con4();
	this.instance_8.setTransform(482,159,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.c3}]},6).to({state:[]},1).wait(5));

	// 图层_18
	this.mc1 = new lib.元件11();
	this.mc1.name = "mc1";
	this.mc1.setTransform(704,631,1,1,0,0,0,480,221);

	this.instance_9 = new lib.con29();
	this.instance_9.setTransform(411,206,0.5,0.5);

	this.instance_10 = new lib.衣服();
	this.instance_10.setTransform(380,195,0.3598,0.3598);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.mc1}]},5).to({state:[]},1).wait(6));

	// 图层_9
	this.c2_1 = new lib.元件18();
	this.c2_1.name = "c2_1";
	this.c2_1.setTransform(720.2,449.6,1,1,0,0,0,486.2,364.6);
	new cjs.ButtonHelper(this.c2_1, 0, 1, 2, false, new lib.元件18(), 3);

	this.instance_11 = new lib.con12();
	this.instance_11.setTransform(370,178,0.5004,0.5005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.c2_1}]},4).to({state:[]},1).wait(7));

	// 图层_12
	this.c2 = new lib.元件17();
	this.c2.name = "c2";
	this.c2.setTransform(720.2,449.6,1,1,0,0,0,486.2,364.6);
	new cjs.ButtonHelper(this.c2, 0, 1, 2, false, new lib.元件17(), 3);

	this.instance_12 = new lib.con4();
	this.instance_12.setTransform(482,159,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12},{t:this.c2}]},3).to({state:[]},1).wait(8));

	// 图层_14
	this.mc1_1 = new lib.元件11();
	this.mc1_1.name = "mc1_1";
	this.mc1_1.setTransform(704,631,1,1,0,0,0,480,221);

	this.instance_13 = new lib.衣服();
	this.instance_13.setTransform(380,195,0.3598,0.3598);

	this.instance_14 = new lib.con15();
	this.instance_14.setTransform(436,207,0.4991,0.4991);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.mc1_1}]},2).to({state:[]},1).wait(9));

	// 图层_3
	this.c1_1 = new lib.元件16();
	this.c1_1.name = "c1_1";
	this.c1_1.setTransform(720.2,449.6,1,1,0,0,0,486.2,364.6);
	new cjs.ButtonHelper(this.c1_1, 0, 1, 2, false, new lib.元件16(), 3);

	this.instance_15 = new lib.con12();
	this.instance_15.setTransform(370,178,0.5004,0.5005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.c1_1}]},1).to({state:[]},1).wait(10));

	// 图层_2
	this.c1 = new lib.元件15();
	this.c1.name = "c1";
	this.c1.setTransform(720.2,449.6,1,1,0,0,0,486.2,364.6);
	new cjs.ButtonHelper(this.c1, 0, 1, 2, false, new lib.元件15(), 3);

	this.instance_16 = new lib.con4();
	this.instance_16.setTransform(482,159,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.c1}]}).to({state:[]},1).wait(11));

	// 图层_6
	this.instance_17 = new lib.con3();
	this.instance_17.setTransform(0,0,0.5,0.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(9).to({_off:false},0).wait(3));

	// 图层_5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7744","#A6C658"],[0,1],0,-446.9,0,446.9).s().p("EhwfBGUMAAAiMnMDg/AAAMAAACMng");
	this.shape.setTransform(720,450);

	this.instance_18 = new lib.fhl();
	this.instance_18.setTransform(0,0,0.5,0.06);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.shape}]},6).to({state:[]},3).wait(3));

	// 图层_4
	this.instance_19 = new lib.con5();
	this.instance_19.setTransform(0,0,0.5,0.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({_off:false},0).to({_off:true},3).wait(6));

	// 图层_1
	this.instance_20 = new lib.ys1();
	this.instance_20.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},3).wait(9));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(720,450,720,450);
// library properties:
lib.properties = {
	id: 'C2751715CDDBE5488BAFF1EA86E4DB2B',
	width: 1440,
	height: 900,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/about3.png?1784620333635", id:"about3"},
		{src:"images/con3.png?1784620333635", id:"con3"},
		{src:"images/con5.png?1784620333635", id:"con5"},
		{src:"images/fhl.png?1784620333635", id:"fhl"},
		{src:"images/ys1.png?1784620333635", id:"ys1"},
		{src:"images/conclusion_atlas_1.png?1784620333582", id:"conclusion_atlas_1"},
		{src:"images/conclusion_atlas_2.png?1784620333582", id:"conclusion_atlas_2"}
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
an.compositions['C2751715CDDBE5488BAFF1EA86E4DB2B'] = {
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