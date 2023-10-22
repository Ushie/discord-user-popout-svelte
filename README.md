# Discord User Popout Svelte

A Discord user pop-out component for SvelteKit

## Installation

`pnpm add discord-user-popout-svelte`

## Usage

```svelte
<script>
    import { getUser, Profile } from "discord-user-popout-svelte";
    import { onMount } from "svelte";
    let user = null;

    onMount(async () => {
        user = await getUser(399862294143696897n);
    });
</script>

{#if user}
    <Profile {user} />
{/if}
```

> [!Note]
> You need to be in the [Lanyard Discord server](https://discord.com/invite/WScAm7vNGF) for this to work

## Credits

- Dustin @ https://dstn.to/ - [Discord User/CDN/Assets API](https://gist.github.com/dustinrouillard/04be36180ed80db144a4857408478854)  
- Panley @ https://pa.nley.contact/ - Inspiration & Base CSS
