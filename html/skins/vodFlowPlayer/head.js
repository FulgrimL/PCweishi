
    setMeta = function() {
                var linkDom = document.createElement('link');
                linkDom.rel = "stylesheet";
                linkDom.type = "text/css";
                var isPhone = function() {
                            var flag = false;
                            var userAgentInfo = navigator.userAgent;
                            var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
                            for (var i = 0; i < Agents.length; i++) {
                                if (userAgentInfo.indexOf(Agents[i]) > 0) {
                                    flag = true;
                                    break;
                                }
                            }
                            if (flag) {
                                var iScale = 1;
                                 iScale = iScale / window.devicePixelRatio;
                                var metaDom = document.createElement('meta');
                                metaDom.name = "viewport";
                                metaDom.content = 'width=device-width,user-scalable=no,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale;
                                document.getElementsByTagName('head')[0].appendChild(metaDom);
                                var iWidth = document.documentElement.clientWidth;
                                document.getElementsByTagName('html')[0].style.fontSize = iWidth / 16 + "px";
                            }else if (!flag) {
                                document.getElementsByTagName('html')[0].style.fontSize = "48px";
                                document.getElementsByTagName('html')[0].style.width = "750px";
                            };
                            console.log(flag);
                        }
                        isPhone();
            };
            setMeta()

