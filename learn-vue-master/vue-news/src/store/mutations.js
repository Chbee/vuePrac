// state가 기본 인자
const SET_NEWS = (state, news) => {
    state.news = news
}

const SET_DATAS = (state, data) => {
    state.datas = data
}

const SET_USER = (state, user) => {
    state.user = user
}

const SET_ASK_DETAIL = (state, detail) => {
    state.detail = detail
}

export { SET_NEWS, SET_DATAS, SET_USER, SET_ASK_DETAIL }