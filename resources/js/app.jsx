import './bootstrap';

import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(
            <MainApp App={App} props={props} />        
        , el);
    },
});



const MainApp = ({ App, props }) => {
  
    return (
        <MantineProvider
            withGlobalStyles withNormalizeCSS>
            <NotificationsProvider position='top-right'>
                <ModalsProvider>
                    <App {...props} />
                </ModalsProvider>
            </NotificationsProvider>
        </MantineProvider>
    );
};

InertiaProgress.init({ color: '#4B5563' });


export default MainApp;

