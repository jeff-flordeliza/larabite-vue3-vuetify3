import { createApp } from 'vue';

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

//fonts
import { fa } from 'vuetify/iconsets/fa';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi';

// VueSweetAlert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents,
    },
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        }
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#793A91',
                    secondary: '#793A91',
                },
            },
        },
    },
})

//import components

const app = createApp({
    components: {
        // components here
    }
});

app.use(vuetify)
app.use(VueSweetalert2)
app.mount("#app");
