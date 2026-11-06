import { createRouter, createWebHistory } from "vue-router"
import Posts from '../components/Posts.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from "@/components/SignUp.vue";
import HomePage from "@/components/HomePage.vue";
import Comments from "@/components/Comments.vue";
import newPost from '../components/newPost.vue'

const routes = [
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/login',
        component: LogIn
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/homepage',
        component: HomePage
    },
    {
        path: '/posts/:post_id/comments',
        component: Comments
    },
    {
        path: '/posts/new',
        component: newPost
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router