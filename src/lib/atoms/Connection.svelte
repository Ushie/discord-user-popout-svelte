<script lang="ts">
    import ToolTip from "$lib/atoms/ToolTip.svelte";
    import getIcons from "$lib/utils/getIcons.js";

    export let userName: string;
    export let href: string;
    export let icon: string;
    export let label: string;
    export let verified: boolean;
    export let condensed: boolean;

    const connectionIcons: any = getIcons.connections;
</script>

{#if condensed}
    <ToolTip label={`${label}: ${userName}`}>
        <a class="connectionLink" {href} role="button">
            <img
                src={connectionIcons[icon]}
                class="condensedIcon"
                draggable={false}
                alt=""
            />
        </a>
    </ToolTip>
{:else}
    <div class="connection">
        {#if icon}
            <ToolTip {label}>
                <img
                    src={connectionIcons[icon]}
                    class="icon"
                    draggable={false}
                    alt=""
                />
            </ToolTip>
        {/if}
        <div class="userInfo">
            <div class="userName">
                {userName}
            </div>
            {#if verified}
                <div class="verifiedIcon">
                    <svg
                        aria-label="Verified Connection"
                        class="flowerStar-2tNFCR"
                        aria-hidden="false"
                        role="img"
                        width="16"
                        height="16"
                        viewBox="0 0 16 15.2"
                    >
                        <path
                            fill="hsla(228, 6%, 32.5%, 1)"
                            fill-rule="evenodd"
                            d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        />
                    </svg>
                    <div class="verifiedIcon tick">
                        <svg
                            aria-hidden="true"
                            role="img"
                            width="16"
                            height="16"
                            viewBox="0 0 16 15.2"
                        >
                            <path
                                d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
                                fill="#ffffff"
                            />
                        </svg>
                    </div>
                </div>
            {/if}
        </div>
        {#if href}
            <a class="connectionLink" {href} role="button">
                <svg
                    class="openConnection"
                    aria-hidden="true"
                    role="img"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    ><polygon
                        fill="currentColor"
                        fill-rule="nonzero"
                        points="13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    /></svg
                >
            </a>
        {/if}
    </div>
{/if}

<style lang="scss">
    .connection {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .icon {
        width: 24px;
        height: 24px;
    }

    .condensedIcon {
        width: 32px;
        height: 32px;
    }

    .verifiedIcon {
        display: flex;
        align-items: center;
        position: relative;
        width: 16px;
        height: 16px;
        & .tick {
            position: absolute;
        }
    }

    .userInfo {
        display: flex;
        align-items: center;
        flex: 1;
        gap: 4px;
    }

    .userName {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-weight: 600;
        font-size: 16px;
    }

    .openConnection {
        width: 18px;
        height: 18px;
        display: block;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        color: hsl(215 calc(1 * 8.8%) 73.3%/1);
        &:hover {
            color: hsl(210 calc(1 * 9.1%) 87.1%/1);
        }
    }
</style>
