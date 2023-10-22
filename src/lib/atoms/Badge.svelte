<script lang="ts">
    import ToolTip from "$lib/atoms/ToolTip.svelte";
    import getIcons from "$lib/utils/getIcons.js";

    export let fileName: string;
    export let label: string;

    const badgeIcons: any = getIcons.badges;
</script>

<ToolTip {label}>
    <img src={badgeIcons[fileName]} draggable={false} alt="" />
</ToolTip>

<style>
    img {
        width: 22px;
        height: 22px;
        user-select: none;
    }
</style>
