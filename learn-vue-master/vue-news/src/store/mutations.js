// state가 기본 인자
const SET_NEWS = (state, news) => {
    state.news = news
}

const SET_DATAS = (state, data) => {
    if ( data.name === 'news' )
    {
        state.news = data.data
    }
    else
    {
        state.datas = data.data
    }
}

export { SET_NEWS, SET_DATAS }