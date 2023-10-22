<script lang="ts">
    import type { AvatarDecorationData } from "$lib/types.js";
    export let userId: string;
    export let avatarHash: string;
    export let avatarDecoration: AvatarDecorationData | null;
    export let globalName: string;

    const avatarUrl =
        avatarHash !== null
            ? `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${
                  avatarHash.startsWith("a_") ? "gif" : "webp"
              }?size=4096`
            : `https://cdn.discordapp.com/embed/avatars/${
                  Number(BigInt(userId) >> BigInt(22)) % 6
              }.png`;

    const avatarDecorationUrl =
        avatarDecoration !== null
            ? `https://cdn.discordapp.com/avatar-decoration-presets/${avatarDecoration.asset}.png`
            : null;
</script>

<div>
    <img
        class="avatar"
        src={avatarUrl}
        alt={`${globalName}'s avatar`}
        draggable={false}
    />

    {#if avatarDecorationUrl}
        <img class="decor" src={avatarDecorationUrl} alt="avatar decoration" />
    {/if}
</div>

<style>
    .avatar {
        border-radius: 100%;
        position: absolute;
        width: 80px;
        height: 80px;
        top: 90px;
        left: 22px;
        user-select: none;
    }

    .decor {
        height: 96px;
        width: 96px;
        top: 82px;
        left: 14px;
        position: absolute;
        overflow: visible;
    }
</style>
