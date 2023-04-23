// ACTION TYPES
export const GERAR_JOGO = 'GERAR_JOGO';

// ACTIONS CREATORS
export const addLogin = (gerarJogo) => ({
  type: GERAR_JOGO,
  payload: { ...gerarJogo },
});
