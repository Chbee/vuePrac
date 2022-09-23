import bus from '../utils/bus'

export default {
    // 재사용할 컴포넌트 옵션 & 로직
    created() {
        bus.$emit('start:spinner')
        setTimeout(() => {
            this.$store.dispatch('FETCH_DATAS', this.$route.name)
            .then(() => { bus.$emit('stop:spinner') })
            .catch(error => console.log(error))
        }, 3000)
    },
}