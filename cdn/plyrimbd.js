document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector(".entry-content, .post, .post-content, .post-body, .dwd-btn");

    if (!mainElement) return console.error("Main element nahi mila.");

    const imdbLink = document.querySelector('a[href*="imdb.com/title/"]');
    if (!imdbLink) return console.error("IMDb link nahi mila.");

    const imdbMatch = imdbLink.href.match(/title\/(tt\d+)/);
    if (!imdbMatch || !imdbMatch[1]) return console.error("IMDb title match nahi hua.");

    const imdbID = imdbMatch[1];

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
    iframeWrapper.style.margin = "0 auto";

    const iframe = document.createElement("iframe");
    iframe.src = `https://ftmoh345xme.com/play/${imdbID}`;
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

    // Insert in middle of visible content blocks
    const blocks = Array.from(mainElement.children).filter(
        el => el.offsetHeight > 0 && el.tagName !== "SCRIPT"
    );

    if (blocks.length > 0) {
        const middleIndex = Math.floor(blocks.length / 2);
        blocks[middleIndex].insertAdjacentElement("afterend", iframeContainer);
    } else {
        mainElement.appendChild(iframeContainer);
    }

    console.log("Embedded player:", iframe.src);
});
