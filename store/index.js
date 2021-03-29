export const state = () => ({})

export const mutations = {}

export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    await dispatch('netlifycms/nuxtServerInit', context)
  },
}
