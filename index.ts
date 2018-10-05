abstract class User {
  private lol = 9
  public kek = 4

  public abstract lololo(): string
}

interface CanDance {
  dance(str: string): void
} 

class Anton extends User implements CanDance {
  lololo() {
    console.log(str)
    return str
  }

  dance() {

  }
}

var lol = new Anton()
var str: string = 'dg'
var num: number = 4 

lol.lololo()

enum kek {'fds','dsg'}

console.log(kek[0], kek[1])
