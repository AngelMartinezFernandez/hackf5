import {shallowMount, mount} from '@vue/test-utils'
import {mapState} from 'vuex'
import Diary from '@/views/Diary.vue'
import FormTask from '@/views/FormTask.vue'
import Help from '@/views/Help.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import Register from '@/views/Register.vue'
import TodayTask from '@/views/TodayTask.vue'
import WeekTask from '@/views/WeekTask.vue'


describe('Diary View Component unit tests: ', () => {
    const h2Tag = '<h2>'
    const h1Tag = '<h2>'
    const routerLink = '</router-link>'
    const wrapper = mount(Diary)


    test('renders the h1 name', () => {
        const h1Name = 'DIARIO'

        expect(wrapper.html()).toContain(h1Name)
    })

    test('renders the h2 tag', () => {

        expect(wrapper.html()).toContain(h1Tag)
    })
    test('renders router-link', () => {

        expect(wrapper.html()).toContain(routerLink)
    })
})

describe('Home View Component unit tests: ', () => {
    const wrapper = mount(Home)

    const h2Tag = '<h2>'
    const h1Tag = '<h2>'
    const routerLink = '<router-link>'

    test.skip('renders router-link', () => {

        expect(wrapper.html()).toContain(routerLink)
    })

    //Testeando que se recibe prop y se renderiza correctamente
    test.skip('AccionSaldo recibe el prop texto y lo renderiza', () => {
        const text = 'Suma'
        const wrapper = mount(AccionSaldo, {
            props: {
                texto: text
            }
        })
        expect(wrapper.html()).toContain(text)

    })

    //Mockeando que el boton hace algo
    test.skip('AccionSaldo click does something', async () => {
        const mockMethod = jest.spyOn(AccionSaldo.methods, 'accion')
        await shallowMount(AccionSaldo).find('button').trigger('click')
        expect(mockMethod).toHaveBeenCalled()
    })

})