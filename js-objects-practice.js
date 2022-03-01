// const blade = {
//     title: 'Blade',
//     director: 'Stephen Norrington',
//     actors: ['Wesley Snipes', 'Stephen Dorff', 'Kris Kristofferson'],
//     realeaseYear: 1998,
//     duration: 120
// }

// // console.log(blade.title)
// // console.log(blade.director)
// // console.log(blade.realeaseYear)

// blade.directorsCut = 145

// console.log(blade)

// const snakewaterMontana = {
//     paleontologist: 'Dr. Alan Grant',
//     depth: '10 meters',
//     specimens: 'Velociraptor'
// }

// // console.log(snakewaterMontana)

// let guestOfHonor = snakewaterMontana.paleontologist
// let cleverGirl = snakewaterMontana.specimens
// console.log(cleverGirl)

const nicaragua = {
    depth: '200 meters',
    annualBudget: 1500000,
    specimens: [
        'Tyrannosaurus Rex',
        'Stegosaurous',
        'Triceratops',
        'Velociraptor'
    ]
}

// let nicaraguaSpecimens = nicaragua.specimens
// // console.log(nicaraguaSpecimens)

// let favoriteSpecimen = nicaragua.specimens[1]
// // console.log(favoriteSpecimen)

// let bonus = nicaragua.annualBudget + 250000
// console.log(bonus)

const hammondsMines = {
  buenos_aires: {
    depth: '400 meters',
    annualBudget: 1000000,
    specimens: ['Dilophosaurus', 'Brachiosaurus']
  },
  mexico: {
    depth: '350 meters',
    annualBudget: 900000,
    specimens: ['Gallimimus', 'Parasaurolophus']
  }
}

const mexicosMineDepth = hammondsMines.mexico.depth
const buenos_airesBudget = hammondsMines.buenos_aires.annualBudget
const buenos_airesDinoDNA = hammondsMines.buenos_aires.specimens
const hammondsMines.nicaragua = nicaragua
const buenos_airesBudget = hammondsMines.buenos_aires.annualBudget
const mexicoBudget = hammondsMines.mexico.annualBudget
const nicaraguaBudget = hammondsMines.nicaragua.annualBudget
const hammondsMinesBudget = nicaraguaBudget + mexicoBudget + buenos_airesBudget
console.log(hammondsMines.mexico.specimens)
