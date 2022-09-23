import axios from 'axios'

// HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}


// API 함수 정리

const fetchData = (name) => axios.get(`${config.baseUrl}/${name}/1.json`)
const fetchUserData = (username) => axios.get(`${config.baseUrl}/user/${username}.json`)
const fetchAskDetail = (id) => axios.get(`${config.baseUrl}/item/${id}.json`)

export { fetchData, fetchUserData, fetchAskDetail }