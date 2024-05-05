(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACNq5Qg5iThUhMQhUBMg4CTQBKBhBCgEQBCAEBLhhQCLFngWMFIB8DnIAAEAIiVgDInRAAAiMq5QiLFnAVMFIh7DnIAAEAICVgDAkCGzQAGDgAUEEAECGzQgFDggUEE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ADpDxQAUkDAFjhIB8DoIAAD+gAl9gLIB8joQAGDhATEDIiVACg");
	this.shape_1.setTransform(0,67.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAACeQhBAEhLhgQA4iTBUhMQBUBMA5CTQhIBchAAAIgFAAg");
	this.shape_2.setTransform(0,-76.317);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("AjoMoQgTkDgGjhQgWsFCLlmQBLBgBBgEQBCAEBLhgQCLFmgWMFQgFDhgUEDg");
	this.shape_3.setTransform(0,11.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-93.1,78.4,186.3);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiMq5QBKBhBCgEQBDAEBKhhQg4iThVhNQhUBNg4CTQiLFmAWMFIh8DoIAAEAICVgDACNq5QCLFmgWMFIB8DoIAAEAIiVgDInRAAAkBGyQAFDhAUEEAECGyQgFDhgUEE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ADpDxQATkDAHjhIB7DoIAAD+gAl9gLIB7joQAHDhATEDIiVACg");
	this.shape_1.setTransform(0,67.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAACeQhBAEhLhgQA4iTBUhMQBVBMA4CTQhIBchAAAIgFAAg");
	this.shape_2.setTransform(0,-76.317);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("AjoMoQgTkDgHjhQgVsFCLlmQBLBgBBgEQBDAEBKhgQCLFmgVMFQgHDhgTEDg");
	this.shape_3.setTransform(0,11.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-93.1,78.4,186.3);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(94,132.55,1,1,6.0032,0,0,0.1,0.1);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(92.15,143.85,1,1,25.2485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},149).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,rotation:25.2485,guide:{path:[94.1,132.6,92.7,126.1,96.4,118.7,99,113.4,105.1,106.4,133,74.7,161.2,59.3,175.1,51.8,189.5,48,192.6,47.2,195.7,46.6,214.7,42.7,232.2,45.7,260.7,50.5,287.2,73.3,307.7,91,329.1,121.7,335.2,130.3,347.1,147.9,357.9,163.6,365.9,173.6,388.3,202.1,411.5,216.2,424.1,223.8,436.5,227.1,450.6,230.9,463.4,229,477.1,226.7,491.6,218,503.9,210.7,518.2,198.4,520.7,196.3,542.9,176,557.8,162.6,568.2,155,582.6,144.7,596.6,139.4,616.3,132,630,138.1,634.2,140,638.8,143.8,641.2,145.8,646.5,150.9,662.6,167.3,670.8,175.3,676.1,180.6,678.6,184.3,682.3,189.8,682.6,195,683.1,201.3,678.7,207.9,675.8,212.5,669.3,218.7,637.2,249.4,602.1,276.6,584.3,290.4,570.9,298.7,553.2,309.6,536.6,315.1,520.9,320.3,501.9,322.1,486.1,323.6,466.4,322.7,435.9,321.4,398.5,314.9,375.6,310.9,331.4,301.2,317,298.1,309.5,295.6,297.6,291.5,289.6,285.3,282.3,279.6,272.8,266.6,261.9,251.7,256.9,246.8,241.4,231.9,218.5,230,202.8,228.6,189.5,233.8,183.3,236.2,177.7,240,166.9,247.3,154.3,263.6,150.8,268,144,277,138,284.8,133.1,289.8,128.9,294.2,123.9,298.4,113.6,306.9,100,314.5,87.4,321.6,62.2,332.6,57.9,334.4,55.3,335,51.3,335.8,48.4,334.5,45.6,333.2,43.6,329.9,42.1,327.5,40.9,323.5,37.3,311.5,36.8,298.4,35.4,267.2,50.6,229.2,57,213.4,71.2,185.6,85.7,157.4,91.7,143.7], orient:'fixed'}},149).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(600.8,322.8,171.10000000000002,105);
// library properties:
lib.properties = {
	id: 'D8FD44DF1EA3E44A9EF5FF1C5F84F5C0',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['D8FD44DF1EA3E44A9EF5FF1C5F84F5C0'] = {
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