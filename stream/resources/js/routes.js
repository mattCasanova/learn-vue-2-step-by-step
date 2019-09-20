import VueRouter from 'vue-router';

import home from './views/Home';
import about from './views/About';
import contact from './views/Contact';

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/contact',
        component: contact
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});