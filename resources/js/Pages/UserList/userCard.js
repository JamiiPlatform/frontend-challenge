import { Title, Text } from '@mantine/core';

export function UserCard({ user }) {
    return (
        <div>
            <Title order={2}>{user.name} - {user.username}</Title>
            <div className='Contact'>
                <Text>{user.email}</Text>
                <Text>{user.phone}</Text>
                <Text>{user.website}</Text>
            </div>
            <div className='Address'>
                <Title order={3}>Address</Title>
                <Text>City: {user.address.city}</Text>
                <Text>Street: {user.address.street}</Text>
                <Text>Suite: {user.address.suite}</Text>
                <Text>Zipcode: {user.address.zipcode}</Text>
            </div>
            <div className='Company'>
                <Title order={3}>Company</Title>
                <Text>{user.company.name}</Text>
                <Text>{user.company.catchPhrase}</Text>
                <Text>{user.company.bs}</Text>
            </div>
        </div>
    );
}