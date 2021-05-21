import * as MatchModule from "./MatchModule"

class TLover implements MatchModule.Matchable{
    constructor(name: string) {
        this.name = name
    }
    name: string
    isCompatibleWith(testName: string): boolean{
        return testName.length > 0 && testName.substr(0,1)=="T"
    }
}

const orchid = new TLover("Luminous Orchild")
console.log(orchid.isCompatibleWith("Tall Pine"));
