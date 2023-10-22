<script lang="ts">
    export let userId: string;
    export let bannerHash: string;
    export let globalName: string;
    export let fallbackColor: string | null;

    const maskId = `banner-mask-${userId}`;

    const bannerUrl =
        bannerHash !== null
            ? `https://cdn.discordapp.com/banners/${userId}/${bannerHash}.${
                  bannerHash.startsWith("a_") ? "gif" : "webp"
              }?size=4096`
            : null;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 136">
    <mask id={maskId}>
        <rect fill="white" x="0" y="0" width="100%" height="100%" />
        <circle cx="58" cy="125" r="45" />
    </mask>
    <foreignObject width="100%" height="100%" mask={`url(#${maskId})`}>
        {#if bannerUrl}
            <img
                src={bannerUrl}
                alt={`${globalName}'s banner`}
                draggable={false}
            />
        {:else}
            <div
                style={`background-color: ${
                    fallbackColor
                        ? fallbackColor
                        : "var(--profile-gradient-secondary)"
                }; width: 100%; height: 100%;`}
            />
        {/if}
    </foreignObject>
</svg>

<style>
    img {
        height: 100%;
        width: 100%;
        user-select: none;
    }
</style>
