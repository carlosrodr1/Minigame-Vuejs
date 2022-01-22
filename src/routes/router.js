import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';
import pagina1 from '@/pages/pagina1';
import pagina1lose from '@/pages/pagina1lose';
import pagina1win from '@/pages/pagina1win';
import pagina1losecopy from '@/pages/pagina1losecopy';

import pagina2 from '@/pages/pagina2';
import pagina2lose from '@/pages/pagina2lose';
import pagina2losecopy from '@/pages/pagina2losecopy';
import pagina2win from '@/pages/pagina2win';

import pagina3 from '@/pages/pagina3';
import pagina3win from '@/pages/pagina3win';
import pagina3lose from '@/pages/pagina3lose';
import pagina3losecopy from '@/pages/pagina3losecopy';

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/pagina1',
        component:pagina1
    },
    {
        path:'/pagina1lose',
        component:pagina1lose
    },
    {
        path:'/pagina1win',
        component:pagina1win
    },
    {
        path:'/pagina1losecopy',
        component:pagina1losecopy
    },

    


    {
        path:'/pagina2',
        component:pagina2
    },
    {
        path:'/pagina2lose',
        component:pagina2lose
    },
    {
        path:'/pagina2losecopy',
        component:pagina2losecopy
    },
    {
        path:'/pagina2win',
        component:pagina2win
    },



    {
        path:'/pagina3',
        component:pagina3
    },
    {
        path:'/pagina3win',
        component:pagina3win
    },
    {
        path:'/pagina3lose',
        component:pagina3lose
    },
    {
        path:'/pagina3losecopy',
        component:pagina3losecopy
    },

];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;