import { useState } from 'react';
import { Modal } from '@mantine/core';

import { UserCard } from './userCard';


export function ListRows({ user }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr key={user.id} onClick={() => setOpen(true)}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
            </tr>
            <Modal
                opened={open}
                onClose={() => setOpen(false)}
                withCloseButton={false}
                centered
            >
                <UserCard user={user} />
            </Modal>
        </>
    )
}