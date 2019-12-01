import SearchResult from '../components/SearchResult.vue'
import SingleMuviDetails from '../components/SingleMuviDetails.vue'
export const routes = 
[
    { path: '', component: SearchResult },
    { path: '/details/:id', component: SingleMuviDetails },
    {path: '*', redirect: '/'}
];
