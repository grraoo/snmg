(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"wall_1_atlas_P_", frames: [[34,173,24,46],[0,54,57,37],[0,0,52,52],[0,173,32,56],[0,93,50,42],[0,137,58,34]]},
		{name:"wall_1_atlas_NP_", frames: [[0,844,420,420],[1151,0,420,420],[1266,422,420,420],[1266,844,420,224],[422,844,420,420],[729,0,420,420],[1573,0,420,420],[0,422,420,420],[422,422,420,420],[0,0,727,420],[844,422,420,420],[844,844,420,244]]}
];


// symbols:



(lib.iconfacebook = function() {
	this.spriteSheet = ss["wall_1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.icongoogleplus = function() {
	this.spriteSheet = ss["wall_1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.iconinstagram = function() {
	this.spriteSheet = ss["wall_1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.iconodnoklassniki = function() {
	this.spriteSheet = ss["wall_1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.icontwitter = function() {
	this.spriteSheet = ss["wall_1_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.iconvkontakte = function() {
	this.spriteSheet = ss["wall_1_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.photo01 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo02 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo03 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.photo04 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photo05 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.photo06 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.photo07 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.photo08 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.photo09 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.photo10 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.photo11 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.photo12 = function() {
	this.spriteSheet = ss["wall_1_atlas_NP_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.photo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egj7An2MAAAhPrMBH3AAAMAAABPrg");

	// Layer_2
	this.instance = new lib.photo11();
	this.instance.parent = this;
	this.instance.setTransform(-255,-255,1.216,1.216);

	this.instance_1 = new lib.photo08();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-255,-255,1.213,1.213);

	this.instance_2 = new lib.photo07();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-255,-255,1.213,1.213);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},600).to({state:[{t:this.instance_2}]},720).to({state:[{t:this.instance}]},720).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-255,460,510);


(lib.photo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egj7An2MAAAhPrMBH3AAAMAAABPrg");

	// Layer_2
	this.instance = new lib.photo02();
	this.instance.parent = this;
	this.instance.setTransform(-255,-255,1.212,1.212);

	this.instance_1 = new lib.photo03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-255,-255,1.212,1.212);

	this.instance_2 = new lib.photo01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-255,-255,1.213,1.213);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},420).to({state:[{t:this.instance_2}]},720).to({state:[{t:this.instance}]},720).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-255,460,509.2);


(lib.photo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhIpAn2MAAAhPrMCRTAAAMAAABPrg");

	// Layer_2
	this.instance = new lib.photo04();
	this.instance.parent = this;
	this.instance.setTransform(-479,-255,2.278,2.278);

	this.instance_1 = new lib.photo10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-465,-268,1.279,1.279);

	this.instance_2 = new lib.photo12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-467,-272,2.227,2.227);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},240).to({state:[{t:this.instance_2}]},720).to({state:[{t:this.instance}]},720).wait(480));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465,-255,930,510);


(lib.photo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhIpBQeMAAAig7MCRTAAAMAAACg7g");

	// Layer_2
	this.instance = new lib.photo05();
	this.instance.parent = this;
	this.instance.setTransform(-517,-517,2.463,2.463);

	this.instance_1 = new lib.photo06();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-523,-523,2.488,2.488);

	this.instance_2 = new lib.photo09();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-525,-525,2.499,2.499);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},720).to({state:[{t:this.instance}]},720).wait(660));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465,-515,930,1030);


(lib.iconvkontakte_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.iconvkontakte();
	this.instance.parent = this;
	this.instance.setTransform(-29,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45668E").s().p("Ak9E+QiEiEAAi6QAAi6CEiEQCDiDC6AAQC7AACECDQCDCEAAC6QAAC6iDCEQiECEi7AAQi6AAiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.iconvkontakte_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.icontwitter_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.icontwitter();
	this.instance.parent = this;
	this.instance.setTransform(-25,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#55ACEE").s().p("Ak9E+QiEiEAAi6QAAi6CEiEQCDiDC6AAQC7AACECDQCDCEAAC6QAAC6iDCEQiECEi7AAQi6AAiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icontwitter_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.iconodnoklassniki_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.iconodnoklassniki();
	this.instance.parent = this;
	this.instance.setTransform(-16,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F58220").s().p("Ak9E+QiEiEAAi6QAAi6CEiEQCDiDC6AAQC7AACECDQCDCEAAC6QAAC6iDCEQiECEi7AAQi6AAiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.iconodnoklassniki_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.iconinstagram_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.iconinstagram();
	this.instance.parent = this;
	this.instance.setTransform(-26,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak9E+QiEiEAAi6QAAi6CEiEQCDiDC6AAQC7AACECDQCDCEAAC6QAAC6iDCEQiECEi7AAQi6AAiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.iconinstagram_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.icongoogleplus_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.icongoogleplus();
	this.instance.parent = this;
	this.instance.setTransform(-29,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC4E41").s().p("Ak9E+QiEiEAAi6QAAi6CEiEQCDiDC6AAQC7AACECDQCDCEAAC6QAAC6iDCEQiECEi7AAQi6AAiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icongoogleplus_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.iconfacebook_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.iconfacebook();
	this.instance.parent = this;
	this.instance.setTransform(-12,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B5998").s().p("Ak9E+QiEiEAAi6QAAi6CEiEQCDiDC6AAQC7AACECDQCDCEAAC6QAAC6iDCEQiECEi7AAQi6AAiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.iconfacebook_1, new cjs.Rectangle(-45,-45,90,90), null);


(lib.social4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.iconfacebook_1();
	this.instance.parent = this;

	this.instance_1 = new lib.icongoogleplus_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.iconinstagram_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},599).to({state:[{t:this.instance_2}]},720).to({state:[{t:this.instance}]},720).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.social3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.icontwitter_1();
	this.instance.parent = this;

	this.instance_1 = new lib.iconodnoklassniki_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.iconvkontakte_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},419).to({state:[{t:this.instance_2}]},720).to({state:[{t:this.instance}]},720).wait(301));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.social2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.iconinstagram_1();
	this.instance.parent = this;

	this.instance_1 = new lib.iconvkontakte_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.iconfacebook_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},239).to({state:[{t:this.instance_2}]},720).to({state:[{t:this.instance}]},720).wait(481));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.social1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.iconodnoklassniki_1();
	this.instance.parent = this;

	this.instance_1 = new lib.iconinstagram_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.icontwitter_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).to({state:[{t:this.instance_2}]},720).to({state:[{t:this.instance}]},720).wait(661));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.post4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.social4();
	this.instance.parent = this;
	this.instance.setTransform(230,440);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(569).to({y:427.5,alpha:0.398},20).to({y:415,alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(660).to({y:427.5,alpha:0.398},20).to({y:415,alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(660).to({y:427.5,alpha:0.398},20).to({y:415,alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(91));

	// Layer_1
	this.instance_1 = new lib.photo4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(230,255);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(569).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},29).wait(660).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},29).wait(660).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},29).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,0,510.7,510.7);


