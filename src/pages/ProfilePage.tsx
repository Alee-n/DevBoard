import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { getProfile } from "../services/profileService";

interface ProfileData {
    name: string;
    goal: string;
    skills: string[];
}

function ProfilePage() {

    const [profile, setProfile] =
        useState<ProfileData | null>(null);

    useEffect(() => {

        async function loadProfile() {

            const data =
                await getProfile();

            setProfile(data);
        }

        loadProfile();

    }, []);

    if (!profile) {

        return <p>Loading...</p>;
    }

    return (

        <div>

            <h1>Developer Profile</h1>

            <Profile
                name={profile.name}
                goal={profile.goal}
            />

            <h3>Skills</h3>

            <ul>

                {profile.skills.map(
                    (skill, index) => (

                        <li key={index}>
                            {skill}
                        </li>

                    )
                )}

            </ul>

        </div>
    );
}

export default ProfilePage;