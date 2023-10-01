const discord = document.getElementById("discord");
const twitch = document.getElementById("twitch");
const youtube = document.getElementById("youtube");
const pronouns = document.getElementById("pronouns");
const kofi = document.getElementById("kofi");

discord.addEventListener("mouseover", () => {
    const rng = Math.random();
    var x3 = "";
    if (rng > 0.8) {
        x3 = "_furry";
    }

    discord.firstChild.src = `img/socials/discord${x3}.png`;
})
discord.addEventListener("mouseout", () => {
    discord.firstChild.src = "img/socials/discord_white.png";
})

twitch.addEventListener("mouseover", () => {
    twitch.firstChild.src = `img/socials/twitch.png`;
})
twitch.addEventListener("mouseout", () => {
    twitch.firstChild.src = "img/socials/twitch_white.png";
})

youtube.addEventListener("mouseover", () => {
    youtube.firstChild.src = `img/socials/youtube.png`;
})
youtube.addEventListener("mouseout", () => {
    youtube.firstChild.src = "img/socials/youtube_white.png";
})

pronouns.addEventListener("mouseover", () => {
    pronouns.firstChild.src = `img/socials/pronouns-page.png`;
})
pronouns.addEventListener("mouseout", () => {
    pronouns.firstChild.src = "img/socials/pronouns-page_white.png";
})

kofi.addEventListener("mouseover", () => {
    kofi.firstChild.src = `img/socials/ko-fi.png`;
})
kofi.addEventListener("mouseout", () => {
    kofi.firstChild.src = "img/socials/ko-fi_white.png";
})