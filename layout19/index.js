<html>
<title></title>
<head> 
 <script type="text/javascript" src="js/jssor.slider.min.js"></script>
    <!-- use jssor.slider.debug.js instead for debug -->
    <script>
        jssor_1_slider_init = function() {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1000,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
              {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1000,x:-1,y:2,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.85}},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1000,x:4,y:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}},
              {$Duration:1000,x:-3,y:1,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,y:-1,$Cols:8,$Rows:4,$Clip:15,$During:{$Top:[0.5,0.5],$Clip:[0,0.5]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12},$ScaleClip:0.5},
              {$Duration:1000,x:0.5,y:0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1200,x:-0.6,y:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1500,y:-0.5,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Easing:$Jease$.$InWave,$Round:{$Top:1.5}},
              {$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:$Jease$.$InQuad},
              {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];
            
            var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,o:-1},{b:0,d:1200,y:300,o:1,e:{y:24,o:6}},{b:5600,d:800,y:-200,o:-1,e:{y:5}}],
              [{b:-1,d:1,o:-1},{b:400,d:800,x:200,o:1,e:{x:27,o:6}},{b:5600,d:800,x:-200,o:-1,e:{x:5}}],
              [{b:-1,d:1,o:-1},{b:400,d:800,x:-200,o:1,e:{x:27,o:6}},{b:5600,d:800,x:200,o:-1,e:{x:5}}],
              [{b:-1,d:1,o:-1},{b:1600,d:600,x:200,y:-200,o:1},{b:5600,d:800,o:-1}],
              [{b:4600,d:960,x:-204}],
              [{b:-1,d:1,sX:-1,sY:-1},{b:3400,d:400,sX:1,sY:1},{b:3800,d:300,o:-1,sX:0.1,sY:0.1}],
              [{b:-1,d:1,sX:-1,sY:-1},{b:3520,d:400,sX:1,sY:1},{b:3920,d:300,o:-1,sX:0.1,sY:0.1}],
              [{b:-1,d:1,o:-1},{b:2200,d:1200,x:-135,y:-24,o:1,e:{x:7,y:7}},{b:4600,d:640,x:-130}],
              [{b:-1,d:1,o:-1},{b:4600,d:240,x:-75,o:1,e:{x:1}},{b:4840,d:480,x:-150,e:{x:1}},{b:5320,d:240,x:-75,o:-1,e:{x:1}}],
              [{b:2800,d:600,y:70,sX:-0.5,sY:-0.5,e:{y:5}},{b:6000,d:600,y:50,r:-10},{b:7000,d:400,o:-1,rX:10,rY:-10}],
              [{b:0,d:600,x:-742,sX:4,sY:4,e:{x:6}},{b:900,d:600,sX:-4,sY:-4}],
              [{b:-1,d:1,o:-1},{b:400,d:500,o:1,e:{o:5}}],
              [{b:-1,d:1,o:-1,r:-180},{b:1500,d:500,o:1,r:180,e:{r:27}}],
              [{b:-1,d:1,o:-1,r:180},{b:2000,d:500,o:1,r:-180,e:{r:27}}],
              [{b:2800,d:600,y:-270,e:{y:6}}],
              [{b:6000,d:600,y:-100,r:-10,e:{y:6}},{b:7000,d:400,o:-1,rX:-10,rY:10}],
              [{b:-1,d:1,sX:-1,sY:-1},{b:3400,d:400,sX:1.33,sY:1.33,e:{sX:7,sY:7}},{b:3800,d:200,sX:-0.33,sY:-0.33,e:{sX:16,sY:16}}],
              [{b:-1,d:1,o:-1},{b:3400,d:600,o:1},{b:4000,d:1000,r:360,e:{r:1}}],
              [{b:-1,d:1,o:-1},{b:3400,d:600,y:-70,o:1,e:{y:27}}],
              [{b:-1,d:1,sX:-1,sY:-1},{b:3700,d:400,sX:1.33,sY:1.33,e:{sX:7,sY:7}},{b:4100,d:200,sX:-0.33,sY:-0.33,e:{sX:16,sY:16}}],
              [{b:-1,d:1,o:-1},{b:3700,d:600,o:1},{b:4300,d:1000,r:360}],
              [{b:-1,d:1,o:-1},{b:3700,d:600,x:-150,o:1,e:{x:27}}],
              [{b:-1,d:1,sX:-1,sY:-1},{b:4000,d:400,sX:1.33,sY:1.33,e:{sX:7,sY:7}},{b:4400,d:200,sX:-0.33,sY:-0.33,e:{sX:16,sY:16}}],
              [{b:-1,d:1,o:-1},{b:4000,d:600,o:1},{b:4600,d:1000,r:360}],
              [{b:-1,d:1,o:-1},{b:4000,d:600,x:150,o:1,e:{x:27}}],
              [{b:9300,d:600,o:-1,r:540,sX:-0.5,sY:-0.5,e:{r:5}}],
              [{b:-1,d:1,o:-1,sX:2,sY:2},{b:6880,d:20,o:1},{b:6900,d:300,sX:-2.08,sY:-2.08,e:{sX:27,sY:27}},{b:7200,d:240,sX:0.08,sY:0.08}],
              [{b:-1,d:1,o:-1,sX:5,sY:5},{b:6300,d:600,o:1,sX:-5,sY:-5}],
              [{b:-1,d:1,o:-1},{b:7200,d:440,o:1}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:7420,d:20,o:1},{b:7440,d:200,r:180,sX:0.4,sY:0.4},{b:7640,d:200,r:180,sX:0.5,sY:0.5}],
              [{b:-1,d:1,o:-1,r:-60,sX:-0.9,sY:-0.9},{b:7620,d:20,o:1},{b:7640,d:300,r:60,sX:1.1,sY:1.1},{b:7940,d:160,sX:-0.2,sY:-0.2}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:7920,d:20,o:1},{b:7940,d:300,sX:1.4,sY:1.4},{b:8240,d:160,sX:-0.5,sY:-0.5}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:7620,d:20,o:1},{b:7640,d:200,r:180,sX:0.4,sY:0.4},{b:7840,d:200,r:180,sX:0.5,sY:0.5}],
              [{b:-1,d:1,o:-1,r:-60,sX:-0.9,sY:-0.9},{b:7820,d:20,o:1},{b:7840,d:300,r:60,sX:1.1,sY:1.1},{b:8140,d:160,sX:-0.2,sY:-0.2}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:8120,d:20,o:1},{b:8140,d:300,sX:1.4,sY:1.4},{b:8440,d:160,sX:-0.5,sY:-0.5}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:7820,d:20,o:1},{b:7840,d:200,r:180,sX:0.4,sY:0.4},{b:8040,d:200,r:180,sX:0.5,sY:0.5}],
              [{b:-1,d:1,o:-1,r:-60,sX:-0.9,sY:-0.9},{b:8020,d:20,o:1},{b:8040,d:300,r:60,sX:1.1,sY:1.1},{b:8340,d:160,sX:-0.2,sY:-0.2}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:8320,d:20,o:1},{b:8340,d:300,sX:1.4,sY:1.4},{b:8640,d:160,sX:-0.5,sY:-0.5}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:8020,d:20,o:1},{b:8040,d:200,r:180,sX:0.4,sY:0.4},{b:8240,d:200,r:180,sX:0.5,sY:0.5}],
              [{b:-1,d:1,o:-1,r:-60,sX:-0.9,sY:-0.9},{b:8220,d:20,o:1},{b:8240,d:300,r:60,sX:1.1,sY:1.1},{b:8540,d:160,sX:-0.2,sY:-0.2}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:8520,d:20,o:1},{b:8540,d:300,sX:1.4,sY:1.4},{b:8840,d:160,sX:-0.5,sY:-0.5}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:8220,d:20,o:1},{b:8240,d:200,r:180,sX:0.4,sY:0.4},{b:8440,d:200,r:180,sX:0.5,sY:0.5}],
              [{b:-1,d:1,o:-1,r:-60,sX:-0.9,sY:-0.9},{b:8420,d:20,o:1},{b:8440,d:300,r:60,sX:1.1,sY:1.1},{b:8740,d:160,sX:-0.2,sY:-0.2}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:8720,d:20,o:1},{b:8740,d:300,sX:1.4,sY:1.4},{b:9040,d:160,sX:-0.5,sY:-0.5}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:8220,d:20,o:1},{b:8240,d:200,r:180,sX:0.4,sY:0.4},{b:8440,d:200,r:180,sX:0.5,sY:0.5}],
              [{b:-1,d:1,o:-1,r:-60,sX:-0.9,sY:-0.9},{b:8420,d:20,o:1},{b:8440,d:300,r:60,sX:1.1,sY:1.1},{b:8740,d:160,sX:-0.2,sY:-0.2}],
              [{b:-1,d:1,o:-1,sX:-0.9,sY:-0.9},{b:8720,d:20,o:1},{b:8740,d:300,sX:1.4,sY:1.4},{b:9040,d:160,sX:-0.5,sY:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:0,d:400,y:330},{b:900,d:400,y:50,rX:80},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:-1,d:1,o:-0.5},{b:900,d:400,o:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:1700,d:400,y:310},{b:2600,d:400,y:50,rX:80},{b:20000,d:1000,y:20},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:20000,d:1000,o:-1}],
              [{b:-1,d:1,o:-0.5},{b:2600,d:400,o:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:3400,d:400,y:290},{b:5100,d:400,y:50,rX:80},{b:20000,d:1000,y:40},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:20000,d:1000,o:-1}],
              [{b:-1,d:1,c:{t:-280}},{b:3880,d:20,c:{t:50.40}},{b:3980,d:20,c:{t:33.60}},{b:4080,d:20,c:{t:30.80}},{b:4180,d:20,c:{t:30.80}},{b:4280,d:20,c:{t:33.60}},{b:4380,d:20,c:{t:22.40}},{b:4480,d:20,c:{t:28.00}},{b:4580,d:20,c:{t:50.40}}],
              [{b:-1,d:1,o:-0.5},{b:5100,d:400,o:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:6000,d:400,y:270},{b:6900,d:400,y:50,rX:40},{b:15000,d:500,rX:40},{b:20000,d:1000,y:60},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:20000,d:1000,o:-1}],
              [{b:6900,d:400,o:-0.2},{b:15000,d:500,o:-0.8}],
              [{b:-1,d:1,o:-0.5},{b:15000,d:500,o:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:7800,d:400,y:270},{b:8700,d:400,y:50,rX:40},{b:15000,d:500,rX:40},{b:20000,d:1000,y:60},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:8700,d:400,o:-1}],
              [{b:-1,d:1,o:-0.5},{b:8700,d:400,o:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:9600,d:400,y:270},{b:10500,d:400,y:50,rX:40},{b:15000,d:500,rX:40},{b:20000,d:1000,y:60},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:10500,d:400,o:-1}],
              [{b:-1,d:1,o:-0.5},{b:10500,d:400,o:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:11400,d:400,y:270},{b:12300,d:400,y:50,rX:40},{b:15000,d:500,rX:40},{b:20000,d:1000,y:60},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:12300,d:400,o:-1}],
              [{b:-1,d:1,o:-0.5},{b:12300,d:400,o:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:13200,d:400,y:270},{b:14100,d:400,y:50,rX:40},{b:15000,d:500,rX:40},{b:20000,d:1000,y:60},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:14100,d:400,o:-1}],
              [{b:-1,d:1,o:-0.5},{b:14100,d:400,o:-0.5}],
              [{b:-1,d:1,sX:-0.2,sY:-0.2},{b:16000,d:400,y:270},{b:19100,d:400,y:30,rX:80},{b:20000,d:1000,y:80},{b:21000,d:1000,y:-95,rX:-80,sX:0.2,sY:0.2,e:{y:16,rX:16,sX:16,sY:16}},{b:23000,d:900,y:25,o:-1,rX:60}],
              [{b:20000,d:1000,o:-1}],
              [{b:-1,d:1,o:-0.5},{b:19100,d:400,o:-0.5}],
              [{b:-1,d:1,o:-1},{b:16400,d:300,o:1},{b:16700,d:500,x:-238}],
              [{b:-1,d:1,o:-1},{b:16400,d:300,o:1},{b:16700,d:500,x:238}],
              [{b:-1,d:1,o:-1},{b:17000,d:400,y:200,o:1,e:{y:2,o:6}},{b:17400,d:300,y:-28,e:{y:3}},{b:17700,d:300,y:28,e:{y:2}}],
              [{b:-1,d:1,o:-1},{b:17200,d:400,y:200,o:1,e:{y:2,o:6}},{b:17600,d:300,y:-28,e:{y:3}},{b:17900,d:300,y:28,e:{y:2}}],
              [{b:-1,d:1,o:-1},{b:17400,d:400,y:200,o:1,e:{y:2,o:6}},{b:17800,d:300,y:-28,e:{y:3}},{b:18100,d:300,y:28,e:{y:2}}],
              [{b:-1,d:1,o:-1},{b:17600,d:400,y:200,o:1,e:{y:2,o:6}},{b:18000,d:300,y:-28,e:{y:3}},{b:18300,d:300,y:28,e:{y:2}}]
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions,
                $Breaks: [
                  [{d:2000,b:5600,t:2}],
                  [{d:2000,b:9300,t:2}],
                  [{d:2000,b:23000}]
                ]
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 980);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        };
    </script>

    <style>
        
        /* jssor slider bullet navigator skin 05 css */
        /*
        .jssorb05 div           (normal)
        .jssorb05 div:hover     (normal mouseover)
        .jssorb05 .av           (active)
        .jssorb05 .av:hover     (active mouseover)
        .jssorb05 .dn           (mousedown)
        */
        .jssorb05 {
            position: absolute;
        }
        .jssorb05 div, .jssorb05 div:hover, .jssorb05 .av {
            position: absolute;
            /* size of bullet elment */
            width: 16px;
            height: 16px;
            background: url('img/b05.png') no-repeat;
            overflow: hidden;
            cursor: pointer;
        }
        .jssorb05 div { background-position: -7px -7px; }
        .jssorb05 div:hover, .jssorb05 .av:hover { background-position: -37px -7px; }
        .jssorb05 .av { background-position: -67px -7px; }
        .jssorb05 .dn, .jssorb05 .dn:hover { background-position: -97px -7px; }

        /* jssor slider arrow navigator skin 22 css */
        /*
        .jssora22l                  (normal)
        .jssora22r                  (normal)
        .jssora22l:hover            (normal mouseover)
        .jssora22r:hover            (normal mouseover)
        .jssora22l.jssora22ldn      (mousedown)
        .jssora22r.jssora22rdn      (mousedown)
        */
        .jssora22l, .jssora22r {
            display: block;
            position: absolute;
            /* size of arrow element */
            width: 40px;
            height: 58px;
            cursor: pointer;
            background: url('img/a22.png') center center no-repeat;
            overflow: hidden;
        }
        .jssora22l { background-position: -10px -31px; }
        .jssora22r { background-position: -70px -31px; }
        .jssora22l:hover { background-position: -130px -31px; }
        .jssora22r:hover { background-position: -190px -31px; }
        .jssora22l.jssora22ldn { background-position: -250px -31px; }
        .jssora22r.jssora22rdn { background-position: -310px -31px; }
    </style>
