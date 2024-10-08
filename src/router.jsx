import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';
import BaseLayout from './layouts/BaseLayout';
import { ErrorPage } from './Reusable/ErrorPage';

export const routes = [
    {
        path: '/',
        element: (
            <Suspense>
                {/* <Authenticate> */}
                <BaseLayout />
                {/* </Authenticate> */}
            </Suspense>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to="/abhi-portfolio" />,
            },
            {
                path: 'abhi-portfolio',
                element: (
                    <Suspense>
                        <Home />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'About',
                element: (
                    <Suspense>
                        <About />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'Projects',
                element: (
                    <Suspense>
                        <Projects />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'Experience',
                element: (
                    <Suspense>
                        <Experience />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'Contact',
                element: (
                    <Suspense>
                        <Contact />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
        ],
    },
];
