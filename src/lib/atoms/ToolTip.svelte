<script lang="ts">
    import { tooltip } from "svooltip";
    import "../styles/ToolTip.scss";
    export let label: string | null = null;
</script>

<div use:tooltip={{ content: label }}>
    <slot />
</div>

<style lang="scss">
    :root {
        --svooltip-bg: rgb(17, 18, 20);
        --svooltip-text: var(--text-normal);
        --svooltip-padding: 8px 12px;
        --svooltip-weight: 500;
        --svooltip-roundness: 5px;
        --svooltip-shadow: 0 8px 16px hsl(0 calc(1 * 0%) 0% /0.24);
        --svooltip-text-size: 14px;
        --svooltip-shadow: 0 3px 7px rgb(0 0 0 / 0.25);
        --svooltip-arrow-size: 6px;
    }

    div {
        display: flex;
    }
</style>
