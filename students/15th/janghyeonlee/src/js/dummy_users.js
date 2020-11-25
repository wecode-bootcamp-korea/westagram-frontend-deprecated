const firstName = [
  "lee",
  "kim",
  "park",
  "lim",
  "jung",
  "choi",
  "shin",
  "mun",
  "woo",
  "jun",
  "han",
  "yoon",
  "tak",
  "yong",
  "kang",
  "oh",
  "kwon",
  "hwang",
  "song",
]

const lastName = [
  "wecode",
  "wework",
  "we",
  "code",
  "work",
  "cute",
  "handsome",
  "pretty",
  "awesome",
  "kind",
  "gentle",
  "frontend developer",
  "backend developer",
  "developer",
  "frontend",
  "backend",
]

let dummyUser = []

for(let i in firstName){
  for(let j in lastName){
    dummyUser.push(`${lastName[j]} ${firstName[i]}`);
  }
}

export { dummyUser };