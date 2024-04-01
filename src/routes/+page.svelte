<script lang="ts">
    import getUser from "$lib/utils/getUser.js";
    import DiscordProfile from "../lib/organisms/Profile.svelte";

    const userPromise = getUser(399862294143696897n);
</script>

{#await userPromise}
    <p>Loading</p>
{:then user}
    <DiscordProfile {user} />
{:catch error}
    <p>Failed to fetch user {error.message}</p>
{/await}
