function getSkipButton() {
    return document.getElementsByClassName("ytp-ad-skip-button")[0];
}

function main() {
    const skipButton = getSkipButton();

    if (skipButton) {
        skipButton.click();
    }

}

if (document.location.host === "youtube.com" || document.location.host === "www.youtube.com") {
    main();
    setInterval(main, 1000);
}