import "./App.css";

function App() {
  var open = false;

  function Drop(n) {
    var i;
    if (open == false) {
      for (i = n; i < 5; i++) {
        Drp(i);
      }
      open = true;
    } else if (open == true) {
      for (i = n; i < 5; i++) {
        Cls(i);
      }
      open = false;
    }
  }

  function Drp(n) {
    var elem = document.getElementsByClassName("menu-con")[n];
    var pos = -1 * window.innerHeight - n * 100;
    var id = setInterval(frame, 5);

    function frame() {
      if (pos >= -10) {
        clearInterval(id);
        elem.style.top = 0 + "px";
      } else {
        pos += 10;
        elem.style.top = pos + "px";
      }
    }
  }

  function Cls(n) {
    var elems = document.getElementsByClassName("menu-con")[n];
    var poss = 0;
    var ids = setInterval(frames, 5);

    function frames() {
      if (poss <= -1 * window.innerHeight) {
        clearInterval(ids);
        elems.style.top = -1 * window.innerHeight + "px";
      } else {
        poss += -7 - n * 2;
        elems.style.top = poss + "px";
      }
    }
  }

  return (
    <div className="App">
      <div
        className="menu-icon"
        onclick="this.classList.toggle('hover');Drop(0)"
      >
        <div className="menu-bar menu-bar1"></div>
        <div className="menu-bar menu-bar2"></div>
        <div className="menu-bar menu-bar3"></div>
      </div>
      <div className="menu">
        <div className="menu-con">
          <p>HOME</p>
        </div>
        <div className="menu-con" href="#about">
          <p>ABOUT</p>
        </div>
        <div className="menu-con">
          <p>WORK</p>
        </div>
        <div className="menu-con">
          <p>PROFILE</p>
        </div>
        <div className="menu-con">
          <p>CONTACT</p>
        </div>
      </div>
    </div>
  );
}

export default App;
