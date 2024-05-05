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


(lib.Roket = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgiovQADA0AhgGQAggFABgpAgiovQAQgNASAAQATAAAQANACNgMQgCg+gEg3QgWlxhOg9AiMgMQACg+ADg3QAXlxBOg9AiQD8IhMCUIAACtIBSgHQgFiqgBiQQAAiRAEh3ACQD8IBNCUIAACtIhSgHQAFiqAAiQQABiRgEh3IkZAAACHiBIkOAAAiKI2IEVAA");
	this.shape.setTransform(0,0.0241);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AiJIzQgGiqAAiQQgBiRAEh3IEZAAQAEB3gBCRQAACQgFCqgAiGiEQAWlxBPg9QADA0AggGQAggFABgpQBOA9AWFxg");
	this.shape_1.setTransform(-0.0178,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ACLI2QAEiqABiQIBNCUIAACtgAjcGQIBMiUQABCQAFCqIhSAHgAiMgMQACg+ADg3IEOAAQAEA3ACA+gAghovQAQgNARAAQASAAAQANQAAApggAFIgGABQgbAAgCgvg");
	this.shape_2.setTransform(0,0.0241);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Roket, new cjs.Rectangle(-23.1,-58.2,46.2,116.5), null);


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
	this.instance = new lib.Roket();
	this.instance.setTransform(641.25,647.15,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[641.3,647,585.2,647,575.3,613.2,565.4,579.5,556,562.4,546.7,545.3,530,541.3,513.3,537.2,497,540.6,480.8,544,468.2,551.2,455.7,558.4,439.9,569.6,424.2,580.7,412,598.8,399.9,616.8,372.6,628.5,345.3,640.2,313.4,635.2,292.4,632,275.5,623.8,256.5,614.6,244.7,600,237.9,591.5,232.3,579.6,228.5,571.4,223.6,557.2,217.4,539.5,215.3,534.3,210.3,521.7,204.6,512.8,195.8,499,180.5,486.1,170.5,477.6,150.9,464.5,128.9,449.7,120.7,443.3,104.4,430.7,94.6,418,81.7,401.3,77.1,379.4,72.6,358.5,76.4,336.9,80.2,315.1,91.4,296.9,103.1,277.9,120.9,266.4,132.2,259.1,148.5,253,155.9,250.2,178.1,243.2,196.7,237.3,207.1,232.8,222.6,226,233.4,217.3,250.5,203.5,265.3,176.5,269.6,168.5,277.3,152.6,285.1,136.4,289.2,128.8,303.4,102.6,322.9,87.2,346,68.9,370.2,71.7,392.1,74.2,411.6,94.2,424.5,107.5,441.2,135.1,457.3,161.6,471.6,175.4,491.7,194.7,513.9,195.7,527.7,196.4,543.4,189.5,554.2,184.8,570.4,174.1,612.5,146.2,651.1,114.8,659.8,107.8,664.2,105.2,672,100.5,679.1,99.8,686.4,99.2,695,102.4,700.5,104.6,709.8,109.9,748.1,132.1,766.2,144.6,796.6,165.5,815.9,187.7,822,194.7,833.6,209.2,844.2,221.5,853.6,228.1,877.4,244.6,910.4,240.7,940.8,237,966.9,218.2,978.9,209.6,998.1,191.1,1019,171,1028.8,163.3,1046.7,149.2,1065.1,143.1,1086.6,135.9,1105.3,140.9,1114.3,162.3,1137.3,191,1143.5,198.8,1156.2,214.4,1167.2,228.1,1174,238.6,1192.1,266.2,1195.1,295.4,1198.5,328.7,1179.6,349.3,1172.8,356.9,1160,365,1145.3,373.7,1138.4,378.6,1121.5,390.7,1109.9,409.2,1098.8,427.1,1094.3,448.2,1089.8,469.3,1092.6,490.2,1095.6,511.8,1106.1,529.7,1111.2,538.4,1122.1,552.8,1134.7,569.5,1138.8,575.8,1147.3,588.7,1150.8,599.5,1154.9,612.6,1152.5,625.1,1149.9,639.1,1138.7,651.1,1128.9,661.8,1114.3,669.1,1095.8,678.3,1071.1,682.6,1053.4,685.6,1025.5,686.8,995.1,688.1,975.5,686.3,948.2,683.9,927.5,675,896.4,661.5,881.8,633.6,867.2,605.7,872.1,568,877,530.2,847.5,519,818.1,507.7,791.5,522.8,764.9,537.8,760.3,559,755.7,580.2,737.9,615.3,720,650.4,667.7,647.5], orient:'fixed'}},449).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(680.5,391.2,554.5,325.59999999999997);
// library properties:
lib.properties = {
	id: 'F1E8A3481678A84D8AECA146DAB3FBC2',
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
an.compositions['F1E8A3481678A84D8AECA146DAB3FBC2'] = {
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