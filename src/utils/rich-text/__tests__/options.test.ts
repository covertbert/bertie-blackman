import options from '../options'

describe('options', () => {
  it('should renderMark with BOLD and ITALIC', () => {
    const expectedResult = {
      bold: expect.any(Function),
      italic: expect.any(Function),
    }

    expect(options.renderMark).toEqual(expectedResult)
  })

  it('should renderNode with HYPERLINK and PARAGRAPH', () => {
    const expectedResult = {
      hyperlink: expect.any(Function),
      paragraph: expect.any(Function),
    }

    expect(options.renderNode).toEqual(expectedResult)
  })
})
