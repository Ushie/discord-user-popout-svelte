<script lang="ts">
    export let title: string;
    export let hideLabel: boolean = false;
</script>

<div class="section">
    {#if !hideLabel}
        <p class="title">{title}</p>
    {/if}
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .section {
        margin-top: 12px;
    }

    .title {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 12px;
        margin-bottom: 8px;
        color: var(--header-primary);
    }

    .content {
        font-size: 14px;
        font-weight: 400;
        color: var(--text-normal);
    }
</style>