</head>
		<body>
	 <div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 980px; height: 380px; overflow: hidden; visibility: hidden;">
        <!-- Loading Screen -->
        <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
            <div style="position:absolute;display:block;background:url('img/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
        </div>
        <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 980px; height: 380px; overflow: hidden;">
            <div data-b="0" data-p="170.00" style="display: none;">
                <img data-u="image" src="img/04.jpg" />
                <div data-to="100% 100%" style="position: absolute; top: 107px; left: 460px; width: 460px; height: 210px;">
                    <img data-u="caption" data-t="0" style="position: absolute; top: -300px; left: 89px; width: 210px; height: 178px;" src="img/mock-pc.png" />
                    <img data-u="caption" data-t="1" style="position: absolute; top: 55px; left: -200px; width: 114px; height: 144px;" src="img/mock-ipad.png" />
                    <img data-u="caption" data-t="2" style="position: absolute; top: 88px; left: 420px; width: 219px; height: 120px;" src="img/mock-laptop.png" />
                </div>
                <div data-u="caption" data-t="3" data-to="0% 100%" style="position: absolute; top: 385px; left: -100px; width: 257px; height: 127px;">
                    <div style="position: absolute; top: 4px; left: 34px; width: 198px; height: 112px; overflow: hidden;">
                        <img data-u="caption" data-t="4" style="position: absolute; top: -2px; left: -2px; width: 408px; height: 116px;" src="img/mock-phone-slider-flat.jpg" />
                    </div>
                    <img style="position: absolute; top: 0px; left: 0px; width: 257px; height: 127px;" src="img/mock-phone.png" />
                    <img data-u="caption" data-t="5" style="position: absolute; top: 22px; left: 139px; width: 108px; height: 108px;" src="img/circle-hollow.png" />
                    <img data-u="caption" data-t="6" style="position: absolute; top: 31px; left: 148px; width: 90px; height: 90px;" src="img/circle-solid.png" />
                    <img data-u="caption" data-t="7" style="position: absolute; top: 100px; left: 300px; width: 63px; height: 77px;" src="img/hand.png" />
                    <img data-u="caption" data-t="8" style="position: absolute; top: -44px; left: 255px; width: 75px; height: 20px;" src="img/swipe-arrow.png" />
                </div>
                <a href="http://www.jssor.com/help/slideshow-transitions.html" target="_blank" style="display: block; position: absolute; top: 22px; left: 600px; width: 320px; height: 36px; font-size: 22px; color: #ffffff; line-height: 36px;">300+ Slideshow Transitions</a>
            </div>
            <div data-b="1" data-p="170.00" style="display: none;">
                <img data-u="image" src="img/02.jpg" />
                <div data-u="caption" data-t="9" data-3d="1" style="position: absolute; top: 150px; left: -36px; width: 1053px; height: 150px;">
                    <div data-u="caption" data-t="10" data-to="100% 50%" style="position: absolute; top: 0px; left: 1030px; width: 72px; height: 72px; background-color: #eb9434;">
                        <div data-u="caption" data-t="11" style="position: absolute; top: 0px; left: 0px; width: 72px; height: 72px; font-size: 46px; color: #ffffff; line-height: 72px; text-align: center;">All
                            
                        </div>
                    </div>
                    <div data-u="caption" data-t="12" data-to="0% 50%" style="position: absolute; top: 0px; left: 360px; width: 175px; height: 72px; background-color: #eb9434; font-size: 45px; color: #ffffff; line-height: 72px; text-align: center;">Devices
                        
                    </div>
                    <div data-u="caption" data-t="13" data-to="0% 50%" style="position: absolute; top: 0px; left: 535px; width: 230px; height: 72px; background-color: #eb9434; font-size: 45px; color: #ffffff; line-height: 72px; text-align: center;">Supported
                        
                    </div>
                    <div data-u="caption" data-t="14" style="position: absolute; top: 360px; left: 238px; width: 577px; height: 30px; font-size: 24px; color: #ffffff; line-height: 30px; text-align: center;">Jssor Slider is one of the most reliable sliders</div>
                </div>
                <div data-u="caption" data-t="15" data-3d="1" style="position: absolute; top: 70px; left: 182px; width: 616px; height: 150px;">
                    <img data-u="caption" data-t="16" style="position: absolute; top: 22px; left: 266px; width: 84px; height: 84px;" src="img/ios.png" />
                    <img data-u="caption" data-t="17" style="position: absolute; top: 16px; left: 260px; width: 96px; height: 96px;" src="img/circle.png" />
                    <div data-u="caption" data-t="18" style="position: absolute; top: 195px; left: 260px; width: 96px; height: 30px; font-size: 18px; color: #ffffff; line-height: 30px; text-align: center;">IOS</div>
                    <img data-u="caption" data-t="19" style="position: absolute; top: 22px; left: 22px; width: 84px; height: 84px;" src="img/android.png" />
                    <img data-u="caption" data-t="20" style="position: absolute; top: 16px; left: 16px; width: 96px; height: 96px;" src="img/circle.png" />
                    <div data-u="caption" data-t="21" style="position: absolute; top: 125px; left: 166px; width: 96px; height: 30px; font-size: 18px; color: #ffffff; line-height: 30px; text-align: center;">Android</div>
                    <img data-u="caption" data-t="22" style="position: absolute; top: 22px; left: 510px; width: 84px; height: 84px;" src="img/windows.png" />
                    <img data-u="caption" data-t="23" style="position: absolute; top: 16px; left: 504px; width: 96px; height: 96px;" src="img/circle.png" />
                    <div data-u="caption" data-t="24" style="position: absolute; top: 125px; left: 354px; width: 96px; height: 30px; font-size: 18px; color: #ffffff; line-height: 30px; text-align: center;">Windows</div>
                </div>
                <div style="position: absolute; top: 20px; left: 327px; width: 336px; height: 312px;">
                    <div data-u="caption" data-t="25" style="position: absolute; top: 82px; left: 104px; width: 128px; height: 147px;">
                        <img data-u="caption" data-t="26" style="position: absolute; top: 0px; left: 0px; width: 128px; height: 147px;" src="img/hexagon-hollow-big.png" />
                        <img data-u="caption" data-t="27" style="position: absolute; top: 9px; left: 8px; width: 112px; height: 129px;" src="img/hexagon-solid-yellow.png" />
                        <div data-u="caption" data-t="28" style="position: absolute; top: 20px; left: 0px; width: 128px; height: 90px; font-size: 20px; line-height: 30px; text-align: center;">All
                            <br />
                            Browsers
                            <br />
                            Supported
                        </div>
                    </div>
                    <div style="position: absolute; top: 0px; left: 187px; width: 90px; height: 104px;">
                        <img data-u="caption" data-t="29" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 104px;" src="img/hexagon-hollow.png" />
                        <img data-u="caption" data-t="30" style="position: absolute; top: 8px; left: 7px; width: 76px; height: 88px;" src="img/hexagon-solid.png" />
                        <img data-u="caption" data-t="31" style="position: absolute; top: 33px; left: 26px; width: 38px; height: 38px;" src="img/opera.png" />
                    </div>
                    <div style="position: absolute; top: 104px; left: 246px; width: 90px; height: 104px;">
                        <img data-u="caption" data-t="32" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 104px;" src="img/hexagon-hollow.png" />
                        <img data-u="caption" data-t="33" style="position: absolute; top: 8px; left: 7px; width: 76px; height: 88px;" src="img/hexagon-solid.png" />
                        <img data-u="caption" data-t="34" style="position: absolute; top: 33px; left: 26px; width: 38px; height: 38px;" src="img/firefox.png" />
                    </div>
                    <div style="position: absolute; top: 208px; left: 187px; width: 90px; height: 104px;">
                        <img data-u="caption" data-t="35" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 104px;" src="img/hexagon-hollow.png" />
                        <img data-u="caption" data-t="36" style="position: absolute; top: 8px; left: 7px; width: 76px; height: 88px;" src="img/hexagon-solid.png" />
                        <img data-u="caption" data-t="37" style="position: absolute; top: 33px; left: 26px; width: 38px; height: 38px;" src="img/ie.png" />
                    </div>
                    <div style="position: absolute; top: 208px; left: 59px; width: 90px; height: 104px;">
                        <img data-u="caption" data-t="38" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 104px;" src="img/hexagon-hollow.png" />
                        <img data-u="caption" data-t="39" style="position: absolute; top: 8px; left: 7px; width: 76px; height: 88px;" src="img/hexagon-solid.png" />
                        <img data-u="caption" data-t="40" style="position: absolute; top: 33px; left: 26px; width: 38px; height: 38px;" src="img/edge.png" />
                    </div>
                    <div style="position: absolute; top: 104px; left: 0px; width: 90px; height: 104px;">
                        <img data-u="caption" data-t="41" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 104px;" src="img/hexagon-hollow.png" />
                        <img data-u="caption" data-t="42" style="position: absolute; top: 8px; left: 7px; width: 76px; height: 88px;" src="img/hexagon-solid.png" />
                        <img data-u="caption" data-t="43" style="position: absolute; top: 33px; left: 26px; width: 38px; height: 38px;" src="img/safari.png" />
                    </div>
                    <div style="position: absolute; top: 0px; left: 59px; width: 90px; height: 104px;">
                        <img data-u="caption" data-t="44" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 104px;" src="img/hexagon-hollow.png" />
                        <img data-u="caption" data-t="45" style="position: absolute; top: 8px; left: 7px; width: 76px; height: 88px;" src="img/hexagon-solid.png" />
                        <img data-u="caption" data-t="46" style="position: absolute; top: 33px; left: 28px; width: 38px; height: 38px;" src="img/chrome.png" />
                    </div>
                </div>
            </div>
            <div data-b="2" data-p="816.0" style="display: none;">
                <img data-u="image" src="img/01.jpg" />
                <div data-u="caption" data-t="47" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/main.jpg" />
                    <div data-u="caption" data-t="48" style="position: absolute; top: 30px; left: 30px; width: 180px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Main Image</div>
                </div>
                <div data-u="caption" data-t="49" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img data-u="caption" data-t="50" style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/layer-blurred-white.png" />
                    <img style="position: absolute; top: 140px; left: 170px; width: 55px; height: 51px;" src="img/butterfly-light-yellow.png" />
                    <div data-u="caption" data-t="51" style="position: absolute; top: 30px; left: 30px; width: 180px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Image Layer</div>
                </div>
                <div data-u="caption" data-t="52" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img data-u="caption" data-t="53" style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/layer-blurred-white.png" />
                    <div data-u="caption" data-t="54" style="position: absolute; top: 100px; left: 30px; width: 280px; height: 50px; font-size: 40px; line-height: 50px; text-align: center;">SOME TEXT</div>
                    <div data-u="caption" data-t="55" style="position: absolute; top: 30px; left: 30px; width: 180px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Text layer</div>
                </div>
                <div data-u="caption" data-t="56" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img data-u="caption" data-t="57" style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/layer-blurred-white.png" />
                    <div data-u="caption" data-t="58" style="position: absolute; top: 25px; left: 240px; width: 300px; height: 175px; background-color: #ffff8c;"></div>
                    <div data-u="caption" data-t="59" style="position: absolute; top: 30px; left: 30px; width: 180px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Panel Layer</div>
                </div>
                <div data-u="caption" data-t="60" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img data-u="caption" data-t="61" style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/layer-blurred-white.png" />
                    <div data-u="caption" data-t="62" style="position: absolute; top: 30px; left: 30px; width: 250px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Nested Text Layer</div>
                    <div style="position: absolute; top: 40px; left: 320px; width: 200px; height: 50px; font-size: 26px; line-height: 50px; text-align: center;">Nested Text</div>
                </div>
                <div data-u="caption" data-t="63" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img data-u="caption" data-t="64" style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/layer-blurred-white.png" />
                    <div data-u="caption" data-t="65" style="position: absolute; top: 30px; left: 30px; width: 250px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Nested Image Layer</div>
                    <img style="position: absolute; top: 78px; left: 249px; width: 87px; height: 92px;" src="img/butterfly-blue.png" />
                </div>
                <div data-u="caption" data-t="66" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img data-u="caption" data-t="67" style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/layer-blurred-white.png" />
                    <div data-u="caption" data-t="68" style="position: absolute; top: 30px; left: 30px; width: 250px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Nested Image Layer</div>
                    <img style="position: absolute; top: 126px; left: 364px; width: 66px; height: 66px;" src="img/butterfly-dark-yellow.png" />
                </div>
                <div data-u="caption" data-t="69" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img data-u="caption" data-t="70" style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/layer-blurred-white.png" />
                    <div data-u="caption" data-t="71" style="position: absolute; top: 30px; left: 30px; width: 250px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Nested Image Layer</div>
                    <img style="position: absolute; top: 113px; left: 463px; width: 48px; height: 49px;" src="img/butterfly-red.png" />
                </div>
                <div data-u="caption" data-t="72" data-3d="1" style="position: absolute; top: -210px; left: 200px; width: 580px; height: 225px;">
                    <img data-u="caption" data-t="73" style="position: absolute; top: 0px; left: 0px; width: 580px; height: 225px;" src="img/layer-blurred-white.png" />
                    <div data-u="caption" data-t="74" style="position: absolute; top: 30px; left: 30px; width: 200px; height: 40px; background-color: #000000; font-size: 22px; color: #ffffff; line-height: 40px; text-align: center;">Arrow/Bullets</div>
                    <img data-u="caption" data-t="75" style="position: absolute; top: 93px; left: 250px; width: 18px; height: 38px;" src="img/arrow-left.png" />
                    <img data-u="caption" data-t="76" style="position: absolute; top: 93px; left: 312px; width: 18px; height: 38px;" src="img/arrow-right.png" />
                    <img data-u="caption" data-t="77" style="position: absolute; top: 0px; left: 259px; width: 8px; height: 8px;" src="img/dot.png" />
                    <img data-u="caption" data-t="78" style="position: absolute; top: 0px; left: 277px; width: 8px; height: 8px;" src="img/dot.png" />
                    <img data-u="caption" data-t="79" style="position: absolute; top: 0px; left: 295px; width: 8px; height: 8px;" src="img/dot.png" />
                    <img data-u="caption" data-t="80" style="position: absolute; top: 0px; left: 313px; width: 8px; height: 8px;" src="img/dot.png" />
                </div>
                <a href="http://www.jssor.com/demos/introduction-slider.slider/=edit" target="_blank" style="display: block; position: absolute; top: 22px; left: 500px; width: 220px; height: 36px; font-size: 22px; color: #ffffff; line-height: 36px; text-align: center;">Edit This Slider</a>
                <a href="https://www.jssor.com/action/sign_up.aspx" target="_blank" style="display: block; position: absolute; top: 22px; left: 720px; width: 220px; height: 36px; font-size: 22px; color: #ffffff; line-height: 36px; text-align: center;">Sign up Now!</a>
            </div>
            <a data-u="add" href="http://www.jssor.com" style="display:none">Jssor Slider</a>
        
        </div>
        <!-- Bullet Navigator -->
        <div data-u="navigator" class="jssorb05" style="bottom:16px;right:16px;" data-autocenter="1">
            <!-- bullet navigator item prototype -->
            <div data-u="prototype" style="width:16px;height:16px;"></div>
        </div>
        <!-- Arrow Navigator -->
        <span data-u="arrowleft" class="jssora22l" style="top:0px;left:10px;width:40px;height:58px;" data-autocenter="2"></span>
        <span data-u="arrowright" class="jssora22r" style="top:0px;right:10px;width:40px;height:58px;" data-autocenter="2"></span>
    </div>
	<body>
</html>	