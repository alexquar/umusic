<template>
    <div class="navbar">
      <nav>
        <router-link :to="{ name: 'Home' }"><img src="@/assets/logo.png" alt="logo"/></router-link>
        <h1><router-link :to="{ name: 'Home' }">umusic</router-link></h1>
        <div class="links">
            <div v-if="user"> 
                <router-link :to="{ name: 'CreatePlaylist' }">Create Playlist</router-link>
                <router-link :to="{ name: 'UserPlaylists' }">My Playlists</router-link>
                <span>Hey, {{ user.displayName }}...</span>
                <button @click = "handleSubmit">Logout</button>
        </div>
        <div v-else> 
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import {useRouter} from 'vue-router'
  import getUser from '../composables/getUser'
  import useLogout from '../composables/useLogout'
  export default {
    setup(){
        const router = useRouter()
    const {  logout } = useLogout()
       const handleSubmit = async () => {
        await logout()
        router.push({name:'Login'})
        }
        const {user} = getUser()
        return { handleSubmit, user}

       
    }
  }
  </script>
  
  <style scoped>
    .navbar {
      padding: 16px 10px;
      margin-bottom: 60px;
      background: white;
    }
    nav {
      display: flex;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    nav img {
      max-height: 60px;
    }
    nav h1 {
      margin-left: 20px;
    }
    nav .links {
      margin-left: auto;
    }
    nav .links a, button {
      margin-left: 16px;
      font-size: 14px;
    }
    span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #5e5c5c;
  }
  </style>