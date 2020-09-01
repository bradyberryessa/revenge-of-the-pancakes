import { BLANK_SIDE, HAPPY_SIDE } from './constants'
import testCases from './testCases'
import { allPancakesOnSameSide, findFirstIndexOfOppositePancake, flipPancakes } from './utils'

const countPancakeFlips = (stack: string, caseNumber: number, numberOfFlips: number): string => {
  if (allPancakesOnSameSide(stack, BLANK_SIDE)) {
    // since they are all on the blank side you know that you only need to flip them one more time
    return `Case #${caseNumber}: ${numberOfFlips + 1}\n`
  }

  if (allPancakesOnSameSide(stack, HAPPY_SIDE)) {
    return `Case #${caseNumber}: ${numberOfFlips}\n`
  }

  const firstIndexOfOppositePancake: number = findFirstIndexOfOppositePancake(stack)
  const flippedStack: string = flipPancakes(stack, firstIndexOfOppositePancake)

  return countPancakeFlips(flippedStack, caseNumber, numberOfFlips + 1)
}

// removes the first element in array since it is the number of test cases and not a stack of pancakes
const testCasesArray: Array<string> = testCases.split('\n').slice(1)

const pancakeFlipCountArray: Array<string> = testCasesArray.map((pancakes: string, index: number): string => countPancakeFlips(pancakes, index + 1, 0))

console.log(pancakeFlipCountArray.join(''))