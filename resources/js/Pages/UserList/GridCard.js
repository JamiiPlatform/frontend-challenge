import { Card, Grid, Group, Text, Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';

import { UserCard } from './userCard';

export function GridCard({ user }) {
    const theme = useMantineTheme();

    const [open, setOpen] = useState(false);

    return (
        <>
            <Grid.Col span={4} onClick={() => setOpen(true)}>
                <Card shadow="sm" p="lg">
                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>{user.name}</Text>
                    </Group>

                    <Text size="sm" style={{ color: '#000000', lineHeight: 1.5 }}>
                        {user.email}
                    </Text>

                </Card>
            </Grid.Col>
            <Modal
                opened={open}
                onClose={() => setOpen(false)}
                withCloseButton={false}
                centered
            >
                <UserCard user={user}/>
            </Modal>
        </>
    )
}
