<script lang="ts">
    import type { DiscordUser } from "$lib/types.js";
    import Banner from "$lib/atoms/Banner.svelte";
    import Avatar from "$lib/atoms/Avatar.svelte";
    import Badges from "$lib/molucules/Badges.svelte";
    import ProfileSection from "$lib/atoms/Section.svelte";
    import Bio from "$lib/atoms/Bio.svelte";
    import Text from "$lib/atoms/UserInfo.svelte";
    import Divider from "$lib/atoms/Divider.svelte";
    import { onMount } from "svelte";
    import ConnectionsCard from "$lib/molucules/ConnectionsCard.svelte";
    import getThemeColors from "$lib/utils/getThemeColors.js";
    import Tag from "$lib/atoms/Tag.svelte";
    import "../styles.css";

    export let user: DiscordUser;

    const discordMemberSinceTimestamp = Number(
        (BigInt(user.user.id) >> BigInt(22)) + BigInt(1420070400000)
    );
    const discordMemberSinceDate = new Date(discordMemberSinceTimestamp);
    const discordMemberSinceDateString =
        discordMemberSinceDate.toLocaleDateString("en-US", {
            year: "numeric",
            day: "numeric",
            month: "short",
        });
    onMount(() => {
        const colors = getThemeColors(user.user_profile.theme_colors);
        console.log(colors);
        if (colors.primaryBlue != 0) {
            document.body.style.setProperty(
                "--profile-gradient-primary",
                `rgb(${colors.primaryRed}, ${colors.primaryGreen}, ${colors.primaryBlue})`
            );
            document.body.style.setProperty(
                "--profile-gradient-secondary",
                `rgb(${colors.secondaryRed}, ${colors.secondaryGreen}, ${colors.secondaryBlue})`
            );
        }
    });
</script>

<div class="discordProfile themeDark">
    <div class="overlay">
        <Banner
            userId={user.user.id}
            bannerHash={user.user.banner}
            globalName={user.user.global_name}
            fallbackColor={user.user.banner_color}
        />
        <Avatar
            userId={user.user.id}
            avatarHash={user.user.avatar}
            avatarDecoration={user.user.avatar_decoration_data}
            globalName={user.user.global_name}
        />
        <div class="main">
            <Badges
                flags={user.user.public_flags}
                premiumSince={user.premium_since}
            />
            <div class="content">
                <Text
                    text={user.user.global_name
                        ? user.user.global_name
                        : user.user.username}
                    variant="displayName"
                />
                <div class="userNameWithTag">
                    <Text
                        text={user.user.discriminator == "0"
                            ? user.user.username
                            : `${user.user.username}#${user.user.discriminator}`}
                        variant="userName"
                    />
                    {#if user.user.bot}
                        <Tag text="bot" />
                    {/if}
                </div>
                {#if user.user_profile.pronouns}
                    <Text
                        text={user.user_profile.pronouns}
                        variant="pronouns"
                        label="Pronouns"
                    />
                {/if}
                <Divider />
                {#if user.user.bio}
                    <ProfileSection title="about me">
                        <Bio bio={user.user_profile.bio} />
                    </ProfileSection>
                {/if}
                {#if discordMemberSinceDateString}
                    <ProfileSection title="discord member since">
                        {discordMemberSinceDateString}
                    </ProfileSection>
                {/if}
                {#if user.connected_accounts.length != 0}
                    <ProfileSection title="connections">
                        <ConnectionsCard
                            connections={user.connected_accounts}
                        />
                    </ProfileSection>
                {/if}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .discordProfile {
        padding: 4px;
        width: 340px;
        position: relative;
        border-radius: 8px;
        background-image: linear-gradient(
            var(--profile-gradient-primary),
            var(--profile-gradient-primary) 120px,
            var(--profile-gradient-secondary)
        );
        overflow: hidden;
        display: flex;
        flex-direction: column;
        & .overlay {
            background-color: var(--header-overlay);
            border-radius: 4px;
            overflow: hidden;
            & .main {
                padding: 12px 16px 16px;
                display: flex;
                flex-direction: column;
                & .content {
                    background-color: var(--body-color);
                    border-radius: 8px;
                    padding: 12px;
                    margin-top: 16px;
                }
            }
        }
    }

    .userNameWithTag {
        display: flex;
        align-items: center;
        gap: 1ch;
    }

    .themeDark {
        --body-color: rgba(0, 0, 0, 0.45);
        --header-primary: rgb(242, 243, 245);
        --header-secondary: rgb(242, 243, 245);
        --header-overlay: rgba(0, 0, 0, 0.6);
        --text-normal: rgb(219, 222, 225);
        --profile-divider: rgba(255, 255, 255, 0.24);
        --accent: rgb(0, 176, 244);
    }

    // for the future
    // .theme-light {
    //     --body-color: #ffffff73;
    //     --header-primary: rgb(6, 6, 7);
    //     --header-secondary: rgb(78, 80, 88);
    //     --header-overlay: rgba(255, 255, 255, 0.6);
    //     --text-normal: rgb(49, 51, 56);
    //     --profile-divider: rgba(105, 21, 34, 0.12);
    //     --accent: rgb(0, 176, 244);
    // }
</style>
