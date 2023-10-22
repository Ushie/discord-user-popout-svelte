function customEmoteToUrl(emote: string) {
    return (emote = emote.replace(/<a?:(.*?):(\d+)>/g, (match, p1, p2) => {
        const extension = match.startsWith("<a:") ? "gif" : "png";
        return `![${p1}](https://cdn.discordapp.com/emojis/${p2}.${extension})`;
    }));
}

export default customEmoteToUrl;
