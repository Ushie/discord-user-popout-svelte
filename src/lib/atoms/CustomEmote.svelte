<script lang="ts">
    import ToolTip from "$lib/atoms/ToolTip.svelte";

    export let href: string;
    export let label: string;
    export let text: string = "";
</script>

<div>
    <ToolTip {label}>
        <img src={href} alt={text} />
    </ToolTip>
</div>

<style>
    div {
        display: inline-block;
        vertical-align: bottom;
    }
    img {
        width: 1.375em;
        height: 1.375em;
        vertical-align: bottom;
    }
</style>
