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

Vue.component('vml-tabs', {


    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,


    data() {
        return {
            tabs: []
        };
    },

    created() {
        this.tabs = this.$children;  
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (selectedTab.name === tab.name);
            })
        }
    },

});

Vue.component('vml-tab', {

    props: {
        name: { required: true },
        selected: { default: false }
    },

    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    data() {
        return {
            isActive: false,
            href: ''
        };
    },

    mounted() {
        this.isActive = this.selected;
        this.href = "#" + this.name.replace(/ /g, '-') .toLocaleLowerCase()
    },

});


Vue.component('vml-coupon', {

    template: `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">


    `,

    methods: {
        onCouponApplied() {
            this.$emit('applied', this.coupon);
        }
    },

});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },


    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    },
});

