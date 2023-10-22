<script lang="ts">
    import type { ConnectedAccount, ConnectionUrls } from "$lib/types.js";
    import Connection from "$lib/atoms/Connection.svelte";

    export let connections: ConnectedAccount[];

    const connectionsUrl: ConnectionUrls = {
        paypal: {
            friendlyName: "PayPal",
            url: null,
        },
        reddit: {
            friendlyName: "Reddit",
            url: {
                baseUrl: "https://reddit.com/u/",
                useId: false,
            },
        },
        steam: {
            friendlyName: "Steam",
            url: {
                baseUrl: "https://steamcommunity.com/profiles/",
                useId: true,
            },
        },
        tiktok: {
            friendlyName: "TikTok",
            url: {
                baseUrl: "https://tiktok.com/@",
                useId: false,
            },
        },
        twitter: {
            friendlyName: "X",
            url: {
                baseUrl: "https://x.com/",
                useId: false,
            },
        },
        ebay: {
            friendlyName: "eBay",
            url: null,
        },
        crunchyroll: {
            friendlyName: "Crunchyroll",
            url: null,
        },
        playstation: {
            friendlyName: "PlayStation Network",
            url: null,
        },
        xbox: {
            friendlyName: "Xbox",
            url: null,
        },
        battlenet: {
            friendlyName: "Battle.net",
            url: null,
        },
        epicgames: {
            friendlyName: "Epic Games",
            url: null,
        },
        facebook: {
            friendlyName: "Facebook",
            url: null,
        },
        leagueoflegends: {
            friendlyName: "League of Legends",
            url: null,
        },
        riot: {
            friendlyName: "Riot Games",
            url: null,
        },
        twitch: {
            friendlyName: "Twitch",
            url: {
                baseUrl: "https://twitch.com/",
                useId: false,
            },
        },
        youtube: {
            friendlyName: "YouTube",
            url: {
                baseUrl: "https://youtube.com/channel/",
                useId: true,
            },
        },
        spotify: {
            friendlyName: "Spotify",
            url: {
                baseUrl: "https://open.spotify.com/user/",
                useId: true,
            },
        },
        github: {
            friendlyName: "GitHub",
            url: {
                baseUrl: "https://github.com/",
                useId: false,
            },
        },
        domain: {
            friendlyName: "Domain",
            url: {
                baseUrl: "https://",
                useId: false,
            },
        },
        instagram: {
            friendlyName: "Instagram",
            url: {
                baseUrl: "https://www.instagram.com/",
                useId: false,
            },
        },
        skype: {
            friendlyName: "Skype",
            url: null,
        },
    };
</script>

<div>
    {#each connections as { type, id, name, verified }}
        {#if type in connectionsUrl}
            <Connection
                userName={name}
                href={`${connectionsUrl[type].url?.baseUrl}${
                    connectionsUrl[type].url?.useId ? id : name
                }/`}
                icon={connectionsUrl[type].friendlyName}
                label={connectionsUrl[type].friendlyName}
                {verified}
            />
        {/if}
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: 1px solid hsla(0, 0%, 100%, 0.24);
        border-radius: 4px;
        padding: 12px 8px;
    }
</style>
