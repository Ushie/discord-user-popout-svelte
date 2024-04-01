# Discord User Popout Svelte

[![npm](https://img.shields.io/npm/v/discord-user-popout-svelte)](https://www.npmjs.com/package/discord-user-popout-svelte)
![npm](https://img.shields.io/npm/l/discord-user-popout-svelte)

A Discord user pop-out component for SvelteKit

## Installation

```sh
pnpm add discord-user-popout-svelte
```

## Usage

```svelte
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
```

> [!Note]
> You need to be in the [Lanyard Discord server](https://discord.com/invite/WScAm7vNGF) for this to work

## Developing

1. Clone the repository

    ```sh
    git clone https://github.com/Ushie/discord-user-popout-svelte.git && cd discord-user-popout-svelte
    ```

2. Install dependencies

    ```sh
    pnpm install
    ```

3. Start development

    ```sh
    pnpm run dev

    # or start the server and open the app in a new browser tab
    pnpm run dev -- --open
    ```

    Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```sh
pnpm run package
```

## Credits

-   Dustin @ https://dstn.to/ - [Discord User/CDN/Assets API](https://gist.github.com/dustinrouillard/04be36180ed80db144a4857408478854)
-   Panley @ https://pa.nley.contact/ - Inspiration & Base CSS
