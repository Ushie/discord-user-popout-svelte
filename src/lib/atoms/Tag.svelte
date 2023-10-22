<script lang="ts">
    export let text: string;
</script>

{#if text}
    <div>
        <span>{text}</span>
    </div>
{/if}

<style>
    div {
        height: 15px;
        padding: 0 4px;
        border-radius: 3px;
        background-color: hsl(235 calc(1 * 85.6%) 64.7% /1);
        color: hsl(0 calc(1 * 0%) 100% /1);
    }

    span {
        font-size: 10px;
        line-height: 15px;
        font-weight: 500;
        vertical-align: top;
        text-transform: uppercase;
    }
</style>
