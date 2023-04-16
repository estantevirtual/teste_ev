export function isValidModalityInput(input: string): boolean {
    const validInputs = ['100m', 'dardos'];
    return validInputs.includes(input.toLowerCase());
}

export function lowerCase(input:string):string{
    const setLowerCase = input.toLowerCase()
    return setLowerCase
}

export function isUnitValid(input:string):boolean {
    const validInputs = ["s", "m"];
    return validInputs.includes(input.toLowerCase())
}

export const getRanking = (values: any[], sortOrder: string) => {
    return values
      .map(({ athlete, value, unit }) => ({ athlete, value, unit }))
      .sort((a, b) => sortOrder === "asc" ? a.value - b.value : b.value - a.value);
  }