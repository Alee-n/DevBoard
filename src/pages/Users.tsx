import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
};

function Users() {

    const [user, setUser] =
        useState<User | null>(null);

    async function getData() {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users/2"
            );

        const data =
            await response.json();

        setUser(data);
    }

    useEffect(() => {

        getData();

    }, []);

    return (
        <div>

            <h2>Users Page</h2>

            {user ? (
                <div>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    );
}

export default Users;