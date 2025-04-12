
document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector(".entry-content, .post, .post-content, .post-body, .dwd-btn");

    if (mainElement) {
        const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');

        if (allLinks.length > 0) {
            const imdbUrl = allLinks[0].href;
            const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

            if (imdbTitleMatch && imdbTitleMatch[1]) {
                const imdbTitle = imdbTitleMatch[1];

                // Create iframe container
                const iframeContainer = document.createElement("div");
                iframeContainer.style.textAlign = "center";
                iframeContainer.style.marginBottom = "30px";

                // Heading
                const heading = document.createElement("h2");
                heading.innerText = "Watch Full Movie Online";
                heading.style.color = "#ffcc00";
                heading.style.marginBottom = "20px";
                heading.style.fontSize = "26px";
                heading.style.fontFamily = "Segoe UI, sans-serif";

                // Wrapper for responsive ratio
                const iframeWrapper = document.createElement("div");
                iframeWrapper.style.position = "relative";
                iframeWrapper.style.width = "100%";
                iframeWrapper.style.maxWidth = "1000px";
                iframeWrapper.style.paddingBottom = "56.25%"; // 16:9 aspect ratio
                iframeWrapper.style.height = "0";
                iframeWrapper.style.overflow = "hidden";
                iframeWrapper.style.margin = "0 auto 20px";

                // Iframe element
                const iframe = document.createElement("iframe");
                iframe.src = `https://ftmoh345xme.com/play/${imdbTitle}`;
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "true");

                // Assemble structure
                iframeWrapper.appendChild(iframe);
                iframeContainer.appendChild(heading);
                iframeContainer.appendChild(iframeWrapper);

                // Insert at top of main content
                mainElement.prepend(iframeContainer);

                console.log("Embedded iframe:", iframe.src);
            } else {
                console.error("IMDb title match nahi hua");
            }
        } else {
            console.error("IMDb link nahi mila");
        }
    } else {
        console.error("Main element nahi mila.");
    }
});
