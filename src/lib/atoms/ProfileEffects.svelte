<script>
    import getProfileEffectById from "$lib/utils/getProfileEffect";
    import { onMount } from "svelte";

    export let profileEffectId;

    const profileEffect = getProfileEffectById(profileEffectId);
    const profileEffects = profileEffect.effects;

    onMount(() => {
        const profileEffectsElement = document.getElementById(
            "discord-user-popout-svelte",
        );

        function addEffect(effect) {
            const img = document.createElement("img");
            img.src = effect.src;
            img.alt = profileEffect.accessibilityLabel;
            img.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: ${effect.zIndex};
                display: none;
            `;

            profileEffectsElement?.appendChild(img);

            function showEffect() {
                img.style.display = "block";

                setTimeout(() => {
                    img.style.display = "none";
                    if (effect.loop) {
                        showEffect();
                    }
                }, effect.duration);
            }

            setTimeout(() => {
                showEffect();

                if (effect.loop) {
                    setInterval(() => {
                        setTimeout(() => {
                            showEffect();
                        }, effect.loopDelay);
                    }, effect.duration + effect.loopDelay);
                }
            }, effect.start);
        }

        profileEffects.forEach(addEffect);
    });
</script>

<div id="discord-user-popout-svelte" />
