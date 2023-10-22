<script lang="ts">
    import Badge from "$lib/atoms/Badge.svelte";

    export let flags: number;
    export let premiumSince: string | null;

    const badgeMap = [
        {
            bit: 0,
            fileName: "staff",
            label: "Discord Staff",
            order: 1,
        },
        {
            bit: 1,
            fileName: "partner",
            label: "Partnered Server Owner",
            order: 2,
        },
        {
            bit: 18,
            fileName: "alumni",
            label: "Moderator Programs Alumni",
            order: 3,
        },
        {
            bit: 2,
            fileName: "hse",
            label: "HypeSquad Events",
            order: 4,
        },
        {
            bit: 6,
            fileName: "hs-bravery",
            label: "HypeSquad Bravery",
            order: 5,
        },
        {
            bit: 7,
            fileName: "hs-brilliance",
            label: "HypeSquad Brilliance",
            order: 6,
        },
        {
            bit: 8,
            fileName: "hs-balance",
            label: "HypeSquad Balance",
            order: 7,
        },
        {
            bit: 14,
            fileName: "bh-gold",
            label: "Discord Bug Hunter",
            order: 8,
        },
        {
            bit: 3,
            fileName: "bh",
            label: "Discord Bug Hunter",
            order: 9,
        },
        {
            bit: 22,
            fileName: "active-dev",
            label: "Active Developer",
            order: 10,
        },
        {
            bit: 17,
            fileName: "verified-bot-dev",
            label: "Early Verified Bot Developer",
            order: 11,
        },
        {
            bit: 9,
            fileName: "early-supporter",
            label: "Early Supporter",
            order: 12,
        },
    ];

    if (premiumSince != null) {
        const hasNitroSince = new Date(premiumSince).toLocaleDateString(
            "en-US",
            {
                year: "numeric",
                day: "numeric",
                month: "short",
            }
        );

        flags = flags | (1 << 45);

        badgeMap.push({
            bit: 45,
            fileName: "nitro",
            label: `Subscriber since ${hasNitroSince}`,
            order: 13,
        });
    }

    const filteredBadges = badgeMap
        .filter(({ bit }) => flags & (1 << Number(bit)))
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map(({ fileName, label }) => ({ fileName, label }));
</script>

{#if filteredBadges.length != 0}
    <div>
        {#each filteredBadges as badge}
            <Badge fileName={badge.fileName} label={badge.label} />
        {/each}
    </div>
{/if}

<style>
    div {
        background-color: var(--body-color);
        max-width: 190px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
        padding: 4px;
        align-self: end;
    }
</style>
