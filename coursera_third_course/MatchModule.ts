export interface Matchable{
    name: string
    isCompatibleWith: (testName:string)=> boolean
}