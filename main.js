Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { task: 'Go to the Store', completed: false },
                { task: 'Go to the post office', completed: true },
                { task: 'Go to the farm', completed: false },
                { task: 'Go to the work', completed: true },
                { task: 'Go to the other store', completed: false },
            ]
        }
    }

});


Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});

