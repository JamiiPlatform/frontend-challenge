import { Grid } from '@mantine/core';

import { GridCard } from "./GridCard"

export function ShowGrid({ users }) {
    return (
        <Grid>
            {users.map((element) => { return <GridCard user={element}/> })}
        </Grid>
    );
}