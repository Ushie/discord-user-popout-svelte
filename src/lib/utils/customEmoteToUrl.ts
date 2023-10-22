function customEmoteToUrl(emote: string) {
    return (emote = emote.replace(
        /<a:(.*?):(\d+)>/g,
        "![$1](https://cdn.discordapp.com/emojis/$2.gif)"
    ));
}

export default customEmoteToUrl;
