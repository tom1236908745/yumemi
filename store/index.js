export const state = () => ({
  loading: true,
});

export const mutations = {
  reverceLoading(state) {
    state.loading = false;
  },
};

export const actions = {};

export const getters = {
  loading: (state) => state.loading,
};
