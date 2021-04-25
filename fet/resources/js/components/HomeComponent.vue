<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
            <v-list-item to="/example" link color="#15638A">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Example</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-group :prepend-icon="model ? 'mdi-chevron-up' : 'mdi-chevron-down'" append-icon="" color="#15638A">
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>
                            Acceso
                        </v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item to="/user" link color="#15638A">
                    <v-list-item-action>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Usuarios
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link color="#15638A">
                    <v-list-item-action>
                        <v-icon>mdi-account-key</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Roles
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
            <v-list-item @click="logout">
                <v-list-item-action>
                    <v-icon>mdi-power</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Log Out</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="teal darken-4" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-spacer />
    </v-app-bar>

    <v-main>
        <v-container>
            <router-view></router-view>
        </v-container>
    </v-main>
    <v-footer app class="teal darken-4" dark>
        <span class="white--text">WILLIAM PEREZ93 - &copy; 2021</span>
    </v-footer>
</v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: {
        source: String,
    },

    data: () => ({
        token: '',
        dialog: false,
        drawer: true,
        model: false,
    }),

    computed: {
        ...mapState('user', ['currentUser']),
    },

    methods: {
        logout() {
            localStorage.removeItem('blog_token');
            window.location.replace('login')
        },

    },

    created() {
        if (localStorage.hasOwnProperty('blog_token')) {
            axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('blog_token')
            this.token = localStorage.getItem('blog_token')
            this.$store.dispatch('User/getCurrent')
        } else {
            window.location.replace('login')
        }
    }
}
</script>
