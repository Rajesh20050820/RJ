document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector(".post-body, .post-content, .entry-content, .dwd-btn");

    if (mainElement) {
        const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');

        if (allLinks.length > 0) {
            const imdbUrl = allLinks[0].href;
            const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

            if (imdbTitleMatch && imdbTitleMatch[1]) {
                const imdbTitle = imdbTitleMatch[1];

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
                iframe.src = `https://ftmoh345xme.com/play/${imdbTitle}`;
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

                const visibleBlocks = Array.from(mainElement.children).filter(el =>
                    el.offsetHeight > 0 && el.tagName !== "SCRIPT"
                );

                if (visibleBlocks.length > 2) {
                    const midIndex = Math.floor(visibleBlocks.length / 2);
                    visibleBlocks[midIndex].insertAdjacentElement("afterend", iframeContainer);
                } else {
                    mainElement.appendChild(iframeContainer);
                }

                console.log("Embedded iframe:", iframe.src);
            } else {
                console.error("IMDb title match nahi hua");
            }
        } else {
            console.error("IMDb link nahi mila");
        }
    } else {
        console.error("Main content element nahi mila");
    }
});
