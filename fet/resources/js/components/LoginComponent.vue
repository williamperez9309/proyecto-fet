<template>
<v-app id="inspire">
    <v-main>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="#004D40" dark flat>
                            <v-toolbar-title>Formulario de Acceso</v-toolbar-title>
                            <v-spacer />
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text" v-model="user.email" />

                                <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-key" type="password" v-model="user.password" />
                                <div class="text-error">{{message}}</div>
                                <div class="text-error" v-for="(error, index)  in errorLogin" :key="index" v-text="error"></div>

                            </v-form>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer />
                            <v-btn color="#004D40" class="white--text" @click="login">Ingresar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        user: {
            email: "",
            password: ""
        }
    }),

    computed: {
        ...mapState('login', ['message', 'errorLogin']),
    },

    methods: {
        login() {
            this.$store.dispatch('login/login', this.user);
        }
    }
}
</script>

<style>
.div-error {
    display: flex;
    justify-content: center;
}

.text-error {
    color: red !important;
    font-weight: bold;
    text-align: center;
}
</style>
