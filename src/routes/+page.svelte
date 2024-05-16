<script lang="ts">
    import type { DiscordUser } from "$lib/types.js";
    import getUser from "$lib/utils/getUser.js";
    import DiscordProfile from "../lib/organisms/Profile.svelte";
    import { onMount } from "svelte";

    let user: DiscordUser | null = null;

    onMount(async () => {
        user = await getUser(399862294143696897n);
    });
</script>

{#if user}
    <DiscordProfile {user} />
{/if}
