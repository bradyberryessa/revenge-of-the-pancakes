import { BLANK_SIDE, HAPPY_SIDE } from "./constants"

export const findFirstIndexOfOppositePancake = (stack: string): number => {
  const topPancake: string = stack[0]
  const oppositePancake: string = topPancake === HAPPY_SIDE ? BLANK_SIDE : HAPPY_SIDE

  return stack.indexOf(oppositePancake)
}

export const allPancakesOnSameSide = (pancakes: string, pancakeSide: string): boolean => (
  pancakes.split('').every((pancake: string): boolean => pancake === pancakeSide)
)

export const getStacks = (stack: string, flipNumber: number): Array<string> => {
  const unflippedStack: string = stack.slice(flipNumber)
  const newFlippedStack: string = stack.slice(0, flipNumber)

  return [newFlippedStack, unflippedStack]
}

export const flipTheTopStack = (pancakesToFlip: string): string => {
  const reversedStack: Array<string> = pancakesToFlip.split('').reverse()
  const flippedStacked: string = reversedStack.map((pancake: string): string => (
    pancake === HAPPY_SIDE ? BLANK_SIDE : HAPPY_SIDE
  )).join('')

  return flippedStacked
}

export const flipPancakes = (stack: string, index: number): string => {
  const [pancakesToFlip, unflippedPancakes]: Array<string> = getStacks(stack, index)
  const flippedStack: string = flipTheTopStack(pancakesToFlip).concat(unflippedPancakes)

  return flippedStack
}
