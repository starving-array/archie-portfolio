let projectDiv = document.getElementById("projectContainer");

  //
  let projectBanner = [
    "./img/mcdonals.png",
    "./img/nykaa.png",
    "./img/weather.png",
    "./img/geekbuy.png",
  ];
  let webLink = [
    "https://virtual-mc-donald.netlify.app/",
    "https://mellow-tanuki-fb3e28.netlify.app/",
    "https://weather-archie.netlify.app/",
    "https://adorable-cobbler-b9755b.netlify.app/index.html",
  ];
  let gitLink = [
    "https://github.com/starving-array/virtual_Mcdonald",
    "https://github.com/starving-array/NPM--Nykaa-Project-Masai",
    "https://github.com/starving-array/weatherApp",
    "https://github.com/starving-array/geekbuying.com",
  ];
  let title = [
    "Virtual McDonald's",
    "Nykaa Clone",
    "Weather App",
    "GeekBuy Clone",
  ];

  projectDisplay();
  function projectDisplay() {
    projectBanner.forEach(function (item, index) {
      let innererMain = document.createElement("div");
      innererMain.setAttribute("class", "boxProject");

      // banneer image
      let imageDiv = document.createElement("div");
      imageDiv.setAttribute("class", "imgDiv");

      let imgBan = document.createElement("img");
      imgBan.src = projectBanner[index];

      imageDiv.append(imgBan);

      ///// description
      let despriptionImageProject = document.createElement("div");
      despriptionImageProject.setAttribute("class", "despriptionImageProject");

      //  title
      let h3 = document.createElement("h3");
      h3.innerText = title[index]; ///////////////////////////////////////////////////////////// 1

      // link netlify
      // let linkProject = document.createElement("div");
      // linkProject.setAttribute("class", "linkProject");
      let linksToRedirect = document.createElement("div");
      linksToRedirect.setAttribute("class", "linksToRedirect");

      let netlifyLink = document.createElement("div");
      netlifyLink.setAttribute("class", "netlifyLink");

      let anchorTag = document.createElement("a");
      anchorTag.href = webLink[index];
      anchorTag.target = "_blank";
      anchorTag.innerText = "Click to visit the live demo";

      netlifyLink.append(anchorTag); ///////////////////////////////////////////////////////////// 2

      // linkProject.append(netlifyLink)

      // git
      let gitDiv = document.createElement("div");
      gitDiv.setAttribute("class", "git");

      let anchorTag2 = document.createElement("a");
      anchorTag2.href = gitLink[index];
      anchorTag2.target = "_blank";

      let imgGit = document.createElement("img");
      imgGit.src = "./img/github-logo.png";

      anchorTag2.append(imgGit);
      gitDiv.append(anchorTag2); /////////////////////////////////////////////////////////////// 3

      // end git
      linksToRedirect.append(netlifyLink, gitDiv);
      despriptionImageProject.append(h3, linksToRedirect);

      /////////////// box append banner and description
      innererMain.append(imageDiv, despriptionImageProject);
      projectDiv.append(innererMain); // appended to main
    });
  }