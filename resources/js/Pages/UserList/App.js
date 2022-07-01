import { usePage } from '@inertiajs/inertia-react'
import { Tabs, TextInput } from '@mantine/core';
import { LayoutList, LayoutGrid, Search } from 'tabler-icons-react';
import { useState } from 'react';

import { ShowList } from "./List"
import { ShowGrid } from './Grid';

export function ListApp() {
    var users = usePage().props.users;
    const [value, setValue] = useState('');

    return (
        <>
            <TextInput
                placeholder="Search"
                size='xs'
                radius='xl'
                style={{
                }}
                onChange={(event) => setValue(event.currentTarget.value)}
            />
            <Tabs color="indigo">
                <Tabs.Tab label="List" icon={<LayoutList size={14} />}>
                    <ShowList
                        users={users.filter((user) => {
                            if (user.name
                                .toLowerCase()
                                .includes(value.toLowerCase()))
                                return user;
                        })} />
                </Tabs.Tab>
                <Tabs.Tab label="Grid" icon={<LayoutGrid size={14} />}>
                    <ShowGrid
                        users={users.filter((user) => {
                            if (user.name
                                .toLowerCase()
                                .includes(value.toLowerCase()))
                                return user;
                        })} />
                </Tabs.Tab>
            </Tabs>
        </>
    );
}