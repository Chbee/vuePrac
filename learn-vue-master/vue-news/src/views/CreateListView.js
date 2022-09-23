import ListView from './ListView'
import bus from '../utils/bus'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스/컴포넌트 옵션
        name,
        created() {
            bus.$emit('start:spinner')
            // setTimeout(() => {
                this.$store.dispatch('FETCH_DATAS', this.$route.name)
                .then(() => { bus.$emit('stop:spinner') })
                .catch(error => console.log(error))
            // }, 3000)
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}