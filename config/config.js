export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
    routes: [{
        path: '/',
        component: '../layouts/BaseLayout',
        // routes: [
        //     {
        //         path: 'helloworld',
        //         component: './HelloWorld'
        //     },
        // ]
    }],
};