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
  "jang",
  "joo",
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
  "python",
  "javascript",
]

let dummyUsers = []

for(let i in firstName){
  for(let j in lastName){
    dummyUsers.push(`${lastName[j]} ${firstName[i]}`);
  }
}

dummyUsers;

export { dummyUsers };