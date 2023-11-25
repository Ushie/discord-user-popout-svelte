<script lang="ts">
    export let userId: string;
    export let bannerHash: string;
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
        <div
            class={bannerUrl ? "hasCustomBanner" : "hasColorBanner"}
            style={`${bannerUrl ? `background-image: url(${bannerUrl});` : ""}${
                fallbackColor ? `background-color: ${fallbackColor};` : ""
            }`}
        />
    </foreignObject>
</svg>

<style lang="scss">
    div {
        user-select: none;
        background-color: var(--profile-gradient-secondary);
        background-position: center;
        background-size: cover;
        width: 100%;
        &.hasCustomBanner {
            min-height: 120px;
        }
        &.hasColorBanner {
            min-height: 60px;
        }
    }
</style>
