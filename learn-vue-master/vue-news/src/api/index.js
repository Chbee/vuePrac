import axios from 'axios'

// HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}


// API 함수 정리

const fetchData = (name) => axios.get(`${config.baseUrl}/${name}/1.json`)

export { fetchData }