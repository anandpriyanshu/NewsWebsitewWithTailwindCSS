if (window.location.pathname == "/src/health.html") {
  document.getElementById("health").style.backgroundColor = "gray";
  document.getElementById("health").style.color = "black";
  document.getElementById("health").style.fontWeight = "bold";
}

let index = 10;
let page = 1;
let totalResults = 0;

document.querySelector(".hamburger").addEventListener("click", () => {
  let x = getComputedStyle(document.getElementById("navcol")).display;
  if (x === "none") {
    document.getElementById("navcol").style.display = "block";
    document.getElementById("navcol").style.animationName = "startham";
  } else {
    document.getElementById("navcol").style.animationName = "endham";
    setTimeout(() => {
      document.getElementById("navcol").style.display = "none";
    }, 1000);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    document.getElementById("navcol").style.animationName = "endham";
    setTimeout(() => {
      document.getElementById("navcol").style.display = "none";
    }, 1000);
  }
});

// let loading = document.createElement("img");
// loading.setAttribute("src", "./static/images/Cube-0.5s-200px.svg");

let shanu = document.getElementById("shanu");
shanu.style.display = "none";
fetch(
  `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2158f02dc6b246c7b672beb6ae0da634&pageSize=10&page=1`,
  {
    method: "GET",
  }
)
  .then((res) => res.json())
  .then((ele) => {
    page = page + 1;
    totalResults = `${ele.totalResults}`;
    ele.articles.map((item) => {
      let main = document.getElementById("news-container");
      let link = document.createElement("a");
      link.setAttribute("href", `${item.url}`);
      link.setAttribute("target", "_blank");

      let div1 = document.createElement("div");
      div1.setAttribute(
        "class",
        "flex justify-center items-center flex-col mt-10"
      );

      div1.setAttribute("data-aos", "fade-right");

      let div2 = document.createElement("div");
      div2.setAttribute(
        "class",
        "flex items-center w-1500px h-400px shadow-mote max-[1500px]:w-1200px max-[1200px]:w-800px max-[800px]:w-600px max-[600px]:w-400px max-[600px]:h-800px max-[600px]:flex-col max-[400px]:w-full"
      );
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        `${
          !item.urlToImage
            ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            : `${item.urlToImage}`
        }`
      );
      img.setAttribute(
        "class",
        "max-[800px]:w-80 max-[600px]:w-400px w-400px h-400px p-6"
      );
      let div3 = document.createElement("div");
      div3.setAttribute("class", "p-6 align self-start flex flex-col");

      let h2 = document.createElement("h2");
      h2.setAttribute("class", "text-xl font-black");
      h2.innerHTML = `${item.title}`;
      let p = document.createElement("p");
      p.setAttribute(
        "class",
        "line-clamp-1 hover:line-clamp-2 cursor-pointer transition-all duration-500"
      );
      p.innerHTML = `${!item.description ? item.description : " "}`;

      let btn = document.createElement("button");
      btn.setAttribute("disabled", "disabled");
      btn.innerHTML = item.publishedAt;
      btn.setAttribute(
        "class",
        "ring-2 ring-blue-500 p-2 mt-5 font-black w-52 cursor-pointer text-xl"
      );

      main.appendChild(link);
      link.appendChild(div1);
      div1.appendChild(div2);
      div2.appendChild(img);
      div2.appendChild(div3);
      div3.appendChild(h2);
      div3.appendChild(p);
      div3.appendChild(btn);
    });
  });
// main.appendChild(loading);

//infinte scroll
window.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop + window.innerHeight + 1 >=
    document.documentElement.scrollHeight
  ) {
    if (index < totalResults) {
      shanu.style.display = "flex";
      let main = document.getElementById("news-container");

      let loading = document.createElement("img");
      loading.setAttribute("src", "./static/images/Cube-0.5s-200px.svg");

      fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2158f02dc6b246c7b672beb6ae0da634&pageSize=10&page=${page}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((ele) => {
          shanu.style.display = "none";
          page = page + 1;
          totalResults = `${ele.totalResults}`;
          ele.articles.map((item) => {
            let main = document.getElementById("news-container");
            let link = document.createElement("a");
            link.setAttribute("href", `${item.url}`);
            link.setAttribute("target", "_blank");

            let div1 = document.createElement("div");
            div1.setAttribute(
              "class",
              "flex justify-center items-center flex-col mt-10"
            );

            div1.setAttribute("data-aos", "fade-right");
            let div2 = document.createElement("div");
            div2.setAttribute(
              "class",
              "flex items-center w-1500px h-400px shadow-mote max-[1500px]:w-1200px max-[1200px]:w-800px max-[800px]:w-600px max-[600px]:w-400px max-[600px]:h-800px max-[600px]:flex-col max-[400px]:w-full"
            );
            let img = document.createElement("img");
            img.setAttribute(
              "src",
              `${
                !item.urlToImage
                  ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                  : `${item.urlToImage}`
              }`
            );
            img.setAttribute(
              "class",
              "max-[800px]:w-80 max-[600px]:w-400px w-400px h-400px p-6"
            );
            let div3 = document.createElement("div");
            div3.setAttribute("class", "p-6 align self-start flex flex-col");

            let h2 = document.createElement("h2");
            h2.setAttribute("class", "text-xl font-black");
            h2.innerHTML = `${item.title}`;
            let p = document.createElement("p");
            p.setAttribute(
              "class",
              "line-clamp-1 hover:line-clamp-2 cursor-pointer transition-all duration-500"
            );
            p.innerHTML = `${item.description}`;

            let btn = document.createElement("button");
            btn.setAttribute("disabled", "disabled");
            btn.innerHTML = item.publishedAt;
            btn.setAttribute(
              "class",
              "ring-2 ring-blue-500 p-2 mt-5 font-black w-52 cursor-pointer text-xl"
            );

            main.appendChild(link);
            link.appendChild(div1);
            div1.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div3.appendChild(h2);
            div3.appendChild(p);
            div3.appendChild(btn);
          });
        });
    }
  }
});
