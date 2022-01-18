import { shallowMount } from '@vue/test-utils';
import TodoIndex from '../pages/Todo/TodoIndex.vue'
// import { createPinia, setActivePinia } from 'pinia' 
import { createTestingPinia } from '@pinia/testing'
import {todoStore} from '../stores/Todo/todo'


describe('TodoIndex Test Case', () => {
    it('find first h1', () => {
        const wrapper = shallowMount(TodoIndex, {
            global: {
                plugins: [createTestingPinia()]
            }
        })
        expect(wrapper.find('h1').text()).toEqual('Write it down your todays task')
    })
})