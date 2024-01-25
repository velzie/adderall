// ==UserScript==
// @include         chrome://browser/content/browser.xhtml
// @onlyonce
// @startup         myScriptObject
// ==/UserScript==

const EXPORTED_SYMBOLS = [];
const { _ucUtils } = ChromeUtils.importESModule("chrome://userchromejs/content/utils.sys.mjs");
_ucUtils.sharedGlobal.myScriptObject = {
  _startup: function(win) {
    if (document.querySelector("#skibidi")) return;

    _ucUtils.windowIsReady(window).then(() => {

      let ghbox = document.createXULElement("hbox");
      ghbox.style = "width: 100%; height: 100%; display: flex";
      let gvbox = document.createXULElement("vbox");
      gvbox.style = "height: 100%; display: block";
      document.body.appendChild(ghbox);

      let toolbox = document.getElementById("navigator-toolbox");
      gvbox.appendChild(toolbox);
      let browserbox = document.getElementById("browser");
      gvbox.appendChild(browserbox);
      browserbox.style.height = "100%";



      let vbox = document.createElement("vbox");
      browserbox.appendChild(vbox);
      vbox.style = "width: 200px";

      let sidevb = document.createXULElement("vbox");
      sidevb.width = "0";
      sidevb.style.width = "0px";
      let sidebrowser = document.createXULElement("browser");

      sidebrowser.src = "chrome://browser/content/browser.xhtml";
      sidebrowser.id = "sidewin";
      sidebrowser.style = "width: 100%; display: block; height: 100%";
      sidevb.appendChild(sidebrowser);

      let sidevb2 = document.createXULElement("vbox");
      sidevb2.width = "0";
      sidevb2.style.width = "0px";
      // sidevb2.style.flex = "1";
      let sidebrowser2 = document.createXULElement("browser");

      sidebrowser2.src = "chrome://browser/content/browser.xhtml";
      sidebrowser2.id = "sidewin2";
      sidebrowser2.style = "width: 100%; display: block; height: 100%";
      sidevb2.appendChild(sidebrowser2);


      ghbox.appendChild(sidevb);
      sidevb.style.order = "1";

      let splitter = document.createXULElement("splitter");
      splitter.resizebefore = "sibling";
      splitter.resizeafter = "none";
      splitter.style.order = "2";
      splitter.classList = "chromeclass-extrachrome sidebar-splitter"
      ghbox.appendChild(splitter);

      sidevb2.style.order = "3";
      ghbox.appendChild(sidevb2);

      let splitter2 = document.createXULElement("splitter");
      splitter2.resizebefore = "sibling";
      splitter2.resizeafter = "none";
      splitter2.style.order = "4";
      splitter2.classList = "chromeclass-extrachrome sidebar-splitter"
      ghbox.appendChild(splitter2);

      ghbox.appendChild(gvbox);

      gvbox.style.flex = "1";
      gvbox.style.order = "5";


      let browser = document.createXULElement("browser");

      browser.style = "width: 100%; display: block; height: 100%";
      browser.src = "chrome://browser/content/browser.xhtml";
      setTimeout(() => {
        skibidi.gURLBar.search("moz-extension://8cfc3bad-9fd6-4132-899c-de0e9b47bfd1/panel.html");
        setTimeout(() => {
          skibidi.gURLBar.controller.handleKeyNavigation({ keyCode: KeyEvent.DOM_VK_RETURN });
        }, 50);
        setTimeout(() => {
          skibidi.document.querySelector("#navigator-toolbox").remove();
        }, 300);

        function debloat(sidewin) {
          sidewin.document.querySelector("#toolbar-menubar").remove();
          sidewin.document.querySelectorAll("[badged=true]").forEach(c => c.remove());
          sidewin.document.querySelector("#unified-extensions-button").remove();
          sidewin.document.querySelector("#firefox-view-button").remove();
          sidewin.document.querySelector(".titlebar-buttonbox").remove();
          sidewin.document.querySelector("#tabs-newtab-button").remove();
        }
        debloat(sidewin);
        debloat(sidewin2);


        document.querySelector("#titlebar").style.display = "none";


        // let bottombox = document.createXULElement("hbox");
        // bottombox.id = "bottombox";
        // bottombox.style = "background-color: var(--lwt-accent-color-inactive, var(--lwt-accent-color))";
        // let tabsbox = sidewin.document.querySelector("#titlebar");
        // tabsbox.style.width = "100%";
        // bottombox.appendChild(tabsbox);
        // sidewin.document.body.appendChild(bottombox);
      }, 1000);
      browser.id = "skibidi";
      vbox.appendChild(browser);
    });
  }
}

