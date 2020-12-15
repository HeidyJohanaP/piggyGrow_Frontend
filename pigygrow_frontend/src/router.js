import vueRouter from 'vue-router'
import Movimiento from './components/Movimiento'
import App from './App'

const router = new vueRouter({

    routes: [

        {
            path: '/mov/nuevo',
            name: "crear_movimiento",
            component: Movimiento
        },

    ]
});

export default router;