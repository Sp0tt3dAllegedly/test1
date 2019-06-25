const characters = [
    {
        name: "spike",
        show: "Cowboy Bebop",
    },
    {
        name: "L",
        show: "Death Note",
    },
    {
        name: "Goku",
        show: "DBZ",
    },
    {
        name: "Gon",
        show: "Hunter x Hunter",
    }
]

for(character of characters){
    console.log(`This character is:${character.name} from ${character.show}`);
    
}