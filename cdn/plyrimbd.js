
document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.querySelector(".entry-content, .post-body, .post-content, .post");

  if (mainElement) {
    const imdbLink = document.querySelector('a[href*="imdb.com/title/"]');
    if (!imdbLink) return;

    const imdbIdMatch = imdbLink.href.match(/title\/(tt\d+)/);
    if (!imdbIdMatch || !imdbIdMatch[1]) return;

    const imdbId = imdbIdMatch[1];

    const iframeContainer = document.createElement("div");
    iframeContainer.style.textAlign = "center";
    iframeContainer.style.margin = "40px 0";

    const heading = document.createElement("h2");
    heading.innerText = "Watch Full Movie Online";
    heading.style.color = "#ffcc00";
    heading.style.marginBottom = "20px";
    heading.style.fontSize = "26px";
    heading.style.fontFamily = "Segoe UI, sans-serif";

    const iframeWrapper = document.createElement("div");
    iframeWrapper.style.position = "relative";
    iframeWrapper.style.width = "100%";
    iframeWrapper.style.maxWidth = "1000px";
    iframeWrapper.style.paddingBottom = "56.25%";
    iframeWrapper.style.height = "0";
    iframeWrapper.style.overflow = "hidden";
    iframeWrapper.style.margin = "0 auto 20px";

    const iframe = document.createElement("iframe");
    iframe.src = `https://ftmoh345xme.com/play/${imdbId}`;
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");

    iframeWrapper.appendChild(iframe);
    iframeContainer.appendChild(heading);
    iframeContainer.appendChild(iframeWrapper);

    // Mid insert logic
    const contentChildren = [...mainElement.children].filter(el => el.tagName !== "SCRIPT" && el.offsetHeight > 0);
    const middleIndex = Math.floor(contentChildren.length / 2);

    if (contentChildren[middleIndex]) {
      contentChildren[middleIndex].insertAdjacentElement("afterend", iframeContainer);
    } else {
      mainElement.appendChild(iframeContainer); // fallback
    }
  }
});
