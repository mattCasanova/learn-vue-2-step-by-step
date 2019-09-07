Vue.component('vml-modal', {

    props: ['content'],

    data() {
        return {
            isActive: true
        }
    },

    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>{{ content }}</p>
                </div>
            </div>
            <button class="modal-close is-large" @click="$emit('close') "aria-label="close"></button>
        </div>  
    `


})


Vue.component('vml-message', {

    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        }
    },


    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button type="button" @click="toggleVisible" class="delete" aria-label="delete"></button>
            </div>
                    
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,

    methods: {
        toggleVisible() {
            this.isVisible = !this.isVisible
        }
    },

});




new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});

