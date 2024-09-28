type ConnectionUrls = {
    [key: string]: {
        friendlyName: string;
        url: { baseUrl: string; useId: boolean } | null;
    };
};

export interface AvatarDecorationData {
    asset: string;
    sku_id: string;
}

export interface User {
    id: string;
    username: string;
    global_name: string;
    avatar: string;
    avatar_decoration_data: AvatarDecorationData | null;
    discriminator: string;
    public_flags: number;
    flags: number;
    bot: boolean | null;
    banner: string;
    banner_color: null;
    accent_color: null;
    bio: string;
}

export interface UserProfile {
    bio: string;
    accent_color: null;
    pronouns: string;
    banner: string;
    theme_colors: [number, number];
    popout_animation_particle_type: null;
    emoji: null;
    profile_effect: ProfileEffect;
}

export interface ProfileEffect {
    id: string;
}

export interface ConnectedAccountMetadata {
    verified: string;
    followers_count: string;
    statuses_count: string;
    created_at: string;
}

export interface ConnectedAccount {
    type: string;
    id: string;
    name: string;
    verified: boolean;
    metadata: ConnectedAccountMetadata | undefined | null;
}

export interface DiscordUser {
    user: User;
    user_profile: UserProfile;
    premium_since: string | null;
    connected_accounts: ConnectedAccount[];
}