(lib.post3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.social3();
	this.instance.parent = this;
	this.instance.setTransform(230,440);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(389).to({y:427.5,alpha:0.398},20).to({alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(660).to({y:427.5,alpha:0.398},20).to({alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(660).to({y:427.5,alpha:0.398},20).to({alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(271));

	// Layer_1
	this.instance_1 = new lib.photo3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(230,255);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(389).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},29).wait(660).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},30).wait(659).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},29).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,0,509.2,510);


(lib.post2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.social2();
	this.instance.parent = this;
	this.instance.setTransform(465,440);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({y:427.5,alpha:0.398},20).to({alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(660).to({y:427.5,alpha:0.398},20).to({alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(660).to({y:427.5,alpha:0.398},20).to({alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:465},1).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,y:415,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:452.5},8).to({scaleX:1,scaleY:1,y:440},5).wait(451));

	// Layer_1
	this.instance_1 = new lib.photo2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(465,255);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},29).wait(660).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},29).wait(660).to({y:230,alpha:0},30).to({y:280},1).to({y:255,alpha:1},29).wait(451));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,0,956.6,510.2);


(lib.post1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.social1();
	this.instance.parent = this;
	this.instance.setTransform(465,960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:947.5,alpha:0.398},20).to({y:935,alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:985},1).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:465.1,y:935.1,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:972.5},8).to({regX:0,regY:0,scaleX:1,scaleY:1,x:465,y:960},5).wait(660).to({y:947.5,alpha:0.398},20).to({y:935,alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:985},1).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:465.1,y:935.1,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:972.5},8).to({regX:0,regY:0,scaleX:1,scaleY:1,x:465,y:960},5).wait(660).to({y:947.5,alpha:0.398},20).to({y:935,alpha:0},10).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,y:985},1).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:465.1,y:935.1,alpha:1},16).to({scaleX:0.9,scaleY:0.9,y:972.5},8).to({regX:0,regY:0,scaleX:1,scaleY:1,x:465,y:960},5).wait(631));

	// Layer_1
	this.instance_1 = new lib.photo1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(465,515);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({y:490,alpha:0},30).to({y:540},1).to({y:515,alpha:1},29).wait(660).to({y:490,alpha:0},30).to({y:540},1).to({y:515,alpha:1},29).wait(660).to({y:490,alpha:0},30).to({y:540},1).to({y:515,alpha:1},30).wait(630));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-2,1034.5,1034.5);


// stage content:
(lib.wall_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// post4
	this.instance = new lib.post4();
	this.instance.parent = this;
	this.instance.setTransform(1665,800,1,1,0,0,0,230,255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// post3
	this.instance_1 = new lib.post3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1195,800,1,1,0,0,0,230,255);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// post2
	this.instance_2 = new lib.post2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1430,280,1,1,0,0,0,465,255);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// post1
	this.instance_3 = new lib.post1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(490,540,1,1,0,0,0,465,515);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(933,563,1947.7,1034.5);
// library properties:
lib.properties = {
	id: 'BAE0B2C9F8774D36A94085712873E57B',
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#0F86E1",
	opacity: 1.00,
	manifest: [
		{src:"images/wall_1_atlas_P_.png", id:"wall_1_atlas_P_"},
		{src:"images/wall_1_atlas_NP_.jpg", id:"wall_1_atlas_NP_"}
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
an.compositions['BAE0B2C9F8774D36A94085712873E57B'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;