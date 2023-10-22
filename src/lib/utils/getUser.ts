import type { DiscordUser } from "$lib/types.js";

async function getUser(userId: number | bigint): Promise<DiscordUser | null> {
    try {
        const response = await fetch(`https://dcdn.dstn.to/profile/${userId}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch profile: ${response.status}`);
        }

        const json: DiscordUser = await response.json();

        if (json.user == null) {
            console.log(
                "Unable to fetch profile, join the Lanyard discord server"
            );
            return null;
        }

        return json;
    } catch (error) {
        console.error("An error occurred while fetching the profile:", error);
        return null;
    }
}

export default getUser;
