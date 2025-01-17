import isEqual from 'lodash.isequal'

export function expect({
  actual,
  name,
  slug,
  errorHtml,
  note,
  testsType,
}: {
  actual: any
  name?: string
  slug?: string
  errorHtml?: string
  note?: string
  testsType: TestsType
}): Record<AvailableMatchers, (expected?: any) => MatcherResult> {
  const returnObject: Omit<MatcherResult, 'pass' | 'expected'> = {
    actual,
    slug: slug ?? '',
    name: name ?? '',
    errorHtml,
    note,
    testsType,
  }
  return {
    toExist() {
      return {
        ...returnObject,
        pass: actual !== undefined && actual !== null,
      }
    },
    toNotExist() {
      return {
        ...returnObject,
        pass: actual === undefined || actual === null,
      }
    },
    toBe(expected: any) {
      return {
        ...returnObject,
        expected,
        pass: actual === expected,
      }
    },
    toBeTrue() {
      return {
        ...returnObject,
        expected: true,
        pass: actual === true,
      }
    },
    toEqual(expected: any) {
      return {
        ...returnObject,
        expected,
        pass: isEqual(expected, actual),
      }
    },
    toBeGreaterThanOrEqual(expected: number) {
      return {
        ...returnObject,
        expected,
        pass: actual >= expected,
      }
    },
    toBeLessThanOrEqual(expected: number) {
      return {
        ...returnObject,
        expected,
        pass: actual <= expected,
      }
    },
  }
}
