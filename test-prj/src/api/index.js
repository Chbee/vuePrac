import methods from '../constants/methods.json'
import network from '../utils/network/network'


const getMainSectionWithCD = (value) => {
    return network.send({
        url: '/v1/mainSample/mainSection',
        methods: methods.GET,
        params: { homeCd: value }
    })
}

export { getMainSectionWithCD }