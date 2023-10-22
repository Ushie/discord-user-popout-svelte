<div class="container">
    <div class="divider" />
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .container {
        display: flex;
        line-height: 1.375rem;
    }
    .divider {
        width: 6.16px;
        border-radius: 4px;
        background-color: hsl(236 calc(1 * 9.8%) 33.9% /1);
    }
    .content {
        padding: 0 8px 0 12px;
    }
</style>
