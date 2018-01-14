import fmReducer from '../src/reducers/fm'

const typeSpecs = [
  ['PLAYLIST_NEW_REQUEST', 'n'],
  ['PLAYLIST_PLAYING_REQUEST', 'p'],
  ['PLAYLIST_SKIP_REQUEST', 's'],
  ['PLAYLIST_TRASH_REQUEST', 'b'],
  ['RED_HEART_RATE', 'r'],
  ['RED_HEART_UNRATE', 'u'],
  ['PLAYLIST_END_REQUEST', 'e']
]

describe('fmReducer', () => {
  // loading test
  test('fetching', () => {
    expect(fmReducer({ isFetching: false }, { type: 'PLAYLIST_LOADING' }))
      .toEqual({ isFetching: true })
  })
  test('end fetching', () => {
    expect(fmReducer({ isFetching: true }, { type: 'PLAYLIST_RESPONSE' }))
      .toEqual({ isFetching: false })
  })

  // type test
  test('new', () => {
    typeSpecs.map(t => {
      expect(fmReducer({ type: '' }, { type: t[0] }))
        .toEqual({ type: t[1] })
    })
  })

  // pattern test
  test('select pattern', () => {
    expect(fmReducer({ pattern: '' }, { type: 'SELECT_PATTERN' }))
      .toEqual({ pattern: 'select' })
  })
  test('recent pattern', () => {
    expect(fmReducer({ pattern: 'select' }, { type: 'RECENT_PATTERN' }))
      .toEqual({ pattern: 'recent', songListIndex: 0 })
  })
  test('redheart pattern', () => {
    expect(fmReducer({ pattern: 'select' }, { type: 'REDHEART_PATTERN' }))
      .toEqual({ pattern: 'redheart', songListIndex: 0 })
  })
})
