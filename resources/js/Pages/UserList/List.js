import { Table, Modal, Menu } from '@mantine/core';
import { useState } from 'react';
import { Edit, Trash } from 'tabler-icons-react';

import { ListRows } from './ListRows';

function CreateMenu() {
    return (
        <Menu>
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<Edit size={14} />} >Edit</Menu.Item>
            <Menu.Item color="red" icon={<Trash size={14} />}>Delete User</Menu.Item>
        </Menu>
    )
}

export function ShowList({ users }) {
    return (
        <Table highlightOnHover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>{users.map((element) => { return <ListRows user={element}/>})}</tbody>
        </Table>
    )
}

