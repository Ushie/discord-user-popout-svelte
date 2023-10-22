<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    import List from "$lib/atoms/Bio/List.svelte";
    import ListItem from "$lib/atoms/Bio/ListItem.svelte";
    import CustomEmote from "$lib/atoms/CustomEmote.svelte";
    import customEmoteToUrl from "$lib/utils/customEmoteToUrl.js";
    import keepSpaces from "$lib/utils/keepSpaces.js";
    import Text from "$lib/atoms/Bio/Text.svelte";
    export let bio: string;

    bio = keepSpaces(bio);
    bio = customEmoteToUrl(bio);
</script>

<SvelteMarkdown
    source={bio}
    options={{ breaks: true }}
    renderers={{
        list: List,
        listitem: ListItem,
        image: CustomEmote,
        paragraph: Text,
    }}
/>
