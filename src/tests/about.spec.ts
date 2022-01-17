import {shallowMount } from '@vue/test-utils'
import About from '../pages/About/About.vue'

describe('About Test Case', () => {
    it('displays the first h1', () => {
        const wrapper = shallowMount(About)
        expect(wrapper.find('h1').text()).toEqual('This is genter reminder')
    })
})