<script lang="ts">
    import ToolTip from "$lib/atoms/ToolTip.svelte";

    export let text: string;
    export let variant: "userName" | "displayName" | "pronouns";
    export let label: string | null = null;
</script>

{#if text}
    <div class={variant}>
        {#if label}
            <ToolTip {label}>
                {text}
            </ToolTip>
        {:else}
            {text}
        {/if}
    </div>
{/if}

<style>
    div {
        display: inline-block;
    }
    
    .userName {
        font-size: 14px;
        font-weight: 500;
        color: var(--header-primary);
    }

    .displayName {
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        color: var(--header-primary);
    }

    .pronouns {
        font-size: 14px;
        line-height: 18px;
        color: var(--text-normal);
        padding-top: 2px;
    }
</style>
