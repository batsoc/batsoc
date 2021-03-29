import settings from '~/content/settings/site-settings.json'

export const state = () => ({
  pages: [],
  siteSettings: null,
})

export const mutations = {
  setPages(state, pageList) {
    state.pages = pageList
  },
  setSiteSettings(state, siteSettings) {
    state.siteSettings = siteSettings
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    dispatch('init')
    await dispatch('initPages')
  },
  init({ commit }) {
    commit('setSiteSettings', settings)
  },
  async initPages({ commit }) {
    let files = await require.context('~/content/', false, /\.json$/)
    let pages = files.keys().map((key) => {
      return files(key)
    })
    commit('setPages', pages)
  },
}
